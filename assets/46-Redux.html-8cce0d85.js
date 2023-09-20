import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as c,c as o,a as e,e as r,w as d,b as t,f as i}from"./app-ad0845b4.js";const u="/assets/image-2023-03-18_17-36-56-909-46-Redux-74808f52.png",h={},x=e("h1",{id:"_46-redux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_46-redux","aria-hidden":"true"},"#"),t(" 46-Redux")],-1),p=e("p",null,"A Predictable State Container for JS Apps 是 Redux 官方对于 Redux 的描述，这句话可以这样翻译“一个专为 JS 应用设计的可预期的状态容器”，简单来说 Redux 是一个可预测的状态容器",-1),l=e("p",null,[e("mark",null,"Redux 可以理解为是 reducer 和 context 的结合体"),t("，使用 Redux 即可管理复杂的 state，又可以在不同的组件间方便的共享传递 state。")],-1),_=e("h2",{id:"状态-state",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#状态-state","aria-hidden":"true"},"#"),t(" 状态（State）")],-1),R=i('<h2 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container" aria-hidden="true">#</a> 容器（Container）</h2><p>容器当然是用来装东西的，状态容器即用来存储状态的容器。状态多了，自然需要一个东西来存储，但是容器的功能却不是仅仅能存储状态，它实则是一个状态的管理器，除了存储状态外，它还可以用来对 state 进行查询、修改等所有操作。（编程语言中容器几乎都是这个意思，其作用无非就是对某个东西进行增删改查）</p><h2 id="可预测-predictable" tabindex="-1"><a class="header-anchor" href="#可预测-predictable" aria-hidden="true">#</a> 可预测（Predictable）</h2><p>可预测指我们在对 state 进行各种操作时，其结果是一定的。即以相同的顺序对 state 执行相同的操作会得到相同的结果。简单来说，Redux 中对状态所有的操作都封装到了容器内部，外部只能通过调用容器提供的方法来操作 state，而不能直接修改 state。这就意味着外部对 state 的操作都被容器所限制，对 state 的操作都在容器的掌控之中，也就是可预测。</p><p>总的来说，<strong>Redux 是一个稳定、安全的状态管理器</strong>。</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="为什么是-redux" tabindex="-1"><a class="header-anchor" href="#为什么是-redux" aria-hidden="true">#</a> 为什么是 Redux？</h2><p>问：不对啊？React 中不是已经有 state 了吗？为什么还要整出一个 Redux 来作为状态管理器呢？</p><p>答：state 应付简单值还可以，如果值比较复杂的话并不是很方便。</p><p>问：复杂值可以用 useReducer 嘛！</p><p>答：的确可以啊！但无论是 state 还是 useReducer，state 在传递起来还是不方便，自上至下一层一层的传递并不方便啊！</p><p>问：那不是还有 context 吗？</p><p>答：的确使用 context 可以解决 state 的传递的问题，但依然是简单的数据尚可，如果数据结构过于复杂会使得 context 变得异常的庞大，不方便维护。</p><p><mark>Redux 可以理解为是 reducer 和 context 的结合体</mark>，使用 Redux 即可管理复杂的 state，又可以在不同的组件间方便的共享传递 state。当然，Redux 主要使用场景依然是大型应用，大型应用中状态比较复杂，如果只是使用 reducer 和 context，开发起来并不是那么的便利，此时一个有一个功能强大的状态管理器就变得尤为的重要。</p><h2 id="使用-redux" tabindex="-1"><a class="header-anchor" href="#使用-redux" aria-hidden="true">#</a> 使用 Redux</h2>',15);function f(m,b){const a=n("RouterLink");return c(),o("div",null,[x,p,l,_,e("p",null,[r(a,{to:"/code/react/React18/18-useState%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8F%98%E9%87%8F.html"},{default:d(()=>[t("state")]),_:1}),t(" 直译过来就是状态。state 不过就是一个变量，一个用来记录（组件）状态的变量。组件可以根据不同的状态值切换为不同的显示，比如，用户登录和没登录看到页面应该是不同的，那么用户的登录与否就应该是一个状态。再比如，数据加载与否，显示的界面也应该不同，那么数据本身就是一个状态。换句话说，状态控制了页面的如何显示。")]),R,e("p",null,[r(a,{to:"/code/react/React18/46a-Redux%E4%BD%BF%E7%94%A8.html"},{default:d(()=>[t("46a-Redux 使用")]),_:1})])])}const k=s(h,[["render",f],["__file","46-Redux.html.vue"]]);export{k as default};