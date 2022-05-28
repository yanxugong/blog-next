import{_ as a,c as n,o as s,d as e}from"./app.c22de5e0.js";const v='{"title":"\u4F60\u4E0D\u77E5\u9053\u7684 JavaScript\uFF08\u4E0B\u5377\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"\u975E JavaScript","slug":"\u975E-javascript"},{"level":2,"title":"\u5E42\u8FD0\u7B97\u7B26","slug":"\u5E42\u8FD0\u7B97\u7B26"},{"level":2,"title":"Array#includes(..)","slug":"array-includes"},{"level":2,"title":"SIMD","slug":"simd"},{"level":2,"title":"WebAssembly (WASM)","slug":"webassembly-wasm"},{"level":2,"title":"\u611F\u8C22","slug":"\u611F\u8C22"}],"relativePath":"study/js-basis/you-do-not-konw-js-down.md"}',o={},t=e(`<h1 id="\u4F60\u4E0D\u77E5\u9053\u7684-javascript\uFF08\u4E0B\u5377\uFF09" tabindex="-1">\u4F60\u4E0D\u77E5\u9053\u7684 JavaScript\uFF08\u4E0B\u5377\uFF09 <a class="header-anchor" href="#\u4F60\u4E0D\u77E5\u9053\u7684-javascript\uFF08\u4E0B\u5377\uFF09" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u672C\u6587\u4E3B\u8981\u7ED9\u5927\u5BB6\u5E26\u6765\u4E00\u4E9B&quot;<strong>ES6 \u4E4B\u540E</strong>&quot;\u597D\u73A9\u7684\u5185\u5BB9\uFF0C\u4E00\u4E9B\u4E0D\u4E45\u7684\u5C06\u6765\u5F88\u53EF\u80FD\u8FDB\u5165 JavaScript \u6216\u8005\u5DF2\u7ECF\u5F00\u59CB\u7528\u4E86\u7684\u65B0\u7279\u6027\u3002</p><blockquote><p>\u6E29\u99A8\u63D0\u793A\uFF1A\u4E0A\u4E2A\u6708\u5199\u4E86\u4E00\u7BC7\u6587\u7AE0<a href="https://juejin.im/post/6859133591108976648" target="_blank" rel="noopener noreferrer">\u300A\u8FD9\u4E9B JavaScript \u7EC6\u8282\uFF0C\u4F60\u77E5\u9053\u4E0D\uFF1F\u300B</a>\uFF0C\u91CD\u70B9\u4ECB\u7ECD\u4E86 JavaScript \u7684\u90E8\u5206\u51B7\u95E8\u77E5\u8BC6\u3002\u4ECA\u5929\u6211\u4EEC\u4ECE\u5C55\u671B JavaScript \u7684\u672A\u6765\u51FA\u53D1\uFF0C\u804A\u804A JavaScript \u7684\u53D1\u5C55\u65B9\u5411\u3002</p></blockquote><h2 id="\u975E-javascript" tabindex="-1">\u975E JavaScript <a class="header-anchor" href="#\u975E-javascript" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u4E0D\u5728\u5C40\u9650\u4E8E\u7814\u7A76 JavaScript \u8BED\u8A00\u672C\u8EAB\u3002\u6211\u4EEC\u4F1A\u53D1\u73B0\uFF0C\u5927\u591A\u6570\u7684 JavaScript \u90FD\u662F\u7F16\u5199\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u8FD9\u6837\u7684\u73AF\u5883\u4E2D\u8FD0\u884C\u5E76\u4E0E\u4E4B\u4EA4\u4E92\u7684\u3002\u4E25\u683C\u6765\u8BF4\uFF0C\u6211\u4EEC\u7F16\u5199\u7684\u4EE3\u7801\u5F88\u5927\u4E00\u90E8\u5206\u5E76\u4E0D\u76F4\u63A5\u7531 JavaScript \u63A7\u5236\u3002</p><p>\u6700\u5E38\u89C1\u7684\u975E JavaScript \u5C31\u662F <code>DOM API</code> \u3002\u6BD4\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5F53\u6211\u4EEC\u7684\u4EE3\u7801\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u65F6\uFF0C\u53D8\u91CF <code>document</code> \u4F5C\u4E3A\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u5B58\u5728\u3002\u5B83\u65E2\u4E0D\u662F\u7531 JavaScript \u5F15\u64CE\u63D0\u4F9B\u7684\uFF0C\u4E5F\u4E0D\u7531 JavaScript \u6807\u51C6\u63A7\u5236\u3002\u5B83\u7684\u5B58\u5728\u5F62\u5F0F\u770B\u8D77\u6765\u975E\u5E38\u7C7B\u4F3C\u4E8E\u666E\u901A\u7684 JavaScript \u5BF9\u8C61\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5E76\u4E0D\u5B8C\u5168\u662F\u8FD9\u6837\u3002\u5B83\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u5BF9\u8C61\uFF0C\u901A\u5E38\u88AB\u79F0\u4E3A\u201C\u5BBF\u4E3B\u5BF9\u8C61\u201D\u3002</p><p>\u53E6\u5916\uFF0C<code>document</code> \u4E0A\u7684\u65B9\u6CD5 <code>getElementById(..)</code> \u770B\u8D77\u6765\u50CF\u662F\u4E00\u4E2A\u6B63\u5E38\u7684 JavaScript \u51FD\u6570\uFF0C \u4F46\u5B83\u5176\u5B9E\u662F\u6D4F\u89C8\u5668\u7684 <code>DOM</code> \u63D0\u4F9B\u7684\u6307\u5411\u5185\u7F6E\u65B9\u6CD5\u7684\u4E00\u4E2A\u63A5\u53E3\u3002\u5728\u67D0\u4E9B\uFF08\u65B0\u7248\u7684\uFF09\u6D4F\u89C8\u5668\u4E2D\uFF0C\u8FD9\u4E00\u5C42\u53EF\u80FD\u5728 JavaScript \u4E2D\uFF0C\u4F46\u4F20\u7EDF\u7684 <code>DOM</code> \u53CA\u5176\u884C\u4E3A\u66F4\u53EF\u80FD\u662F\u7528 <code>C/C++</code> \u5B9E\u73B0\u7684\u3002</p><p>\u53E6\u4E00\u4E2A\u793A\u4F8B\u662F\u8F93\u5165 / \u8F93\u51FA (<code>I/O</code>)\u3002</p><p>\u5E7F\u53D7\u559C\u7231\u7684 <code>alert(..)</code> \u4F1A\u5728\u7528\u6237\u6D4F\u89C8\u5668\u7A97\u53E3\u5F39\u51FA\u4E00\u4E2A\u6D88\u606F\u6846\u3002<code>alert(..)</code> \u662F\u7531\u6D4F\u89C8\u5668\u63D0\u4F9B\u7ED9 JavaScript \u7A0B\u5E8F\u7684\uFF0C\u800C\u4E0D\u662F\u7531 JavaScript \u5F15\u64CE\u672C\u8EAB\u63D0\u4F9B\u3002\u6211\u4EEC\u53D1\u8D77\u8C03\u7528\u5C06\u6D88\u606F\u53D1\u9001\u5230\u6D4F\u89C8\u5668\u5185\u90E8\uFF0C\u7136\u540E\u7531\u5B83\u8D1F\u8D23\u7ED8\u5236\u5E76\u663E\u793A\u6D88\u606F\u6846\u3002</p><p><code>console.log(..)</code> \u4E5F\u662F\u5982\u6B64\uFF1B\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E86\u8FD9\u6837\u7684\u673A\u5236\u5E76\u5C06\u5176\u8FDE\u63A5\u5230\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u3002</p><h2 id="\u5E42\u8FD0\u7B97\u7B26" tabindex="-1">\u5E42\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u5E42\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><p>\u6709\u63D0\u6848\u63D0\u51FA\u4E3A JavaScript \u65B0\u589E\u4E00\u4E2A\u8FD0\u7B97\u7B26\u7528\u4E8E\u6267\u884C\u5E42\u8FD0\u7B97\uFF0C\u5C31\u50CF <code>Math.pow(..)</code> \u4E00\u6837\u3002\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

a <span class="token operator">**</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// Math.pow(a, 4) == 16</span>
a <span class="token operator">**=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// a = Math.pow(a, 3)</span>
a<span class="token punctuation">;</span> <span class="token comment">// 8</span>
</code></pre></div><blockquote><p>** \u5B9E\u9645\u4E0A\u548C Python\u3001Ruby\u3001Perl \u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u8BED\u8A00\u4E2D\u7684\u540C\u540D\u8FD0\u7B97\u7B26\u4E00\u6837\u3002</p></blockquote><h2 id="array-includes" tabindex="-1">Array#includes(..) <a class="header-anchor" href="#array-includes" aria-hidden="true">#</a></h2><p>\u524D\u7AEF\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u9047\u5230\u9700\u8981\u5728\u503C\u6570\u7EC4\u4E2D\u641C\u7D22\u4E00\u4E2A\u503C\u7684\u9700\u6C42\u3002\u5F88\u591A\u540C\u5B66\u4F1A\u8FD9\u6837\u505A\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> vals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>vals<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u627E\u5230\u4E86!</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528 <code>&gt;= 0</code> \u68C0\u67E5\u7684\u539F\u56E0\u662F\uFF0C\u5982\u679C\u627E\u5230\u7684\u8BDD <code>indexOf(..)</code> \u8FD4\u56DE\u4E00\u4E2A <code>0</code> \u6216\u8005\u66F4\u5927\u7684\u6570\u5B57\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5C31\u4F1A\u8FD4\u56DE <code>-1</code>\u3002</p><p>\u6216\u8005\u8FD9\u6837\u505A\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> vals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">~</span>vals<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u627E\u5230\u4E86!</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>~</code> \u8FD0\u7B97\u7B26\u5728\u4E0A\u7BC7\u6587\u7AE0<a href="https://juejin.im/post/6859133591108976648#heading-6" target="_blank" rel="noopener noreferrer">\u300A\u8FD9\u4E9B JavaScript \u7EC6\u8282\uFF0C\u4F60\u77E5\u9053\u4E0D\uFF1F\u300B</a>\u5DF2\u7ECF\u8BF4\u8FC7\u4E86\uFF0C\u8FD9\u91CC\u4E0D\u518D\u505A\u8FC7\u591A\u63CF\u8FF0\u3002</p><p>\u73B0\u5728\u589E\u52A0\u4E00\u4E2A\u771F\u6B63\u8FD4\u56DE\u5E03\u5C14\u503C\u7684\u6570\u7EC4\u641C\u7D22\u65B9\u6CD5\uFF0C \u79F0\u4E3A <code>includes(..)</code>:</p><div class="language-js"><pre><code><span class="token keyword">var</span> vals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>vals<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u627E\u5230\u4E86!</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><code>Array#includes(..)</code> \u4F7F\u7528\u7684\u5339\u914D\u903B\u8F91\u80FD\u591F\u627E\u5230 <code>NaN</code> \u503C\uFF0C\u4F46\u662F\u65E0\u6CD5\u533A\u5206 <code>-0</code> \u548C <code>0</code> \u3002\u5982\u679C\u4F60\u4E0D\u5173\u5FC3\u7A0B\u5E8F\u4E2D\u7684 <code>-0</code> \u503C\uFF0C\u90A3\u4E48\u8FD9\u53EF\u80FD\u5C31\u662F\u4F60\u6240\u9700\u8981\u7684\u3002\u5982\u679C\u4F60\u786E\u5B9E\u5728\u610F\u8FD9\u4E2A <code>-0</code> \u503C\u7684 \u8BDD\uFF0C\u90A3\u4E48\u4F60\u5C31\u9700\u8981\u5B9E\u73B0\u81EA\u5DF1\u7684\u641C\u7D22\u903B\u8F91\uFF0C\u5F88\u53EF\u80FD\u662F\u4F7F\u7528 <code>Object.is(..)</code> \u5DE5\u5177</p></blockquote><h2 id="simd" tabindex="-1">SIMD <a class="header-anchor" href="#simd" aria-hidden="true">#</a></h2><blockquote><p>\u6E29\u99A8\u63D0\u793A\uFF1ASIMD \u5728 web \u4E0A\u516C\u5F00\u7684\u64CD\u4F5C\u57FA\u4E8E SIMD.js \u64CD\u4F5C\uFF0C\u5728 WebAssembly \uFF08\u540E\u9762\u4F1A\u8BF4\uFF09\u4E8E\u6D3B\u52A8\u5F00\u53D1\u72B6\u6001</p></blockquote><p><a href="https://baike.baidu.com/item/SIMD/3412835?fr=aladdin" target="_blank" rel="noopener noreferrer">SIMD</a>\uFF08Single Instruction, Multiple Data\uFF09 API \u66B4\u9732\u4E86\u53EF\u4EE5\u540C\u65F6\u5BF9\u591A\u4E2A\u6570\u5B57\u503C\u8FD0\u7B97\u7684\u5404\u79CD\u5E95\u5C42\uFF08<code>CPU</code>\uFF09\u6307\u4EE4\u3002</p><p>\u6BD4\u5982\uFF0C\u4F60\u53EF\u4EE5\u6307\u5B9A \u4E24\u4E2A<a href="https://baike.baidu.com/item/%E5%90%91%E9%87%8F/1396519?fr=aladdin" target="_blank" rel="noopener noreferrer">\u5411\u91CF</a>\uFF0C\u5176\u4E2D\u5206\u522B\u6709 4 \u4E2A\u6216 8 \u4E2A\u6570\u5B57\uFF0C\u628A\u5B83\u4EEC\u7684\u5BF9\u5E94\u5143\u7D20\u4E00\u6B21\u5168\u90E8\u76F8\u4E58\uFF08\u6570\u636E\u5E76\u884C\uFF01\uFF09</p><div class="language-js"><pre><code><span class="token keyword">var</span> v1 <span class="token operator">=</span> <span class="token constant">SIMD</span><span class="token punctuation">.</span><span class="token function">float32x4</span><span class="token punctuation">(</span><span class="token number">3.14159</span><span class="token punctuation">,</span> <span class="token number">21.0</span><span class="token punctuation">,</span> <span class="token number">32.3</span><span class="token punctuation">,</span> <span class="token number">55.55</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> v2 <span class="token operator">=</span> <span class="token constant">SIMD</span><span class="token punctuation">.</span><span class="token function">float32x4</span><span class="token punctuation">(</span><span class="token number">2.1</span><span class="token punctuation">,</span> <span class="token number">3.2</span><span class="token punctuation">,</span> <span class="token number">4.3</span><span class="token punctuation">,</span> <span class="token number">5.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">SIMD</span><span class="token punctuation">.</span>float32x4<span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [6.597339, 67.2, 138.89, 299.97]</span>
</code></pre></div><h2 id="webassembly-wasm" tabindex="-1">WebAssembly (WASM) <a class="header-anchor" href="#webassembly-wasm" aria-hidden="true">#</a></h2><p>JavaScript \u8BED\u8A00\u8BBE\u8BA1\u4FEE\u6539\u4E0A\u7684\u6700\u5927\u538B\u529B\u4E4B\u4E00\u5C31\u662F\u9700\u8981\u6210\u4E3A\u66F4\u9002\u5408\u4ECE\u5176\u4ED6\u8BED\u8A00\uFF08\u6BD4\u5982 <code>C/C++</code>\u3001<code>ClojureScript</code> \u7B49\uFF09\u53D8\u6362 / \u4EA4\u53C9\u7F16\u8BD1\u7684\u76EE\u6807\u8BED\u8A00\u3002\u663E\u7136\uFF0C\u4EE3\u7801\u4F5C\u4E3A JavaScript \u8FD0\u884C\u7684\u6027\u80FD\u95EE\u9898\u4E00\u76F4\u662F\u4E00\u4E2A\u4E3B\u8981\u5173\u6CE8\u70B9\u3002</p><p>\u51E0\u5E74\u524D\u4E00\u7EC4 <code>Mozilla</code> \u5F00\u53D1\u8005\u4E3A JavaScript \u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u601D\u8DEF\uFF0C\u79F0\u4E3A <code>ASM.js</code>\u3002<code>ASM.js</code> \u662F\u5408\u6CD5 JavaScript \u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u8FD9\u4E2A\u5B50\u96C6\u6700\u4E25\u683C\u5730\u9650\u5236\u4E86\u90A3\u4E9B\u4F7F\u5F97 JavaScript \u5F15\u64CE\u96BE\u4E8E\u4F18\u5316\u7684\u884C\u4E3A\u3002\u7ED3\u679C\u5C31\u662F\u517C\u5BB9 <code>ASM.js</code> \u7684\u4EE3\u7801\u8FD0\u884C\u5728\u652F\u6301 <code>ASM</code> \u7684\u5F15\u64CE\u4E0A\u65F6\u6548\u7387\u6709\u5DE8\u5927\u7684\u63D0\u5347\uFF0C\u51E0\u4E4E\u4E0E\u539F\u751F\u4F18\u5316\u7684\u7B49\u4EF7 <code>C</code> \u7A0B\u5E8F\u76F8\u5F53\u3002\u5F88\u591A\u4EBA\u628A <code>ASM.js</code> \u770B\u4F5C\u662F\u9AD8\u6027\u80FD\u8981\u6C42 JavaScript \u5E94\u7528\u4F7F\u7528 JavaScript \u7684\u6700\u53EF\u80FD\u652F\u67F1\u3002</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0C\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u4EE3\u7801\u7684\u6240\u6709\u8DEF\u5F84\u90FD\u901A\u8FC7 JavaScript\u3002</p><p>\u76F4\u5230 <code>WASM</code> \u53D1\u5E03\u4E4B\u524D\uFF0C\u662F\u8FD9\u6837\u7684\u3002<code>WASM</code> \u4E3A\u5176\u4ED6\u8BED\u8A00\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u65F6\u73AF\u5883\u4E2D\u8FD0\u884C\u63D0\u4F9B\u4E86\u4E00\u6761\u65B0\u8DEF\u5F84\uFF0C\u4E0D\u9700\u8981\u5148\u901A\u8FC7 JavaScript\u3002\u672C\u8D28\u4E0A\u8BF4\uFF0C\u5982\u679C <code>WASM</code> \u53D1\u5E03\uFF0CJavaScript \u5F15\u64CE\u5C06\u4F1A\u83B7\u5F97\u6267\u884C\u4E8C\u8FDB\u5236\u683C\u5F0F\u4EE3\u7801\u7684\u65B0\u80FD\u529B\uFF0C\u8FD9\u79CD\u683C\u5F0F\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u7C7B\u4F3C\u4E8E\u5B57\u8282\u7801\uFF08<code>bytecode</code>\uFF0C\u5C31\u50CF <code>JVM</code> \u4E0A\u8FD0\u884C\u7684\u90A3\u6837\uFF09\u3002</p><p><code>WASM</code> \u63D0\u51FA\u4E86\u4E00\u79CD\u4EE3\u7801\u7684\u9AD8\u5EA6\u538B\u7F29 <code>AST</code>\uFF08\u8BED\u6CD5\u6811\uFF09\u4E8C\u8FDB\u5236\u8868\u793A\u683C\u5F0F\uFF0C\u7136\u540E\u53EF\u4EE5\u76F4\u63A5\u5411 JavaScript \u5F15\u64CE\u53D1\u51FA\u6307\u4EE4\uFF0C\u800C\u5B83\u7684\u57FA\u7840\u7ED3\u6784\uFF0C\u4E0D\u9700\u8981\u901A\u8FC7 JavaScript \u89E3\u6790\uFF0C\u751A\u81F3\u4E0D\u9700\u8981\u7B26\u5408 JavaScript \u7684\u89C4\u5219\u3002\u50CF <code>C</code> \u6216 <code>C++</code> \u8FD9\u6837\u7684\u8BED\u8A00\u53EF\u4EE5\u88AB\u76F4\u63A5\u7F16\u8BD1\u4E3A <code>WASM</code> \u683C\u5F0F\u800C\u4E0D\u662F <code>ASM.js</code>\uFF0C\u8FD9\u6837\u901A\u8FC7\u8DF3\u8FC7 JavaScript \u89E3\u6790\u4F1A\u83B7\u5F97\u989D\u5916\u7684\u901F\u5EA6\u4F18\u52BF\u3002</p><p><code>WASM</code> \u7684\u8FD1\u671F\u76EE\u6807\u662F\u4E0E <code>ASM.js</code> \u548C\u771F\u6B63 JavaScript \u76F8\u5F53\u3002\u4F46\u6700\u7EC8\u7684\u9884\u671F\u662F\uFF0C<code>WASM</code> \u5C06\u4F1A\u589E\u52A0\u65B0\u529F\u80FD\uFF0C\u800C\u8FD9\u4E9B\u65B0\u529F\u80FD\u662F\u8D85\u51FA JavaScript \u6240\u80FD\u505A\u7684\u3002\u6BD4\u5982\u50CF\u7EBF\u7A0B\u8FD9\u6837\u7684\u6FC0\u8FDB\u529F\u80FD\u7ED9 JavaScript \u5E26\u6765\u4E86\u5F88\u5927\u538B\u529B\u2014\u2014\u8FD9\u4E2A\u6539\u53D8\u5C06\u4F1A\u7ED9\u6574\u4E2A JavaScript \u751F\u6001\u7CFB\u7EDF\u5E26\u6765\u5DE8\u5927\u9707\u64BC\u2014\u2014\u5C06\u5F88\u53EF\u80FD\u4F1A\u6210\u4E3A\u4E00\u4E2A <code>WASM</code> \u6269\u5C55\uFF0C\u7F13\u89E3 JavaScript \u672C\u8EAB\u7684\u4FEE\u6539\u538B\u529B\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u4E2A\u65B0\u7684\u53D1\u5C55\u56FE\u666F\u4E3A\u5F88\u591A\u8BED\u8A00\u6253\u5F00\u4E86\u65B0\u7684\u9053\u8DEF\uFF0C\u4F7F\u5176\u80FD\u591F\u8FDB\u5165 <code>Web</code> \u8FD0\u884C\u65F6\u3002\u5BF9\u4E8E <code>Web</code> \u5E73\u53F0\u6765\u8BF4\uFF0C\u8FD9\u662F\u4E00\u4E2A\u4EE4\u4EBA\u6FC0\u52A8\u7684\u65B0\u7279\u6027\u3002</p><p><code>WASM</code> \u7684\u652F\u6301\u8005\u8BA4\u4E3A\uFF0C<code>WASM</code> \u7684\u6210\u529F\u5C06\u610F\u5473\u7740 JavaScript \u7684\u8BBE\u8BA1\u53EF\u4EE5\u514D\u4E8E\u88AB\u4E0D\u73B0\u5B9E\u7684\u9700\u6C42\u6495\u88C2\u7684\u538B\u529B\u3002\u91CD\u70B9\u662F\uFF0C\u5BF9\u4E8E\u5E94\u7528\u4E2D\u7684\u9AD8\u6027\u80FD\u90E8\u5206 <code>WASM</code> \u662F\u66F4\u597D\u7684\u76EE\u6807\uFF0C\u53EF\u4EE5\u7528\u5176\u4ED6\u591A\u79CD\u8BED\u8A00\u7F16\u5199\u3002</p><p>\u6709\u8DA3\u7684\u662F\uFF0CJavaScript \u662F\u672A\u6765\u4E0D\u592A\u53EF\u80FD\u8F6C\u5316\u4E3A <code>WASM</code> \u7684\u8BED\u8A00\u4E4B\u4E00\u3002\u672A\u6765\u7684\u4FEE\u6539\u53EF\u80FD\u4F1A\u523B\u5212\u51FA JavaScript \u7684\u4E00\u4E2A\u9002\u5408\u4E8E\u8F6C\u5316\u4E3A <code>WASM</code> \u7684\u5B50\u96C6\uFF0C\u4F46\u662F\u8FD9\u6761\u53D1\u5C55\u8DEF\u5F84\u7684\u4F18\u5148\u7EA7\u4F3C\u4E4E\u5E76\u4E0D\u9AD8\u3002</p><p>\u5C3D\u7BA1 JavaScript \u5F88\u53EF\u80FD\u4E0D\u4F1A\u8F6C\u5316\u4E3A <code>WASM</code>\uFF0C\u4F46\u662F JavaScript \u4EE3\u7801\u548C <code>WASM</code> \u4EE3\u7801\u5C06\u80FD\u591F\u6700\u5927\u7A0B\u5EA6\u5730\u4EA4\u4E92\uFF0C\u5C31\u50CF\u73B0\u5728\u7684\u6A21\u5757\u4EA4\u4E92\u4E00\u6837\u81EA\u7136\u3002\u4F60\u53EF\u4EE5\u8BBE\u60F3\u8C03\u7528\u50CF <code>foo()</code> \u8FD9\u6837\u7684 JavaScript \u51FD\u6570\uFF0C\u800C\u5B9E\u9645\u4E0A\u8C03\u7528\u7684\u662F\u4E00\u4E2A\u540C\u540D\u7684\u80FD\u591F\u5728\u4F60\u7684\u5176\u4F59 JavaScript \u7684\u9650\u5236\u4E4B\u5916\u826F\u597D\u8FD0\u884C\u7684 <code>WASM</code> \u51FD\u6570\u3002</p><p>\u5F53\u4E0B\u7528 JavaScript \u7F16\u5199\u7684\u4EE3\u7801\u5C06\u53EF\u80FD\u7EE7\u7EED\u7528\u5B83\u7F16\u5199\uFF0C\u81F3\u5C11\u5728\u53EF\u89C1\u7684\u672A\u6765\u662F\u8FD9\u6837\u3002<code>transpile</code> \u5230 JavaScript \u7684\u4E1C\u897F\u5C06\u53EF\u80FD\u6700\u7EC8\u8003\u8651\u4F7F\u7528 <code>WASM</code> \u66FF\u4EE3\u3002\u5BF9\u4E8E\u90A3\u4E9B\u6027\u80FD\u8981\u6C42\u6781\u9AD8\uFF0C\u4E0D\u80FD\u5BB9\u5FCD\u591A\u5C42\u62BD\u8C61\u7684\u529F\u80FD\uFF0C\u6700\u6709\u53EF\u80FD\u7684\u9009\u62E9\u662F\u5BFB\u627E\u5408\u9002\u7684\u975E JavaScript \u8BED\u8A00\u7F16\u5199\uFF0C\u7136\u540E\u4EE5 <code>WASM</code> \u4E3A\u76EE\u6807\u3002</p><p>\u8FD9\u4E2A\u8F6C\u53D8\u53EF\u80FD\u4F1A\u6BD4\u8F83\u7F13\u6162\uFF0C\u9700\u8981\u51E0\u5E74\u624D\u80FD\u5B8C\u6210\u3002<code>WASM</code> \u8FDB\u5165\u6240\u6709\u4E3B\u6D41\u6D4F\u89C8\u5668\u5E73\u53F0\u53EF\u80FD\u81F3\u5C11\u4E5F\u9700\u8981\u6570\u5E74\u3002\u540C\u65F6\uFF0C<a href="https://github.com/WebAssembly" target="_blank" rel="noopener noreferrer">WASM \u9879\u76EE</a>\u5DF2\u7ECF\u6709\u4E00\u4E2A\u65E9\u671F\u7684 <code>polyfill</code> \u5BF9\u5176\u57FA\u672C\u5B97\u65E8\u63D0\u4F9B\u4E86\u6982\u5FF5\u8BC1\u660E\u3002</p><p>\u4F46\u968F\u7740\u65F6\u95F4\u7684\u53D1\u5C55\uFF0C\u4E5F\u968F\u7740 <code>WASM</code> \u5B66\u5230\u66F4\u591A\u975E JavaScript \u6280\u5DE7\uFF0C\u5F88\u53EF\u80FD\u5F53\u524D\u4E00\u4E9B JavaScript \u7684\u4E1C\u897F\u4F1A\u88AB\u91CD\u6784\u4E3A\u4EE5 <code>WASM</code> \u4E3A\u76EE\u6807\u7684\u8BED\u8A00\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u6846\u67B6\u3001\u6E38\u620F\u5F15\u64CE\u4EE5\u53CA\u5176\u4ED6\u5E38\u7528\u5DE5\u5177\u4E2D\u6027\u80FD\u654F\u611F\u7684\u90E8\u5206\u90FD\u53EF\u80FD\u4ECE\u8FD9\u6837\u7684\u8F6C\u53D8\u4E2D\u83B7\u76CA\u3002\u5728\u81EA\u5DF1\u7684 <code>Web</code> \u5E94\u7528\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u5DE5\u5177\u7684\u5F00\u53D1\u8005\u5F88\u53EF\u80FD\u4E0D\u4F1A\u6CE8\u610F\u5230\u4F7F\u7528\u548C\u96C6\u6210\u8FC7\u7A0B\u4E2D\u7684\u5DEE\u522B\uFF0C\u53EA\u4F1A\u81EA\u52A8\u53D7\u76CA\u4E8E\u6027\u80FD\u548C\u529F\u80FD\u7684\u63D0\u9AD8\u3002</p><p>\u53EF\u4EE5\u786E\u5B9A\u7684\u662F\uFF0C\u968F\u7740\u65F6\u95F4\u7684\u53D1\u5C55 <code>WASM</code> \u4F1A\u8D8A\u6765\u8D8A\u771F\u5B9E\uFF0C\u5BF9 Javascript \u7684\u53D1\u5C55\u65B9\u5411\u548C\u8BBE\u8BA1\u7684\u5F71\u54CD\u4E5F\u4F1A\u8D8A\u6765\u8D8A\u5927\u3002</p><h2 id="\u611F\u8C22" tabindex="-1">\u611F\u8C22 <a class="header-anchor" href="#\u611F\u8C22" aria-hidden="true">#</a></h2><ul><li>\u6587\u4E2D\u5982\u6709\u9519\u8BEF\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u6279\u8BC4\u6307\u6B63\u3002</li><li>\u5982\u679C\u672C\u6587\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u5C31\u70B9\u4E2A <a href="https://github.com/yanxugong/blog" target="_blank" rel="noopener noreferrer">Star</a> \u652F\u6301\u4E0B\u5427\uFF01\u611F\u8C22\u9605\u8BFB\u3002</li></ul>`,49),p=[t];function c(r,l,d,i,u,k){return s(),n("div",null,p)}var b=a(o,[["render",c]]);export{v as __pageData,b as default};
