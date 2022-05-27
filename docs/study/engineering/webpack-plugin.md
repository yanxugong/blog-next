# 「webpack 核心特性」插件(plugin)

## 前言

大家有没有遇到过这些问题：

- webpack 打包之后的文件没有压缩
- 静态文件要手动拷贝到输出目录
- 代码中写了很多环境判断的多余代码

上一篇 [「webpack 核心特性」loader](https://juejin.cn/post/6916315177411411981) 说到 webpack 的 `loader` 机制，本文主要聊一聊另外一个核心特性：插件(`plugin`)。

插件机制就是为了完成项目中除了资源模块打包以外的其他自动化工作，解决上述的问题。

`plugin` 是用来扩展 webpack 功能的，通过在构建流程里注入钩子实现，它为 webpack 带来了很大的灵活性。

## plugin 相对于 loader 有哪些区别？

`loader` 是转换器，将一种文件编译转换为另一个文件，操作的是文件。例如：将 `.less` 文件转换成 `.css` 文件。

`plugin` 是扩展器，它是针对 `loader` 结束之后，打包的整个过程。它并不直接操作文件，而是基于事件机制工作。在 webpack 构建流程中的特定时机会广播对应的事件，插件可以监听这些事件的发生，在特定的时机做对应的事情。包括：打包优化，资源管理，注入环境变量。

## plugin 该怎么配置呢？

例如 `HtmlWebpackPlugin` 可以为我们生成一个 HTML 文件，其中包括使用 `script` 标签的 body 中的所有模块。看下如何配置：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  ...
  plugins: [new HtmlWebpackPlugin()]
};
```

> 温馨提示：`loader` 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个对象，内部包含了 test(类型文件)、loader、options(参数)等属性。`plugin` 则单独配置，类型为数组，每一项是一个 `plugin` 的实例，参数都通过构造函数传入。

## 有哪些常见的 plugin？

下面整理的插件列表来自 webpack 中文官网，大家看见不熟悉的 `plugin` 可以点击名称跳转，看一看，了解一下具体玩法。

| 名称                                                                                                | 描述                                                       |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [AggressiveSplittingPlugin](https://www.webpackjs.com/plugins/aggressive-splitting-plugin/)         | 将原来的 chunk 分成更小的 chunk                            |
| [BabelMinifyWebpackPlugin](https://www.webpackjs.com/plugins/babel-minify-webpack-plugin/)          | 使用 babel-minify 进行压缩                                 |
| [BannerPlugin](https://www.webpackjs.com/plugins/banner-plugin/)                                    | 在每个生成的 chunk 顶部添加 banner                         |
| [CommonsChunkPlugin](https://www.webpackjs.com/plugins/commons-chunk-plugin/)                       | 提取 chunks 之间共享的通用模块                             |
| [CompressionWebpackPlugin](https://www.webpackjs.com/plugins/compression-webpack-plugin/)           | 预先准备的资源压缩版本，使用 Content-Encoding 提供访问服务 |
| [ContextReplacementPlugin](https://www.webpackjs.com/plugins/context-replacement-plugin/)           | 重写 require 表达式的推断上下文                            |
| [CopyWebpackPlugin](https://www.webpackjs.com/plugins/copy-webpack-plugin/)                         | 将单个文件或整个目录复制到构建目录                         |
| [DefinePlugin](https://www.webpackjs.com/plugins/define-plugin/)                                    | 允许在编译时(compile time)配置的全局常量                   |
| [DllPlugin](https://www.webpackjs.com/plugins/dll-plugin/)                                          | 为了极大减少构建时间，进行 dll 分包                        |
| [EnvironmentPlugin](https://www.webpackjs.com/plugins/environment-plugin)                           | DefinePlugin 中 process.env 键的简写方式。                 |
| [ExtractTextWebpackPlugin](https://www.webpackjs.com/plugins/extract-text-webpack-plugin)           | 从 bundle 中提取文本（CSS）到单独的文件                    |
| [HotModuleReplacementPlugin](https://www.webpackjs.com/plugins/hot-module-replacement-plugin)       | 启用模块热替换(Enable Hot Module Replacement - HMR)        |
| [HtmlWebpackPlugin](https://www.webpackjs.com/plugins/html-webpack-plugin)                          | 简单创建 HTML 文件，用于服务器访问                         |
| [I18nWebpackPlugin](https://www.webpackjs.com/plugins/i18n-webpack-plugin)                          | 为 bundle 增加国际化支持                                   |
| [IgnorePlugin](https://www.webpackjs.com/plugins/ignore-plugin)                                     | 从 bundle 中排除某些模块                                   |
| [LimitChunkCountPlugin](https://www.webpackjs.com/plugins/limit-chunk-count-plugin)                 | 设置 chunk 的最小/最大限制，以微调和控制 chunk             |
| [LoaderOptionsPlugin](https://www.webpackjs.com/plugins/loader-options-plugin)                      | 用于从 webpack 1 迁移到 webpack 2                          |
| [MinChunkSizePlugin](https://www.webpackjs.com/plugins/min-chunk-size-plugin)                       | 确保 chunk 大小超过指定限制                                |
| [NoEmitOnErrorsPlugin](https://www.webpackjs.com/plugins/no-emit-on-errors-plugin)                  | 在输出阶段时，遇到编译错误跳过                             |
| [NormalModuleReplacementPlugin](https://www.webpackjs.com/plugins/normal-module-replacement-plugin) | 替换与正则表达式匹配的资源                                 |
| [NpmInstallWebpackPlugin](https://www.webpackjs.com/plugins/npm-install-webpack-plugin)             | 在开发时自动安装缺少的依赖                                 |
| [ProvidePlugin](https://www.webpackjs.com/plugins/provide-plugin)                                   | 不必通过 import/require 使用模块                           |
| [SourceMapDevToolPlugin](https://www.webpackjs.com/plugins/source-map-dev-tool-plugin)              | 对 source map 进行更细粒度的控制                           |
| [EvalSourceMapDevToolPlugin](https://www.webpackjs.com/plugins/eval-source-map-dev-tool-plugin)     | 对 eval source map 进行更细粒度的控制                      |
| [UglifyjsWebpackPlugin](https://www.webpackjs.com/plugins/uglifyjs-webpack-plugin)                  | 可以控制项目中 UglifyJS 的版本                             |
| [ZopfliWebpackPlugin](https://www.webpackjs.com/plugins/zopfli-webpack-plugin/)                     | 通过 node-zopfli 将资源预先压缩的版本                      |

## 怎么写一个 plugin？

在说怎么写插件之前，先简单介绍几个好玩的东西：`tapable`、`compiler` 和 `compilation`。

### tapable

`tapable` 是一个类似于 `nodejs` 的 `EventEmitter` 的库, 主要是控制钩子函数的发布与订阅。当然，`tapable` 提供的 `hook` 机制比较全面，分为同步和异步两个大类(异步中又区分异步并行和异步串行)，而根据事件执行的终止条件的不同，由衍生出 `Bail` / `Waterfall` / `Loop` 类型。

基本使用：

```js
const { SyncHook } = require("tapable");
const hook = new SyncHook(["name"]);
hook.tap("hello", (name) => {
  console.log(`hello ${name}`);
});
hook.tap("hi", (name) => {
  console.log(`hi ${name}`);
});

