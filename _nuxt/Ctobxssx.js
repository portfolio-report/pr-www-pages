import{am as x,an as Q,w as _,ao as g,n as k}from"./rsw1wY18.js";import{t as M,a as y}from"./CGOl8cPB.js";const i=new WeakMap;function j(u,n,f={}){const{mode:m="replace",route:a=x(),router:s=Q(),transform:q=t=>t}=f;i.has(s)||i.set(s,new Map);const o=i.get(s);let e=a.query[u];M(()=>{e=void 0});let c;const l=g((t,p)=>(c=p,{get(){return t(),q(e!==void 0?e:y(n))},set(r){e!==r&&(e=r===n||r===null?void 0:r,o.set(u,r===n||r===null?void 0:r),p(),k(()=>{if(o.size===0)return;const h=Object.fromEntries(o.entries());o.clear();const{params:w,query:R,hash:d}=a;s[y(m)]({params:w,query:{...R,...h},hash:d})}))}}));return _(()=>a.query[u],t=>{e!==t&&(e=t,c())},{flush:"sync"}),l}export{j as u};
