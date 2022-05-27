# 你不知道的 JavaScript（中卷）

## 前言

本文主要给大家带来一些我读《你不知道的 JavaScript（中卷）》中遇到的一些**有意思**的内容，可以说是**打开新世界的大门**的感觉。希望能在工作之余，给大家带来一点乐趣。

> JavaScript 是一门优秀的语言。只学其中一部分内容很容易，但是要全面掌握则很难。开发人员遇到困难时往往将其归咎于语言本身，而不反省他们自己对语言的理解有多匮乏。《你不知道的 JavaScript》旨在解决这个问题，使读者能够发自内心地喜欢上这门语言。

## 强制类型转换

### 值类型转换

```js
var a = 42;
var b = a + ""; // 隐式强制类型转换
var c = String(a); // 显式强制类型转换
```

### 抽象值操作

> `document.all` 是假值对象。也就是 `!!document.all` 值为 `false`。

### 显示强制类型转换

#### 日期显示转换为数字：

使用 `Date.now()` 来获得当前的时间戳，使用 `new Date(..).getTime()` 来获得指定时间的时间戳。

#### 奇特的 ~ 运算符：

`~x` 大致等同于 `-(x+1)`。很奇怪，但相对更容易说明问题：
`~42; // -(42+1) ==> -43`

JavaScript 中字符串的 `indexOf(..)` 方法也遵循这一惯例，该方法在字符串中搜索指定的子
字符串，如果找到就返回子字符串所在的位置（从 0 开始），否则返回 -1。

`~` 和 `indexOf()` 一起可以将结果强制类型转换（实际上仅仅是转换）为真 / 假值：

```js
var a = "Hello World";
~a.indexOf("lo"); // -4 <-- 真值!

if (~a.indexOf("lo")) {
  // true
  // 找到匹配！
}
```

#### 解析非字符串：

曾经有人发帖吐槽过 `parseInt(..)` 的一个坑：

```js
parseInt(1 / 0, 19); // 18
```

`parseInt(1/0, 19)` 实际上是 `parseInt("Infinity", 19)`。第一个字符是 "I"，以 19 为基数
时值为 18。

此外还有一些看起来奇怪但实际上解释得通的例子：

```js
parseInt(0.000008); // 0 ("0" 来自于 "0.000008")
parseInt(0.0000008); // 8 ("8" 来自于 "8e-7")
parseInt(false, 16); // 250 ("fa" 来自于 "false")
parseInt(parseInt, 16); // 15 ("f" 来自于 "function..")
parseInt("0x10"); // 16
parseInt("103", 2); // 2
```

### 隐式强制类型转换

#### 字符串和数字之间的隐式强制类型转换

例如：

```js
var a = "42";
var b = "0";
var c = 42;
var d = 0;
a + b; // "420"
c + d; // 42
```

再例如：

```js
var a = [1, 2];
var b = [3, 4];
a + b; // "1,23,4"
```

根据 ES5 规范 11.6.1 节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+ 将进行拼接操作。如果其中一个操作数是对象（包括数组），则首先对其调用 ToPrimitive 抽象操作（规范 9.1 节），该抽象操作再调用 `[[DefaultValue]]`（规范 8.12.8 节），以数字作为上下文。

你或许注意到这与 `ToNumber` 抽象操作处理对象的方式一样（参见 4.2.2 节）。因为数组的 `valueOf()` 操作无法得到简单基本类型值，于是它转而调用 `toString()`。因此上例中的两个数组变成了 "`1,2`" 和 "`3,4`" 。+ 将它们拼接后返回 "`1,23,4`" 。

**简单来说就是，如果 + 的其中一个操作数是字符串（或者通过以上步骤可以得到字符串），则执行字符串拼接；否则执行数字加法。**

#### 符号的强制类型转换

ES6 允许从符号到字符串的显式强制类型转换，然而隐式强制类型转换会产生错误，具体的原因不在本书讨论范围之内。

例如：

```js
var s1 = Symbol("cool");
String(s1); // "Symbol(cool)"
var s2 = Symbol("not cool");
s2 + ""; // TypeError
```

符号不能够被强制类型转换为数字（显式和隐式都会产生错误），但可以被强制类型转换为布尔值（显式和隐式结果都是 `true`）。

由于规则缺乏一致性，我们要对 ES6 中符号的强制类型转换多加小心。

