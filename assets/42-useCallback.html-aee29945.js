import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as t}from"./app-ad0845b4.js";const e={},p=t(`<h1 id="_42-usecallback" tabindex="-1"><a class="header-anchor" href="#_42-usecallback" aria-hidden="true">#</a> 42-useCallback</h1><h2 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback()</h2><ul><li>参数： <ol><li>回调函数</li><li>依赖数组 <ul><li>当依赖数组中的变量发生变化时，回调函数才会重新创建</li><li>如果不指定依赖数组，回调函数每次都会重新创建</li><li>一定要将回调函数中使用到的所有变量都设置到依赖数组中<br> 除了（setState）</li></ul></li></ol></li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>    <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> setNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> clickHandler <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevState</span> <span class="token operator">=&gt;</span> prevState <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setNum</span><span class="token punctuation">(</span><span class="token parameter">prevState</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(l,u){return a(),s("div",null,c)}const k=n(e,[["render",o],["__file","42-useCallback.html.vue"]]);export{k as default};