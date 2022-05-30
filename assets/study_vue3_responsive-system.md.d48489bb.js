import{_ as n,c as s,o as a,d as t}from"./app.acdedced.js";const _='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/vue3/responsive-system.md"}',p={},o=t(`<p>\u54CD\u5E94\u5F0F\u6570\u636E\u57FA\u672C\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876</span>
<span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u539F\u59CB\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u5BF9\u539F\u59CB\u6570\u636E\u7684\u4EE3\u7406</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u62E6\u622A\u8BFB\u53D6\u64CD\u4F5C</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u526F\u4F5C\u7528\u51FD\u6570 effect \u6DFB\u52A0\u5230\u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876\u4E2D</span>
    bucket<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD4\u56DE\u5C5E\u6027\u503C</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u62E6\u622A\u8BBE\u7F6E\u64CD\u4F5C</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027\u503C</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
    <span class="token comment">// \u628A\u526F\u4F5C\u7528\u51FD\u6570\u4ECE\u6876\u91CC\u53D6\u51FA\u5E76\u6267\u884C</span>
    bucket<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD4\u56DE true \u4EE3\u8868\u8BBE\u7F6E\u64CD\u4F5C\u6210\u529F</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),e=[o];function c(u,l,k,i,r,m){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{_ as __pageData,f as default};