好在鉴于符号的特殊用途，我们不会经常用到它的强制类型转换。

### 宽松相等和严格相等

常见的误区是“`==` 检查值是否相等，`===` 检查值和类型是否相等”。听起来蛮有道理，然而还不够准确。很多 JavaScript 的书籍和博客也是这样来解释的，但是很遗憾他们都错了。

正确的解释是：“`==` 允许在相等比较中进行强制类型转换，而 `===` 不允许。”

字符串和数字之间的相等比较：

- 如果 Type(x) 是数字，Type(y) 是字符串，则返回 x == ToNumber(y) 的结果。
- 如果 Type(x) 是字符串，Type(y) 是数字，则返回 ToNumber(x) == y 的结果。

其他类型和布尔类型之间的相等比较：

- 如果 Type(x) 是布尔类型，则返回 ToNumber(x) == y 的结果；
- 如果 Type(y) 是布尔类型，则返回 x == ToNumber(y) 的结果。

`null` 和 `undefined` 之间的相等比较：

- 如果 x 为 null，y 为 undefined，则结果为 true。
- 如果 x 为 undefined，y 为 null，则结果为 true。

对象和非对象之间的相等比较：

- 如果 Type(x) 是字符串或数字，Type(y) 是对象，则返回 x == ToPrimitive(y) 的结果；
- 如果 Type(x) 是对象，Type(y) 是字符串或数字，则返回 ToPromitive(x) == y 的结果。

## 语法

### 错误

提前使用变量

ES6 规范定义了一个新概念，叫作 TDZ（Temporal Dead Zone，暂时性死区）。

TDZ 指的是由于代码中的变量还没有初始化而不能被引用的情况。

对此，最直观的例子是 ES6 规范中的 `let` 块作用域：

```js
{
  a = 2; // ReferenceError!
  let a;
}
```

`a = 2` 试图在 `let a` 初始化 `a` 之前使用该变量（其作用域在 `{ .. }` 内），这里就是 `a` 的 TDZ，会产生错误。

有意思的是，对未声明变量使用 typeof 不会产生错误（参见第 1 章），但在 TDZ 中却会报错：

```js
{
  typeof a; // undefined
  typeof b; // ReferenceError! (TDZ)
  let b;
}
```

## 回调

### 省点回调

构造一个超时验证工具：

```js
function timeoutify(fn, delay) {
  var intv = setTimeout(function() {
    intv = null;
    fn(new Error("Timeout!"));
  }, delay);

  return function() {
    // 还没有超时？
    if (intv) {
      clearTimeout(intv);
      fn.apply(this, arguments);
    }
  };
}
```

以下是使用方式：

```js
// 使用 ‘error-first 风格’ 回调设计
function foo(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
}

ajax("http://some.url.1", timeoutify(foo, 500));
```

如果你不确定关注的 API 会不会永远异步执行怎么办呢？可以创建一个类似于这个“验证概念”版本的 `asyncify(..)` 工具：

```js
function asyncify(fn) {
  var orig_fn = fn,
    intv = setTimeout(function() {
      intv = null;
      if (fn) fn();
    }, 0);

  fn = null;

  return function() {
    // 触发太快，在定时器intv触发指示异步转换发生之前？
    if (intv) {
      fn = orig_fn.bind.apply(
        orig_fn,
        // 把封装器的this添加到bind(..)调用的参数中，
        // 以及克里化（currying）所有传入参数
        [this].concat([].slice.call(arguments))
      );
    }
    // 已经是异步
    else {
      // 调用原来的函数
      orig_fn.apply(this, arguments);
    }
  };
}
```

可以像这样使用 `asyncify(..)`：

```js
function result(data) {
  console.log(a);
}

var a = 0;

ajax("..pre-cached-url..", asyncify(result));
a++;
```

不管这个 Ajax 请求已经在缓存中并试图对回调立即调用，还是要从网络上取得，进而在将来异步完成，这段代码总是会输出 1，而不是 0——result(..) 只能异步调用，这意味着 a++ 有机会在 result(..) 之前运行。

## Promise

### Promise 信任问题

#### 回调未调用

提供一个超时处理的解决方案：

