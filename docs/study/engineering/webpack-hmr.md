# 「webpack 核心特性」模块热替换(HMR)

## 前言

> 模块热替换 (HMR - hot module replacement) 功能会在应用程序运行过程中，替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：

- 保留在完全重新加载页面期间丢失的应用程序状态。
- 只更新变更内容，以节省宝贵的开发时间。
- 在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。

这是官方网站对于 HMR 给的解释。

下面我们来慢慢深入了解 Webpack HMR 原理。

## 在应用程序中

通过以下步骤，可以做到在应用程序中置换 (swap in and out) 模块：

1. 应用程序要求 HMR runtime 检查更新。
1. HMR runtime 异步地下载更新，然后通知应用程序。
1. 应用程序要求 HMR runtime 应用更新。
1. HMR runtime 同步地应用更新。

你可以设置 HMR，以使此进程自动触发更新，或者你可以选择要求在用户交互时进行更新。

白话大致原理：

构建 bundle 时，加入一段 HMR runtime 的 js 和一段和服务沟通的 js （例如： `module.hot.accept('./index.js', function() {})`，后面会解释 ）。文件修改会触发 webpack 重新构建（webpack 的 watch 模式），服务器通过向浏览器发送更新消息（利用 websocket 长连接），浏览器通过 jsonp 拉取更新的模块文件，jsonp 回调触发模块热替换逻辑。

