import{O as d,Q as x,R as O,w as _,n as g}from"./C-DAi4iE.js";import{t as k,a as y}from"./el-X5MaW.js";const a=new WeakMap;function j(u,n,f={}){const{mode:q="replace",route:i=d(),router:s=x(),transform:m=t=>t}=f;a.has(s)||a.set(s,new Map);const o=a.get(s);let r=i.query[u];k(()=>{r=void 0});let c;const l=O((t,p)=>(c=p,{get(){return t(),m(r!==void 0?r:y(n))},set(e){r!==e&&(r=e===n||e===null?void 0:e,o.set(u,e===n||e===null?void 0:e),p(),g(()=>{if(o.size===0)return;const h=Object.fromEntries(o.entries());o.clear();const{params:w,query:R,hash:Q}=i;s[y(q)]({params:w,query:{...R,...h},hash:Q})}))}}));return _(()=>i.query[u],t=>{r=t,c()},{flush:"sync"}),l}export{j as u};
