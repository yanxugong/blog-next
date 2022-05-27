# 「webpack 核心特性」loader

## 一、前言

webpack 是一个现代 JavaScript 应用的静态模块打包器。那么 webpack 是怎样实现不同种类资源模块加载的呢？

没错就是通过 loader。loader 用于对模块的源代码进行转换。loader 可以使你在 import 或加载模块时预处理文件。

我们带着下面几个问题，彻底吃透 loader ～

## 二、为什么要使用 loader

webpack 是如何加载资源模块的呢？我们先试着用 webpack 直接打包项目中的 css 文件。

初始化一个 webpack 项目，目录如下：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b3c73f4e55a4678bf9b4aa793f43e8f~tplv-k3u1fbpfcp-watermark.image)

在 src 目录下新建了一个 index.css 文件，这里新建这个文件的目的就是以 css 文件为入口，尝试使用 webpack 单独打包它。

```css
/* index.css */
body {
  margin: 0 auto;
  padding: 0 20px;
  width: 1000px;
  background-color: #ccc;
}
```

调整下 webpack 配置，让入口文件路径指定为 index.css 的路径。

```js
// webpack.config.js
module.exports = {
  entry: "./src/index.css",
  output: {
    filename: "bundle.js",
  },
};
```

然后我们到终端运行 `npx webpack` 命令，你会发现命令行会提示 `Module parse failed: Unexpected token (1:5)` 模块解析错误。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3678903b74984de1bcf83d0d4ec86ce1~tplv-k3u1fbpfcp-watermark.image)

细心的同学会发现后面还紧跟着一句解决方案：`You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.`

大致的意思就是说，您可能需要适当的 loader 来处理此文件类型，目前没有配置 loader 来处理此文件。

这里，loader 的重要性就凸显出来了。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03cf8fd6545b46d6848770d680d4b728~tplv-k3u1fbpfcp-watermark.image)

## 三、怎么配置 loader

还是接着刚才打包 index.css 报错的问题。想加载 css 文件，我们可以试试常用的 css-loader。

```js
yarn add css-loader -D
```

webpack 配置也同步改下：

```js
// webpack.config.js
module.exports = {
  mode: "none", // 避免不指定打包模式时弹出警告
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader",
      },
    ],
  },
};
```

webpack 配置中 module 属性添加 rules 对象数组。这里面的 test 属性值为一个正则表达式，匹配当前 loader 对应处理文件的格式。use 属性值为 loader 名称。

再打包就不会报错了。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c2c2f0cc2cd48c2a46712a0158dbe04~tplv-k3u1fbpfcp-watermark.image)

如果想要 index.css 模块在页面中生效，只需要额外添加一个 style-loader，样式就 OK 了。

> style-loader 的作用可以理解为：建立了一个 style 标签，这个标签里面带入了 css 样式。标签最后追加到页面上。

注意配置多个 loader 时，执行顺序是从后往前执行的：

- 最后的 loader 最早调用，将会传入原始资源内容
- 第一个 loader 最后调用，期望值是传出 JavaScript 和 source map（可选）
- 中间的 loader 执行时，会传入前一个 loader 传出的结果

所以 css-loader 放在最后。具体配置如下：

```js
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

假如你还要用到 less-loader，同理可知 rules 中 use 属性值应该为：`["style-loader", "css-loader", "less-loader"]`

## 四、怎么写一个 loader

想要实现的大致流程：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0931f7984b84a3a8fd005363c91c817~tplv-k3u1fbpfcp-watermark.image)

接下来，我们尝试实现上图 css-loader 和 style-loader 的简单版本。

### 4.1 创建 loader

我们在项目根目录下创建好 css-loader.js 和 style-loader.js 文件。

主要代码如下：

```diff
├── src ····································· source dir
    │   ├── index.css ······················· css module
+   │   └── index.js ························ entry module
+   ├── css-loader.js ······················· css loader
    ├── package.json ························ package file
+   ├── style-loader.js ····················· style loader
    └── webpack.config.js ··················· webpack config file