对理论知识不感兴趣的同学，可以跳过理论直接看到[运用 HMR 的例子](#heading-5)。

## 在 compiler 中

除了普通资源，compiler 需要发出 "update"，将之前的版本更新到新的版本。"update" 由两部分组成：

1. 更新后的 manifest (JSON)
1. 一个或多个 updated chunk (JavaScript)

manifest 包括新的 compilation hash 和所有的 updated chunk 列表。每个 chunk 都包含着全部更新模块的最新代码（或一个 flag 用于表明此模块需要被移除）。

compiler 会确保在这些构建之间的模块 ID 和 chunk ID 保持一致。通常将这些 ID 存储在内存中（例如，使用 webpack-dev-server 时），但是也可能会将它们存储在一个 JSON 文件中。

## 在模块中

HMR 是可选功能，只会影响包含 HMR 代码的模块。举个例子，通过 style-loader 为 style 追加补丁。为了运行追加补丁，style-loader 实现了 HMR 接口；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式。

类似的，当在一个模块中实现了 HMR 接口，你可以描述出当模块被更新后发生了什么。然而在多数情况下，不需要在每个模块中强行写入 HMR 代码。如果一个模块没有 HMR 处理函数，更新就会冒泡 (bubble up) 。这意味着某个单独处理函数能够更新整个模块树。如果在模块树的一个单独模块被更新，那么整组依赖模块都会被重新加载。

有关 module.hot 接口的详细信息，请查看 HMR API 页面。

## 在 runtime 中

这件事情比较有技术性……如果你对其内部不感兴趣，可以随时跳到 HMR API 页面 或 HMR 指南。

对于模块系统运行时 (module system runtime) ，会发出额外代码，来跟踪模块 parents 和 children 关系。在管理方面，runtime 支持两个方法 check 和 apply。

check 方法，发送一个 HTTP 请求来更新 manifest。如果请求失败，说明没有可用更新。如果请求成功，会将 updated chunk 列表与当前的 loaded chunk 列表进行比较。每个 loaded chunk 都会下载相应的 updated chunk。当所有更新 chunk 完成下载，runtime 就会切换到 ready 状态。

apply 方法，将所有 updated module 标记为无效。对于每个无效 module，都需要在模块中有一个 update handler，或者在此模块的父级模块中有 update handler。否则，会进行无效标记冒泡，并且父级也会被标记为无效。继续每个冒泡，直到到达应用程序入口起点，或者到达带有 update handler 的 module（以最先到达为准，冒泡停止）。如果它从入口起点开始冒泡，则此过程失败。

之后，所有无效 module 都会被（通过 dispose handler）处理和解除加载。然后更新当前 hash，并且调用所有 accept handler。runtime 切换回 idle 状态，一切照常继续。

## 运用 HMR 的例子

项目目录如下：

```js
--somethings.js;
--index.js;
--index.html;
--package.json;
--webpack.config.js;
```

项目中包含两个 js 文件，项目入口文件是 index.js 文件，somethings.js 文件是 index.js 文件的一个依赖，它会在 body 元素中添加一个包含 `hello world` 的 div 元素。

```js
// webpack.config.js

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/"),
  },
  devServer: {
    hot: true,
  },
};
```

这里当我们设置 `devServer.hot` 为 `true` 后，并且在 `package.json` 文件中添加如下的 script 脚本：`"start": "webpack-dev-server --hot --open"`。

添加 `--hot` 配置项后，`devServer` 会告诉 webpack 自动引入 `HotModuleReplacementPlugin` 插件。

然后我们改一下 `somethings.js` 内容：

```js
// somethings.js

- const hello = () => 'hello world' // 将 hello world 字符串修改为 hello eleme
+ const hello = () => 'hello eleme'
```

页面中 `hello world` 文本随即变成 `hello eleme`。

是不是很神奇，为什么会这样？

## webpack 的 watch 模式

webpack-dev-server 里引用了 webpack-dev-middleware。

webpack-dev-middleware 是通过调用 webpack 的 api 对文件系统 watch 的。watchOptions 如果没有配置的话，会取默认值。

```js
//webpack-dev-server/lib/Server.js

setupDevMiddleware() {
   // middleware for serving webpack bundle
   this.middleware = webpackDevMiddleware(
       this.compiler,
       Object.assign({}, this.options, { logLevel: this.log.options.level })
   );
}

// webpack-dev-middleware/index.js

if (!options.lazy) {
   context.watching = compiler.watch(options.watchOptions, (err) => {
   if (err) {
       context.log.error(err.stack || err);
       if (err.details) {
       context.log.error(err.details);
       }
   }
   });
} else {
   context.state = true;
}
```

> 当文件发生变化时，重新编译输出 bundle.js。devServer 下，是没有文件会输出到 output.path 目录下的，这时 webpack 是把文件输出到了内存中。webpack 中使用的操作内存的库是 memory-fs，它是 NodeJS 原生 fs 模块内存版(in-memory)的完整功能实现，会将你请求的 url 映射到对应的内存区域当中，因此读写都比较快。

```js
// webpack-dev-middleware/lib/fs.js

const isMemoryFs =
!isConfiguredFs &&
!compiler.compilers &&
compiler.outputFileSystem instanceof MemoryFileSystem;
...
compiler.outputFileSystem = fs;
fileSystem = fs;
} else if (isMemoryFs) {
   fileSystem = compiler.outputFileSystem;
} else {
   fileSystem = new MemoryFileSystem();
   compiler.outputFileSystem = fileSystem;
}
```

## devServer 推送更新消息到浏览器

在启动 devServer 的时候，`sockjs` 在服务端和浏览器端建立了一个 `webSocket` 长连接，以便将 webpack 编译和打包的各个阶段状态告知浏览器，最关键的步骤还是 `webpack-dev-server` 调用 webpack api 监听 `compile` 的 `done` 事件，当 compile 完成后，`webpack-dev-server` 通过 `_sendStatus` 方法将编译打包后的新模块 hash 值发送到浏览器端。

```js
// webpack-dev-server/lib/Server.js

compiler.plugin('done', (stats) => {
  // stats.hash 是最新打包文件的 hash 值
  this._sendStats(this.sockets, stats.toJson(clientStats));
  this._stats = stats;
});
...
Server.prototype._sendStats = function (sockets, stats, force) {
  if (!force && stats && (!stats.errors || stats.errors.length === 0) && stats.assets && stats.assets.every(asset => !asset.emitted)) {
  	return this.sockWrite(sockets, 'still-ok');
  }
  // 调用 sockWrite 方法将 hash 值通过 websocket 发送到浏览器端
  this.sockWrite(sockets, 'hash', stats.hash);
  if (stats.errors.length > 0) {
  	this.sockWrite(sockets, 'errors', stats.errors);
  } else if (stats.warnings.length > 0) {
  	this.sockWrite(sockets, 'warnings', stats.warnings);
  } else {
  	this.sockWrite(sockets, 'ok');
  }
};
```

## 浏览器接收到服务端消息做出响应

`webpack-dev-server` 修改了 webpack 配置中的 `entry` 属性，在里面添加了 `webpack-dev-client` 的代码，这样在最后的 `bundle.js` 文件中就会有接收 `websocket` 消息的代码了。

`webpack-dev-server/client` 当接收到 `type` 为 `hash` 消息后会将 `hash` 值暂存起来，当接收到 `type` 为 `ok` 的消息后对应用执行 `reload` 操作，如下图所示，`hash` 消息是在 `ok` 消息之前。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca4d6896409a46fab42b1dd36c2eb369~tplv-k3u1fbpfcp-zoom-1.image)

