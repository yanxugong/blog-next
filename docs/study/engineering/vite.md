# 「工程化」如何看待构建工具 Vite？

## 一、Vite 是什么？

Vite（法语意为“迅速”，发音/vit/）是一种全新的前端构建工具。你可以把它理解为一个开箱即用的**开发服务器** + **打包工具**的组合，但是更轻更快。 Vite 利用浏览器原生的 ES 模块支持和用编译到原生的语言开发的工具（如 esbuild）来提供一个快速且现代的开发体验。

## 二、Vite 怎么玩？

> **兼容性注意**
>
> Vite 需要 Node.js 版本 >= 12.0.0。

使用 NPM：

```js
npm init @vitejs/app
```

使用 Yarn：

```js
yarn init @vitejs/app
```

这里我选择了默认项目名称、 `vue-ts` 模板（这里 Vue 版本为 3.0 ），然后按照提示，下一步下一步即可，如下图：

![vite1.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74830bca33b74d3c84809ef1d60a7b93~tplv-k3u1fbpfcp-watermark.image)

项目目录如下图：

![vite2.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fbe78caa8f5471bb5c8e25c61dcfd6d~tplv-k3u1fbpfcp-watermark.image)

输入指令，秒启动：

```js
cd vite-project
npm install
npm run dev
```

大家也跑起来玩一下吧。😂

## 三、Vite 为什么快？

### 3.1 极速的服务启动

Vite 使用 [esbuild](https://esbuild.github.io/) 预构建**依赖**，以原生 [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 方式服务**源码**。

Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能。例如，我们从同一个模块引入多个单独的文件 `import { debounce } from 'lodash-es'` 时，Vite 会通过预构建 `lodash-es`（内置模块较多） 成一个模块，**避免**大量请求在浏览器造成**网络阻塞**。

![2.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/832c27e603704861ad243caaf795bd15~tplv-k3u1fbpfcp-watermark.image)

Esbuild 使用 Go 编写，比 JavaScript 编写的打包器预构建依赖快 10-100 倍。

Vite 只在浏览器请求源码时进行转换并**按需**提供源码。**动态导入**的代码，只在当前屏幕上实际使用时才会被处理。

### 3.2 轻量快速的热重载

> **注意**
>
> 手动 HMR API 主要用于框架和工具作者。作为最终用户，HMR 可能已经在特定于框架的启动器模板中为你处理过了。

Vite 提供了一套原生 ESM 的 [HMR API](https://cn.vitejs.dev/guide/api-hmr.html)。 具有 HMR 功能的框架可以利用该 API 提供即时、准确的更新，而无需重新加载页面或删除应用程序状态。

## 四、什么是 esbuild？

### 4.1 官网描述

一个极速 JavaScript 打包工具。

### 4.2 主要特点

- 极快的速度，无需缓存
- ES6 和 CommonJS 模块
- ES6 模块的 Tree shaking
- 适用于 JavaScript 和 Go 的 API
- TypeScript 和 JSX 语法
- Source maps
- 压缩
- Plugins

### 4.3 存在的问题

- 调试麻烦

esbuild 的核心代码是用 golang 编写，用户使用的直接是编译出来的 binary 代码和一堆 js 代码，binary 代码几乎没法断点调试，每次调试 esbuild 的代码，需要拉下代码重新编译调试，调试要求较高，难度较大。

- 只支持 es6

目前国内大部分都仍然需要考虑 es5 场景，因此并不能将 esbuild 的产物作为最终产物，通常需要做 es6 到 es5 的转换。

> WebAssembly 也叫 WASM，它是为基于栈的虚拟机设计的二进制指令格式，WASM 作为可移植目标，用于编译高级语言（如 C/C++/Rust），从而可以在 Web 上部署高性能客户端和服务器应用，同时它也可以在许多其它环境中使用。

> WebAssembly 描述了一种内存安全的沙箱执行环境，该环境甚至可以在现有 JavaScript 虚拟机内部实现。当嵌入到 Web 中时，WebAssembly 将强制执行浏览器的同源和权限安全策略。

- golang wasm 的性能相比 native 有较大的损耗，且 wasm 包体积较大，

目前 golang 编译出的 wasm 性能并不是很好（相比于 native 有 3-5 倍的性能衰减），并且 go 编译出来 wasm 包体积较大( 8M+ )，不太适合一些对包体积敏感的场景（比如生产环境）。

- 插件机制缺失

## 五、未来构建工具展望

相信玩过 Vite 的同学们都被它的**首次启动秒开**，**极速热启动**等等优势深深的吸引到了。个人感觉这个方向还是非常潜力的。

前端玩具层出不穷，敢问路在何方？

种一棵树最好的时间是十年前，其次是**现在**。一起玩一玩 Vite 吧。

## 六、感谢

- 如果这篇文章对你有帮助，就点个赞支持下吧！感谢阅读。
