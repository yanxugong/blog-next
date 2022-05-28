import{_ as n,c as s,o as a,d as t}from"./app.acdedced.js";const g='{"title":"Go \u5FEB\u901F\u5165\u95E8\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"\u521D\u8BC6 Go \u8BED\u8A00","slug":"\u521D\u8BC6-go-\u8BED\u8A00"},{"level":3,"title":"\u7279\u8272","slug":"\u7279\u8272"},{"level":3,"title":"\u7528\u9014","slug":"\u7528\u9014"},{"level":2,"title":"\u73AF\u5883\u5B89\u88C5","slug":"\u73AF\u5883\u5B89\u88C5"},{"level":3,"title":"Mac \u7CFB\u7EDF\u4E0B\u5B89\u88C5","slug":"mac-\u7CFB\u7EDF\u4E0B\u5B89\u88C5"},{"level":3,"title":"Windows \u7CFB\u7EDF\u4E0B\u5B89\u88C5","slug":"windows-\u7CFB\u7EDF\u4E0B\u5B89\u88C5"},{"level":2,"title":"\u8BED\u8A00\u7ED3\u6784","slug":"\u8BED\u8A00\u7ED3\u6784"},{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF"},{"level":3,"title":"\u53D8\u91CF\u58F0\u660E","slug":"\u53D8\u91CF\u58F0\u660E"},{"level":2,"title":"\u6307\u9488","slug":"\u6307\u9488"},{"level":3,"title":"\u4EC0\u4E48\u662F\u6307\u9488","slug":"\u4EC0\u4E48\u662F\u6307\u9488"},{"level":3,"title":"\u5982\u4F55\u4F7F\u7528\u6307\u9488","slug":"\u5982\u4F55\u4F7F\u7528\u6307\u9488"},{"level":3,"title":"\u7A7A\u6307\u9488","slug":"\u7A7A\u6307\u9488"},{"level":2,"title":"\u7ED3\u6784\u4F53","slug":"\u7ED3\u6784\u4F53"},{"level":3,"title":"\u5B9A\u4E49\u7ED3\u6784\u4F53","slug":"\u5B9A\u4E49\u7ED3\u6784\u4F53"},{"level":3,"title":"\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458","slug":"\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458"},{"level":3,"title":"\u7ED3\u6784\u4F53\u6307\u9488","slug":"\u7ED3\u6784\u4F53\u6307\u9488"},{"level":2,"title":"\u5207\u7247( Slice )","slug":"\u5207\u7247-slice"},{"level":3,"title":"\u5B9A\u4E49\u5207\u7247","slug":"\u5B9A\u4E49\u5207\u7247"},{"level":3,"title":"\u5207\u7247\u521D\u59CB\u5316","slug":"\u5207\u7247\u521D\u59CB\u5316"},{"level":3,"title":"len() \u548C cap() \u51FD\u6570","slug":"len-\u548C-cap-\u51FD\u6570"},{"level":2,"title":"\u8303\u56F4( Range )","slug":"\u8303\u56F4-range"},{"level":2,"title":"Map (\u96C6\u5408)","slug":"map-\u96C6\u5408"},{"level":3,"title":"\u5B9A\u4E49 Map","slug":"\u5B9A\u4E49-map"},{"level":3,"title":"delete() \u51FD\u6570","slug":"delete-\u51FD\u6570"},{"level":2,"title":"\u7C7B\u578B\u8F6C\u6362","slug":"\u7C7B\u578B\u8F6C\u6362"},{"level":2,"title":"\u63A5\u53E3","slug":"\u63A5\u53E3"},{"level":2,"title":"\u9519\u8BEF\u5904\u7406","slug":"\u9519\u8BEF\u5904\u7406"},{"level":2,"title":"\u5E76\u53D1","slug":"\u5E76\u53D1"},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0"},{"level":2,"title":"\u611F\u8C22","slug":"\u611F\u8C22"}],"relativePath":"study/server/go-getting-started.md"}',p={},o=t(`<h1 id="go-\u5FEB\u901F\u5165\u95E8\u6307\u5357" tabindex="-1">Go \u5FEB\u901F\u5165\u95E8\u6307\u5357 <a class="header-anchor" href="#go-\u5FEB\u901F\u5165\u95E8\u6307\u5357" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>Go\uFF08\u53C8\u79F0 Golang\uFF09\u662F <a href="https://baike.baidu.com/item/Google/86964" target="_blank" rel="noopener noreferrer">Google</a> \u7684 Robert Griesemer\uFF0CRob Pike \u53CA Ken Thompson \u5F00\u53D1\u7684\u4E00\u79CD\u9759\u6001\u5F3A\u7C7B\u578B\u3001\u7F16\u8BD1\u578B\u8BED\u8A00\u3002Go \u8BED\u8A00\u8BED\u6CD5\u4E0E <a href="https://baike.baidu.com/item/c%E8%AF%AD%E8%A8%80/105958?fromtitle=c&amp;fromid=7252092" target="_blank" rel="noopener noreferrer">C</a> \u76F8\u8FD1\uFF0C\u4F46\u529F\u80FD\u4E0A\u6709\uFF1A\u5185\u5B58\u5B89\u5168\uFF0C\u5783\u573E\u56DE\u6536\uFF0C\u7ED3\u6784\u5F62\u6001\u53CA <a href="https://baike.baidu.com/item/CSP/9076083?fr=aladdin" target="_blank" rel="noopener noreferrer">CSP-style</a> \u5E76\u53D1\u8BA1\u7B97\u3002</p><blockquote><p>\u6E29\u99A8\u63D0\u793A\uFF1A\u7531\u4E8E\u672C\u6587\u504F\u57FA\u7840\uFF0C\u6240\u4EE5\u8FD9\u91CC<strong>\u9002\u7528\u5BF9\u8C61</strong>\u5305\u62EC\uFF1A\u5BF9 Go \u611F\u5174\u8DA3\u7684<strong>\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08</strong>\u548C\u6CA1\u6709\u63A5\u89E6\u8FC7\u8FD9\u95E8\u8BED\u8A00\u7684<strong>JAVA \u5F00\u53D1\u5DE5\u7A0B\u5E08</strong>\u3002\u8FD9\u662F\u4E00\u95E8\u975E\u5E38\u5E74\u8F7B\u7684\u8BED\u8A00\uFF0C\u5E0C\u671B\u5927\u5BB6\u80FD\u901A\u8FC7\u672C\u6587\u4E86\u89E3 Go \u7684\u57FA\u672C\u73A9\u6CD5\u3002\u5982\u679C\u8FD8\u80FD<strong>\u73A9\u7684\u5F00\u5FC3</strong>\u90A3\u5C31\u518D\u597D\u4E0D\u8FC7\u4E86\u3002</p></blockquote><h2 id="\u521D\u8BC6-go-\u8BED\u8A00" tabindex="-1">\u521D\u8BC6 Go \u8BED\u8A00 <a class="header-anchor" href="#\u521D\u8BC6-go-\u8BED\u8A00" aria-hidden="true">#</a></h2><h3 id="\u7279\u8272" tabindex="-1">\u7279\u8272 <a class="header-anchor" href="#\u7279\u8272" aria-hidden="true">#</a></h3><ul><li>\u7B80\u6D01\u3001\u5FEB\u901F\u3001\u5B89\u5168</li><li>\u5E76\u884C\u3001\u6709\u8DA3\u3001\u5F00\u6E90</li><li>\u5185\u5B58\u7BA1\u7406\u3001\u6570\u7EC4\u5B89\u5168\u3001\u7F16\u8BD1\u8FC5\u901F</li></ul><h3 id="\u7528\u9014" tabindex="-1">\u7528\u9014 <a class="header-anchor" href="#\u7528\u9014" aria-hidden="true">#</a></h3><ul><li>\u670D\u52A1\u5668\u7F16\u7A0B</li><li>\u5206\u5E03\u5F0F\u7CFB\u7EDF\u3001\u6570\u636E\u5E93\u4EE3\u7406\u5668\u3001\u4E2D\u95F4\u4EF6</li><li>\u7F51\u7EDC\u7F16\u7A0B\uFF0CWeb \u5E94\u7528\u3001API \u5E94\u7528\u3001\u4E0B\u8F7D\u5E94\u7528</li><li>\u6570\u636E\u5E93\u64CD\u4F5C</li><li>\u5F00\u53D1\u4E91\u5E73\u53F0</li></ul><h2 id="\u73AF\u5883\u5B89\u88C5" tabindex="-1">\u73AF\u5883\u5B89\u88C5 <a class="header-anchor" href="#\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u652F\u6301\u7684\u7CFB\u7EDF\uFF1A</p><ul><li>Linux</li><li>FreeBSD</li><li>Mac OS</li><li>Windows</li></ul><h3 id="mac-\u7CFB\u7EDF\u4E0B\u5B89\u88C5" tabindex="-1">Mac \u7CFB\u7EDF\u4E0B\u5B89\u88C5 <a class="header-anchor" href="#mac-\u7CFB\u7EDF\u4E0B\u5B89\u88C5" aria-hidden="true">#</a></h3><ol><li>\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5305\uFF1A<a href="https://golang.google.cn/dl/" target="_blank" rel="noopener noreferrer">go1.15.darwin-amd64.tar.gz</a></li><li>\u5C06\u4E0B\u8F7D\u7684\u4E8C\u8FDB\u5236\u5305\u89E3\u538B\u81F3 <code>/usr/local</code> \u76EE\u5F55</li></ol><div class="language-go"><pre><code>tar <span class="token operator">-</span>C <span class="token operator">/</span>usr<span class="token operator">/</span>local <span class="token operator">-</span>xzf go1<span class="token punctuation">.</span><span class="token number">15</span><span class="token punctuation">.</span>darwin<span class="token operator">-</span>amd64<span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
</code></pre></div><ol start="3"><li>\u5C06 <code>/usr/local/go/bin</code> \u76EE\u5F55\u6DFB\u52A0\u81F3 PATH \u73AF\u5883\u53D8\u91CF\uFF1A</li></ol><div class="language-go"><pre><code>export PATH<span class="token operator">=</span>$PATH<span class="token punctuation">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">/</span>bin
</code></pre></div><blockquote><p>\u6E29\u99A8\u63D0\u793A\uFF1AMAC \u7CFB\u7EDF\u4E0B\u4F60\u53EF\u4EE5\u4F7F\u7528 <strong>.pkg</strong> \u7ED3\u5C3E\u7684\u5B89\u88C5\u5305\u76F4\u63A5\u53CC\u51FB\u6765\u5B8C\u6210\u5B89\u88C5\uFF0C\u5B89\u88C5\u76EE\u5F55\u5728 <strong>/usr/local/go/</strong> \u4E0B</p></blockquote><h3 id="windows-\u7CFB\u7EDF\u4E0B\u5B89\u88C5" tabindex="-1">Windows \u7CFB\u7EDF\u4E0B\u5B89\u88C5 <a class="header-anchor" href="#windows-\u7CFB\u7EDF\u4E0B\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u7136\u540E\u8BF4\u8BF4 Windows \u5E73\u53F0\uFF0CWindows \u7CFB\u7EDF\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D <a href="https://golang.google.cn/dl/" target="_blank" rel="noopener noreferrer">go1.15.windows-amd64.msi</a> \u5B89\u88C5\u5305\u6765\u5B89\u88C5\u3002\uFF08\u5B89\u88C5\u5305\u7A97\u53E3\uFF0C\u8FDE\u7EED\u70B9\u51FB\u4E0B\u4E00\u6B65\u5373\u53EF\uFF09</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B89\u88C5\u6587\u4EF6\u4F1A\u5B89\u88C5\u5728 <code>C:\\Go</code> \u76EE\u5F55\u4E0B\u3002</p><p>\u65B0\u5EFA <code>test.go</code> \u6587\u4EF6\uFF0C\u8F93\u5165\u4EE5\u4E0B\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token comment">/* test.go */</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u547D\u4EE4\u884C\u6267\u884C\u4EE3\u7801\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code>Microsoft Windows <span class="token punctuation">[</span>\u7248\u672C <span class="token number">10.0</span><span class="token number">.18363</span><span class="token number">.959</span><span class="token punctuation">]</span>
<span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2019</span> Microsoft Corporation\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002

D<span class="token punctuation">:</span>\\Workspace<span class="token operator">&gt;</span><span class="token keyword">go</span> run test<span class="token punctuation">.</span><span class="token keyword">go</span>
Hello<span class="token punctuation">,</span> World<span class="token operator">!</span>
</code></pre></div><h2 id="\u8BED\u8A00\u7ED3\u6784" tabindex="-1">\u8BED\u8A00\u7ED3\u6784 <a class="header-anchor" href="#\u8BED\u8A00\u7ED3\u6784" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u7684\u57FA\u7840\u7EC4\u6210\uFF1A</p><ul><li>\u5305\u58F0\u660E</li><li>\u5F15\u5165\u5305</li><li>\u51FD\u6570</li><li>\u53D8\u91CF</li><li>\u8BED\u53E5 &amp; \u8868\u8FBE\u5F0F</li><li>\u6CE8\u91CA</li></ul><p>\u770B\u4E0B <code>test.go</code> \u7684\u5404\u4E2A\u90E8\u5206\uFF1A</p><ol><li><code>package main</code> \u5B9A\u4E49\u4E86\u5305\u540D\u3002\u4F60\u5FC5\u987B\u5728\u6E90\u6587\u4EF6\u4E2D\u975E\u6CE8\u91CA\u7684\u7B2C\u4E00\u884C\u6307\u660E\u8FD9\u4E2A\u6587\u4EF6\u5C5E\u4E8E\u54EA\u4E2A\u5305\uFF0C\u5982\uFF1A<code>package main</code>\u3002</li><li><code>import &quot;fmt&quot;</code> \u544A\u8BC9 Go \u7F16\u8BD1\u5668\u8FD9\u4E2A\u7A0B\u5E8F\u9700\u8981\u4F7F\u7528 <code>fmt</code> \u5305\uFF08\u7684\u51FD\u6570\uFF0C\u6216\u5176\u4ED6\u5143\u7D20\uFF09\uFF0C<code>fmt</code> \u5305\u5B9E\u73B0\u4E86\u683C\u5F0F\u5316 <code>IO</code>\uFF08\u8F93\u5165/\u8F93\u51FA\uFF09\u7684\u51FD\u6570\u3002</li><li><code>func main()</code> \u662F\u7A0B\u5E8F\u5F00\u59CB\u6267\u884C\u7684\u51FD\u6570\u3002main \u51FD\u6570\u662F\u6BCF\u4E00\u4E2A\u53EF\u6267\u884C\u7A0B\u5E8F\u6240\u5FC5\u987B\u5305\u542B\u7684\uFF0C\u4E00\u822C\u6765\u8BF4\u90FD\u662F\u5728\u542F\u52A8\u540E\u7B2C\u4E00\u4E2A\u6267\u884C\u7684\u51FD\u6570\uFF08\u5982\u679C\u6709 <code>init()</code> \u51FD\u6570\u5219\u4F1A\u5148\u6267\u884C\u8BE5\u51FD\u6570\uFF09\u3002</li><li><code>fmt.Println(&quot;Hello, World!&quot;)</code> \u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u3002</li><li>\u5F53\u6807\u8BC6\u7B26\uFF08\u5305\u62EC\u5E38\u91CF\u3001\u53D8\u91CF\u3001\u7C7B\u578B\u3001\u51FD\u6570\u540D\u3001\u7ED3\u6784\u5B57\u6BB5\u7B49\u7B49\uFF09\u4EE5\u4E00\u4E2A\u5927\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u5982\uFF1A<code>Group1</code>\uFF0C\u90A3\u4E48\u4F7F\u7528\u8FD9\u79CD\u5F62\u5F0F\u7684\u6807\u8BC6\u7B26\u7684\u5BF9\u8C61\u5C31\u53EF\u4EE5\u88AB\u5916\u90E8\u5305\u7684\u4EE3\u7801\u6240\u4F7F\u7528\uFF08\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u9700\u8981\u5148\u5BFC\u5165\u8FD9\u4E2A\u5305\uFF09\uFF0C\u8FD9\u88AB\u79F0\u4E3A\u5BFC\u51FA\uFF08\u50CF\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\u7684 <code>public</code>\uFF09\uFF1B\u6807\u8BC6\u7B26\u5982\u679C\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u5219\u5BF9\u5305\u5916\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u4F46\u662F\u4ED6\u4EEC\u5728\u6574\u4E2A\u5305\u7684\u5185\u90E8\u662F\u53EF\u89C1\u5E76\u4E14\u53EF\u7528\u7684\uFF08\u50CF\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\u7684 <code>protected</code> \uFF09\u3002</li></ol><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u5E03\u5C14\u578B</td><td>\u5E03\u5C14\u578B\u7684\u503C\u53EA\u53EF\u4EE5\u662F\u5E38\u91CF <code>true</code> \u6216\u8005 <code>false</code>\u3002\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A<code>var b bool = true</code>\u3002</td></tr><tr><td>\u6570\u5B57\u7C7B\u578B</td><td>\u6574\u578B <code>int</code> \u548C\u6D6E\u70B9\u578B <code>float32</code>\u3001<code>float64</code>\uFF0CGo \u8BED\u8A00\u652F\u6301\u6574\u578B\u548C\u6D6E\u70B9\u578B\u6570\u5B57\uFF0C\u5E76\u4E14\u652F\u6301\u590D\u6570\uFF0C\u5176\u4E2D\u4F4D\u7684\u8FD0\u7B97\u91C7\u7528\u8865\u7801\u3002</td></tr><tr><td>\u5B57\u7B26\u4E32\u7C7B\u578B</td><td>\u5B57\u7B26\u4E32\u5C31\u662F\u4E00\u4E32\u56FA\u5B9A\u957F\u5EA6\u7684\u5B57\u7B26\u8FDE\u63A5\u8D77\u6765\u7684\u5B57\u7B26\u5E8F\u5217\u3002Go \u7684\u5B57\u7B26\u4E32\u662F\u7531\u5355\u4E2A\u5B57\u8282\u8FDE\u63A5\u8D77\u6765\u7684\u3002Go \u8BED\u8A00\u7684\u5B57\u7B26\u4E32\u7684\u5B57\u8282\u4F7F\u7528 <code>UTF-8</code> \u7F16\u7801\u6807\u8BC6 <code>Unicode</code> \u6587\u672C\u3002</td></tr><tr><td>\u6D3E\u751F\u7C7B\u578B</td><td>\u5305\u62EC\uFF1A\u6307\u9488\u7C7B\u578B\uFF08Pointer\uFF09\u3001\u6570\u7EC4\u7C7B\u578B\u3001\u7ED3\u6784\u5316\u7C7B\u578B(struct)\u3001Channel \u7C7B\u578B\u3001\u51FD\u6570\u7C7B\u578B\u3001\u5207\u7247\u7C7B\u578B\u3001\u63A5\u53E3\u7C7B\u578B\uFF08interface\uFF09\u3001Map \u7C7B\u578B</td></tr></tbody></table><h2 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u53D8\u91CF\u540D\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u7EC4\u6210\uFF0C\u5176\u4E2D\u9996\u4E2A\u5B57\u7B26\u4E0D\u80FD\u4E3A\u6570\u5B57\u3002</p><p>\u58F0\u660E\u53D8\u91CF\u7684\u4E00\u822C\u5F62\u5F0F\u662F\u4F7F\u7528 <code>var</code> \u5173\u952E\u5B57\u3002</p><h3 id="\u53D8\u91CF\u58F0\u660E" tabindex="-1">\u53D8\u91CF\u58F0\u660E <a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u53D8\u91CF\u7C7B\u578B\uFF0C\u5982\u679C\u6CA1\u6709\u521D\u59CB\u5316\uFF0C\u5219\u53D8\u91CF\u9ED8\u8BA4\u4E3A\u96F6\u503C\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">/* \u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u5E76\u521D\u59CB\u5316 */</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">/* hello */</span>

    <span class="token comment">/* \u6CA1\u6709\u521D\u59CB\u5316\u5C31\u4E3A\u96F6\u503C */</span>
    <span class="token keyword">var</span> b <span class="token builtin">int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">/* 0 */</span>

    <span class="token comment">/* bool \u96F6\u503C\u4E3A false */</span>
    <span class="token keyword">var</span> c <span class="token builtin">bool</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">/* false */</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u6839\u636E\u503C\u81EA\u884C\u5224\u5B9A\u53D8\u91CF\u7C7B\u578B\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token boolean">true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">/* true */</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD8\u6709\u4E00\u79CD\u58F0\u660E\u65B9\u5F0F\uFF0C\u7701\u7565 <code>var</code>, \u6CE8\u610F <code>:=</code> \u5DE6\u4FA7\u5982\u679C\u6CA1\u6709\u58F0\u660E\u65B0\u7684\u53D8\u91CF\uFF0C\u5C31\u4EA7\u751F\u7F16\u8BD1\u9519\u8BEF\uFF0C\u683C\u5F0F\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span> <span class="token comment">/* var f string = &quot;hello&quot; */</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u5F53\u53D8\u91CF\u7C7B\u578B\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u4E14\u5B58\u5728\u8D4B\u503C\u64CD\u4F5C\uFF08\u4F8B\u5982\uFF1A<code>a = b</code>\uFF09\u65F6\uFF0C\u53EA\u6709\u5F15\u7528\uFF08\u5730\u5740\uFF09\u88AB\u590D\u5236\u3002</p></blockquote><h2 id="\u6307\u9488" tabindex="-1">\u6307\u9488 <a class="header-anchor" href="#\u6307\u9488" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u662F\u4E00\u79CD\u4F7F\u7528\u65B9\u4FBF\u7684\u5360\u4F4D\u7B26\uFF0C\u7528\u4E8E\u5F15\u7528\u8BA1\u7B97\u673A\u5185\u5B58\u5730\u5740\u3002</p><p>Go \u8BED\u8A00\u7684\u53D6\u5730\u5740\u7B26\u662F <code>&amp;</code>\uFF0C\u653E\u5230\u4E00\u4E2A\u53D8\u91CF\u524D\u4F7F\u7528\u5C31\u4F1A\u8FD4\u56DE\u76F8\u5E94\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740: %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740<span class="token punctuation">:</span> c000010080
</code></pre></div><h3 id="\u4EC0\u4E48\u662F\u6307\u9488" tabindex="-1">\u4EC0\u4E48\u662F\u6307\u9488 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6307\u9488" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u6307\u5411\u4E86\u4E00\u4E2A\u503C\u7684\u5185\u5B58\u5730\u5740\u3002</p><div class="language-go"><pre><code><span class="token keyword">var</span> ip <span class="token operator">*</span><span class="token builtin">int</span>        <span class="token comment">/* \u6307\u5411\u6574\u578B */</span>
<span class="token keyword">var</span> fp <span class="token operator">*</span><span class="token builtin">float32</span>    <span class="token comment">/* \u6307\u5411\u6D6E\u70B9\u578B */</span>
</code></pre></div><h3 id="\u5982\u4F55\u4F7F\u7528\u6307\u9488" tabindex="-1">\u5982\u4F55\u4F7F\u7528\u6307\u9488 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u6307\u9488" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u6D41\u7A0B\uFF1A</p><ul><li>\u5B9A\u4E49\u6307\u9488\u53D8\u91CF</li><li>\u4E3A\u6307\u9488\u53D8\u91CF\u8D4B\u503C</li><li>\u8BBF\u95EE\u6307\u9488\u53D8\u91CF\u4E2D\u6307\u5411\u5730\u5740\u7684\u503C</li></ul><p>\u5728\u6307\u9488\u7C7B\u578B\u524D\u9762\u52A0\u4E0A <code>*</code> \u53F7\uFF08\u524D\u7F00\uFF09\u6765\u83B7\u53D6\u6307\u9488\u6240\u6307\u5411\u7684\u5185\u5BB9\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>   <span class="token comment">/* \u58F0\u660E\u5B9E\u9645\u53D8\u91CF */</span>
   <span class="token keyword">var</span> ip <span class="token operator">*</span><span class="token builtin">int</span>        <span class="token comment">/* \u58F0\u660E\u6307\u9488\u53D8\u91CF */</span>

   ip <span class="token operator">=</span> <span class="token operator">&amp;</span>a  <span class="token comment">/* \u6307\u9488\u53D8\u91CF\u7684\u5B58\u50A8\u5730\u5740 */</span>

   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u53D8\u91CF\u7684\u5730\u5740\u662F: %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a  <span class="token punctuation">)</span>

   <span class="token comment">/* \u6307\u9488\u53D8\u91CF\u7684\u5B58\u50A8\u5730\u5740 */</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;ip \u53D8\u91CF\u50A8\u5B58\u7684\u6307\u9488\u5730\u5740: %x\\n&quot;</span><span class="token punctuation">,</span> ip <span class="token punctuation">)</span>

   <span class="token comment">/* \u4F7F\u7528\u6307\u9488\u8BBF\u95EE\u503C */</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;*ip \u53D8\u91CF\u7684\u503C: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ip <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
a \u53D8\u91CF\u7684\u5730\u5740\u662F<span class="token punctuation">:</span> c000010080
ip \u53D8\u91CF\u50A8\u5B58\u7684\u6307\u9488\u5730\u5740<span class="token punctuation">:</span> c000010080
<span class="token operator">*</span>ip \u53D8\u91CF\u7684\u503C<span class="token punctuation">:</span> <span class="token number">10</span>
</code></pre></div><h3 id="\u7A7A\u6307\u9488" tabindex="-1">\u7A7A\u6307\u9488 <a class="header-anchor" href="#\u7A7A\u6307\u9488" aria-hidden="true">#</a></h3><p>\u5F53\u4E00\u4E2A\u6307\u9488\u88AB\u5B9A\u4E49\u540E\u6CA1\u6709\u5206\u914D\u5230\u4EFB\u4F55\u53D8\u91CF\u65F6\uFF0C\u5B83\u7684\u503C\u4E3A <code>nil</code>\u3002</p><p><code>nil</code> \u6307\u9488\u4E5F\u79F0\u4E3A\u7A7A\u6307\u9488\u3002</p><p><code>nil</code> \u5728\u6982\u5FF5\u4E0A\u548C\u5176\u5B83\u8BED\u8A00\u7684 <code>null\u3001None\u3001nil\u3001NULL</code> \u4E00\u6837\uFF0C\u90FD\u6307\u4EE3\u96F6\u503C\u6216\u7A7A\u503C\u3002</p><p>\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u901A\u5E38\u7F29\u5199\u4E3A <code>ptr</code>\u3002</p><h2 id="\u7ED3\u6784\u4F53" tabindex="-1">\u7ED3\u6784\u4F53 <a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u4E2D\u6570\u7EC4\u53EF\u4EE5\u5B58\u50A8\u540C\u4E00\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F46\u5728\u7ED3\u6784\u4F53\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4E3A\u4E0D\u540C\u9879\u5B9A\u4E49\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u3002</p><p>\u7ED3\u6784\u4F53\u662F\u7531\u4E00\u7CFB\u5217\u5177\u6709\u76F8\u540C\u7C7B\u578B\u6216\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u96C6\u5408\u3002</p><h3 id="\u5B9A\u4E49\u7ED3\u6784\u4F53" tabindex="-1">\u5B9A\u4E49\u7ED3\u6784\u4F53 <a class="header-anchor" href="#\u5B9A\u4E49\u7ED3\u6784\u4F53" aria-hidden="true">#</a></h3><p>\u7ED3\u6784\u4F53\u5B9A\u4E49\u9700\u8981\u4F7F\u7528 <code>type</code> \u548C <code>struct</code> \u8BED\u53E5\u3002<code>struct</code> \u8BED\u53E5\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u7ED3\u6784\u4F53\u4E2D\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\u3002<code>type</code> \u8BED\u53E5\u8BBE\u5B9A\u4E86\u7ED3\u6784\u4F53\u7684\u540D\u79F0\u3002</p><p>\u5B9E\u4F8B:</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">type</span> Games <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   name <span class="token builtin">string</span>
   url <span class="token builtin">string</span>
   class <span class="token builtin">string</span>
   game_id <span class="token builtin">int</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7ED3\u6784\u4F53</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Games<span class="token punctuation">{</span><span class="token string">&quot;\u82F1\u96C4\u8054\u76DF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://lol.qq.com/main.shtml&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MOBA&quot;</span><span class="token punctuation">,</span> <span class="token number">666666</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528 key =&gt; value \u683C\u5F0F</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Games<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;\u82F1\u96C4\u8054\u76DF&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token string">&quot;https://lol.qq.com/main.shtml&quot;</span><span class="token punctuation">,</span> class<span class="token punctuation">:</span> <span class="token string">&quot;MOBA&quot;</span><span class="token punctuation">,</span> game_id<span class="token punctuation">:</span> <span class="token number">666666</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5FFD\u7565\u7684\u5B57\u6BB5\u4E3A 0 \u6216 \u7A7A</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Games<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;\u82F1\u96C4\u8054\u76DF&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token string">&quot;https://lol.qq.com/main.shtml&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
<span class="token punctuation">{</span>\u82F1\u96C4\u8054\u76DF https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>lol<span class="token punctuation">.</span>qq<span class="token punctuation">.</span>com<span class="token operator">/</span>main<span class="token punctuation">.</span>shtml MOBA <span class="token number">666666</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>\u82F1\u96C4\u8054\u76DF https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>lol<span class="token punctuation">.</span>qq<span class="token punctuation">.</span>com<span class="token operator">/</span>main<span class="token punctuation">.</span>shtml MOBA <span class="token number">666666</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>\u82F1\u96C4\u8054\u76DF https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>lol<span class="token punctuation">.</span>qq<span class="token punctuation">.</span>com<span class="token operator">/</span>main<span class="token punctuation">.</span>shtml  <span class="token number">0</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458" tabindex="-1">\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458 <a class="header-anchor" href="#\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458" aria-hidden="true">#</a></h3><p>\u5982\u679C\u8981\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458\uFF0C\u9700\u8981\u4F7F\u7528\u70B9\u53F7 <code>.</code> \u64CD\u4F5C\u7B26\uFF0C\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-go"><pre><code>\u7ED3\u6784\u4F53<span class="token punctuation">.</span>\u6210\u5458\u540D
</code></pre></div><p>\u5B9E\u4F8B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">type</span> Games <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   name <span class="token builtin">string</span>
   url <span class="token builtin">string</span>
   class <span class="token builtin">string</span>
   game_id <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> LOL Games <span class="token comment">/* \u58F0\u660E LOL \u4E3A Games \u7C7B\u578B */</span>

   <span class="token comment">/* LOL \u63CF\u8FF0 */</span>
   LOL<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u82F1\u96C4\u8054\u76DF&quot;</span>
   LOL<span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&quot;https://lol.qq.com/main.shtml&quot;</span>
   LOL<span class="token punctuation">.</span>class <span class="token operator">=</span> <span class="token string">&quot;MOBA&quot;</span>
   LOL<span class="token punctuation">.</span>game_id <span class="token operator">=</span> <span class="token number">666666</span>

   <span class="token comment">/* \u6253\u5370 LOL \u4FE1\u606F */</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span> <span class="token string">&quot;LOL name : %s\\n&quot;</span><span class="token punctuation">,</span> LOL<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span> <span class="token string">&quot;LOL url : %s\\n&quot;</span><span class="token punctuation">,</span> LOL<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span> <span class="token string">&quot;LOL class : %s\\n&quot;</span><span class="token punctuation">,</span> LOL<span class="token punctuation">.</span>class<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span> <span class="token string">&quot;LOL game_id : %d\\n&quot;</span><span class="token punctuation">,</span> LOL<span class="token punctuation">.</span>game_id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
LOL name <span class="token punctuation">:</span> \u82F1\u96C4\u8054\u76DF
LOL url <span class="token punctuation">:</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>lol<span class="token punctuation">.</span>qq<span class="token punctuation">.</span>com<span class="token operator">/</span>main<span class="token punctuation">.</span>shtml
LOL class <span class="token punctuation">:</span> MOBA
LOL game_id <span class="token punctuation">:</span> <span class="token number">666666</span>
</code></pre></div><h3 id="\u7ED3\u6784\u4F53\u6307\u9488" tabindex="-1">\u7ED3\u6784\u4F53\u6307\u9488 <a class="header-anchor" href="#\u7ED3\u6784\u4F53\u6307\u9488" aria-hidden="true">#</a></h3><p>\u5982\u679C\u60F3\u5728\u51FD\u6570\u91CC\u9762\u6539\u53D8\u7ED3\u679C\u4F53\u6570\u636E\u5185\u5BB9\uFF0C\u9700\u8981\u4F20\u5165\u6307\u9488\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">type</span> Games <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   name <span class="token builtin">string</span>
   url <span class="token builtin">string</span>
   class <span class="token builtin">string</span>
   game_id <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">changeGame</span><span class="token punctuation">(</span>game <span class="token operator">*</span>Games<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    game<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u4E91\u9876\u4E4B\u5F08&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> LOL Games
    LOL<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u82F1\u96C4\u8054\u76DF&quot;</span>
   	LOL<span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token string">&quot;https://lol.qq.com/main.shtml&quot;</span>
   	LOL<span class="token punctuation">.</span>class <span class="token operator">=</span> <span class="token string">&quot;MOBA&quot;</span>
   	LOL<span class="token punctuation">.</span>game_id <span class="token operator">=</span> <span class="token number">666666</span>
    <span class="token function">changeGame</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>LOL<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>LOL<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
<span class="token punctuation">{</span>\u4E91\u9876\u4E4B\u5F08 https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>lol<span class="token punctuation">.</span>qq<span class="token punctuation">.</span>com<span class="token operator">/</span>main<span class="token punctuation">.</span>shtml MOBA <span class="token number">666666</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5207\u7247-slice" tabindex="-1">\u5207\u7247( Slice ) <a class="header-anchor" href="#\u5207\u7247-slice" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u5207\u7247\u662F\u5BF9\u6570\u7EC4\u7684\u62BD\u8C61\u3002</p><p>Go \u6570\u7EC4\u7684\u957F\u5EA6\u4E0D\u53EF\u6539\u53D8\uFF0C\u5728\u7279\u5B9A\u573A\u666F\u4E2D\u8FD9\u6837\u7684\u96C6\u5408\u5C31\u4E0D\u592A\u9002\u7528\uFF0CGo \u4E2D\u63D0\u4F9B\u4E86\u4E00\u79CD\u7075\u6D3B\uFF0C\u529F\u80FD\u5F3A\u608D\u7684\u5185\u7F6E\u7C7B\u578B\u5207\u7247(&quot;\u52A8\u6001\u6570\u7EC4&quot;),\u4E0E\u6570\u7EC4\u76F8\u6BD4\u5207\u7247\u7684\u957F\u5EA6\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u53EF\u4EE5\u8FFD\u52A0\u5143\u7D20\uFF0C\u5728\u8FFD\u52A0\u65F6\u53EF\u80FD\u4F7F\u5207\u7247\u7684\u5BB9\u91CF\u589E\u5927\u3002</p><h3 id="\u5B9A\u4E49\u5207\u7247" tabindex="-1">\u5B9A\u4E49\u5207\u7247 <a class="header-anchor" href="#\u5B9A\u4E49\u5207\u7247" aria-hidden="true">#</a></h3><div class="language-go"><pre><code><span class="token comment">/* \u58F0\u660E\u4E00\u4E2A\u672A\u6307\u5B9A\u5927\u5C0F\u7684\u6570\u7EC4\u6765\u5B9A\u4E49\u5207\u7247 */</span>
<span class="token keyword">var</span> identifier <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span>

<span class="token comment">/* \u4F7F\u7528 make() \u51FD\u6570\u6765\u521B\u5EFA\u5207\u7247 */</span>
<span class="token keyword">var</span> slice1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">)</span>
<span class="token comment">/* \u7B80\u5199 */</span>
slice1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">)</span>

<span class="token comment">/* \u4E5F\u53EF\u4EE5\u6307\u5B9A\u5BB9\u91CF\uFF0C\u5176\u4E2D capacity \u4E3A\u53EF\u9009\u53C2\u6570 */</span>
<span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>T<span class="token punctuation">,</span> length<span class="token punctuation">,</span> capacity<span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u91CC <code>len</code> \u662F\u6570\u7EC4\u7684\u957F\u5EA6\u5E76\u4E14\u4E5F\u662F\u5207\u7247\u7684\u521D\u59CB\u957F\u5EA6\u3002</p><h3 id="\u5207\u7247\u521D\u59CB\u5316" tabindex="-1">\u5207\u7247\u521D\u59CB\u5316 <a class="header-anchor" href="#\u5207\u7247\u521D\u59CB\u5316" aria-hidden="true">#</a></h3><div class="language-go"><pre><code>s <span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
</code></pre></div><p>\u76F4\u63A5\u521D\u59CB\u5316\u5207\u7247\uFF0C<code>[]</code>\u8868\u793A\u662F\u5207\u7247\u7C7B\u578B\uFF0C<code>{1,2,3}</code>\u521D\u59CB\u5316\u503C\u4F9D\u6B21\u662F<code>1,2,3</code>\u3002\u8FD9\u91CC<code>cap=len=3</code></p><div class="language-go"><pre><code>s <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
</code></pre></div><p>\u521D\u59CB\u5316\u5207\u7247 <code>s</code> ,\u662F\u6570\u7EC4 <code>arr</code> \u7684\u5F15\u7528</p><div class="language-go"><pre><code>s <span class="token operator">:=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">:</span>endIndex<span class="token punctuation">]</span>
</code></pre></div><p>\u5C06 <code>arr</code> \u4E2D\u4ECE\u4E0B\u6807 <code>startIndex</code> \u5230 <code>endIndex-1</code> \u4E0B\u7684\u5143\u7D20\u521B\u5EFA\u4E3A\u4E00\u4E2A\u65B0\u7684\u5207\u7247</p><div class="language-go"><pre><code>s <span class="token operator">:=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">:</span><span class="token punctuation">]</span>
</code></pre></div><p>\u5C06 <code>arr</code> \u4E2D\u4ECE\u4E0B\u6807 <code>startIndex</code> \u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF08\u9ED8\u8BA4 <code>endIndex</code> \u60C5\u51B5\uFF09</p><div class="language-go"><pre><code>s <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span>endIndex<span class="token punctuation">]</span>
</code></pre></div><p>\u5C06\u8868\u793A\u4ECE <code>arr</code> \u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\uFF08\u9ED8\u8BA4 <code>startIndex</code> \u60C5\u51B5\uFF09\uFF0C\u5230\u4E0B\u6807 <code>endIndex</code> \u4E0B\u7684\u5143\u7D20</p><div class="language-go"><pre><code>s1 <span class="token operator">:=</span> s<span class="token punctuation">[</span>startIndex<span class="token punctuation">:</span>endIndex<span class="token punctuation">]</span>
</code></pre></div><p>\u901A\u8FC7\u5207\u7247 <code>s</code> \u521D\u59CB\u5316\u5207\u7247 <code>s1</code></p><div class="language-go"><pre><code>s <span class="token operator">:=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">)</span>
</code></pre></div><p>\u901A\u8FC7\u5185\u7F6E\u51FD\u6570 <code>make()</code> \u521D\u59CB\u5316\u5207\u7247 <code>s</code>\uFF0C<code>[]int</code> \u6807\u8BC6\u4E3A\u5176\u5143\u7D20\u7C7B\u578B\u4E3A <code>int</code> \u7684\u5207\u7247</p><h3 id="len-\u548C-cap-\u51FD\u6570" tabindex="-1">len() \u548C cap() \u51FD\u6570 <a class="header-anchor" href="#len-\u548C-cap-\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u5207\u7247\u662F\u53EF\u7D22\u5F15\u7684\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7531 <code>len()</code> \u65B9\u6CD5\u83B7\u53D6\u957F\u5EA6\u3002</p><p>\u5207\u7247\u63D0\u4F9B\u4E86\u8BA1\u7B97\u5BB9\u91CF\u7684\u65B9\u6CD5 <code>cap()</code> \u53EF\u4EE5\u6D4B\u91CF\u5207\u7247\u6700\u957F\u53EF\u4EE5\u8FBE\u5230\u591A\u5C11\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printSlice</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;len=%d cap=%d slice=%v\\n&quot;</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
<span class="token builtin">len</span><span class="token operator">=</span><span class="token number">3</span> <span class="token builtin">cap</span><span class="token operator">=</span><span class="token number">10</span> slice<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="\u8303\u56F4-range" tabindex="-1">\u8303\u56F4( Range ) <a class="header-anchor" href="#\u8303\u56F4-range" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u4E2D <code>range</code> \u5173\u952E\u5B57\u7528\u4E8E <code>for</code> \u5FAA\u73AF\u4E2D\u8FED\u4EE3\u6570\u7EC4( array )\u3001\u5207\u7247( slice )\u3001\u901A\u9053( channel )\u6216\u96C6\u5408( map )\u7684\u5143\u7D20\u3002\u5728\u6570\u7EC4\u548C\u5207\u7247\u4E2D\u5B83\u8FD4\u56DE\u5143\u7D20\u7684\u7D22\u5F15\u548C\u7D22\u5F15\u5BF9\u5E94\u7684\u503C\uFF0C\u5728\u96C6\u5408\u4E2D\u8FD4\u56DE <code>key-value</code> \u5BF9\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u8FD9\u662F\u6211\u4EEC\u4F7F\u7528 range \u53BB\u6C42\u4E00\u4E2A slice \u7684\u548C\u3002\u4F7F\u7528\u6570\u7EC4\u8DDF\u8FD9\u4E2A\u5F88\u7C7B\u4F3C */</span>
    nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> num
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sum:&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
    <span class="token comment">/* \u5728\u6570\u7EC4\u4E0A\u4F7F\u7528 range \u5C06\u4F20\u5165 index \u548C\u503C\u4E24\u4E2A\u53D8\u91CF\u3002\u4E0A\u9762\u90A3\u4E2A\u4F8B\u5B50\u6211\u4EEC\u4E0D\u9700\u8981\u4F7F\u7528\u8BE5\u5143\u7D20\u7684\u5E8F\u53F7\uFF0C\u6240\u4EE5\u6211\u4EEC\u4F7F\u7528\u7A7A\u767D\u7B26&quot;_&quot;\u7701\u7565\u4E86\u3002\u6709\u65F6\u4FAF\u6211\u4EEC\u786E\u5B9E\u9700\u8981\u77E5\u9053\u5B83\u7684\u7D22\u5F15 */</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">3</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;index:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* range \u4E5F\u53EF\u4EE5\u7528\u5728 map \u7684\u952E\u503C\u5BF9\u4E0A */</span>
    kvs <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> kvs <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s -&gt; %s\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* range \u4E5F\u53EF\u4EE5\u7528\u6765\u679A\u4E3E Unicode \u5B57\u7B26\u4E32\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u5B57\u7B26\u7684\u7D22\u5F15\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u5B57\u7B26\uFF08Unicode \u7684\u503C\uFF09\u672C\u8EAB */</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token string">&quot;go&quot;</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
sum<span class="token punctuation">:</span> <span class="token number">6</span>
index<span class="token punctuation">:</span> <span class="token number">2</span>
a <span class="token operator">-</span><span class="token operator">&gt;</span> apple
b <span class="token operator">-</span><span class="token operator">&gt;</span> banana
<span class="token number">0</span> <span class="token number">103</span>
<span class="token number">1</span> <span class="token number">111</span>
</code></pre></div><h2 id="map-\u96C6\u5408" tabindex="-1">Map (\u96C6\u5408) <a class="header-anchor" href="#map-\u96C6\u5408" aria-hidden="true">#</a></h2><p><code>Map</code> \u662F\u4E00\u79CD\u65E0\u5E8F\u7684\u952E\u503C\u5BF9\u7684\u96C6\u5408\u3002<code>Map</code> \u6700\u91CD\u8981\u7684\u4E00\u70B9\u662F\u901A\u8FC7 <code>key</code> \u6765\u5FEB\u901F\u68C0\u7D22\u6570\u636E\uFF0C<code>key</code> \u7C7B\u4F3C\u4E8E\u7D22\u5F15\uFF0C\u6307\u5411\u6570\u636E\u7684\u503C\u3002</p><p><code>Map</code> \u662F\u4E00\u79CD\u96C6\u5408\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u50CF\u8FED\u4EE3\u6570\u7EC4\u548C\u5207\u7247\u90A3\u6837\u8FED\u4EE3\u5B83\u3002\u4E0D\u8FC7\uFF0C<code>Map</code> \u662F\u65E0\u5E8F\u7684\uFF0C\u6211\u4EEC\u65E0\u6CD5\u51B3\u5B9A\u5B83\u7684\u8FD4\u56DE\u987A\u5E8F\uFF0C\u8FD9\u662F\u56E0\u4E3A <code>Map</code> \u662F\u4F7F\u7528 <code>hash</code> \u8868\u6765\u5B9E\u73B0\u7684\u3002</p><h3 id="\u5B9A\u4E49-map" tabindex="-1">\u5B9A\u4E49 Map <a class="header-anchor" href="#\u5B9A\u4E49-map" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u4F7F\u7528\u5185\u5EFA\u51FD\u6570 <code>make</code> \u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>map</code> \u5173\u952E\u5B57\u6765\u5B9A\u4E49 <code>Map</code>:</p><div class="language-go"><pre><code><span class="token comment">/* \u58F0\u660E\u53D8\u91CF\uFF0C\u9ED8\u8BA4 map \u662F nil */</span>
<span class="token keyword">var</span> map_variable <span class="token keyword">map</span><span class="token punctuation">[</span>key_data_type<span class="token punctuation">]</span>value_data_type

<span class="token comment">/* \u4F7F\u7528 make \u51FD\u6570 */</span>
map_variable <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>key_data_type<span class="token punctuation">]</span>value_data_type<span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u4E0D\u521D\u59CB\u5316 <code>map</code>\uFF0C\u90A3\u4E48\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A <code>nil map</code>\u3002<code>nil map</code> \u4E0D\u80FD\u7528\u6765\u5B58\u653E\u952E\u503C\u5BF9</p><p>\u4E0B\u9762\u5B9E\u4F8B\u6F14\u793A\u4E86\u521B\u5EFA\u548C\u4F7F\u7528 <code>map</code>:</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cnNameMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">/* \u521B\u5EFA\u96C6\u5408 */</span>
    cnNameMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token comment">/* map \u63D2\u5165 key-value \u5BF9,\u5404\u4E2A\u82F1\u6587\u5BF9\u5E94\u7684\u4E2D\u6587\u540D */</span>
    cnNameMap <span class="token punctuation">[</span> <span class="token string">&quot;Ashe&quot;</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5BD2\u51B0\u5C04\u624B\xB7\u827E\u5E0C&quot;</span>
    cnNameMap <span class="token punctuation">[</span> <span class="token string">&quot;Annie&quot;</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u9ED1\u6697\u4E4B\u5973\xB7\u5B89\u59AE&quot;</span>
    cnNameMap <span class="token punctuation">[</span> <span class="token string">&quot;Alistar&quot;</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u725B\u5934\u914B\u957F\xB7\u963F\u5229\u65AF\u5854&quot;</span>
    cnNameMap <span class="token punctuation">[</span> <span class="token string">&quot;Twisted&quot;</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5361\u724C\u5927\u5E08\xB7\u5D14\u65AF\u7279&quot;</span>

    <span class="token comment">/* \u4F7F\u7528\u952E\u8F93\u51FA\u4E2D\u6587\u540D */</span>
    <span class="token keyword">for</span> cn <span class="token operator">:=</span> <span class="token keyword">range</span> cnNameMap <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cn<span class="token punctuation">,</span> <span class="token string">&quot;\u4E2D\u6587\u540D\u662F&quot;</span><span class="token punctuation">,</span> cnNameMap <span class="token punctuation">[</span>cn<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* \u67E5\u770B\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728 */</span>
    name<span class="token punctuation">,</span> ok <span class="token operator">:=</span> cnNameMap <span class="token punctuation">[</span> <span class="token string">&quot;Sivir&quot;</span> <span class="token punctuation">]</span> <span class="token comment">/* \u5982\u679C\u786E\u5B9A\u662F\u771F\u5B9E\u7684,\u5219\u5B58\u5728,\u5426\u5219\u4E0D\u5B58\u5728 */</span>
    <span class="token comment">/* fmt.Println(name) */</span>
    <span class="token comment">/* fmt.Println(ok) */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Sivir \u7684\u4E2D\u6587\u540D\u662F&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Sivir \u7684\u4E2D\u6587\u540D\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
Annie \u4E2D\u6587\u540D\u662F \u9ED1\u6697\u4E4B\u5973\xB7\u5B89\u59AE
Alistar \u4E2D\u6587\u540D\u662F \u725B\u5934\u914B\u957F\xB7\u963F\u5229\u65AF\u5854
Twisted \u4E2D\u6587\u540D\u662F \u5361\u724C\u5927\u5E08\xB7\u5D14\u65AF\u7279
Ashe \u4E2D\u6587\u540D\u662F \u5BD2\u51B0\u5C04\u624B\xB7\u827E\u5E0C
Sivir \u7684\u4E2D\u6587\u540D\u4E0D\u5B58\u5728
</code></pre></div><h3 id="delete-\u51FD\u6570" tabindex="-1">delete() \u51FD\u6570 <a class="header-anchor" href="#delete-\u51FD\u6570" aria-hidden="true">#</a></h3><p><code>delete()</code> \u51FD\u6570\u7528\u4E8E\u5220\u9664\u96C6\u5408\u7684\u5143\u7D20, \u53C2\u6570\u4E3A <code>map</code> \u548C\u5176\u5BF9\u5E94\u7684 <code>key</code>\u3002</p><p>\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u521B\u5EFA map */</span>
    cnNameMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
    	<span class="token string">&quot;Annie&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u9ED1\u6697\u4E4B\u5973\xB7\u5B89\u59AE&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Alistar&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u725B\u5934\u914B\u957F\xB7\u963F\u5229\u65AF\u5854&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Twisted&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5361\u724C\u5927\u5E08\xB7\u5D14\u65AF\u7279&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Ashe&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5BD2\u51B0\u5C04\u624B\xB7\u827E\u5E0C&quot;</span><span class="token punctuation">,</span>
    	<span class="token string">&quot;Sivir&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6218\u4E89\u5973\u795E\xB7\u5E0C\u7EF4\u5C14&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u82F1\u96C4\u8054\u76DF&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">/* \u6253\u5370\u4E2D\u6587\u540D */</span>
    <span class="token keyword">for</span> cn <span class="token operator">:=</span> <span class="token keyword">range</span> cnNameMap <span class="token punctuation">{</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cn<span class="token punctuation">,</span> <span class="token string">&quot;\u4E2D\u6587\u540D\u662F&quot;</span><span class="token punctuation">,</span> cnNameMap <span class="token punctuation">[</span> cn <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* \u5220\u9664\u5143\u7D20 */</span> <span class="token function">delete</span><span class="token punctuation">(</span>cnNameMap<span class="token punctuation">,</span> <span class="token string">&quot;Alistar&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u725B\u5934\u914B\u957F\xB7\u963F\u5229\u65AF\u5854\u88AB\u5220\u9664&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5220\u9664\u5143\u7D20\u540E\u82F1\u96C4\u8054\u76DF&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">/*\u6253\u5370\u4E2D\u6587\u540D*/</span>
    <span class="token keyword">for</span> cn <span class="token operator">:=</span> <span class="token keyword">range</span> cnNameMap <span class="token punctuation">{</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cn<span class="token punctuation">,</span> <span class="token string">&quot;\u4E2D\u6587\u540D\u662F&quot;</span><span class="token punctuation">,</span> cnNameMap <span class="token punctuation">[</span> cn <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
\u82F1\u96C4\u8054\u76DF
Annie \u4E2D\u6587\u540D\u662F \u9ED1\u6697\u4E4B\u5973\xB7\u5B89\u59AE
Alistar \u4E2D\u6587\u540D\u662F \u725B\u5934\u914B\u957F\xB7\u963F\u5229\u65AF\u5854
Twisted \u4E2D\u6587\u540D\u662F \u5361\u724C\u5927\u5E08\xB7\u5D14\u65AF\u7279
Ashe \u4E2D\u6587\u540D\u662F \u5BD2\u51B0\u5C04\u624B\xB7\u827E\u5E0C
Sivir \u4E2D\u6587\u540D\u662F \u6218\u4E89\u5973\u795E\xB7\u5E0C\u7EF4\u5C14
\u725B\u5934\u914B\u957F\xB7\u963F\u5229\u65AF\u5854\u88AB\u5220\u9664
\u5220\u9664\u5143\u7D20\u540E\u82F1\u96C4\u8054\u76DF
Ashe \u4E2D\u6587\u540D\u662F \u5BD2\u51B0\u5C04\u624B\xB7\u827E\u5E0C
Sivir \u4E2D\u6587\u540D\u662F \u6218\u4E89\u5973\u795E\xB7\u5E0C\u7EF4\u5C14
Annie \u4E2D\u6587\u540D\u662F \u9ED1\u6697\u4E4B\u5973\xB7\u5B89\u59AE
Twisted \u4E2D\u6587\u540D\u662F \u5361\u724C\u5927\u5E08\xB7\u5D14\u65AF\u7279
</code></pre></div><h2 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1">\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h2><p>\u7C7B\u578B\u8F6C\u6362\u7528\u4E8E\u5C06\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u7684\u53D8\u91CF\u8F6C\u6362\u4E3A\u53E6\u5916\u4E00\u79CD\u7C7B\u578B\u7684\u53D8\u91CF\u3002Go \u8BED\u8A00\u7C7B\u578B\u8F6C\u6362\u57FA\u672C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><p><code>\u7C7B\u578B(\u8868\u8FBE\u5F0F)</code></p><p>\u4EE5\u4E0B\u5B9E\u4F8B\u4E2D\u5C06\u6574\u578B\u8F6C\u5316\u4E3A\u6D6E\u70B9\u578B</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> sum <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
   <span class="token keyword">var</span> count <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">3</span>
   <span class="token keyword">var</span> mean <span class="token builtin">float32</span>

   mean <span class="token operator">=</span> <span class="token function">float32</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">float32</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;mean \u7684\u503C\u4E3A: %f\\n&quot;</span><span class="token punctuation">,</span>mean<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
mean \u7684\u503C\u4E3A<span class="token punctuation">:</span> <span class="token number">3.333333</span>
</code></pre></div><h2 id="\u63A5\u53E3" tabindex="-1">\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u5373\u63A5\u53E3\uFF0C\u5B83\u628A\u6240\u6709\u7684\u5177\u6709\u5171\u6027\u7684\u65B9\u6CD5\u5B9A\u4E49\u5728\u4E00\u8D77\uFF0C\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B\u53EA\u8981\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u5C31\u662F\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u63A5\u53E3\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Phone <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> AndroidPhone <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>androidPhone AndroidPhone<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;I am Android, I can call you!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> IPhone <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>iPhone IPhone<span class="token punctuation">)</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;I am iPhone, I can call you!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> phone Phone

    phone <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>AndroidPhone<span class="token punctuation">)</span>
    phone<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    phone <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>IPhone<span class="token punctuation">)</span>
    phone<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
I am Android<span class="token punctuation">,</span> I can call you<span class="token operator">!</span>
I am iPhone<span class="token punctuation">,</span> I can call you<span class="token operator">!</span>
</code></pre></div><p>\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u63A5\u53E3 <code>Phone</code>\uFF0C\u63A5\u53E3\u91CC\u9762\u6709\u4E00\u4E2A\u65B9\u6CD5 <code>call()</code>\u3002\u7136\u540E\u6211\u4EEC\u5728 <code>main</code> \u51FD\u6570\u91CC\u9762\u5B9A\u4E49\u4E86\u4E00\u4E2A <code>Phone</code> \u7C7B\u578B\u53D8\u91CF\uFF0C\u5E76\u5206\u522B\u4E3A\u4E4B\u8D4B\u503C\u4E3A <code>AndroidPhone</code> \u548C <code>IPhone</code> \u3002</p><h2 id="\u9519\u8BEF\u5904\u7406" tabindex="-1">\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u901A\u8FC7\u5185\u7F6E\u7684\u9519\u8BEF\u63A5\u53E3\u63D0\u4F9B\u4E86\u975E\u5E38\u7B80\u5355\u7684\u9519\u8BEF\u5904\u7406\u673A\u5236\u3002</p><p><code>error</code> \u7C7B\u578B\u662F\u4E00\u4E2A\u63A5\u53E3\u7C7B\u578B\uFF0C\u8FD9\u662F\u5B83\u7684\u5B9A\u4E49\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u51FD\u6570\u901A\u5E38\u5728\u6700\u540E\u7684\u8FD4\u56DE\u503C\u4E2D\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u3002\u4F7F\u7528 <code>errors.New</code> \u53EF\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">func</span> <span class="token function">Sqrt</span><span class="token punctuation">(</span>f <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> f <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;math: square root of negative number&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5B9E\u4F8B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token comment">/* \u5B9A\u4E49\u4E00\u4E2A DivideError \u7ED3\u6784 */</span>
<span class="token keyword">type</span> DivideError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    dividee <span class="token builtin">int</span>
    divider <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5B9E\u73B0 \`error\` \u63A5\u53E3 */</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>de <span class="token operator">*</span>DivideError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    strFormat <span class="token operator">:=</span> <span class="token string">\`
    Cannot proceed, the divider is zero.
    dividee: %d
    divider: 0
\`</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>strFormat<span class="token punctuation">,</span> de<span class="token punctuation">.</span>dividee<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5B9A\u4E49 \`int\` \u7C7B\u578B\u9664\u6CD5\u8FD0\u7B97\u7684\u51FD\u6570 */</span>
<span class="token keyword">func</span> <span class="token function">Divide</span><span class="token punctuation">(</span>varDividee <span class="token builtin">int</span><span class="token punctuation">,</span> varDivider <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">,</span> errorMsg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> varDivider <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        dData <span class="token operator">:=</span> DivideError<span class="token punctuation">{</span>
            dividee<span class="token punctuation">:</span> varDividee<span class="token punctuation">,</span>
            divider<span class="token punctuation">:</span> varDivider<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        errorMsg <span class="token operator">=</span> dData<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> varDividee <span class="token operator">/</span> varDivider<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u6B63\u5E38\u60C5\u51B5 */</span>
    <span class="token keyword">if</span> result<span class="token punctuation">,</span> errorMsg <span class="token operator">:=</span> <span class="token function">Divide</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> errorMsg <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;100/10 = &quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* \u5F53\u9664\u6570\u4E3A\u96F6\u7684\u65F6\u5019\u4F1A\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F */</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> errorMsg <span class="token operator">:=</span> <span class="token function">Divide</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> errorMsg <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;errorMsg is: &quot;</span><span class="token punctuation">,</span> errorMsg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
<span class="token number">100</span><span class="token operator">/</span><span class="token number">10</span> <span class="token operator">=</span>  <span class="token number">10</span>
errorMsg is<span class="token punctuation">:</span>
    Cannot proceed<span class="token punctuation">,</span> the divider is zero<span class="token punctuation">.</span>
    dividee<span class="token punctuation">:</span> <span class="token number">100</span>
    divider<span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre></div><h2 id="\u5E76\u53D1" tabindex="-1">\u5E76\u53D1 <a class="header-anchor" href="#\u5E76\u53D1" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u652F\u6301\u5E76\u53D1\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u901A\u8FC7 <code>go</code> \u5173\u952E\u5B57\u6765\u5F00\u542F <code>goroutine</code> \u5373\u53EF\u3002</p><p><code>goroutine</code> \u662F\u8F7B\u91CF\u7EA7\u7EBF\u7A0B\uFF0C<code>goroutine</code> \u7684\u8C03\u5EA6\u662F\u7531 Golang \u8FD0\u884C\u65F6\u8FDB\u884C\u7BA1\u7406\u7684\u3002</p><p>\u4F8B\u5982\uFF1A</p><p><code>go f(a, b, c)</code></p><p>\u5F00\u542F\u4E00\u4E2A\u65B0\u7684 <code>goroutine</code>:</p><p><code>f(a, b, c)</code></p><p>\u540C\u4E00\u4E2A\u7A0B\u5E8F\u4E2D\u7684\u6240\u6709 <code>goroutine</code> \u5171\u4EAB\u540C\u4E00\u4E2A\u5730\u5740\u7A7A\u95F4\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">say</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span>
	<span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u8F93\u51FA */</span>
hi
hello
hello
hi
hello
hi
hello
hi
hello
</code></pre></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1">\u53C2\u8003\u6587\u7AE0 <a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a></h2><ul><li><a href="https://www.runoob.com/go/go-tutorial.html" target="_blank" rel="noopener noreferrer">Go \u8BED\u8A00\u6559\u7A0B</a></li></ul><h2 id="\u611F\u8C22" tabindex="-1">\u611F\u8C22 <a class="header-anchor" href="#\u611F\u8C22" aria-hidden="true">#</a></h2><ul><li>\u672C\u6587\u5C31 Go \u8BED\u8A00\u4F5C\u4E86\u521D\u6B65\u4ECB\u7ECD\uFF0C\u5E0C\u671B\u80FD\u8D77\u5230\u629B\u7816\u5F15\u7389\u7684\u6548\u679C\u3002</li><li>\u6587\u4E2D\u5982\u6709\u9519\u8BEF\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u6307\u6B63\u3002</li><li>\u5982\u679C\u672C\u6587\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u5C31\u70B9\u4E2A <a href="https://github.com/yanxugong/blog" target="_blank" rel="noopener noreferrer">Star</a> \u652F\u6301\u4E0B\u5427\uFF01\u611F\u8C22\u9605\u8BFB\u3002</li></ul>`,146),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
