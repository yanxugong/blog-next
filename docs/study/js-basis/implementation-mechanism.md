# 「重学 JavaScript」执行机制

## try 和 finally

> 为何 try 里面放 return，finally 还会执行，理解其内部机制

### 1.1 Completion 类型

```js
// return 执行了但是没有立即返回，而是先执行了 finally
function kaimo() {
  try {
    return 0;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("a");
  }
}

console.log(kaimo()); // a 0
```

```js
// finally 中的 return 覆盖了 try 中的 return。
function kaimo() {
  try {
    return 0;
  } catch (err) {
    console.log(err);
  } finally {
    return 1;
  }
}

console.log(kaimo()); // 1
```

Completion Record
Completion Record 用于描述异常、跳出等语句执行过程。表示一个语句执行完之后的结果，它有三个字段。

[[type]]：表示完成的类型，有 break、continue、return、throw、normal 几种类型

[[value]]：表示语句的返回值，如果语句没有，则是 empty

[[target]]：表示语句的目标，通常是一个 JavaScript 标签

JavaScript 使用 Completion Record 类型，控制语句执行的过程。

### 1.2 普通语句

在 JavaScript 中，把不带控制能力的语句称为普通语句。种类可以参考引言的图片。

1、这些语句在执行时，从前到后顺次执行（这里先忽略 var 和函数声明的预处理机制），没有任何分支或者重复执行逻辑。

2、普通语句执行后，会得到 [[type]] 为 normal 的 Completion Record，JavaScript 引擎遇到这样的 Completion Record，会继续执行下一条语句。

3、在 Chrome 控制台输入一个表达式，可以得到结果，但是在前面加上 var，就变成了 undefined。Chrome 控制台显示的正是语句的 Completion Record 的 [[value]]。

### 1.3 语句块

语句块就是拿大括号括起来的一组语句，它是一种语句的复合结构，可以嵌套。

语句块内部的语句的 Completion Record 的 [[type]] 如果不为 normal，会打断语句块后续的语句执行。

#### 1.3.1 内部为普通语句的一个语句块

```js
// 在每一行的注释中为 Completion Record
{
  var i = 1; // normal, empty, empty
  i++; // normal, 1, empty
  console.log(i); //normal, undefined, empty
} // normal, undefined, empty
```

在这个 block 中都是 normal 类型的话，该程序会按顺序执行。

#### 1.3.2 加入 return

```js
// 在每一行的注释中为 Completion Record
{
  var i = 1; // normal, empty, empty
  return i; // return, 1, empty
  i++;
  console.log(i);
} // return, 1, empty
```

在 block 中产生的非 normal 的完成类型可以穿透复杂的语句嵌套结构，产生控制效果。

### 1.4 控制型语句

控制型语句带有 if、switch 关键字，它们会对不同类型的 Completion Record 产生反应。

控制类语句分成两部分：

对其内部造成影响：如 if、switch、while/for、try。
对外部造成影响：如 break、continue、return、throw。

穿透就是去上一层的作用域或者控制语句找可以消费 break，continue 的执行环境，消费就是在这一层就执行了这个 break 或者 continue

这两类语句的配合，会产生控制代码执行顺序和执行逻辑的效果。

### 1.5 带标签的语句

1、任何 JavaScript 语句是可以加标签的，在语句前加冒号即可：。

```js
firstStatement: var i = 1;
```

2、类似于注释，基本没有任何用处。唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环。

```js
outer: while (true) {
  console.log("outer");
  inner: while (true) {
    console.log("inner1");
    break outer;
    console.log("inner2");
  }
}
console.log("finished");
// outer  inner1  finished
```

## 宏任务和微任务

> 宏任务和微任务分别有哪些

宏任务主要有：script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)。

微任务主要有：Promise.then、 MutationObserver、 process.nextTick(Node.js 环境)。

## 异步编程

> JavaScript 如何实现异步编程，可以详细描述 EventLoop 机制