在 `reload` 操作中，`webpack-dev-server/client` 会根据 `hot` 配置决定是刷新浏览器还是对代码进行热更新（HMR）。

```js
// webpack-dev-server/client/index.js

hash: function msgHash(hash) {
    currentHash = hash;
},
ok: function msgOk() {
    // ...
    reloadApp();
},
// ...
function reloadApp() {
  // ...
  if (hot) {
    log.info('[WDS] App hot update...');
    const hotEmitter = require('webpack/hot/emitter');
    hotEmitter.emit('webpackHotUpdate', currentHash);
    // ...
  } else {
    log.info('[WDS] App updated. Reloading...');
    self.location.reload();
  }
}
```

首先将 `hash` 值暂存到 `currentHash` 变量，当接收到 `ok` 消息后，对 `App` 进行 `reload`。如果配置了模块热更新，就调用 `webpack/hot/emitter` 将最新 `hash` 值发送给 webpack，然后将控制权交给 webpack 客户端代码。如果没有配置模块热更新，就直接调用 `location.reload` 方法刷新页面。

## webpack 接收到最新 hash 值验证并请求模块代码

如果配置了模块热更新，就调用 `webpack/hot/emitter` 将最新 `hash` 值发送给 webpack，然后将控制权交给 webpack 客户端代码。如果没有配置模块热更新，就进行 `liveReload` 的逻辑。`webpack/hot/dev-server` 中会监听 `webpack-dev-server/client-src` 发送的 `webpackHotUpdate` 消息,然后调用 `webpack/lib/HotModuleReplacement.runtime` 中的 `check` 方法，检测是否有新的更新：

```js
// webpack/hot/dev-server.js

var hotEmitter = require("./emitter");
hotEmitter.on("webpackHotUpdate", function(currentHash) {
   lastHash = currentHash;
   if (!upToDate() && module.hot.status() === "idle") {
       log("info", "[HMR] Checking for updates on the server...");
       check();
   }
});

// webpack/lib/HotModuleReplacement.runtime

function hotCheck(apply) {
	...
	return hotDownloadManifest(hotRequestTimeout).then(function(update) {
		...
		/*globals chunkId */
		hotEnsureUpdateChunk(chunkId);
		...
		return promise;
	});
}
function hotEnsureUpdateChunk(chunkId) {
   	if (!hotAvailableFilesMap[chunkId]) {
       	hotWaitingFilesMap[chunkId] = true;
   	} else {
       	hotRequestedFilesMap[chunkId] = true;
       	hotWaitingFiles++;
       	hotDownloadUpdateChunk(chunkId);
   	}
}
```

在 `check` 过程中，主要调用了两个方法 `hotDownloadManifest` 和 `hotDownloadUpdateChunk`。`hotDownloadManifest` 是通过 Ajax 向服务器请求十分有更新的文件，如果有就返回对应的文件信息，`hotDownloadUpdateChunk` 是通过`jsonp` 的方式，请求最新的代码模块。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/817fd2a00f734e44b074945186246756~tplv-k3u1fbpfcp-zoom-1.image)

`hotDownloadManifest` 方法获取更新文件列表

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ece78fbf7f8847099e3cd379c5b68484~tplv-k3u1fbpfcp-zoom-1.image)

