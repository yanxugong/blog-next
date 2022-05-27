# 「性能优化」首屏时间指标到底如何采集？

## 一、前言

性能优化一方面是我们前端**经常讨论**的**话题**，另一方面也是我们**面试**过程中考察的**重点**。

那么，如何来定义性能指标呢？

这篇文章我们主要介绍一下**首屏**时间如何**采集**。

![309F0856-0412-4b5a-ADBE-F63D63F35DE3.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/359210d4c6b14793a264038cbd8bafff~tplv-k3u1fbpfcp-watermark.image)

## 二、采集方式

### 2.1 手动采集

> **FMP**（First Meaningful Paint）是指页面的主要内容出现在屏幕上所需的时间。

一般是通过埋点的方式进行， 比如在页面开始位置打上 `FMP.Start()`，在首屏结束位置打上 `FMP.End()`，利用 `FMP.End() - FMP.Start()` 获取到首屏时间。

优点：

- 兼容性强，可以随情况变动。
- 去中心化，各个业务负责自己的埋点代码。

缺点：

- 埋点代码会和业务代码严重耦合
- 业务较多时，可能覆盖率不足

![d40d31bb2e8cc9dc4d253bfb5aab3ad2.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b42ba2a1de6449481da6e81d5883f5c~tplv-k3u1fbpfcp-watermark.image)

### 2.2 自动化采集

引入一段通用的代码来做首屏时间自动化采集，引入过程中，除了必要的配置不需要做其他事情。

优点：

- 独立性强，接入过程更自动化。

缺点：

- 个性化需求无法满足。

![52d9afa71d3663c0827dedf91520eae2.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3a2cc8dbfed4a80815cd2cb00771c99~tplv-k3u1fbpfcp-watermark.image)

## 三、Performance

`Performance` 接口可以获取到当前页面中与性能相关的信息。可以通过调用只读属性 `window.performance` 来获取。

> 感兴趣的同学可以在浏览器控制台试一试。

![89C335AB-833C-4194-BDB1-D03F635C088E.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7932c3690f7440cfac373d9c9211e8d8~tplv-k3u1fbpfcp-watermark.image)

### 3.1 Performance.timing

`PerformanceTiming` 接口是为保持向后兼容性而保留的传统接口，提供了在加载和使用当前页面期间发生的各种事件的**性能计时信息**。通过 `window.performance.timing` 获取。

![EB5EB996-31B6-4c7c-A6C7-946FC2B529D0.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c0fd1db7d474675808604c4c4673662~tplv-k3u1fbpfcp-watermark.image)

各个时间戳和页面加载时间节点的对应关系如下图：

![2756110782-5bf52d2c6aa4c_articlex.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f959adfae395414385ccd3ad9a422452~tplv-k3u1fbpfcp-watermark.image)

### 3.2 耗时计算

- DNS 查询耗时：`domainLookupEnd - domainLookupStart`
- TCP 连接耗时：`connectEnd - connectStart`
- 内容加载耗时：`responseEnd - requestStart`
- firstbyte（首包时间）：`responseStart – domainLookupStart`
- fpt（First Paint Time 首次渲染时间 / 白屏时间）：`responseEnd – fetchStart`
- tti（Time to Interact 首次可交互时间）：`domInteractive – fetchStart`
- ready（HTML 加载完成时间）：`domContentLoaded – fetchStart`
- load（页面完全加载时间）：`loadEventStart – fetchStart`

## 四、服务端模板类型指标采集

服务端模板类型主要指 `SSR`。

加载流程如下：

![A5BF578A-F86E-4059-888C-1F43EF714661.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6db40d4910a449ba9b9c7ba50be50ac0~tplv-k3u1fbpfcp-watermark.image)

当 `HTML` 文档加载解析完成的时候，就是首屏加载完成的时候。首屏时间可以参考浏览器开发者工具 `Network` 面板的 `DOMContentLoaded` 值。

以**掘金**首页为例，这里获取的清缓存加载的 `DOMContentLoaded` 值为 `1.17s`，也就是说首屏时间是 `1.17s`，如下图：

![F13C9F59-72FE-4597-A5B2-E06E4DFFC108.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d9f59f877fc4c37a006f57a1c28ef5c~tplv-k3u1fbpfcp-watermark.image)

> `domContentLoadedEventEnd` 指 HTML 文档加载完成时间。`fetchStart` 指页面初始进入的时间。

这个 `1.17s` 怎么来的呢？其实就是前面【三、Performance】->【3.2 耗时计算】章节我们说过的 ready（HTML 加载完成时间）：`domContentLoaded – fetchStart`。

我们可以现场验算一下，如下图：