在 js 中，任务分为宏任务(macrotask)和微任务(microtask)，这两个任务分别维护一个队列，均采用先进先出的策略进行执行！同步执行的任务都在宏任务上执行。

具体的操作步骤如下：

- 从宏任务的头部取出一个任务执行；
- 执行过程中若遇到微任务则将其添加到微任务的队列中；
- 宏任务执行完毕后，微任务的队列中是否存在任务，若存在，则挨个儿出去执行，直到执行完毕；
- GUI 渲染；
- 回到步骤 1，直到宏任务执行完毕；

前 4 步构成了一个事件的循环检测机制，即我们所称的 eventloop。

## 分析异步嵌套

> 可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法

可以先把复杂的异步写法转换为简单写法。比如 async、await 异步的这种写法，其原理就是回调函数。

然后按照事件的循环机制进行分析。

## 使用 Promise 实现串行

### 5.1 概述

最常用的队列操作就是 Array.prototype.reduce()

```js
let result = [1, 2, 5].reduce((accumulator, item) => {
  return accumulator + item;
}, 0); // <-- Our initial value.

console.log(result); // 8
```

最后一个值 0 是起始值，每次 reduce 返回的值都会作为下次 reduce 回调函数的第一个参数，直到队列循环完毕，因此可以进行累加计算。

那么将 reduce 的特性用在 Promise 试试：

```js
function runPromiseByQueue(myPromise) {
  myPromise.reduce(
    (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
    Promise.resolve()
  );
}
```

当上一个 Promise 开始执行（previousPromise.then），当其执行完毕后再调用下一个 Promise，并作为一个新 Promise 返回，下次迭代就会继续这个循环。

```js
const createPromise = (time, id) => () =>
  new Promise(
    setTimeout(() => {
      console.log("promise", id);
      solve();
    }, time)
  );

runPromiseByQueue([
  createPromise(3000, 1),
  createPromise(2000, 2),
  createPromise(1000, 3),
]);
```

### 5.2 精读

Reduce 是同步执行的，在一个事件循环就会完成，但这仅仅是在内存快速构造了 Promise 执行队列，展开如下：

```js
new Promise((resolve, reject) => {
  // Promise #1

  resolve();
})
  .then((result) => {
    // Promise #2

    return result;
  })
  .then((result) => {
    // Promise #3

    return result;
  }); // ... and so on!
```

Reduce 的作用就是在内存中生成这个队列，而不需要把这个冗余的队列写在代码里！

### 5.3 更简单的方法

在 async/await 的支持下，runPromiseByQueue 函数可以更为简化：

```js
async function runPromiseByQueue(myPromises) {
  for (let value of myPromises) {
    await value();
  }
}
```

多亏了 async/await，代码看起来如此简洁明了。

不过要注意，这个思路与 reduce 思路不同之处在于，利用 reduce 的函数整体是个同步函数，自己先执行完毕构造 Promise 队列，然后在内存异步执行；而利用 async/await 的函数是利用将自己改造为一个异步函数，等待每一个 Promise 执行完毕。

## EventLoop

> Node 与浏览器 EventLoop 的差异

### 6.1 与浏览器环境有何不同

在 node 中，事件循环表现出的状态与浏览器中大致相同。不同的是 node 中有一套自己的模型。node 中事件循环的实现是依靠的 libuv 引擎。我们知道 node 选择 chrome v8 引擎作为 js 解释器，v8 引擎将 js 代码分析后去调用对应的 node api，而这些 api 最后则由 libuv 引擎驱动，执行对应的任务，并把不同的事件放在不同的队列中等待主线程执行。 因此实际上 node 中的事件循环存在于 libuv 引擎中。

### 6.2 事件循环模型

下面是一个 libuv 引擎中的事件循环的模型:

