# Fe-interview

## △ 338 次 手写题库 'https://github.com/Mayandev/fe-interview-handwrite'

## `△ 200 次 Vue 中双向数据绑定的实现原理是怎样的？`

### Vue2

- new Vue() 首先执行初始化，对 data 执行响应化处理，这个过程发生 Observe 中
- 同时对模板执行编译，找到其中动态绑定的数据，从 data 中获取并初始化视图，这个过程发生在 Compile 中
- 同时定义⼀个更新函数和 Watcher，将来对应数据变化时 Watcher 会调用更新函数
- 由于 data 的某个 key 在⼀个视图中可能出现多次，所以每个 key 都需要⼀个管家 Dep 来管理多个 Watcher
- 将来 data 中数据⼀旦发生变化，会首先找到对应的 Dep，通知所有 Watcher 执行更新函数

<details>
<summary><b>点击显示代码👇</b></summary>

```js
Object.defineProperty(obj, key, {
  enumerable: true,
  configurable: true,
  get: function reactiveGetter() {
    // ...
    if (Dep.target) {
      // 收集依赖
      dep.depend();
    }
    return value;
  },
  set: function reactiveSetter(newVal) {
    // ...
    // 通知视图更新
    dep.notify();
  },
});
```

</details>

### Vue3

改用 ES6 的 Proxy 解决以前使用 Object.defineProperty 所存在的一些问题

- 对象新增属性为什么不更新 - $set
- 数组变异 - 手动 observer，重写数组的方法

## `△ 188 次 什么是闭包，什么是立即执行函数，它的作用是什么？简单说一下闭包的使用场景`

**闭包**指可以从内部函数访问外部函数的作用域

**立即执行函数**是一个在定义时就会立即执行的 JavaScript 函数

### 立即执行函数的作用

- 不必为函数命名，避免了污染全局变量
- IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量

### 闭包的使用场景

- 节流防抖、柯里化
- 立即执行函数

## `△ 186 次 简述浏览器的渲染过程，重绘和重排在渲染过程中的哪一部分？`

- 浏览器解析 URL 获取协议，主机，端口， path
- 浏览器获取主机 IP 地址
- 建立 TCP 连接，然后发送 HTTP 请求
- 服务器将响应报文通过 TCP 连接发送回浏览器，浏览器接收 HTTP 响应，根据资源类型决定如何处理
- 根据 HTML 解析出 DOM 树
- 根据 CSS 解析生成 CSS 规则树
- 结合 DOM 树和 CSS 规则树，生成渲染树
- 根据渲染树计算每一个节点的信息
- 根据计算好的信息绘制页面

### 重绘和重排

> 回流时，渲染流程会重新走一遍。重绘时，会重新计算样式，跳过中间步骤直接生成绘制列表。可见，重绘不一定导致回流，但回流一定发生了重绘。

## `△ 182 次 简述 diff 算法的实现机制和使用场景`

### diff 同层对比

新旧虚拟 DOM 对比的时候，diff 算法比较只会在同层级进行，不会跨层级比较。所以 diff 算法是：深度优先算法、时间复杂度：O(n)

### diff 对比流程

当数据改变时，会触发 setter，并且通过 Dep.notify 去通知所有订阅者 Watcher，订阅者们就会调用 patch 方法，给真实 DOM 打补丁，更新相应的视图

### patch 方法

patch 对比当前同层的虚拟节点是否为同一种类型的标签：

- 是：继续执行 patchVnode 方法进行深层比对
- 不是：没必要比对了，直接整个节点替换成新虚拟节点

> sameVnode 会比较 key 值、标签名、是否为注释节点、是否定义了 data 和当标签为 input 时，type 必须相同

### patchVnode 方法

主要判断：

- 如果 newVnode 和 oldVnode 是同一个对象，则 return
- 如果 newVnode 和 oldVnode 是文本节点，且文本不同，则将 el 中文本更新为 newVnode 的文本
- 如果 newVnode 和 oldVnode 都有子节点，且不同，则对比子节点
- 如果 oldVnode 有子节点而 newVnode 没有，则删除 el 的子节点
- 如果 oldVnode 没有子节点而 newVnode 有，则将 newVnode 的子节点真实化之后添加到 el

### updateChildren 方法

子节点不完全一致，则调用 updateChildren，while 循环主要处理了以下五种情景：

- oldStart 和 newStart 使用 sameVnode 方法进行比较，sameVnode(oldStart, newStart)
- oldStart 和 newEnd 使用 sameVnode 方法进行比较，sameVnode(oldStart, newEnd)
- oldEnd 和 newStart 使用 sameVnode 方法进行比较，sameVnode(oldEnd, newStart)
- oldEnd 和 newEnd 使用 sameVnode 方法进行比较，sameVnode(oldEnd, newEnd)
- 如果以上逻辑都匹配不到，再把所有旧子节点的 key 做一个映射到旧节点下标的 key -> index 表，然后用新 vnode 的 key 去找出在旧节点中可以复用的位置

### Vue3.0 diff