```js
// 用于超时一个Promise的工具
function timeoutPromise(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject("Timeout!");
    }, delay);
  });
}

// 设置foo()超时
Promise.race([foo(), timeoutPromise(3000)]).then(
  function() {
    // foo(..)及时完成！
  },
  function(err) {
    // 或者foo()被拒绝，或者只是没能按时完成
    // 查看err来了解是哪种情况
  }
);
```

### 链式流

为了进一步阐释链接，让我们把延迟 Promise 创建（没有决议消息）过程一般化到一个工具中，以便在多个步骤中复用：

```js
function delay(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, time);
  });
}

delay(100) // 步骤1
  .then(function STEP2() {
    console.log("step 2 (after 100ms)");
    return delay(200);
  })
  .then(function STEP3() {
    console.log("step 3 (after another 200ms)");
  })
  .then(function STEP4() {
    console.log("step 4 (next Job)");
    return delay(50);
  })
  .then(function STEP5() {
    console.log("step 5 (after another 50ms)");
  });
```

调用 `delay(200)` 创建了一个将在 200ms 后完成的 promise，然后我们从第一个 `then(..)` 完成回调中返回这个 promise，这会导致第二个 `then(..)` 的 promise 等待这个 200ms 的 promise。

### Promise 局限性

#### 顺序错误处理

Promise 的设计局限性（链式调用）造成了一个让人很容易中招的陷阱，即 Promise 链中的错误很容易被无意中默默忽略掉。

关于 Promise 错误，还有其他需要考虑的地方。由于一个 Promise 链仅仅是连接到一起的成员 Promise，没有把整个链标识为一个个体的实体，这意味着没有外部方法可以用于观察可能发生的错误。

如果构建了一个没有错误处理函数的 Promise 链，链中任何地方的任何错误都会在链中一直传播下去，直到在某个步骤注册拒绝处理函数。在这个特定的例子中，只要有一个指向链中最后一个 promise 的引用就足够了（下面代码中的 p），因为你可以在那里注册拒绝处理函数，而且这个处理函数能够得到所有传播过来的错误的通知：

```js
// foo(..), STEP2(..)以及STEP3(..)都是支持promise的工具
var p = foo(42)
  .then(STEP2)
  .then(STEP3);
```

虽然这里可能令人迷惑，但是这里的 `p` 并不指向链中的第一个 promise（调用 `foo(42)` 产生的那一个），而是指向最后一个 promise，即来自调用 `then(STEP3)` 的那一个。

还有，这个 Promise 链中的任何一个步骤都没有显式地处理自身错误。这意味着你可以在 `p` 上注册一个拒绝错误处理函数，对于链中任何位置出现的任何错误，这个处理函数都会得到通知：

```js
p.catch(handleErrors);
```

但是，如果链中的任何一个步骤事实上进行了自身的错误处理（可能以隐藏或抽象的不可见的方式），那你的 `handleErrors(..)` 就不会得到通知。这可能是你想要的——毕竟这是一个“已处理的拒绝”——但也可能并不是。不能清晰得到（对具体某一个“已经处理”的拒绝的）错误通知也是一个缺陷，它限制了某些用例的功能。

基本上，这等同于 try..catch 存在的局限：try..catch 可能捕获一个异常并简单地吞掉它。所以这并不是 Promise 独有的局限性，但可能是我们希望绕过的陷阱。

遗憾的是，很多时候并没有为 Promise 链序列的中间步骤保留的引用。因此，没有这样的引用，你就无法关联错误处理函数来可靠地检查错误。

#### 单一值

根据定义，Promise 只能有一个完成值或一个拒绝理由。在简单的例子中，这不是什么问题，但是在更复杂的场景中，你可能就会发现这是一种局限了。

一般的建议是构造一个值封装（比如一个对象或数组）来保持这样的多个信息。这个解决方案可以起作用，但要在 Promise 链中的每一步都进行封装和解封，就十分丑陋和笨重了。

1. 分裂值

有时候，你可以把这一点，当作提示你应该把问题分解为两个或更多 Promise 的信号。

设想你有一个工具 `foo(..)`，它可以异步产生两个值（x 和 y）：

```js
function getY(x) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(3 * x - 1);
    }, 100);
  });
}

function foo(bar, baz) {
  var x = bar * baz;
  return getY(x).then(function(y) {
    // 把两个值封装到容器中
    return [x, y];
  });
}

foo(10, 20).then(function(msgs) {
  var x = msgs[0];
  var y = msgs[1];
  console.log(x, y); // 200 599
});
```

