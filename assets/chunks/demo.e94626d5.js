import{d as v,h as x,e as f,f as b,_ as g,o as p,c as d,g as k,i as _,a as l,u,b as i,t as C,w as N}from"../app.7e694214.js";async function s(e,...n){for(const t of n)switch(typeof t){case"string":await B(e,t);break;case"number":await y(t);break;case"function":await t(e,...n);break;default:await t}}async function B(e,n){const t=function(o,[...a]){return[...o,NaN].findIndex((r,c)=>a[c]!==r)}(e.textContent,n);await async function(o,a,r=60){for(const c of function*(m){for(const h of m)yield w=>requestAnimationFrame(()=>w.textContent=h)}(a))c(o),await y(r+r*(Math.random()-.5))}(e,[...A(e.textContent,t),...T(n,t)])}async function y(e){await new Promise(n=>setTimeout(n,e))}function*T([...e],n=0,t=e.length){for(;n<t;)yield e.slice(0,++n).join("")}function*A([...e],n=0,t=e.length){for(;t>n;)yield e.slice(0,--t).join("")}const H=s;var M=v({name:"Typical",props:{steps:{type:Array,required:!0},wrapper:{type:String,default:"div"},loop:{type:Number,default:1}},render(){return x(this.wrapper,{ref:"myRef"})},setup:({steps:e,loop:n})=>{const t=f(null);return b(()=>{const o=t.value;n===1/0?s(o,...e,H):typeof n=="number"&&n>0?s(o,...Array(n).fill(e).flat()):s(o,...e)}),{myRef:t}}});const S={},V=_("This a button component!");function $(e,n){return p(),d("button",null,[k(e.$slots,"default",{},()=>[V])])}var j=g(S,[["render",$]]);const q=i("span",{class:""},"\u70B9\u51FB\u6B21\u6570:",-1),I=_("count++"),W={__name:"demo",setup(e){const n=f(0);function t(){n.value++}return(o,a)=>(p(),d("div",null,[l(u(M),{steps:["Hello",1e3,"Hello World !",500,"Hello World ! \u{1F44B}",1e3],loop:1/0,wrapper:"h2"}),i("p",null,[q,i("span",null,C(n.value),1)]),l(u(j),{onClick:t},{default:N(()=>[I]),_:1})]))}};export{W as _};