- PatchFlag。Vue3.0 对于不参与更新的元素，做静态标记并提示，只会被创建一次，在渲染时直接复用
- cacheHandlers。事件侦听器缓存
- 最长递增子序列

## `△ 178 次 简述 Javascript 中的防抖与节流的原理并尝试实现`

<details>
<summary><b>点击显示代码👇</b></summary>

```js
// 防抖
function debounce(fn, wait) {
  let timeout = null;
  return function () {
    let context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 节流
function throttle(fn, wait) {
  let pre = new Date();
  return function () {
    let context = this;
    let args = arguments;
    let now = new Date();
    if (now - pre >= wait) {
      fn.apply(context, args);
      pre = now;
    }
  };
}
```

</details>

## `△ 172 次 promise 有哪些状态？简述 promise.all 的实现原理`

### Promise 状态

- 待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
- 已兑现（fulfilled）：意味着操作成功完成。
- 已拒绝（rejected）：意味着操作失败。

### promise.all 的实现原理

<details>
<summary><b>点击显示代码👇</b></summary>

```js
function myPromiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (var i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i]).then(
          function (value) {
            resolvedCounter++;
            resolvedValues[i] = value;
            if (resolvedCounter === promiseNum) {
              return resolve(resolvedValues);
            }
          },
          function (reason) {
            return reject(reason);
          }
        );
      })(i);
    }
  });
}
```

</details>

## `△ 166 次 简述 CSS 盒模型`

在 CSS 中，盒子模型可以分成：

- W3C 标准盒子模型 box-sizing: content-box
- IE 怪异盒子模型 box-sizing: border-box

### 标准盒子模型