hook.call("july");

// hello july
// hi july
```

小结：

`tapable` 基本逻辑是，先通过类实例的 `tap` 方法注册对应 `hook` 的处理函数，然后通过 `call` 方法触发回调函数。

### compiler

`compiler` 对象包含 webpack 环境所有配置信息，包含 options、loaders 和 plugins 等信息。可以简单理解为 webpack 实例。**代表整个 webpack 从启动到关闭的生命周期**。

`compile` 的内部实现：

```js
class Compiler extends Tapable {
  constructor(context) {
    super();
    this.hooks = {
      /** @type {SyncBailHook<Compilation>} */
      shouldEmit: new SyncBailHook(["compilation"]),
      /** @type {AsyncSeriesHook<Stats>} */
      done: new AsyncSeriesHook(["stats"]),
      /** @type {AsyncSeriesHook<>} */
      additionalPass: new AsyncSeriesHook([]),
      /** @type {AsyncSeriesHook<Compiler>} */
      ...
    };
    ...
}
```

小结：

`compile` 继承了 `tapable` ，然后在实例上绑定了一个 `hook` 对象。

### compilation

`compilation` 对象包含了当前的模块资源、编译生成资源和变化的文件等。**仅代表一次新的编译**。

`compilation` 的实现：

```js
class Compilation extends Tapable {
  /**
   * Creates an instance of Compilation.
   * @param {Compiler} compiler the compiler which created the compilation
   */
  constructor(compiler) {
    super();
    this.hooks = {
      /** @type {SyncHook<Module>} */
      buildModule: new SyncHook(["module"]),
      /** @type {SyncHook<Module>} */
      rebuildModule: new SyncHook(["module"]),
      /** @type {SyncHook<Module, Error>} */
      failedModule: new SyncHook(["module", "error"]),
      /** @type {SyncHook<Module>} */
      succeedModule: new SyncHook(["module"]),
      /** @type {SyncHook<Dependency, string>} */
      addEntry: new SyncHook(["entry", "name"]),
      /** @type {SyncHook<Dependency, string, Error>} */
    };
  }
}
```

当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 `compilation`，从而生成一组新的编译资源。一个 `compilation` 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。`compilation` 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

### 热身

写一个最基础的 `plugin`：

```js
// 一个 JavaScript 命名函数。
function SimplePlugin() {}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
SimplePlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin("webpacksEventHook", function(
    compilation /* 处理 webpack 内部实例的特定数据。*/,
    callback
  ) {
    console.log("This is an simple plugin!!!");

    // 功能完成后调用 webpack 提供的回调。
    callback();
  });
};
```

webpack 启动后，做了下面几件事情：

- 在读取配置的过程中先执行 `new SimplePlugin()`，初始化一个 SimplePlugin 并获得其实例。
- 在初始化 `compiler` 对象后，再调用 `SimplePlugin.apply(compiler)` 为插件实例传入 `compiler` 对象。
- 插件实例在获取到 `compiler` 对象后，就可以通过 `compiler.plugin("webpacksEventHook", function(compilation, callback){})` 监听到 webpack 广播的事件，并且通过 `compiler` 对象去操作 webpack。

### 实战

下面写一个实用的插件。

作用是在 webpack 马上关闭时做一些事情。例如告知用打包完成，是否执行成功。或者执行一些 `script` 脚本。我们将其命名为 `AfterWebpackPlugin` 。用法如下：

```js
module.exports = {
  plugins: [
    // 分别传入成功和失败时的回调函数
    new AfterWebpackPlugin(
      () => {
        // 可以通知用户构建成功，执行发布脚本
      },
      (err) => {
        // 构建失败时，抛出异常
        console.error(err);
      }
    ),
  ],
};
```

这里实现过程需要借助以下两个钩子：

- **done**：在成功构建并且输出文件后，webpack 马上退出时发生。
- **failed**：在构建异常时导致构建失败，webpack 马上退出时发生。

实现代码如下：

```js
class AfterWebpackPlugin {
  constructor(doneCb, failedCb) {
    // 传入回调函数
    this.doneCb = doneCb;
    this.failedCb = failedCb;
  }

