import{_ as e,c as t,o as a,d as i}from"./app.c22de5e0.js";const b='{"title":"\u300C\u5DE5\u7A0B\u5316\u300D\u5982\u4F55\u770B\u5F85\u6784\u5EFA\u5DE5\u5177 Vite\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001Vite \u662F\u4EC0\u4E48\uFF1F","slug":"\u4E00\u3001vite-\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u4E8C\u3001Vite \u600E\u4E48\u73A9\uFF1F","slug":"\u4E8C\u3001vite-\u600E\u4E48\u73A9\uFF1F"},{"level":2,"title":"\u4E09\u3001Vite \u4E3A\u4EC0\u4E48\u5FEB\uFF1F","slug":"\u4E09\u3001vite-\u4E3A\u4EC0\u4E48\u5FEB\uFF1F"},{"level":3,"title":"3.1 \u6781\u901F\u7684\u670D\u52A1\u542F\u52A8","slug":"_3-1-\u6781\u901F\u7684\u670D\u52A1\u542F\u52A8"},{"level":3,"title":"3.2 \u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D","slug":"_3-2-\u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D"},{"level":2,"title":"\u56DB\u3001\u4EC0\u4E48\u662F esbuild\uFF1F","slug":"\u56DB\u3001\u4EC0\u4E48\u662F-esbuild\uFF1F"},{"level":3,"title":"4.1 \u5B98\u7F51\u63CF\u8FF0","slug":"_4-1-\u5B98\u7F51\u63CF\u8FF0"},{"level":3,"title":"4.2 \u4E3B\u8981\u7279\u70B9","slug":"_4-2-\u4E3B\u8981\u7279\u70B9"},{"level":3,"title":"4.3 \u5B58\u5728\u7684\u95EE\u9898","slug":"_4-3-\u5B58\u5728\u7684\u95EE\u9898"},{"level":2,"title":"\u4E94\u3001\u672A\u6765\u6784\u5EFA\u5DE5\u5177\u5C55\u671B","slug":"\u4E94\u3001\u672A\u6765\u6784\u5EFA\u5DE5\u5177\u5C55\u671B"},{"level":2,"title":"\u516D\u3001\u611F\u8C22","slug":"\u516D\u3001\u611F\u8C22"}],"relativePath":"study/engineering/vite.md"}',r={},l=i(`<h1 id="\u300C\u5DE5\u7A0B\u5316\u300D\u5982\u4F55\u770B\u5F85\u6784\u5EFA\u5DE5\u5177-vite\uFF1F" tabindex="-1">\u300C\u5DE5\u7A0B\u5316\u300D\u5982\u4F55\u770B\u5F85\u6784\u5EFA\u5DE5\u5177 Vite\uFF1F <a class="header-anchor" href="#\u300C\u5DE5\u7A0B\u5316\u300D\u5982\u4F55\u770B\u5F85\u6784\u5EFA\u5DE5\u5177-vite\uFF1F" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001vite-\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">\u4E00\u3001Vite \u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#\u4E00\u3001vite-\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>Vite\uFF08\u6CD5\u8BED\u610F\u4E3A\u201C\u8FC5\u901F\u201D\uFF0C\u53D1\u97F3/vit/\uFF09\u662F\u4E00\u79CD\u5168\u65B0\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\u3002\u4F60\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u4E3A\u4E00\u4E2A\u5F00\u7BB1\u5373\u7528\u7684<strong>\u5F00\u53D1\u670D\u52A1\u5668</strong> + <strong>\u6253\u5305\u5DE5\u5177</strong>\u7684\u7EC4\u5408\uFF0C\u4F46\u662F\u66F4\u8F7B\u66F4\u5FEB\u3002 Vite \u5229\u7528\u6D4F\u89C8\u5668\u539F\u751F\u7684 ES \u6A21\u5757\u652F\u6301\u548C\u7528\u7F16\u8BD1\u5230\u539F\u751F\u7684\u8BED\u8A00\u5F00\u53D1\u7684\u5DE5\u5177\uFF08\u5982 esbuild\uFF09\u6765\u63D0\u4F9B\u4E00\u4E2A\u5FEB\u901F\u4E14\u73B0\u4EE3\u7684\u5F00\u53D1\u4F53\u9A8C\u3002</p><h2 id="\u4E8C\u3001vite-\u600E\u4E48\u73A9\uFF1F" tabindex="-1">\u4E8C\u3001Vite \u600E\u4E48\u73A9\uFF1F <a class="header-anchor" href="#\u4E8C\u3001vite-\u600E\u4E48\u73A9\uFF1F" aria-hidden="true">#</a></h2><blockquote><p><strong>\u517C\u5BB9\u6027\u6CE8\u610F</strong></p><p>Vite \u9700\u8981 Node.js \u7248\u672C &gt;= 12.0.0\u3002</p></blockquote><p>\u4F7F\u7528 NPM\uFF1A</p><div class="language-js"><pre><code>npm init @vitejs<span class="token operator">/</span>app
</code></pre></div><p>\u4F7F\u7528 Yarn\uFF1A</p><div class="language-js"><pre><code>yarn init @vitejs<span class="token operator">/</span>app
</code></pre></div><p>\u8FD9\u91CC\u6211\u9009\u62E9\u4E86\u9ED8\u8BA4\u9879\u76EE\u540D\u79F0\u3001 <code>vue-ts</code> \u6A21\u677F\uFF08\u8FD9\u91CC Vue \u7248\u672C\u4E3A 3.0 \uFF09\uFF0C\u7136\u540E\u6309\u7167\u63D0\u793A\uFF0C\u4E0B\u4E00\u6B65\u4E0B\u4E00\u6B65\u5373\u53EF\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74830bca33b74d3c84809ef1d60a7b93~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u9879\u76EE\u76EE\u5F55\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fbe78caa8f5471bb5c8e25c61dcfd6d~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u8F93\u5165\u6307\u4EE4\uFF0C\u79D2\u542F\u52A8\uFF1A</p><div class="language-js"><pre><code>cd vite<span class="token operator">-</span>project
npm install
npm run dev
</code></pre></div><p>\u5927\u5BB6\u4E5F\u8DD1\u8D77\u6765\u73A9\u4E00\u4E0B\u5427\u3002\u{1F602}</p><h2 id="\u4E09\u3001vite-\u4E3A\u4EC0\u4E48\u5FEB\uFF1F" tabindex="-1">\u4E09\u3001Vite \u4E3A\u4EC0\u4E48\u5FEB\uFF1F <a class="header-anchor" href="#\u4E09\u3001vite-\u4E3A\u4EC0\u4E48\u5FEB\uFF1F" aria-hidden="true">#</a></h2><h3 id="_3-1-\u6781\u901F\u7684\u670D\u52A1\u542F\u52A8" tabindex="-1">3.1 \u6781\u901F\u7684\u670D\u52A1\u542F\u52A8 <a class="header-anchor" href="#_3-1-\u6781\u901F\u7684\u670D\u52A1\u542F\u52A8" aria-hidden="true">#</a></h3><p>Vite \u4F7F\u7528 <a href="https://esbuild.github.io/" target="_blank" rel="noopener noreferrer">esbuild</a> \u9884\u6784\u5EFA<strong>\u4F9D\u8D56</strong>\uFF0C\u4EE5\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">ESM</a> \u65B9\u5F0F\u670D\u52A1<strong>\u6E90\u7801</strong>\u3002</p><p>Vite \u5C06\u6709\u8BB8\u591A\u5185\u90E8\u6A21\u5757\u7684 ESM \u4F9D\u8D56\u5173\u7CFB\u8F6C\u6362\u4E3A\u5355\u4E2A\u6A21\u5757\uFF0C\u4EE5\u63D0\u9AD8\u540E\u7EED\u9875\u9762\u52A0\u8F7D\u6027\u80FD\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u4ECE\u540C\u4E00\u4E2A\u6A21\u5757\u5F15\u5165\u591A\u4E2A\u5355\u72EC\u7684\u6587\u4EF6 <code>import { debounce } from &#39;lodash-es&#39;</code> \u65F6\uFF0CVite \u4F1A\u901A\u8FC7\u9884\u6784\u5EFA <code>lodash-es</code>\uFF08\u5185\u7F6E\u6A21\u5757\u8F83\u591A\uFF09 \u6210\u4E00\u4E2A\u6A21\u5757\uFF0C<strong>\u907F\u514D</strong>\u5927\u91CF\u8BF7\u6C42\u5728\u6D4F\u89C8\u5668\u9020\u6210<strong>\u7F51\u7EDC\u963B\u585E</strong>\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/832c27e603704861ad243caaf795bd15~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>Esbuild \u4F7F\u7528 Go \u7F16\u5199\uFF0C\u6BD4 JavaScript \u7F16\u5199\u7684\u6253\u5305\u5668\u9884\u6784\u5EFA\u4F9D\u8D56\u5FEB 10-100 \u500D\u3002</p><p>Vite \u53EA\u5728\u6D4F\u89C8\u5668\u8BF7\u6C42\u6E90\u7801\u65F6\u8FDB\u884C\u8F6C\u6362\u5E76<strong>\u6309\u9700</strong>\u63D0\u4F9B\u6E90\u7801\u3002<strong>\u52A8\u6001\u5BFC\u5165</strong>\u7684\u4EE3\u7801\uFF0C\u53EA\u5728\u5F53\u524D\u5C4F\u5E55\u4E0A\u5B9E\u9645\u4F7F\u7528\u65F6\u624D\u4F1A\u88AB\u5904\u7406\u3002</p><h3 id="_3-2-\u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D" tabindex="-1">3.2 \u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D <a class="header-anchor" href="#_3-2-\u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D" aria-hidden="true">#</a></h3><blockquote><p><strong>\u6CE8\u610F</strong></p><p>\u624B\u52A8 HMR API \u4E3B\u8981\u7528\u4E8E\u6846\u67B6\u548C\u5DE5\u5177\u4F5C\u8005\u3002\u4F5C\u4E3A\u6700\u7EC8\u7528\u6237\uFF0CHMR \u53EF\u80FD\u5DF2\u7ECF\u5728\u7279\u5B9A\u4E8E\u6846\u67B6\u7684\u542F\u52A8\u5668\u6A21\u677F\u4E2D\u4E3A\u4F60\u5904\u7406\u8FC7\u4E86\u3002</p></blockquote><p>Vite \u63D0\u4F9B\u4E86\u4E00\u5957\u539F\u751F ESM \u7684 <a href="https://cn.vitejs.dev/guide/api-hmr.html" target="_blank" rel="noopener noreferrer">HMR API</a>\u3002 \u5177\u6709 HMR \u529F\u80FD\u7684\u6846\u67B6\u53EF\u4EE5\u5229\u7528\u8BE5 API \u63D0\u4F9B\u5373\u65F6\u3001\u51C6\u786E\u7684\u66F4\u65B0\uFF0C\u800C\u65E0\u9700\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u6216\u5220\u9664\u5E94\u7528\u7A0B\u5E8F\u72B6\u6001\u3002</p><h2 id="\u56DB\u3001\u4EC0\u4E48\u662F-esbuild\uFF1F" tabindex="-1">\u56DB\u3001\u4EC0\u4E48\u662F esbuild\uFF1F <a class="header-anchor" href="#\u56DB\u3001\u4EC0\u4E48\u662F-esbuild\uFF1F" aria-hidden="true">#</a></h2><h3 id="_4-1-\u5B98\u7F51\u63CF\u8FF0" tabindex="-1">4.1 \u5B98\u7F51\u63CF\u8FF0 <a class="header-anchor" href="#_4-1-\u5B98\u7F51\u63CF\u8FF0" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u6781\u901F JavaScript \u6253\u5305\u5DE5\u5177\u3002</p><h3 id="_4-2-\u4E3B\u8981\u7279\u70B9" tabindex="-1">4.2 \u4E3B\u8981\u7279\u70B9 <a class="header-anchor" href="#_4-2-\u4E3B\u8981\u7279\u70B9" aria-hidden="true">#</a></h3><ul><li>\u6781\u5FEB\u7684\u901F\u5EA6\uFF0C\u65E0\u9700\u7F13\u5B58</li><li>ES6 \u548C CommonJS \u6A21\u5757</li><li>ES6 \u6A21\u5757\u7684 Tree shaking</li><li>\u9002\u7528\u4E8E JavaScript \u548C Go \u7684 API</li><li>TypeScript \u548C JSX \u8BED\u6CD5</li><li>Source maps</li><li>\u538B\u7F29</li><li>Plugins</li></ul><h3 id="_4-3-\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1">4.3 \u5B58\u5728\u7684\u95EE\u9898 <a class="header-anchor" href="#_4-3-\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a></h3><ul><li>\u8C03\u8BD5\u9EBB\u70E6</li></ul><p>esbuild \u7684\u6838\u5FC3\u4EE3\u7801\u662F\u7528 golang \u7F16\u5199\uFF0C\u7528\u6237\u4F7F\u7528\u7684\u76F4\u63A5\u662F\u7F16\u8BD1\u51FA\u6765\u7684 binary \u4EE3\u7801\u548C\u4E00\u5806 js \u4EE3\u7801\uFF0Cbinary \u4EE3\u7801\u51E0\u4E4E\u6CA1\u6CD5\u65AD\u70B9\u8C03\u8BD5\uFF0C\u6BCF\u6B21\u8C03\u8BD5 esbuild \u7684\u4EE3\u7801\uFF0C\u9700\u8981\u62C9\u4E0B\u4EE3\u7801\u91CD\u65B0\u7F16\u8BD1\u8C03\u8BD5\uFF0C\u8C03\u8BD5\u8981\u6C42\u8F83\u9AD8\uFF0C\u96BE\u5EA6\u8F83\u5927\u3002</p><ul><li>\u53EA\u652F\u6301 es6</li></ul><p>\u76EE\u524D\u56FD\u5185\u5927\u90E8\u5206\u90FD\u4ECD\u7136\u9700\u8981\u8003\u8651 es5 \u573A\u666F\uFF0C\u56E0\u6B64\u5E76\u4E0D\u80FD\u5C06 esbuild \u7684\u4EA7\u7269\u4F5C\u4E3A\u6700\u7EC8\u4EA7\u7269\uFF0C\u901A\u5E38\u9700\u8981\u505A es6 \u5230 es5 \u7684\u8F6C\u6362\u3002</p><blockquote><p>WebAssembly \u4E5F\u53EB WASM\uFF0C\u5B83\u662F\u4E3A\u57FA\u4E8E\u6808\u7684\u865A\u62DF\u673A\u8BBE\u8BA1\u7684\u4E8C\u8FDB\u5236\u6307\u4EE4\u683C\u5F0F\uFF0CWASM \u4F5C\u4E3A\u53EF\u79FB\u690D\u76EE\u6807\uFF0C\u7528\u4E8E\u7F16\u8BD1\u9AD8\u7EA7\u8BED\u8A00\uFF08\u5982 C/C++/Rust\uFF09\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5728 Web \u4E0A\u90E8\u7F72\u9AD8\u6027\u80FD\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5E94\u7528\uFF0C\u540C\u65F6\u5B83\u4E5F\u53EF\u4EE5\u5728\u8BB8\u591A\u5176\u5B83\u73AF\u5883\u4E2D\u4F7F\u7528\u3002</p></blockquote><blockquote><p>WebAssembly \u63CF\u8FF0\u4E86\u4E00\u79CD\u5185\u5B58\u5B89\u5168\u7684\u6C99\u7BB1\u6267\u884C\u73AF\u5883\uFF0C\u8BE5\u73AF\u5883\u751A\u81F3\u53EF\u4EE5\u5728\u73B0\u6709 JavaScript \u865A\u62DF\u673A\u5185\u90E8\u5B9E\u73B0\u3002\u5F53\u5D4C\u5165\u5230 Web \u4E2D\u65F6\uFF0CWebAssembly \u5C06\u5F3A\u5236\u6267\u884C\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u548C\u6743\u9650\u5B89\u5168\u7B56\u7565\u3002</p></blockquote><ul><li>golang wasm \u7684\u6027\u80FD\u76F8\u6BD4 native \u6709\u8F83\u5927\u7684\u635F\u8017\uFF0C\u4E14 wasm \u5305\u4F53\u79EF\u8F83\u5927\uFF0C</li></ul><p>\u76EE\u524D golang \u7F16\u8BD1\u51FA\u7684 wasm \u6027\u80FD\u5E76\u4E0D\u662F\u5F88\u597D\uFF08\u76F8\u6BD4\u4E8E native \u6709 3-5 \u500D\u7684\u6027\u80FD\u8870\u51CF\uFF09\uFF0C\u5E76\u4E14 go \u7F16\u8BD1\u51FA\u6765 wasm \u5305\u4F53\u79EF\u8F83\u5927( 8M+ )\uFF0C\u4E0D\u592A\u9002\u5408\u4E00\u4E9B\u5BF9\u5305\u4F53\u79EF\u654F\u611F\u7684\u573A\u666F\uFF08\u6BD4\u5982\u751F\u4EA7\u73AF\u5883\uFF09\u3002</p><ul><li>\u63D2\u4EF6\u673A\u5236\u7F3A\u5931</li></ul><h2 id="\u4E94\u3001\u672A\u6765\u6784\u5EFA\u5DE5\u5177\u5C55\u671B" tabindex="-1">\u4E94\u3001\u672A\u6765\u6784\u5EFA\u5DE5\u5177\u5C55\u671B <a class="header-anchor" href="#\u4E94\u3001\u672A\u6765\u6784\u5EFA\u5DE5\u5177\u5C55\u671B" aria-hidden="true">#</a></h2><p>\u76F8\u4FE1\u73A9\u8FC7 Vite \u7684\u540C\u5B66\u4EEC\u90FD\u88AB\u5B83\u7684<strong>\u9996\u6B21\u542F\u52A8\u79D2\u5F00</strong>\uFF0C<strong>\u6781\u901F\u70ED\u542F\u52A8</strong>\u7B49\u7B49\u4F18\u52BF\u6DF1\u6DF1\u7684\u5438\u5F15\u5230\u4E86\u3002\u4E2A\u4EBA\u611F\u89C9\u8FD9\u4E2A\u65B9\u5411\u8FD8\u662F\u975E\u5E38\u6F5C\u529B\u7684\u3002</p><p>\u524D\u7AEF\u73A9\u5177\u5C42\u51FA\u4E0D\u7A77\uFF0C\u6562\u95EE\u8DEF\u5728\u4F55\u65B9\uFF1F</p><p>\u79CD\u4E00\u68F5\u6811\u6700\u597D\u7684\u65F6\u95F4\u662F\u5341\u5E74\u524D\uFF0C\u5176\u6B21\u662F<strong>\u73B0\u5728</strong>\u3002\u4E00\u8D77\u73A9\u4E00\u73A9 Vite \u5427\u3002</p><h2 id="\u516D\u3001\u611F\u8C22" tabindex="-1">\u516D\u3001\u611F\u8C22 <a class="header-anchor" href="#\u516D\u3001\u611F\u8C22" aria-hidden="true">#</a></h2><ul><li>\u5982\u679C\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u5C31\u70B9\u4E2A\u8D5E\u652F\u6301\u4E0B\u5427\uFF01\u611F\u8C22\u9605\u8BFB\u3002</li></ul>`,47),s=[l];function n(o,p,d,c,h,u){return a(),t("div",null,s)}var v=e(r,[["render",n]]);export{b as __pageData,v as default};