```

```css
/* index.css */
body {
  margin: 0 auto;
  padding: 0 20px;
  width: 1000px;
  background-color: #ccc;
}
```

```js
// index.js
import "./index.css";
console.log("loader ok!");
```

每个 webpack 的 loader 都需要导出一个函数，这个函数就是我们这个 loader 对资源的处理过程，它的**输入**就是加载到的资源文件内容，**输出**就是我们加工后的结果。我们通过 source 参数接收输入，通过返回值输出。这里我们先尝试打印一下 source，然后在函数的内部直接返回一个字符串 `hello webpack css-loader！`，具体代码如下所示：

```js
// css-loader.js
module.exports = (source) => {
  console.log(source);
  return "hello webpack css-loader！";
};
```

我们回到 webpack 配置文件中调整一下加载器规则，调整之后使用的加载器就是我们刚刚编写的这个 css-loader.js 模块，具体代码如下：

```js
// webpack.config.js
module.exports = {
  mode: "none",
  // 入口改为 index.js
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 改下这里
        use: ["./css-loader"],
      },
    ],
  },
};
```

> 温馨提示：这里的 use 中不仅可以使用模块名称，还可以使用模块文件路径，这点与 Node 中的 require 函数相同。

配置完成后，我们再次打开命令行终端运行打包命令，如下图所示：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/694cd557f49147a1a34030319dd39734~tplv-k3u1fbpfcp-watermark.image)

从报错信息可以看出，loader 函数的**参数**就是文件的内容。

错误提示说： `You may need an additional loader to handle the result of these loaders.` （我们可能还需要一个额外的加载器来处理当前加载器的结果）

> 温馨提示：其实 webpack 加载资源文件的过程最后的结果必须是一段标准的 JS 代码字符串。

正常流程：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbae5f4c070b4495b25968d20ab2793c~tplv-k3u1fbpfcp-watermark.image)

我们现在应该想到是 css-loader 出了问题。

### 4.2 css-loader

css-loader 主要作用就是将多个 css 模块整合到一起。

```js
module.exports = (source) => {
  // 匹配 url(xxx) 类似结构
  const reg = /url((.+?))/g;
  // 位置下标
  let pos = 0;
  // 当前匹配的代码片段
  let current;
  const arr = ["let list = []"];
  while ((current = reg.exec(source))) {
    const [matchUrl, g] = current;
    const lastPos = reg.lastIndex - matchUrl.length;
    arr.push(`list.push(${JSON.stringify(source.slice(pos, lastPos))})`);
    pos = reg.lastIndex;
    arr.push(`list.push('url(' + require('${g}') + ')')`);
  }
  arr.push(`list.push(${JSON.stringify(source.slice(pos))})`);
  arr.push(`module.exports = list.join('')`);
  // 每行代码之间增加一个回车
  return arr.join("\n");
};
```

大致思路：

- 整个 css 代码片段以 url(xxx) 类似结构为节点分成多个部分
- url 里的路径改为 require 引入
- 用数组的形式将 css 代码拼凑起来最后形成一个整体

loader 打包结果如下图：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8b7b7d85bd3426bbc7a2b097b774dfb~tplv-k3u1fbpfcp-watermark.image)

这是输出的 bundle.js 的片段，就是把我们刚刚返回的字符串直接拼接到了该模块中。这里也解释了刚才打包语法报错的问题（loader 处理完必须返回 JS 代码）。

### 4.3 style-loader

style-loader 会把整合的 css 部分挂载到 head 标签中。

代码如下：

```js
module.exports = function(source) {
  return `
    const styleElement = document.createElement('style');
    styleElement.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(styleElement);
  `;
};
```

### 4.4 写 loader 之后的总结

loader 就是一个函数，一旦有模块被 import 或者 require 时它就会去拦截这些模块的源码，对其进行改造，然后输出到另一个模块中，循环往复，最终输出到入口文件中，形成最终的代码。

也正是有了 loader 机制，我们才能通过 webpack 去加载任何我们想要加载的资源。

## 五、感谢

- 如果本文对你有帮助 😘，就点个[Star 👍](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