![5605064E-6B2C-4ca4-BA92-BA4D8BB6811F.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/367ffb2e71e645f383c84d9d02c9b732~tplv-k3u1fbpfcp-watermark.image)

## 五、单页面类型指标采集

单页面的首屏时间和 SSR 的首屏时间有什么不同吗？

随着 Vue 和 React 等前端框架盛行，Performance 已无法准确的监控到页面的首屏时间。因为 `DOMContentLoaded` 的值只能表示**空白页**（当前页面 body 标签里面没有内容）加载花费的时间。浏览器需要先加载 JS , 然后再通过 JS 来渲染页面内容，这个时候**单页面类型**首屏才算渲染完成。

那我们使用什么数据来当做首屏时间呢？

如果在首屏渲染过程中，记录各个资源的加载时间，那么最后某个资源加载完的时间是不是就是首屏时间呢？`MutationObserver` 就可以做这件事情。

> [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 接口提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分。

### 5.1 初始化监听

```js
initObserver() {
  try {
    if (this.supportTiming()) {
      this.observer = new MutationObserver(() => {
        let time = Date.now() - performance.timing.fetchStart;
        let bodyTarget = document.body;
        if (bodyTarget) {
          let score = 0;
          score += calculateScore(bodyTarget, 1, false);
          SCORE_ITEMS.push({
            score,
            t: time
          });
        } else {
          SCORE_ITEMS.push({
            score: 0,
            t: time
          });
        }
      });
    }

    this.observer.observe(document, {
      childList: true,
      subtree: true
    });

    if (document.readyState === "complete") {
      this.mark = 'readyState';
      this.calFinallScore();
    } else {
      window.addEventListener(
        "load",
        () => {
          this.mark = 'load';
          this.calFinallScore();
        },
        true
      );
      window.addEventListener(
        'beforeunload',
        () => {
          this.mark = 'beforeunload';
          this.calFinallScore();
        },
        true
      )
      const that = this;
      function listenTouchstart() {
        if(Date.now() > 2000) {
          that.calFinallScore();
          this.mark = 'touch';
          window.removeEventListener('touchstart', listenTouchstart, true);
        }
      }
      window.addEventListener(
        'touchstart',
        listenTouchstart,
        true
      )
    }
  } catch (error) {}
}
```

我们通过 `MutationObserver` 来监听 Dom 的变化, 然后计算当前时刻 Dom 的分数。

### 5.2 计算分数

```js
function calculateScore(el, tiers, parentScore) {
  try {
    let score = 0;
    const tagName = el.tagName;
    if (
      "SCRIPT" !== tagName &&
      "STYLE" !== tagName &&
      "META" !== tagName &&
      "HEAD" !== tagName
    ) {
      const childrenLen = el.children ? el.children.length : 0;
      if (childrenLen > 0)
        for (let childs = el.children, len = childrenLen - 1; len >= 0; len--) {
          score += calculateScore(childs[len], tiers + 1, score > 0);
        }
      if (score <= 0 && !parentScore) {
        if (!(el.getBoundingClientRect && el.getBoundingClientRect().top < WH))
          return 0;
      }
      score += 1 + 0.5 * tiers;
    }
    return score;
  } catch (error) {}
}
```

计算分数主要做这几件事情：

- 从 body 元素开始递归计算。
- 排查无用的元素标签。
- 如果元素超出屏幕就认为是 0 分。
- 第一层的元素是 1 分，第二次的元素是 1 + (层数 \* 0.5)，也就是 1.5 分，依次类推，最终得打整个 Dom 数的总体分数。

### 5.3 计算出 FMP

我们通过 `MutationObserver` 得到了一个数组，数组的每一项就是每次 Dom 变化的时间和分数。

```js
let fmps = getFmp(SCORE_ITEMS);
let record = null;
for (let o = 1; o < fmps.length; o++) {
  if (fmps[o].t >= fmps[o - 1].t) {
    let l = fmps[o].score - fmps[o - 1].score;
    (!record || record.rate <= l) &&
      (record = {
        t: fmps[o].t,
        rate: l,
      });
  }
}
```

通过上面的代码，我们会得到最终的 `FMP` 的值，就是变化最大的这个 DOM 变化。此时 `FMP` 值就是 `SPA` 项目的首屏时间。

## 六、相关文章

- [如何进行 web 性能监控?](http://www.alloyteam.com/2020/01/14184/)
- [蚂蚁金服如何把前端性能监控做到极致?](https://www.infoq.cn/article/Dxa8aM44oz*Lukk5Ufhy)
- [统计页面首屏时间，很多人第一步就错了](https://zhuanlan.zhihu.com/p/350657764)