![标准盒子模型](https://static.vue-js.com/c0e1d2e0-8f9b-11eb-85f6-6fac77c0c9b3.png)

- 盒子总宽度 = width + padding + border + margin
- 盒子总高度 = height + padding + border + margin

width/height 只是内容高度，不包含 padding 和 border 值

### IE 怪异盒子模型

![IE 怪异盒子模型](https://static.vue-js.com/cfbb3ef0-8f9b-11eb-ab90-d9ae814b240d.png)

- 盒子总宽度 = width + margin;
- 盒子总高度 = height + margin;

width/height 包含了 padding 和 border 值

## △ 142 次 简述 Javascript 原型以及原型链

## △ 138 次 简述什么是 XSS 攻击以及 CSRF 攻击？

## △ 134 次 CSS 的选择器优先级是怎样？

## △ 130 次 简述常见异步编程方案 (promise, generator, async) 的原理

## △ 126 次 简述浏览器的缓存机制

## `△ 116 次 简述 Vue 的生命周期`

### 使用场景分析

- beforeCreate 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务
- created 组件初始化完毕，各种数据可以使用，常用于异步数据获取
- beforeMount 未执行渲染、更新，dom 未创建
- mounted 初始化结束，dom 已创建，可用于获取访问数据和 dom 元素
- beforeUpdate 更新前，可用于获取更新前各种状态
- updated 更新后，所有状态已是最新
- beforeDestroy 销毁前，可用于一些定时器或订阅的取消
- destroyed 组件已销毁，作用同上

## △ 106 次 简述 ES6 的新特性

## △ 92 次 简述强缓存与协商缓存的区别和使用场景

## △ 90 次 简述 Vue 中 watch 和 computed 的区别

## △ 90 次 简述 JavaScript 事件循环机制

## △ 90 次 简述 Flex 布局的原理和使用场景

## △ 86 次 简述 Javascript 的数据类型

## △ 82 次 箭头函数和普通函数的区别是什么？

## △ 82 次 移动端适配有哪些方案？

## △ 76 次 localstorage 与 cookie 的区别是什么？

## △ 76 次 const, let, var 关键字有什么区别？

## △ 72 次 简述 Javascript 中 this 的指向有哪些

## △ 72 次 简述图片的懒加载原理

## △ 72 次 什么是跨域，什么情况下会发生跨域请求？

## △ 70 次 简述浏览器的垃圾回收机制

## △ 64 次 Javascript 中 == 与 === 的区别是什么？

## △ 64 次 深拷贝与浅拷贝区别是什么？

## △ 62 次 简述 Javascript 的柯里化与逆柯里化

## △ 62 次 简述 Vue 和 React 的区别

## △ 60 次 简述 React 的生命周期

## △ 60 次 数组去重有哪些方式？手写数组去重

## △ 58 次 如何实现元素水平垂直居中

## △ 56 次 简述 CORS 的用途以及基本设置

## △ 48 次 Vue 组件间是如何进行通信的？

## △ 46 次 CSS 实现三列布局

## △ 44 次 简述 Javascript 事件冒泡和事件捕获原理

## △ 44 次 优化首屏渲染的方式有哪几种？

## △ 44 次 简述 Webpack 的使用场景和基础原理

## △ 42 次 简述 webpack 的打包流程

## △ 42 次 sessionStorage 和 localStorage 有什么区别？

## △ 40 次 简述 BFC 的原理及其使用场景

## △ 40 次 简述 Dom 节点的不同操作方式

## △ 39 次 MVC 模型和 MVVM 模型的区别

## △ 38 次 简述输入 URL 到浏览器显示的流程

## △ 36 次 如何实现深拷贝？

## △ 36 次 rem 与 em 的区别以及使用场景

## △ 36 次 CSS 实现两列布局

## `△ 34 次 简述虚拟 dom 实现原理`

### 为什么需要虚拟 DOM

- 操作 DOM 的代价非常昂贵，频繁操作还是会出现页面卡顿，影响用户的体验
- 跨平台、服务端渲染

### 流程概括

- 用 js 模拟 DOM 树，并渲染这个 DOM 树
- 比较新老 DOM 树，得到比较的差异对象
- 把差异对象应用到渲染的 DOM 树

## △ 34 次 如何使用 flex 实现两栏布局？

## △ 34 次 V-show 和 V-if 有什么区别

## △ 32 次 简述 var let 的区别以及作用域

## △ 32 次 如何减少页面渲染的时间？

## △ 32 次 什么是服务器渲染？Vue 和 React 是什么渲染模式？

## △ 30 次 简述项目打包和发布的流程

## △ 30 次 简述 jsonp 的工作原理

## △ 30 次 readyState 的不同返回值有什么区别？

## △ 28 次 简述 React 的生命周期以及通信方式

## △ 28 次 组件通信有哪几种方式？

## △ 26 次 如何解决 CSS 类名重名？

## △ 26 次 简述 map 与 foreach 的区别

## △ 24 次 简述 null 和 undefined 的区别

## △ 24 次 简述发布订阅模式的实现方式以及原理

## △ 24 次 简述 CSS 有哪些上下文类型？

## △ 24 次 简述 JWT 的原理和校验机制

## △ 24 次 简述常见的 HTTP 状态码的含义（301，304，401，403）

## △ 22 次 HTTP 中 GET 和 POST 区别

## △ 20 次 了解过 Gulp 和 Grunt 吗？简述他们的优势以及劣势

## △ 20 次 前端如何解决线程安全和进程安全的问题？

## △ 20 次 简述 React 的渲染流程

## △ 20 次 简述浏览器的 Event Loop 机制

## △ 20 次 什么是 DOM 事件流？

## △ 20 次 async 和 defer 有什么区别？

## △ 18 次 Javascript 可以保存的最大数值是多少？

## △ 18 次 简述 setTimeout 的实现原理

## △ 18 次 简述闭包的概念和应用场景

## △ 18 次 为什么 0.1 + 0.2 会丢失精度？

## △ 18 次 简述 React 中的 Effect Hook 机制

## △ 18 次 简述 React setstate 原理

## △ 18 次 简述 HTML5 的新特性

## △ 18 次 简述 weakMap 与 Map 的区别

## △ 16 次 实现匹配手机号的正则表达式

## △ 16 次 什么情况下引起重排和重绘？改变 color 会吗？改变 margin 会吗？

## △ 16 次 实现自适应两栏布局

## △ 16 次 Vuex 有哪些常用属性？

## △ 16 次 简述 CSS 预编译的方式

## △ 16 次 异步设定的时间准吗？不准的话怎么解决？

## △ 16 次 如何用 CSS 画三角形？

## △ 16 次 简述 Node.js 事件循环机制

## △ 16 次 什么是 JavaScript 的变量提升？有什么作用？

## △ 16 次 CSS 的伪类和伪元素的区别是什么？

## △ 15 次 CSS 哪些属性是可以继承的

## △ 14 次 JavaScript 中的严格模式是什么，有什么作用？

## △ 14 次 CSS3 有哪些新特性

## △ 14 次 CSS3 如何实现渐变色？

## △ 14 次 什么是可继承元素和不可继承元素？

## △ 14 次 什么是替换元素与非替换元素

## △ 14 次 什么是同源策略？

## △ 14 次 如何实现多终端同步功能？

## △ 14 次 new 和 instanceof 的内部机制

## △ 14 次 简述 Node.js 异步单线程原理

## △ 14 次 简述 typeof 和 instanceof 的原理

## △ 14 次 遍历对象有什么方式？

## △ 14 次 Promise 有哪些潜在的问题？

## △ 14 次 简述 JavaScript 垃圾回收的原理

## △ 12 次 CSS 的 position 常用值有哪些，有什么区别？

## △ 12 次 简述 box-sizing 属性的使用场景

## △ 12 次 如何实现自适应布局？

## △ 12 次 简述异步加载的几种方式

## △ 12 次 简述 Vuex 的实现原理

## △ 10 次 flex 常用的属性有哪些？flex: 1 1 0 是什么意思？

## △ 10 次 什么情况下 z-index 不生效？

## △ 10 次 正则表达式 /w 是什么意思？

## △ 10 次 使用过 ESLint 吗？简述 ESLint 的原理

## △ 10 次 new 一个函数的过程发生了什么？

## △ 8 次 简述 WebSocket 是如何进行传输的