  apply(compiler) {
    compiler.plugin("done", (res) => {
      // webpack 生命周期 `done` 中的回调
      this.doneCb(res);
    });
    compiler.plugin("failed", (err) => {
      // webpack 生命周期 `failed` 中的回调
      this.failedCb(err);
    });
  }
}

module.exports = AfterWebpackPlugin;
```

开发插件小结：

- 注意在 webpack 生命周期中找到合适的钩子去完成功能。
- 注意理解 webpack 生命周期中各个钩子的细微区别。

## 拓展

webpack **输出阶段**会发生的事件及解释如下：

| 事件名      | 解释                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| should-emit | 所有需要输出的文件已经生成，询问插件有哪些文件需要输出，有哪些不需要输出                                    |
| emit        | 确定好要输出哪些文件后，执行文件输出，可以在这里获取和修改输出的内容                                        |
| after-emit  | 文件输出完毕                                                                                                |
| done        | 成功完成一次完整的编译和输出流程                                                                            |
| failed      | 如果在编译和输出的流程遇到异常，导致 webpack 退出，就会直接跳转到本步骤，插件可以在本事件中获取具体错误原因 |

## 系列文章

- [「webpack 核心特性」loader](https://juejin.cn/post/6916315177411411981)
- 「webpack 核心特性」插件(plugin)
- [「webpack 核心特性」模块热替换(HMR)](https://juejin.cn/post/6870258201384714253)

## 感谢

- 如果本文对你有帮助 😘，就点个[Star 👍](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
