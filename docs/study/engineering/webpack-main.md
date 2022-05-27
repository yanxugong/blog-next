# 「webpack 核心特性」工作原理

## 前言

在搬砖过程中，webpack 常见的问题我们都能解决。

但当在实战中遇到很特殊的需求或者社区、webpack issues 中找不到解决方案时，我们就需要自己手写 [loader](https://juejin.cn/post/6916315177411411981) 、手写 [plugin](https://juejin.cn/post/6922965817638256653) 和了解 webpack 的工作原理了。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fde1c3fbc839435db238aec796abad70~tplv-k3u1fbpfcp-watermark.image)

本文从几个面试管常问的问题，介绍 webpack 的工作原理。让我们对 webpack 有更深的认识，使用它时更加得心应手。

## webpack 的构建流程是什么？

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9daa12cc07e04be18bfca8e4d5227374~tplv-k3u1fbpfcp-watermark.image)

1. **初始化参数**：解析 webpack 配置参数，合并 shell 传入和 webpack.config.js 文件配置的参数，形成最后的配置结果；

2. **开始编译**：上一步得到的参数初始化 compiler 对象，注册所有配置的插件，插件监听 webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译；

3. **确定入口**：从配置的 entry 入口，开始解析文件构建 AST 语法树，找出依赖，递归下去；

4. **编译模块**：递归中根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；

5. **完成模块编译并输出**：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据 entry 或分包配置生成代码块 chunk ；

6. **输出完成**：输出所有的 chunk 到文件系统；

> 温馨提示：在构建生命周期中有一系列插件在做合适的时机做合适事情，比如 UglifyPlugin 会在 loader 转换递归完对结果使用 UglifyJs 压缩覆盖之前的结果。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df6e7d41fbc6407baac96d98214ba592~tplv-k3u1fbpfcp-watermark.image)

## 什么是 webpack 事件流？

webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。

webpack 通过 tapable 来组织这条复杂的生产线。 webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。

--吴浩麟《深入浅出 webpack》

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f964a40be7f47d3bb86f9632e78ec66~tplv-k3u1fbpfcp-watermark.image)

## 能详细描述一下 webpack 的运行流程吗？

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/573cf055e1f54649b7e4bd0066880b3b~tplv-k3u1fbpfcp-watermark.image)

1. 调用 `webpack` 函数接收 `config` 配置信息，并初始化 `compiler`，在此期间会 `apply` 所有 `webpack` 内置的插件;
2. 调用 `compiler.run` 进入模块编译阶段；
3. 每一次新的编译都会实例化一个 `compilation` 对象，记录本次编译的基本信息；
4. 进入 `make` 阶段，即触发 `compilation.hooks.make` 钩子，从 `entry` 为入口：a. 调用合适的 `loader` 对模块源码预处理，转换为标准的 JS 模块；b. 调用第三方插件 `acorn` 对标准 JS 模块进行分析，收集模块依赖项。同时也会继续递归每个依赖项，收集依赖项的依赖项信息，不断递归下去；最终会得到一颗依赖树；
5. 最后调用 `compilation.seal` render 模块，整合各个依赖项，最后输出一个或多个 `chunk`；

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1a0f79f9e864fa8b33bdb1fa7c3765e~tplv-k3u1fbpfcp-watermark.image)

## 你知道如何优化 webpack 的构建性能吗？

### 通用

适用于 `development` 或 `production`

#### 版本

使用最新版 webpack 和 nodejs

#### 缩小 loaders 作用范围

使用 `include` 字段仅将 loader 模块应用在实际需要用其转换的位置中：

```js
{
  test: /\.js$/,
  include: path.resolve(__dirname, "src"),
  loader: "babel-loader"
}
```

#### 解析

- 尽量减少 `resolve.modules`, `resolve.extensions`, `resolve.mainFiles`, `resolve.descriptionFiles` 中类目的数量，因为他们会增加文件系统调用的次数。
- 如果你不使用 symlinks ，可以设置 `resolve.symlinks: false` (例如 `npm link` 或者 `yarn link`).
- 如果你使用自定义解析 plugins ，并且没有指定 context 信息，可以设置 `resolve.cacheWithContext: false` 。

#### Dlls

使用 DllPlugin 将不频繁更新的代码单独编译。

#### 减少编译的整体大小

- 使用 更少/更小 的库。
- 在多页面应用程序中使用 `CommonsChunksPlugin`。
- 在多页面应用程序中以 `async` 模式使用 `CommonsChunksPlugin` 。
- 移除不使用的代码。
- 只编译你当前正在开发部分的代码。

### 开发环境

适用于 `development`

#### 在内存中编译

以下几个实用工具通过在内存中进行代码的编译和资源的提供，但并不写入磁盘来提高性能:

- `webpack-dev-server`
- `webpack-hot-middleware`
- `webpack-dev-middleware`

#### 排除生产环境下才用到的工具

某些实用工具， plugins 和 loaders 都只能在构建生产环境时才有用。例如，在开发时使用 `UglifyJsPlugin` 来压缩和修改代码是没有意义的。以下这些工具在开发中通常被排除在外:

- `UglifyJsPlugin`
- `ExtractTextPlugin`
- `[hash]/[chunkhash]`
- `AggressiveSplittingPlugin`
- `AggressiveMergingPlugin`
- `ModuleConcatenationPlugin`

### 生产环境

适用于 `production`

#### 并行构建

当进行多个编译时，以下工具可以帮助到你:

- `parallel-webpack`: 它允许编译工作在 worker 池中进行。
- `cache-loader`: 缓存可以在多个编译时之间共享。

## 系列文章

- [「webpack 核心特性」loader](https://juejin.cn/post/6916315177411411981)
- [「webpack 核心特性」插件(plugin)](https://juejin.cn/post/6922965817638256653)
- 「webpack 核心特性」工作原理
- [「webpack 核心特性」模块热替换(HMR)](https://juejin.cn/post/6870258201384714253)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcace55dbd7a4df5a428e938abfcfe8f~tplv-k3u1fbpfcp-watermark.image)

## 感谢

如果本文对你有帮助 😘，就点个[Star 👍](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a10ab9f539ae4a18a1262c6d273fa15f~tplv-k3u1fbpfcp-watermark.image)
