import{Q as d,R as x,S as _,w as g,n as k}from"./D399HoNm.js";import{t as M,a as y}from"./DeFYIBVm.js";const a=new WeakMap;function b(u,n,f={}){const{mode:q="replace",route:i=d(),router:s=x(),transform:m=t=>t}=f;a.has(s)||a.set(s,new Map);const o=a.get(s);let r=i.query[u];M(()=>{r=void 0});let c;const l=_((t,p)=>(c=p,{get(){return t(),m(r!==void 0?r:y(n))},set(e){r!==e&&(r=e===n||e===null?void 0:e,o.set(u,e===n||e===null?void 0:e),p(),k(()=>{if(o.size===0)return;const h=Object.fromEntries(o.entries());o.clear();const{params:w,query:R,hash:Q}=i;s[y(q)]({params:w,query:{...R,...h},hash:Q})}))}}));return g(()=>i.query[u],t=>{r=t,c()},{flush:"sync"}),l}export{b as u};
