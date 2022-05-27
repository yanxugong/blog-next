# 你不知道的 JavaScript（下卷）

## 前言

本文主要给大家带来一些"**ES6 之后**"好玩的内容，一些不久的将来很可能进入 JavaScript 或者已经开始用了的新特性。

> 温馨提示：上个月写了一篇文章[《这些 JavaScript 细节，你知道不？》](https://juejin.im/post/6859133591108976648)，重点介绍了 JavaScript 的部分冷门知识。今天我们从展望 JavaScript 的未来出发，聊聊 JavaScript 的发展方向。

## 非 JavaScript

当我们不在局限于研究 JavaScript 语言本身。我们会发现，大多数的 JavaScript 都是编写用于在浏览器这样的环境中运行并与之交互的。严格来说，我们编写的代码很大一部分并不直接由 JavaScript 控制。

最常见的非 JavaScript 就是 `DOM API` 。比如：

```js
var el = document.getElementById("foo");
```

当我们的代码在浏览器中运行时，变量 `document` 作为一个全局变量存在。它既不是由 JavaScript 引擎提供的，也不由 JavaScript 标准控制。它的存在形式看起来非常类似于普通的 JavaScript 对象，但实际上并不完全是这样。它是一个特殊的对象，通常被称为“宿主对象”。

另外，`document` 上的方法 `getElementById(..)` 看起来像是一个正常的 JavaScript 函数， 但它其实是浏览器的 `DOM` 提供的指向内置方法的一个接口。在某些（新版的）浏览器中，这一层可能在 JavaScript 中，但传统的 `DOM` 及其行为更可能是用 `C/C++` 实现的。

另一个示例是输入 / 输出 (`I/O`)。

广受喜爱的 `alert(..)` 会在用户浏览器窗口弹出一个消息框。`alert(..)` 是由浏览器提供给 JavaScript 程序的，而不是由 JavaScript 引擎本身提供。我们发起调用将消息发送到浏览器内部，然后由它负责绘制并显示消息框。

`console.log(..)` 也是如此；浏览器提供了这样的机制并将其连接到开发者工具中。

## 幂运算符

有提案提出为 JavaScript 新增一个运算符用于执行幂运算，就像 `Math.pow(..)` 一样。例如：

```js
var a = 2;

a ** 4; // Math.pow(a, 4) == 16
a **= 3; // a = Math.pow(a, 3)
a; // 8
```

> \*\* 实际上和 Python、Ruby、Perl 以及其他一些语言中的同名运算符一样。

## Array#includes(..)

前端开发过程中经常遇到需要在值数组中搜索一个值的需求。很多同学会这样做：

```js
var vals = ["foo", "bar", 42, "baz"];
if (vals.indexOf(42) >= 0) {
  // 找到了!
}
```

使用 `>= 0` 检查的原因是，如果找到的话 `indexOf(..)` 返回一个 `0` 或者更大的数字值，如果没有找到就会返回 `-1`。

或者这样做：

```js
var vals = ["foo", "bar", 42, "baz"];
if (~vals.indexOf(42)) {
  // 找到了!
}
```

`~` 运算符在上篇文章[《这些 JavaScript 细节，你知道不？》](https://juejin.im/post/6859133591108976648#heading-6)已经说过了，这里不再做过多描述。

现在增加一个真正返回布尔值的数组搜索方法，
称为 `includes(..)`:

```js
var vals = ["foo", "bar", 42, "baz"];
if (vals.includes(42)) {
  // 找到了!
}
```

> `Array#includes(..)` 使用的匹配逻辑能够找到 `NaN` 值，但是无法区分 `-0` 和 `0` 。如果你不关心程序中的 `-0` 值，那么这可能就是你所需要的。如果你确实在意这个 `-0` 值的
> 话，那么你就需要实现自己的搜索逻辑，很可能是使用 `Object.is(..)` 工具

## SIMD

> 温馨提示：SIMD 在 web 上公开的操作基于 SIMD.js 操作，在 WebAssembly （后面会说）于活动开发状态

[SIMD](https://baike.baidu.com/item/SIMD/3412835?fr=aladdin)（Single Instruction, Multiple Data） API 暴露了可以同时对多个数字值运算的各种底层（`CPU`）指令。

比如，你可以指定
两个[向量](https://baike.baidu.com/item/%E5%90%91%E9%87%8F/1396519?fr=aladdin)，其中分别有 4 个或 8 个数字，把它们的对应元素一次全部相乘（数据并行！）

```js
var v1 = SIMD.float32x4(3.14159, 21.0, 32.3, 55.55);
var v2 = SIMD.float32x4(2.1, 3.2, 4.3, 5.4);

SIMD.float32x4.mul(v1, v2);
// [6.597339, 67.2, 138.89, 299.97]
```

## WebAssembly (WASM)

JavaScript 语言设计修改上的最大压力之一就是需要成为更适合从其他语言（比如 `C/C++`、`ClojureScript` 等）变换 / 交叉编译的目标语言。显然，代码作为 JavaScript 运行的性能问题一直是一个主要关注点。

几年前一组 `Mozilla` 开发者为 JavaScript 引入了一个新思路，称为 `ASM.js`。`ASM.js` 是合法 JavaScript 的一个子集，这个子集最严格地限制了那些使得 JavaScript 引擎难于优化的行为。结果就是兼容 `ASM.js` 的代码运行在支持 `ASM` 的引擎上时效率有巨大的提升，几乎与原生优化的等价 `C` 程序相当。很多人把 `ASM.js` 看作是高性能要求 JavaScript 应用使用 JavaScript 的最可能支柱。

换句话说，浏览器中运行代码的所有路径都通过 JavaScript。

直到 `WASM` 发布之前，是这样的。`WASM` 为其他语言在浏览器运行时环境中运行提供了一条新路径，不需要先通过 JavaScript。本质上说，如果 `WASM` 发布，JavaScript 引擎将会获得执行二进制格式代码的新能力，这种格式某种程度上类似于字节码（`bytecode`，就像 `JVM` 上运行的那样）。

`WASM` 提出了一种代码的高度压缩 `AST`（语法树）二进制表示格式，然后可以直接向 JavaScript 引擎发出指令，而它的基础结构，不需要通过 JavaScript 解析，甚至不需要符合 JavaScript 的规则。像 `C` 或 `C++` 这样的语言可以被直接编译为 `WASM` 格式而不是 `ASM.js`，这样通过跳过 JavaScript 解析会获得额外的速度优势。

`WASM` 的近期目标是与 `ASM.js` 和真正 JavaScript 相当。但最终的预期是，`WASM` 将会增加新功能，而这些新功能是超出 JavaScript 所能做的。比如像线程这样的激进功能给 JavaScript 带来了很大压力——这个改变将会给整个 JavaScript 生态系统带来巨大震撼——将很可能会成为一个 `WASM` 扩展，缓解 JavaScript 本身的修改压力。

实际上，这个新的发展图景为很多语言打开了新的道路，使其能够进入 `Web` 运行时。对于 `Web` 平台来说，这是一个令人激动的新特性。

`WASM` 的支持者认为，`WASM` 的成功将意味着 JavaScript 的设计可以免于被不现实的需求撕裂的压力。重点是，对于应用中的高性能部分 `WASM` 是更好的目标，可以用其他多种语言编写。

有趣的是，JavaScript 是未来不太可能转化为 `WASM` 的语言之一。未来的修改可能会刻划出 JavaScript 的一个适合于转化为 `WASM` 的子集，但是这条发展路径的优先级似乎并不高。

尽管 JavaScript 很可能不会转化为 `WASM`，但是 JavaScript 代码和 `WASM` 代码将能够最大程度地交互，就像现在的模块交互一样自然。你可以设想调用像 `foo()` 这样的 JavaScript 函数，而实际上调用的是一个同名的能够在你的其余 JavaScript 的限制之外良好运行的 `WASM` 函数。

当下用 JavaScript 编写的代码将可能继续用它编写，至少在可见的未来是这样。`transpile` 到 JavaScript 的东西将可能最终考虑使用 `WASM` 替代。对于那些性能要求极高，不能容忍多层抽象的功能，最有可能的选择是寻找合适的非 JavaScript 语言编写，然后以 `WASM` 为目标。

这个转变可能会比较缓慢，需要几年才能完成。`WASM` 进入所有主流浏览器平台可能至少也需要数年。同时，[WASM 项目](https://github.com/WebAssembly)已经有一个早期的 `polyfill` 对其基本宗旨提供了概念证明。

但随着时间的发展，也随着 `WASM` 学到更多非 JavaScript 技巧，很可能当前一些 JavaScript 的东西会被重构为以 `WASM` 为目标的语言。举例来说，框架、游戏引擎以及其他常用工具中性能敏感的部分都可能从这样的转变中获益。在自己的 `Web` 应用中使用这些工具的开发者很可能不会注意到使用和集成过程中的差别，只会自动受益于性能和功能的提高。

可以确定的是，随着时间的发展 `WASM` 会越来越真实，对 Javascript 的发展方向和设计的影响也会越来越大。

## 感谢

- 文中如有错误，欢迎在评论区批评指正。
- 如果本文对你有帮助，就点个 [Star](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
