import{_ as n,c as s,o as a,d as t}from"./app.acdedced.js";const d='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/vue3/responsive-system.md"}',p={},o=t(`<p>\u54CD\u5E94\u5F0F\u6570\u636E\u57FA\u672C\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876</span>
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

<span class="token comment">// \u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> obj<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u89E6\u53D1\u8BFB\u53D6</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1 \u79D2\u540E\u4FEE\u6539\u54CD\u5E94\u5F0F\u6570\u636E</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8BBE\u8BA1\u4E00\u4E2A\u5B8C\u5584\u7684\u54CD\u5E94\u7CFB\u7EDF\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u5B58\u50A8\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6876</span>
<span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u539F\u59CB\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;hello world&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u7528\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u5B58\u50A8\u88AB\u6CE8\u518C\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token keyword">let</span> activeEffect<span class="token punctuation">;</span>
<span class="token comment">// effect \u51FD\u6570\u7528\u4E8E\u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F53\u8C03\u7528 effect \u6CE8\u518C\u526F\u4F5C\u7528\u51FD\u6570\u65F6\uFF0C\u5C06\u526F\u4F5C\u7528\u51FD\u6570 fn \u8D4B\u503C\u7ED9 activeEffect</span>
  activeEffect <span class="token operator">=</span> fn<span class="token punctuation">;</span>
  <span class="token comment">// \u6267\u884C\u526F\u4F5C\u7528\u51FD\u6570</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06 activeEffect \u4E2D\u5B58\u50A8\u7684\u526F\u4F5C\u7528\u51FD\u6570\u6536\u96C6\u5230 \u201C\u6876\u201D \u4E2D</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bucket<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
    bucket<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">effect</span><span class="token punctuation">(</span>
  <span class="token comment">// \u4E00\u4E2A\u533F\u540D\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;effect run&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> obj<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u526F\u4F5C\u7528\u51FD\u6570\u4E2D\u5E76\u6CA1\u6709\u8BFB\u53D6 notExist \u5C5E\u6027\u7684\u503C</span>
  obj<span class="token punctuation">.</span>notExist <span class="token operator">=</span> <span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,4),c=[o];function e(u,l,k,i,r,f){return a(),s("div",null,c)}var y=n(p,[["render",e]]);export{d as __pageData,y as default};
