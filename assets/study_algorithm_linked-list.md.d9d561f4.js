import{_ as n,c as a,o as s,d as e}from"./app.c22de5e0.js";const g='{"title":"\u300C\u91CD\u5B66\u7B97\u6CD5\u300D\u5FEB\u901F\u638C\u63E1\u94FE\u8868\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"206. \u53CD\u8F6C\u94FE\u8868","slug":"_206-\u53CD\u8F6C\u94FE\u8868"},{"level":3,"title":"\u9898\u76EE","slug":"\u9898\u76EE"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"},{"level":3,"title":"\u590D\u6742\u5EA6","slug":"\u590D\u6742\u5EA6"},{"level":2,"title":"92. \u53CD\u8F6C\u94FE\u8868 II","slug":"_92-\u53CD\u8F6C\u94FE\u8868-ii"},{"level":3,"title":"\u9898\u76EE","slug":"\u9898\u76EE-1"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF-1"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-1"},{"level":3,"title":"\u590D\u6742\u5EA6","slug":"\u590D\u6742\u5EA6-1"},{"level":2,"title":"24. \u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9","slug":"_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9"},{"level":3,"title":"\u9898\u76EE","slug":"\u9898\u76EE-2"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF-2"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-2"},{"level":3,"title":"\u590D\u6742\u5EA6","slug":"\u590D\u6742\u5EA6-2"},{"level":2,"title":"25. K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868","slug":"_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868"},{"level":3,"title":"\u9898\u76EE","slug":"\u9898\u76EE-3"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF-3"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801-3"},{"level":3,"title":"\u590D\u6742\u5EA6","slug":"\u590D\u6742\u5EA6-3"},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0"},{"level":2,"title":"\u611F\u8C22","slug":"\u611F\u8C22"}],"relativePath":"study/algorithm/linked-list.md"}',t={},p=e(`<h1 id="\u300C\u91CD\u5B66\u7B97\u6CD5\u300D\u5FEB\u901F\u638C\u63E1\u94FE\u8868\u9898" tabindex="-1">\u300C\u91CD\u5B66\u7B97\u6CD5\u300D\u5FEB\u901F\u638C\u63E1\u94FE\u8868\u9898 <a class="header-anchor" href="#\u300C\u91CD\u5B66\u7B97\u6CD5\u300D\u5FEB\u901F\u638C\u63E1\u94FE\u8868\u9898" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u7B97\u6CD5\u662F<strong>\u7A0B\u5E8F\u5458\u5FC5\u987B\u4FEE\u70BC</strong>\u7684\u4E00\u95E8<strong>\u5185\u529F</strong>\uFF08\u4F8B\u5982\uFF1A\u5F20\u65E0\u5FCC\u4FEE\u70BC\u4E5D\u9633\u795E\u529F\uFF09\uFF0C\u66F4\u662F\u963F\u91CC\u3001\u817E\u8BAF\u3001\u5B57\u8282\u8FD9\u4E9B<strong>\u5927\u5382\u9762\u8BD5</strong>\u8003\u5BDF\u7684\u91CD\u4E2D\u4E4B\u91CD\u3002\u4E3A\u4E86\u653B\u514B\u7B97\u6CD5\u9762\u8BD5\u62FF\u4E0B\u5FC3\u4EEA Offer\uFF0C\u5F88\u591A\u7A0B\u5E8F\u5458\u9762\u8BD5\u524D\u90FD\u4F1A\u5728 LeetCode \u4E0A\u75AF\u72C2\u5237\u9898\u5907\u6218\u9762\u8BD5\u3002</p><p>\u7136\u800C\u9762\u5BF9<strong>\u5237\u4E0D\u5B8C</strong>\u7684\u9898\u76EE\uFF0C\u6211\u4EEC\u5F88\u96BE\u5728\u77ED\u65F6\u95F4\u5185\u5168\u90E8\u719F\u7EC3\u638C\u63E1\uFF0C\u90A3\u8BE5\u5982\u4F55<strong>\u9AD8\u6548\u51C6\u5907</strong>\uFF0C<strong>\u5FEB\u901F\u638C\u63E1</strong>\u5237\u9898\u3001\u89E3\u9898\u6280\u5DE7\uFF0C<strong>\u4ECE\u5BB9\u5E94\u5BF9</strong>\u5373\u5C06\u5230\u6765\u7684\u7B97\u6CD5\u9762\u8BD5\uFF1F</p><p>\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\u51FA\u53D1\uFF1A</p><ul><li>\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u94FE\u8868\u3001\u961F\u5217\u3001\u6811\u3001\u6808\u3001\u961F\u5217\u3001\u56FE\u3001\u524D\u7F00\u6811\u3001\u5206\u6BB5\u6811\u548C\u6811\u72B6\u6570\u7EC4\u7B49<strong>\u6570\u636E\u7ED3\u6784</strong>\uFF0C\u9010\u4E2A\u51FB\u7834\u3002</li><li>\u603B\u7ED3<strong>\u5E38\u7528\u7B97\u6CD5</strong>\uFF0C\u5F52\u5E76\u3001\u5FEB\u6392\u3001\u62D3\u6251\uFF0C\u5982\u4F55\u4E8C\u5206\u67E5\u627E\u3001\u9012\u5F52\u3001\u56DE\u6EAF\uFF0C\u4EE5\u53CA\u5E7F\u5EA6\u4E0E\u6DF1\u5EA6\u4F18\u5148\u3001\u52A8\u6001\u89C4\u5212\u7B49\u3002</li><li><strong>\u523B\u610F\u7EC3\u4E60</strong>\uFF0C\u9488\u5BF9\u5177\u6709\u4EE3\u8868\u6027\u7684\u771F\u9898\u6DF1\u5165\u5256\u6790\uFF0C\u5B8C\u5584\u81EA\u5DF1\u7684\u7B97\u6CD5\u77E5\u8BC6\u4F53\u7CFB\u3002</li></ul><blockquote><p>\u6E29\u99A8\u63D0\u793A\uFF1A\u672C\u6587\u4E3B\u8981\u8BF4\u4E00\u8BF4<strong>\u94FE\u8868\u7C7B</strong>\u9898\u76EE\u7684\u89E3\u51B3\u601D\u8DEF\u548C\u4EE3\u7801\u3002\u9002\u5408<strong>\u7B97\u6CD5\u521D\u5B66\u8005</strong>\u3001<strong>\u793E\u62DB\u51C6\u5907\u9762\u8BD5</strong>\u548C<strong>\u5BF9\u7B97\u6CD5\u611F\u5174\u8DA3</strong>\u7684\u540C\u5B66\u4EEC\u3002</p></blockquote><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/684d369a9cd5412b8b26317bb8dbdeea~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h2 id="_206-\u53CD\u8F6C\u94FE\u8868" tabindex="-1">206. \u53CD\u8F6C\u94FE\u8868 <a class="header-anchor" href="#_206-\u53CD\u8F6C\u94FE\u8868" aria-hidden="true">#</a></h2><h3 id="\u9898\u76EE" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a></h3><p>\u6765\u6E90\uFF1A<a href="https://leetcode-cn.com/problems/reverse-linked-list/" target="_blank" rel="noopener noreferrer">\u529B\u6263\uFF08LeetCode\uFF09206 \u53CD\u8F6C\u94FE\u8868</a></p><p>\u96BE\u5EA6\uFF1A\u7B80\u5355</p><div class="language-"><pre><code>\u53CD\u8F6C\u4E00\u4E2A\u5355\u94FE\u8868\u3002

\u793A\u4F8B:

\u8F93\u5165: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL
\u8F93\u51FA: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL

\u8FDB\u9636:

\u4F60\u53EF\u4EE5\u8FED\u4EE3\u6216\u9012\u5F52\u5730\u53CD\u8F6C\u94FE\u8868\u3002\u4F60\u80FD\u5426\u7528\u4E24\u79CD\u65B9\u6CD5\u89E3\u51B3\u8FD9\u9053\u9898\uFF1F
</code></pre></div><h3 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h3><p>\u5047\u8BBE\u5B58\u5728\u94FE\u8868 1 \u2192 2 \u2192 3 \u2192 \u2205 \uFF0C\u6211\u4EEC\u60F3\u8981\u628A\u5B83\u6539\u6210 \u2205 \u2190 1 \u2190 2 \u2190 3 \u3002</p><ul><li>\u5728\u904D\u5386\u5217\u8868\u65F6\uFF0C\u5C06\u5F53\u524D\u8282\u70B9\u7684 <code>next</code> \u6307\u9488\u6539\u4E3A\u6307\u5411\u524D\u4E00\u4E2A\u5143\u7D20\u3002</li><li>\u7531\u4E8E\u8282\u70B9\u6CA1\u6709\u5F15\u7528\u5176\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF0C\u56E0\u6B64\u5FC5\u987B\u4E8B\u5148\u5B58\u50A8\u5176\u524D\u4E00\u4E2A\u5143\u7D20\u3002</li><li>\u5728\u66F4\u6539\u5F15\u7528\u4E4B\u524D\uFF0C\u8FD8\u9700\u8981\u53E6\u4E00\u4E2A\u6307\u9488\u6765\u5B58\u50A8\u4E0B\u4E00\u4E2A\u8282\u70B9\u3002</li><li>\u4E0D\u8981\u5FD8\u8BB0\u5728\u6700\u540E\u8FD4\u56DE\u65B0\u7684\u5934\u5F15\u7528\uFF01</li></ul><h3 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * @param {ListNode} head
 * @return {ListNode}
 */</span>

<span class="token keyword">let</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextCache <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> nextCache<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u590D\u6742\u5EA6" tabindex="-1">\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u590D\u6742\u5EA6" aria-hidden="true">#</a></h3><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u5176\u4E2D n \u662F\u94FE\u8868\u7684\u957F\u5EA6\u3002\u9700\u8981\u904D\u5386\u94FE\u8868\u4E00\u6B21\u3002</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)\u3002</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88b8cc83b2a146d693cdbe42a3eb834b~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h2 id="_92-\u53CD\u8F6C\u94FE\u8868-ii" tabindex="-1">92. \u53CD\u8F6C\u94FE\u8868 II <a class="header-anchor" href="#_92-\u53CD\u8F6C\u94FE\u8868-ii" aria-hidden="true">#</a></h2><h3 id="\u9898\u76EE-1" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE-1" aria-hidden="true">#</a></h3><p>\u6765\u6E90\uFF1A<a href="https://leetcode-cn.com/problems/reverse-linked-list-ii/" target="_blank" rel="noopener noreferrer">\u529B\u6263\uFF08LeetCode\uFF0992 \u53CD\u8F6C\u94FE\u8868 II</a></p><p>\u96BE\u5EA6\uFF1A\u4E2D\u7B49</p><div class="language-"><pre><code>\u53CD\u8F6C\u4ECE\u4F4D\u7F6E m \u5230 n \u7684\u94FE\u8868\u3002\u8BF7\u4F7F\u7528\u4E00\u8D9F\u626B\u63CF\u5B8C\u6210\u53CD\u8F6C\u3002

\u8BF4\u660E:

1 \u2264\xA0m\xA0\u2264\xA0n\xA0\u2264 \u94FE\u8868\u957F\u5EA6\u3002

\u793A\u4F8B:


\u8F93\u5165: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL, m = 2, n = 4
\u8F93\u51FA: 1-&gt;4-&gt;3-&gt;2-&gt;5-&gt;NULL
</code></pre></div><h3 id="\u601D\u8DEF-1" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF-1" aria-hidden="true">#</a></h3><p>\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u53CD\u8F6C\u4E0B\u56FE\u4E2D\u7684\u84DD\u8272\u533A\u57DF\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a3553ab27874975903863ff24285876~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u4F7F\u7528\u300C<code>206. \u53CD\u8F6C\u94FE\u8868</code>\u300D\u7684\u89E3\u6CD5\uFF0C\u53CD\u8F6C left \u5230 right \u90E8\u5206\u4EE5\u540E\uFF0C\u518D\u62FC\u63A5\u8D77\u6765\u3002\u6211\u4EEC\u8FD8\u9700\u8981\u8BB0\u5F55 left \u7684\u524D\u4E00\u4E2A\u8282\u70B9\uFF0C\u548C right \u7684\u540E\u4E00\u4E2A\u8282\u70B9\u3002\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee87ed7a498749e0a62e466577c8eadd~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u7B97\u6CD5\u903B\u8F91\uFF1A</p><ul><li>\u5148\u5C06\u5F85\u53CD\u8F6C\u7684\u533A\u57DF\u53CD\u8F6C\u3002</li><li>\u628A <code>pre</code> \u7684 <code>next</code> \u6307\u9488\u6307\u5411\u53CD\u8F6C\u540E\u7684\u94FE\u8868\u5934\u8282\u70B9\uFF0C\u53CD\u8F6C\u540E\u7684\u94FE\u8868\u5C3E\u8282\u70B9\u7684 <code>next</code> \u6307\u9488\u6307\u5411 <code>succ</code> \u3002</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51c3c2b5769a49998192f1d71d6a1d95~tplv-k3u1fbpfcp-watermark.image" alt=""></p><blockquote><p>\u6E29\u99A8\u63D0\u793A\uFF1A\u53EF\u4EE5\u81EA\u5DF1\u753B\u56FE\u7406\u6E05\u601D\u8DEF\uFF0C\u540E\u9762\u7F16\u7801\u4F1A\u66F4\u987A\u7545\u3002</p></blockquote><h3 id="\u4EE3\u7801-1" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-1" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseBetween</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u56E0\u4E3A\u5934\u8282\u70B9\u6709\u53EF\u80FD\u53D1\u751F\u53D8\u5316\uFF0C\u4F7F\u7528\u865A\u62DF\u5934\u8282\u70B9\u53EF\u4EE5\u907F\u514D\u590D\u6742\u7684\u5206\u7C7B\u8BA8\u8BBA</span>
  <span class="token keyword">const</span> dummyNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dummyNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>

  <span class="token keyword">let</span> pre <span class="token operator">=</span> dummyNode<span class="token punctuation">;</span>
  <span class="token comment">// \u7B2C 1 \u6B65\uFF1A\u4ECE\u865A\u62DF\u5934\u8282\u70B9\u8D70 left - 1 \u6B65\uFF0C\u6765\u5230 left \u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9</span>
  <span class="token comment">// \u5EFA\u8BAE\u5199\u5728 for \u5FAA\u73AF\u91CC\uFF0C\u8BED\u4E49\u6E05\u6670</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7B2C 2 \u6B65\uFF1A\u4ECE pre \u518D\u8D70 right - left + 1 \u6B65\uFF0C\u6765\u5230 right \u8282\u70B9</span>
  <span class="token keyword">let</span> rightNode <span class="token operator">=</span> pre<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rightNode <span class="token operator">=</span> rightNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7B2C 3 \u6B65\uFF1A\u5207\u65AD\u51FA\u4E00\u4E2A\u5B50\u94FE\u8868\uFF08\u622A\u53D6\u94FE\u8868\uFF09</span>
  <span class="token keyword">let</span> leftNode <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token keyword">let</span> curr <span class="token operator">=</span> rightNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

  <span class="token comment">// \u6CE8\u610F\uFF1A\u5207\u65AD\u94FE\u63A5</span>
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  rightNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7B2C 4 \u6B65\uFF1A\u540C\u7B2C 206 \u9898\uFF0C\u53CD\u8F6C\u94FE\u8868\u7684\u5B50\u533A\u95F4</span>
  <span class="token function">reverseLinkedList</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7B2C 5 \u6B65\uFF1A\u63A5\u56DE\u5230\u539F\u6765\u7684\u94FE\u8868\u4E2D</span>
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> rightNode<span class="token punctuation">;</span>
  leftNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curr<span class="token punctuation">;</span>
  <span class="token keyword">return</span> dummyNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">reverseLinkedList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u590D\u6742\u5EA6-1" tabindex="-1">\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u590D\u6742\u5EA6-1" aria-hidden="true">#</a></h3><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u5176\u4E2D n \u662F\u94FE\u8868\u603B\u8282\u70B9\u6570\u3002\u6700\u574F\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u904D\u5386\u6574\u4E2A\u94FE\u8868\u3002</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)\u3002\u53EA\u4F7F\u7528\u5230\u5E38\u6570\u4E2A\u53D8\u91CF\u3002</li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/270424920c0c44dd931c1eb5fbcfadaa~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h2 id="_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1">24. \u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9 <a class="header-anchor" href="#_24-\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a></h2><h3 id="\u9898\u76EE-2" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE-2" aria-hidden="true">#</a></h3><p>\u6765\u6E90\uFF1A<a href="https://leetcode-cn.com/problems/swap-nodes-in-pairs/" target="_blank" rel="noopener noreferrer">\u529B\u6263\uFF08LeetCode\uFF0924 \u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9</a></p><p>\u96BE\u5EA6\uFF1A\u4E2D\u7B49</p><div class="language-"><pre><code>\u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868\uFF0C\u4E24\u4E24\u4EA4\u6362\u5176\u4E2D\u76F8\u90BB\u7684\u8282\u70B9\uFF0C\u5E76\u8FD4\u56DE\u4EA4\u6362\u540E\u7684\u94FE\u8868\u3002

\u4F60\u4E0D\u80FD\u53EA\u662F\u5355\u7EAF\u7684\u6539\u53D8\u8282\u70B9\u5185\u90E8\u7684\u503C\uFF0C\u800C\u662F\u9700\u8981\u5B9E\u9645\u7684\u8FDB\u884C\u8282\u70B9\u4EA4\u6362\u3002

\u793A\u4F8B 1\uFF1A
</code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f877a8b4275420cbe68e92e9722d89e~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2,3,4]
\u8F93\u51FA\uFF1A[2,1,4,3]

\u793A\u4F8B 2\uFF1A

\u8F93\u5165\uFF1Ahead = []
\u8F93\u51FA\uFF1A[]

\u793A\u4F8B 3\uFF1A

\u8F93\u5165\uFF1Ahead = [1]
\u8F93\u51FA\uFF1A[1]

\u63D0\u793A\uFF1A

\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u5728\u8303\u56F4 [0, 100] \u5185

0 &lt;= Node.val &lt;= 100
</code></pre></div><h3 id="\u601D\u8DEF-2" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF-2" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u901A\u8FC7\u9012\u5F52\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u3002</p><p>\u9012\u5F52\u7684\u7EC8\u6B62\u6761\u4EF6\u662F\u94FE\u8868\u4E2D\u6CA1\u6709\u8282\u70B9\uFF0C\u6216\u8005\u94FE\u8868\u4E2D\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\uFF0C\u6B64\u65F6\u65E0\u6CD5\u8FDB\u884C\u4EA4\u6362\u3002</p><p>\u5982\u679C\u94FE\u8868\u4E2D\u81F3\u5C11\u6709\u4E24\u4E2A\u8282\u70B9\uFF0C\u5219\u5728\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u4E4B\u540E\uFF0C\u539F\u59CB\u94FE\u8868\u7684\u5934\u8282\u70B9\u53D8\u6210\u65B0\u7684\u94FE\u8868\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u539F\u59CB\u94FE\u8868\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\u53D8\u6210\u65B0\u7684\u94FE\u8868\u7684\u5934\u8282\u70B9\u3002\u94FE\u8868\u4E2D\u7684\u5176\u4F59\u8282\u70B9\u7684\u4E24\u4E24\u4EA4\u6362\u53EF\u4EE5\u9012\u5F52\u5730\u5B9E\u73B0\u3002\u5728\u5BF9\u94FE\u8868\u4E2D\u7684\u5176\u4F59\u8282\u70B9\u9012\u5F52\u5730\u4E24\u4E24\u4EA4\u6362\u4E4B\u540E\uFF0C\u66F4\u65B0\u8282\u70B9\u4E4B\u95F4\u7684\u6307\u9488\u5173\u7CFB\uFF0C\u5373\u53EF\u5B8C\u6210\u6574\u4E2A\u94FE\u8868\u7684\u4E24\u4E24\u4EA4\u6362\u3002</p><p>\u7528 <code>head</code> \u8868\u793A\u539F\u59CB\u94FE\u8868\u7684\u5934\u8282\u70B9\uFF0C\u65B0\u7684\u94FE\u8868\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u7528 <code>newHead</code> \u8868\u793A\u65B0\u7684\u94FE\u8868\u7684\u5934\u8282\u70B9\uFF0C\u539F\u59CB\u94FE\u8868\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u5219\u539F\u59CB\u94FE\u8868\u4E2D\u7684\u5176\u4F59\u8282\u70B9\u7684\u5934\u8282\u70B9\u662F <code>newHead.next</code>\u3002\u4EE4 <code>head.next = swapPairs(newHead.next)</code>\uFF0C\u8868\u793A\u5C06\u5176\u4F59\u8282\u70B9\u8FDB\u884C\u4E24\u4E24\u4EA4\u6362\uFF0C\u4EA4\u6362\u540E\u7684\u65B0\u7684\u5934\u8282\u70B9\u4E3A <code>head</code> \u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u3002\u7136\u540E\u4EE4 <code>newHead.next = head</code>\uFF0C\u5373\u5B8C\u6210\u4E86\u6240\u6709\u8282\u70B9\u7684\u4EA4\u6362\u3002\u6700\u540E\u8FD4\u56DE\u65B0\u7684\u94FE\u8868\u7684\u5934\u8282\u70B9 <code>newHead</code>\u3002</p><h3 id="\u4EE3\u7801-2" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-2" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * @param {ListNode} head
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> newHead <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span>newHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
  newHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u590D\u6742\u5EA6-2" tabindex="-1">\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u590D\u6742\u5EA6-2" aria-hidden="true">#</a></h3><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u5176\u4E2D n \u662F\u94FE\u8868\u7684\u8282\u70B9\u6570\u91CF\u3002\u9700\u8981\u5BF9\u6BCF\u4E2A\u8282\u70B9\u8FDB\u884C\u66F4\u65B0\u6307\u9488\u7684\u64CD\u4F5C\u3002</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u5176\u4E2D n \u662F\u94FE\u8868\u7684\u8282\u70B9\u6570\u91CF\u3002</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2835e03638542f491831a64fff60fc2~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h2 id="_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" tabindex="-1">25. K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868 <a class="header-anchor" href="#_25-k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868" aria-hidden="true">#</a></h2><h3 id="\u9898\u76EE-3" tabindex="-1">\u9898\u76EE <a class="header-anchor" href="#\u9898\u76EE-3" aria-hidden="true">#</a></h3><p>\u6765\u6E90\uFF1A<a href="https://leetcode-cn.com/problems/reverse-nodes-in-k-group/" target="_blank" rel="noopener noreferrer">\u529B\u6263\uFF08LeetCode\uFF0925 K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868</a></p><p>\u96BE\u5EA6\uFF1A\u56F0\u96BE</p><div class="language-"><pre><code>\u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\uFF0C\u6BCF\xA0k\xA0\u4E2A\u8282\u70B9\u4E00\u7EC4\u8FDB\u884C\u7FFB\u8F6C\uFF0C\u8BF7\u4F60\u8FD4\u56DE\u7FFB\u8F6C\u540E\u7684\u94FE\u8868\u3002

k\xA0\u662F\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C\u5B83\u7684\u503C\u5C0F\u4E8E\u6216\u7B49\u4E8E\u94FE\u8868\u7684\u957F\u5EA6\u3002

\u5982\u679C\u8282\u70B9\u603B\u6570\u4E0D\u662F\xA0k\xA0\u7684\u6574\u6570\u500D\uFF0C\u90A3\u4E48\u8BF7\u5C06\u6700\u540E\u5269\u4F59\u7684\u8282\u70B9\u4FDD\u6301\u539F\u6709\u987A\u5E8F\u3002

\u8FDB\u9636\uFF1A

- \u4F60\u53EF\u4EE5\u8BBE\u8BA1\u4E00\u4E2A\u53EA\u4F7F\u7528\u5E38\u6570\u989D\u5916\u7A7A\u95F4\u7684\u7B97\u6CD5\u6765\u89E3\u51B3\u6B64\u95EE\u9898\u5417\uFF1F
- \u4F60\u4E0D\u80FD\u53EA\u662F\u5355\u7EAF\u7684\u6539\u53D8\u8282\u70B9\u5185\u90E8\u7684\u503C\uFF0C\u800C\u662F\u9700\u8981\u5B9E\u9645\u8FDB\u884C\u8282\u70B9\u4EA4\u6362\u3002
\xA0

\u793A\u4F8B 1\uFF1A
</code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1541f4c7b514d338ff390c5adc99976~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2,3,4,5], k = 2
\u8F93\u51FA\uFF1A[2,1,4,3,5]

\u793A\u4F8B 2\uFF1A
</code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36638d1e37e64e58968d3136d7230d6c~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><div class="language-"><pre><code>\u8F93\u5165\uFF1Ahead = [1,2,3,4,5], k = 3
\u8F93\u51FA\uFF1A[3,2,1,4,5]

\u793A\u4F8B 3\uFF1A

\u8F93\u5165\uFF1Ahead = [1,2,3,4,5], k = 1
\u8F93\u51FA\uFF1A[1,2,3,4,5]

\u793A\u4F8B 4\uFF1A

\u8F93\u5165\uFF1Ahead = [1], k = 1
\u8F93\u51FA\uFF1A[1]

\u63D0\u793A\uFF1A

- \u5217\u8868\u4E2D\u8282\u70B9\u7684\u6570\u91CF\u5728\u8303\u56F4 sz \u5185
- 1 &lt;= sz &lt;= 5000
- 0 &lt;= Node.val &lt;= 1000
- 1 &lt;= k &lt;= sz
</code></pre></div><h3 id="\u601D\u8DEF-3" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF-3" aria-hidden="true">#</a></h3><p>\u672C\u9898\u4E3B\u8981\u8003\u67E5\u9762\u8BD5\u8005\u8BBE\u8BA1\u7684\u80FD\u529B\u3002</p><p>\u6211\u4EEC\u9700\u8981\u628A\u94FE\u8868\u8282\u70B9\u6309\u7167 <code>k</code> \u4E2A\u4E00\u7EC4\u5206\u7EC4\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u6307\u9488 <code>head</code> \u4F9D\u6B21\u6307\u5411\u6BCF\u7EC4\u7684\u5934\u8282\u70B9\u3002\u8FD9\u4E2A\u6307\u9488\u6BCF\u6B21\u5411\u524D\u79FB\u52A8 <code>k</code> \u6B65\uFF0C\u76F4\u81F3\u94FE\u8868\u7ED3\u5C3E\u3002\u5BF9\u4E8E\u6BCF\u4E2A\u5206\u7EC4\uFF0C\u6211\u4EEC\u5148\u5224\u65AD\u5B83\u7684\u957F\u5EA6\u662F\u5426\u5927\u4E8E\u7B49\u4E8E <code>k</code>\u3002\u82E5\u662F\uFF0C\u6211\u4EEC\u5C31\u7FFB\u8F6C\u8FD9\u90E8\u5206\u94FE\u8868\uFF0C\u5426\u5219\u4E0D\u9700\u8981\u7FFB\u8F6C\u3002</p><p>\u63A5\u4E0B\u6765\u7684\u95EE\u9898\u5C31\u662F\u5982\u4F55\u7FFB\u8F6C\u4E00\u4E2A\u5206\u7EC4\u5185\u7684\u5B50\u94FE\u8868\u3002\u7FFB\u8F6C\u4E00\u4E2A\u94FE\u8868\u5E76\u4E0D\u96BE\uFF0C\u8FC7\u7A0B\u53EF\u4EE5\u53C2\u8003\u300C<code>206. \u53CD\u8F6C\u94FE\u8868</code>\u300D\u3002\u4F46\u662F\u5BF9\u4E8E\u4E00\u4E2A\u5B50\u94FE\u8868\uFF0C\u9664\u4E86\u7FFB\u8F6C\u5176\u672C\u8EAB\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u5C06\u5B50\u94FE\u8868\u7684\u5934\u90E8\u4E0E\u4E0A\u4E00\u4E2A\u5B50\u94FE\u8868\u8FDE\u63A5\uFF0C\u4EE5\u53CA\u5B50\u94FE\u8868\u7684\u5C3E\u90E8\u4E0E\u4E0B\u4E00\u4E2A\u5B50\u94FE\u8868\u8FDE\u63A5\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5aa9b754654ebe83c95cf35752e6b3~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u56E0\u6B64\uFF0C\u5728\u7FFB\u8F6C\u5B50\u94FE\u8868\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u9700\u8981\u5B50\u94FE\u8868\u5934\u8282\u70B9 <code>head</code>\uFF0C\u8FD8\u9700\u8981\u6709 <code>head</code> \u7684\u4E0A\u4E00\u4E2A\u8282\u70B9 <code>pre</code>\uFF0C\u4EE5\u4FBF\u7FFB\u8F6C\u5B8C\u540E\u628A\u5B50\u94FE\u8868\u518D\u63A5\u56DE <code>pre</code>\u3002</p><p>\u4F46\u662F\u5BF9\u4E8E\u7B2C\u4E00\u4E2A\u5B50\u94FE\u8868\uFF0C\u5B83\u7684\u5934\u8282\u70B9 <code>head</code> \u524D\u9762\u662F\u6CA1\u6709\u8282\u70B9 <code>pre</code> \u7684\u3002\u592A\u9EBB\u70E6\u4E86\uFF01\u96BE\u9053\u53EA\u80FD\u7279\u5224\u4E86\u5417\uFF1F\u7B54\u6848\u662F\u5426\u5B9A\u7684\u3002\u6CA1\u6709\u6761\u4EF6\uFF0C\u6211\u4EEC\u5C31\u521B\u9020\u6761\u4EF6\uFF1B\u6CA1\u6709\u8282\u70B9\uFF0C\u6211\u4EEC\u5C31\u521B\u5EFA\u4E00\u4E2A\u8282\u70B9\u3002\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u8282\u70B9\uFF0C\u628A\u5B83\u63A5\u5230\u94FE\u8868\u7684\u5934\u90E8\uFF0C\u8BA9\u5B83\u4F5C\u4E3A <code>pre</code> \u7684\u521D\u59CB\u503C\uFF0C\u8FD9\u6837 <code>head</code> \u524D\u9762\u5C31\u6709\u4E86\u4E00\u4E2A\u8282\u70B9\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u907F\u5F00\u94FE\u8868\u5934\u90E8\u7684\u8FB9\u754C\u6761\u4EF6\u3002\u8FD9\u4E48\u505A\u8FD8\u6709\u4E00\u4E2A\u597D\u5904\uFF0C\u4E0B\u9762\u6211\u4EEC\u4F1A\u770B\u5230\u3002</p><p>\u53CD\u590D\u79FB\u52A8\u6307\u9488 <code>head</code> \u4E0E <code>pre</code>\uFF0C\u5BF9 <code>head</code> \u6240\u6307\u5411\u7684\u5B50\u94FE\u8868\u8FDB\u884C\u7FFB\u8F6C\uFF0C\u76F4\u5230\u7ED3\u5C3E\uFF0C\u6211\u4EEC\u5C31\u5F97\u5230\u4E86\u7B54\u6848\u3002\u4E0B\u9762\u6211\u4EEC\u8BE5\u8FD4\u56DE\u51FD\u6570\u503C\u4E86\u3002</p><p>\u6709\u7684\u540C\u5B66\u53EF\u80FD\u53D1\u73B0\u8FD9\u53C8\u662F\u4E00\u4EF6\u9EBB\u70E6\u4E8B\uFF1A\u94FE\u8868\u7FFB\u8F6C\u4E4B\u540E\uFF0C\u94FE\u8868\u7684\u5934\u8282\u70B9\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u90A3\u4E48\u5E94\u8BE5\u8FD4\u56DE\u54EA\u4E2A\u8282\u70B9\u5462\uFF1F\u7167\u7406\u6765\u8BF4\uFF0C\u524D <code>k</code> \u4E2A\u8282\u70B9\u7FFB\u8F6C\u4E4B\u540E\uFF0C\u94FE\u8868\u7684\u5934\u8282\u70B9\u5E94\u8BE5\u662F\u7B2C <code>k</code> \u4E2A\u8282\u70B9\u3002\u90A3\u4E48\u8981\u5728\u904D\u5386\u8FC7\u7A0B\u4E2D\u8BB0\u5F55\u7B2C <code>k</code> \u4E2A\u8282\u70B9\u5417\uFF1F\u4F46\u662F\u5982\u679C\u94FE\u8868\u91CC\u9762\u6CA1\u6709 <code>k</code> \u4E2A\u8282\u70B9\uFF0C\u7B54\u6848\u53C8\u8FD8\u662F\u539F\u6765\u7684\u5934\u8282\u70B9\u3002\u6211\u4EEC\u53C8\u591A\u4E86\u4E00\u5927\u5806\u5FAA\u73AF\u548C\u5224\u65AD\u8981\u5199\uFF0C\u592A\u5D29\u6E83\u4E86\uFF01</p><p>\u7B49\u7B49\uFF01\u8FD8\u8BB0\u5F97\u6211\u4EEC\u521B\u5EFA\u4E86\u8282\u70B9 <code>pre</code> \u5417\uFF1F\u8FD9\u4E2A\u8282\u70B9\u4E00\u5F00\u59CB\u88AB\u8FDE\u63A5\u5230\u4E86\u5934\u8282\u70B9\u7684\u524D\u9762\uFF0C\u800C\u65E0\u8BBA\u4E4B\u540E\u94FE\u8868\u6709\u6CA1\u6709\u7FFB\u8F6C\uFF0C\u5B83\u7684 <code>next</code> \u6307\u9488\u90FD\u4F1A\u6307\u5411\u6B63\u786E\u7684\u5934\u8282\u70B9\u3002\u90A3\u4E48\u6211\u4EEC\u53EA\u8981\u8FD4\u56DE\u5B83\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u5C31\u597D\u4E86\u3002\u81F3\u6B64\uFF0C\u95EE\u9898\u89E3\u51B3\u3002</p><h3 id="\u4EE3\u7801-3" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-3" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">myReverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> tail</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token keyword">let</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>prev <span class="token operator">!==</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nex <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    p<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    prev <span class="token operator">=</span> p<span class="token punctuation">;</span>
    p <span class="token operator">=</span> nex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>tail<span class="token punctuation">,</span> head<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseKGroup</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hair <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hair<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> hair<span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tail <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    <span class="token comment">// \u67E5\u770B\u5269\u4F59\u90E8\u5206\u957F\u5EA6\u662F\u5426\u5927\u4E8E\u7B49\u4E8E k</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> hair<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> nex <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">myReverse</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u628A\u5B50\u94FE\u8868\u91CD\u65B0\u63A5\u56DE\u539F\u94FE\u8868</span>
    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    tail<span class="token punctuation">.</span>next <span class="token operator">=</span> nex<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> tail<span class="token punctuation">;</span>
    head <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> hair<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u590D\u6742\u5EA6-3" tabindex="-1">\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u590D\u6742\u5EA6-3" aria-hidden="true">#</a></h3><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u5176\u4E2D n \u4E3A\u94FE\u8868\u7684\u957F\u5EA6\u3002head \u6307\u9488\u4F1A\u5728 O(n/k) \u4E2A\u8282\u70B9\u4E0A\u505C\u7559\uFF0C\u6BCF\u6B21\u505C\u7559\u9700\u8981\u8FDB\u884C\u4E00\u6B21 O(k) \u7684\u7FFB\u8F6C\u64CD\u4F5C\u3002</li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5EFA\u7ACB\u5E38\u6570\u4E2A\u53D8\u91CF\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1">\u53C2\u8003\u6587\u7AE0 <a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a></h2><ul><li><a href="https://leetcode-cn.com/problemset/all/" target="_blank" rel="noopener noreferrer">\u529B\u6263 (LeetCode) - \u9898\u5E93</a></li></ul><h2 id="\u611F\u8C22" tabindex="-1">\u611F\u8C22 <a class="header-anchor" href="#\u611F\u8C22" aria-hidden="true">#</a></h2><p>\u5982\u679C\u672C\u6587\u5BF9\u4F60\u6709\u5E2E\u52A9 \u{1F618}\uFF0C\u5C31\u70B9\u4E2A\u8D5E \u{1F44D} \u652F\u6301\u4E0B\u5427\uFF01\u611F\u8C22\u9605\u8BFB\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a10ab9f539ae4a18a1262c6d273fa15f~tplv-k3u1fbpfcp-watermark.image" alt=""></p>`,85),o=[p];function c(l,r,u,i,k,d){return s(),a("div",null,o)}var f=n(t,[["render",c]]);export{g as __pageData,f as default};