```js
   ┌───────────────────────┐
┌─>│       timers          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │    I/O callbacks      │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │    idle, prepare      │
│  └──────────┬────────────┘ ┌───────────────┐
│  ┌──────────┴────────────┐ │ incoming:     │
│  │        poll           │<──connections───│
│  └──────────┬────────────┘ │ data, etc.    │
│  ┌──────────┴────────────┐ └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

注：模型中的每一个方块代表事件循环的一个阶段

这个模型是 node 官网上的一篇文章中给出的，我下面的解释也都来源于这篇文章。我会在文末把文章地址贴出来，有兴趣的朋友可以亲自与看看原文。

### 6.3 事件循环各阶段详解

从上面这个模型中，我们可以大致分析出 node 中的事件循环的顺序：

外部输入数据-->轮询阶段(poll)-->检查阶段(check)-->关闭事件回调阶段(close callback)-->定时器检测阶段(timer)-->I/O 事件回调阶段(I/O callbacks)-->闲置阶段(idle, prepare)-->轮询阶段...

以上各阶段的名称是根据我个人理解的翻译，为了避免错误和歧义，下面解释的时候会用英文来表示这些阶段。

这些阶段大致的功能如下：

- timers: 这个阶段执行定时器队列中的回调如  setTimeout()  和  setInterval()。
- I/O callbacks: 这个阶段执行几乎所有的回调。但是不包括 close 事件，定时器和 setImmediate()的回调。
- idle, prepare: 这个阶段仅在内部使用，可以不必理会。
- poll: 等待新的 I/O 事件，node 在一些特殊情况下会阻塞在这里。
- check: setImmediate()的回调会在这个阶段执行。
- close callbacks: 例如 socket.on('close', ...)这种 close 事件的回调。

下面我们来按照代码第一次进入 libuv 引擎后的顺序来详细解说这些阶段：

#### 6.3.1 poll 阶段

当个 v8 引擎将 js 代码解析后传入 libuv 引擎后，循环首先进入 poll 阶段。poll 阶段的执行逻辑如下： 先查看 poll queue 中是否有事件，有任务就按先进先出的顺序依次执行回调。 当 queue 为空时，会检查是否有 setImmediate()的 callback，如果有就进入 check 阶段执行这些 callback。但同时也会检查是否有到期的 timer，如果有，就把这些到期的 timer 的 callback 按照调用顺序放到 timer queue 中，之后循环会进入 timer 阶段执行 queue 中的 callback。 这两者的顺序是不固定的，收到代码运行的环境的影响。如果两者的 queue 都是空的，那么 loop 会在 poll 阶段停留，直到有一个 i/o 事件返回，循环会进入 i/o callback 阶段并立即执行这个事件的 callback。

值得注意的是，poll 阶段在执行 poll queue 中的回调时实际上不会无限的执行下去。有两种情况 poll 阶段会终止执行 poll queue 中的下一个回调：1.所有回调执行完毕。2.执行数超过了 node 的限制。

#### 6.3.2 check 阶段

check 阶段专门用来执行 setImmediate()方法的回调，当 poll 阶段进入空闲状态，并且 setImmediate queue 中有 callback 时，事件循环进入这个阶段。

#### 6.3.3 close 阶段

当一个 socket 连接或者一个 handle 被突然关闭时（例如调用了 socket.destroy()方法），close 事件会被发送到这个阶段执行回调。否则事件会用 process.nextTick（）方法发送出去。

#### 6.3.4 timer 阶段

这个阶段以先进先出的方式执行所有到期的 timer 加入 timer 队列里的 callback，一个 timer callback 指得是一个通过 setTimeout 或者 setInterval 函数设置的回调函数。

#### 6.3.5 I/O callback 阶段

如上文所言，这个阶段主要执行大部分 I/O 事件的回调，包括一些为操作系统执行的回调。例如一个 TCP 连接生错误时，系统需要执行回调来获得这个错误的报告。

### 6.4 推迟任务执行的方法

在 node 中有三个常用的用来推迟任务执行的方法：process.nextTick,setTimeout（setInterval 与之相同）与 setImmediate

这三者间存在着一些非常不同的区别：

process.nextTick()

尽管没有提及，但是实际上 node 中存在着一个特殊的队列，即 nextTick queue。这个队列中的回调执行虽然没有被表示为一个阶段，当时这些事件却会在每一个阶段执行完毕准备进入下一个阶段时优先执行。当事件循环准备进入下一个阶段之前，会先检查 nextTick queue 中是否有任务，如果有，那么会先清空这个队列。与执行 poll queue 中的任务不同的是，这个操作在队列清空前是不会停止的。这也就意味着，错误的使用 process.nextTick()方法会导致 node 进入一个死循环。。直到内存泄漏。

那么合适使用这个方法比较合适呢？下面有一个例子：

```js
const server = net.createServer(() => {}).listen(8080);