## 对模块进行热更新或刷新页面

我们获得了更新的内容。接下来就可以进行更新了。这部分的逻辑在 `webpack/lib/HotModuleReplacement.runtime` 中。

首先，更新过的模块，现在都属于 `outdated` 的模块，所以先找出过期的模块及其依赖:

```js
//webpack/lib/HotModuleReplacement.runtime

function getAffectedStuff(updateModuleId) {
   var outdatedModules = [updateModuleId];
   var outdatedDependencies = {};
   ...
   return {
       type: "accepted",
       moduleId: updateModuleId,
       outdatedModules: outdatedModules,
       outdatedDependencies: outdatedDependencies
   };
}
```

根据调用的 Api 信息，对结果进行标注及处理。

```js
switch (result.type) {
   case "self-declined":
       ...
       break;
   case "declined":
       ...
       break;
   case "unaccepted":
       ...
       break;
   case "accepted":
       if (options.onAccepted) options.onAccepted(result);
       doApply = true;
       break;
   case "disposed":
       if (options.onDisposed) options.onDisposed(result);
       doDispose = true;
       break;
   default:
       throw new Error("Unexception type " + result.type);
}
```

从缓存中删除过期的模块和依赖

```js
// remove module from cache
delete installedModules[moduleId];

// when disposing there is no need to call dispose handler
delete outdatedDependencies[moduleId];

// remove "parents" references from all children
for (j = 0; j < module.children.length; j++) {
   ...
}
// remove outdated dependency from module children
var dependency;
var moduleOutdatedDependencies;
for (moduleId in outdatedDependencies) {
  ...
}
```

将新的模块添加到 `modules` 中，当下次调用 `webpack_require` (webpack 重写的 require 方法)方法的时候，就是获取到了新的模块代码了。

```js
// insert new code
for (moduleId in appliedUpdate) {
  if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
    modules[moduleId] = appliedUpdate[moduleId];
  }
}
```

如果在热更新过程中出现错误，热更新将回退到刷新浏览器，这部分代码在 `dev-server`代码中。

```js
module.hot
  .check(true)
  .then(function(updatedModules) {
    if (!updatedModules) {
      return window.location.reload();
    }
    // ...
  })
  .catch(function(err) {
    var status = module.hot.status();
    if (["abort", "fail"].indexOf(status) >= 0) {
      window.location.reload();
    }
  });
```

## 业务代码写法

当用新的模块代码替换老的模块后，但是我们的业务代码并不能知道代码已经发生变化，也就是说，当 somethings.js 文件修改后，我们需要在 index.js 文件中调用 HMR 的 accept 方法，添加模块更新后的处理函数，及时将 somethings 方法的返回值插入到页面中。

```js
// index.js
if (module.hot) {
  module.hot.accept("./somethings.js", function() {
    div.innerHTML = somethings();
  });
}
```

## 总结

流程梳理：

1. 在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文件对模块重新编译打包。
1. `webpack-dev-middleware` 调用 webpack 暴露的 API 对代码变化进行监控。
1. 当我们在配置文件中配置了 `devServer.watchContentBase` 为 `true` 的时候，Server 会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行 `live reload`，并将打包后的文件输出到了内存中。
1. 在浏览器端和服务端之间建立一个 `websocket` 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态文件变化的信息。
1. `webpack/hot/dev-server` 根据 `webpack-dev-server/client` 传给它的信息以及 `dev-server` 的配置决定是刷新浏览器呢还是进行模块热更新。
1. `HotModuleReplacement.runtime` 接收到上一步传递给他的新模块的 hash 值，它通过 `JsonpMainTemplate.runtime` 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。
1. `HotModulePlugin` 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
1. 当 HMR 失败后，回退到 `live reload` 操作，也就是进行浏览器刷新来获取最新打包代码。

## 参考文章

- [Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)
- [Webpack 中的 HMR 原理](https://juejin.im/post/6844903909773803534)

## 感谢

- 图片来源网络。
- 文中如有错误，欢迎在评论区批评指正。
- 如果本文对你有帮助 😘，就点个[Star 👍](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