首先，我们重新组织一下 `foo(..)` 返回的内容，这样就不再需要把 `x` 和 `y` 封装到一个数组值中以通过 promise 传输。取而代之的是，我们可以把每个值封装到它自己的 promise：

```js
function foo(bar, baz) {
  var x = bar * baz;

  // 返回两个 promise
  return [Promise.resolve(x), getY(x)];
}

Promise.all(foo(10, 20)).then(function(msgs) {
  var x = msgs[0];
  var y = msgs[1];
  console.log(x, y);
});
```

一个 promise 数组真的要优于传递给单个 promise 的一个值数组吗？从语法的角度来说，这算不上是一个改进。

但是，这种方法更符合 Promise 的设计理念。如果以后需要重构代码把对 `x` 和 `y` 的计算分开，这种方法就简单得多。由调用代码来决定如何安排这两个 promise，而不是把这种细节放在 `foo(..)` 内部抽象，这样更整洁也更灵活。这里使用了 `Promise.all([ .. ])`，当然，这并不是唯一的选择。

2. 传递参数

`var x = ..` 和 `var y = ..` 赋值操作仍然是麻烦的开销。我们可以在辅助工具中采用某种函数技巧：

```js
function spread(fn) {
  return Function.apply.bind(fn, null);
}

Promise.all(foo(10, 20)).then(
  spread(function(x, y) {
    console.log(x, y); // 200 599
  })
);
```

这样会好一点！当然，你可以把这个函数戏法在线化，以避免额外的辅助工具：

```js
Promise.all(foo(10, 20)).then(
  Function.apply.bind(function(x, y) {
    console.log(x, y); // 200 599
  }, null)
);
```

这些技巧可能很灵巧，但 ES6 给出了一个更好的答案：解构。数组解构赋值形式看起来是这样的：

```js
Promise.all(foo(10, 20)).then(function(msgs) {
  var [x, y] = msgs;
  console.log(x, y); // 200 599
});
```

不过最好的是，ES6 提供了数组参数解构形式：

```js
Promise.all(foo(10, 20)).then(function([x, y]) {
  console.log(x, y); // 200 599
});
```

现在，我们符合了“每个 Promise 一个值”的理念，并且又将重复样板代码量保持在了最小！

#### 单决议

Promise 最本质的一个特征是：Promise 只能被决议一次（完成或拒绝）。在许多异步情况中，你只会获取一个值一次，所以这可以工作良好。

但是，还有很多异步的情况适合另一种模式——一种类似于事件或数据流的模式。在表面上，目前还不清楚 Promise 能不能很好用于这样的用例，如果不是完全不可用的话。如果不在 Promise 之上构建显著的抽象，Promise 肯定完全无法支持多值决议处理。

设想这样一个场景：你可能要启动一系列异步步骤以响应某种可能多次发生的激励（就像是事件），比如按钮点击。

这样可能不会按照你的期望工作：

```js
// click(..) 把"click"事件绑定到一个 DOM 元素
// request(..) 是前面定义的支持 Promise 的 Ajax
var p = new Promise(function(resolve, reject) {
  click("#mybtn", resolve);
});

p.then(function(evt) {
  var btnID = evt.currentTarget.id;
  return request("http://some.url.1/?id=" + btnID);
}).then(function(text) {
  console.log(text);
});
```

只有在你的应用只需要响应按钮点击一次的情况下，这种方式才能工作。如果这个按钮被点击了第二次的话，promise p 已经决议，因此第二个 `resolve(..)` 调用就会被忽略。

因此，你可能需要转化这个范例，为每个事件的发生创建一整个新的 Promise 链：

```js
click("#mybtn", function(evt) {
  var btnID = evt.currentTarget.id;
  request("http://some.url.1/?id=" + btnID).then(function(text) {
    console.log(text);
  });
});
```

这种方法可以工作，因为针对这个按钮上的每个 "click" 事件都会启动一整个新的 Promise 序列。

由于需要在事件处理函数中定义整个 Promise 链，这很丑陋。除此之外，这个设计在某种程度上破坏了关注点与功能分离（SoC）的思想。你很可能想要把事件处理函数的定义和对事件的响应（那个 Promise 链）的定义放在代码中的不同位置。如果没有辅助机制的话，在这种模式下很难这样实现。

## 感谢

如果本文对你有帮助，就点个 [Star](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