server.on("listening", () => {});
```

这个例子中当，当 listen 方法被调用时，除非端口被占用，否则会立刻绑定在对应的端口上。这意味着此时这个端口可以立刻触发 listening 事件并执行其回调。然而，这时候 on('listening)还没有将 callback 设置好，自然没有 callback 可以执行。为了避免出现这种情况，node 会在 listen 事件中使用 process.nextTick()方法，确保事件在回调函数绑定后被触发。

setTimeout()和 setImmediate()
在三个方法中，这两个方法最容易被弄混。实际上，某些情况下这两个方法的表现也非常相似。然而实际上，这两个方法的意义却大为不同。

setTimeout()方法是定义一个回调，并且希望这个回调在我们所指定的时间间隔后第一时间去执行。注意这个“第一时间执行”，这意味着，受到操作系统和当前执行任务的诸多影响，该回调并不会在我们预期的时间间隔后精准的执行。执行的时间存在一定的延迟和误差，这是不可避免的。node 会在可以执行 timer 回调的第一时间去执行你所设定的任务。

setImmediate()方法从意义上将是立刻执行的意思，但是实际上它却是在一个固定的阶段才会执行回调，即 poll 阶段之后。有趣的是，这个名字的意义和之前提到过的 process.nextTick()方法才是最匹配的。node 的开发者们也清楚这两个方法的命名上存在一定的混淆，他们表示不会把这两个方法的名字调换过来---因为有大量的 ndoe 程序使用着这两个方法，调换命名所带来的好处与它的影响相比不值一提。

setTimeout()和不设置时间间隔的 setImmediate()表现上及其相似。猜猜下面这段代码的结果是什么？

```js
setTimeout(() => {
  console.log("timeout");
}, 0);

setImmediate(() => {
  console.log("immediate");
});
```

实际上，答案是不一定。没错，就连 node 的开发者都无法准确的判断这两者的顺序谁前谁后。这取决于这段代码的运行环境。运行环境中的各种复杂的情况会导致在同步队列里两个方法的顺序随机决定。但是，在一种情况下可以准确判断两个方法回调的执行顺序，那就是在一个 I/O 事件的回调中。下面这段代码的顺序永远是固定的：

```js
const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});
```

答案永远是：

immediate

timeout

因为在 I/O 事件的回调中，setImmediate 方法的回调永远在 timer 的回调前执行。

## 处理海量数据

> 如何在保证页面运行流畅的情况下处理海量数据

如果要在前端呈现大量的数据，一般的策略就是分页。前端要呈现百万数据，这个需求是很少见的，但是展示千条稍微复杂点的数据，这种需求还是比较常见，只要内存够，javascript 肯定是吃得消的，计算几千上万条数据，js 效率根本不在话下，但是 DOM 的渲染浏览器扛不住，CPU 稍微搓点的电脑必然会卡爆。

策略：显示三屏数据，其他的移除 DOM。

### 7.1 策略

下面是我简单勾画的一个草图，我们把一串数据放到一个容器当中，这串数据的高度（Data List）肯定是比 Container 的高度要高很多的，如果我们一次性把数据都显示出来，浏览器需要花费大量的时间来计算每个 data 的位置，并且依次渲染出来，整个过程中 JS 并没有花费太多的时间，开销主要是 DOM 渲染。

为了解决这个问题，我们让数据是显示一部分，这一部分是 Container 可视区域的内容，以及上下各一屏（一屏指的是 Container 高度所能容纳的区域大小）的缓存内容。如果 Container 比较高，也可是只缓存半屏，缓存的原因是，在我们滚动滚动条的时候，js 需要时间来拼凑字符串（或者创建 Node ），这个时候浏览器还来不及渲染，所以会出现临时的空白，这种体验是相当不好的。

### 7.2 Demo

```js
<title>百万数据前端快速流畅显示</title>
<style type="text/css">
#box {position: relative; height: 300px; width: 200px; border:1px solid #CCC; overflow: auto}
#box div { position: absolute; height: 20px; width: 100%; left: 0; overflow: hidden; font: 16px/20px Courier;}
</style>

<div id="box"></div>

<script type="text/javascript">
var total = 1e5
  , len = total
  , height = 300
  , delta = 20
  , num = height / delta
  , data = [];

for(var i = 0; i < total; i++){
    data.push({content: "item-" + i});
}

var box = document.getElementById("box");
box.onscroll = function(){
    var sTop = box.scrollTop||0
      , first = parseInt(sTop / delta, 10)
      , start = Math.max(first - num, 0)
      , end = Math.min(first + num, len - 1)
      , i = 0;

    for(var s = start; s <= end; s++){
        var child = box.children[s];
        if(!box.contains(child) && s != len - 1){
            insert(s);
        }
    }

    while(child = box.children[i++]){
        var index = child.getAttribute("data-index");
        if((index > end || index < start) && index != len - 1){
            box.removeChild(child);
        }
    }

};

function insert(i){
    var div = document.createElement("div");
    div.setAttribute("data-index", i);
    div.style.top = delta * i + "px";
    div.appendChild(document.createTextNode(data[i].content));
    box.appendChild(div);
}

box.onscroll();
insert(len - 1);
</script>
```

### 7.3 算法说明

- 计算 start 和 end 节点

  ![image](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a659deaf5814aca8f46e5e25120b46f~tplv-k3u1fbpfcp-zoom-1.image)
  Container 可以容纳的 Data 数目为 num = height / delta，Container 顶部第一个节点的索引值为

  ```js
  var first = parseInt(Container.scrollTop / delta);
  ```

  由于我们上下都有留出一屏，所以

  ```js
  var start = Math.max(first - num, 0);
  var end = Math.min(first + num, len - 1);
  ```

- 插入节点

  通过上面的计算，从 start 到 end 将节点一次插入到 Container 中，并且将最后一个节点插入到 DOM 中。

  ```js
  // 插入最后一个节点
  insert(len - 1);
  // 插入从 start 到 end 之间的节点
  for (var s = start; s <= end; s++) {
    var child = Container.children[s];
    // 如果 Container 中已经有该节点，或者该节点为最后一个节点则跳过
    if (!Container.contains(child) && s != len - 1) {
      insert(s);
    }
  }
  ```

  这里解释下为什么要插入最后一个节点，插入节点的方式是：

  ```js
  function insert(i){
  var div = document.createElement("div");
  div.setAttribute("data-index", i);
  div.style.top = delta \* i + "px";
  div.appendChild(document.createTextNode(data[i].content));
  Container.appendChild(div);
  }
  ```

  可以看到我们给插入的节点都加了一个 top 属性，最后一个节点的 top 是最大的，只有把这个节点插入到 DOM 中，才能让滚动条拉长，让人感觉放了很多的数据。

- 删除节点

  为了减少浏览器的重排（reflow），我们可以隐藏三屏之外的数据。我这里为了方便，直接给删除掉了，后续需要再重新插入。

  ```js
  while ((child = Container.children[i++])) {
    var index = child.getAttribute("data-index");
    // 这里记得不要把最后一个节点给删除掉了
    if ((index > end || index < start) && index != len - 1) {
      Container.removeChild(child);
    }
  }
  ```

  当 DOM 加载完毕之后，触发一次 Container.onscroll()，然后整个程序就 OK 了。

## 感谢

- 文中如有错误，欢迎在评论区批评指正。
- 如果本文对你有帮助，就点个 [Star](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
