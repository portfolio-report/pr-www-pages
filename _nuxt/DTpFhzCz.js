import{b as M,c as _,a as x,n as L,i as N,t as $,d as T,e as q}from"./CoR0EFF0.js";import{c as b,r as h,w as k,U as O,B as R,g as U}from"./DdXbVMNd.js";function j(e){var t;const r=x(e);return(t=r==null?void 0:r.$el)!=null?t:r}const E=T?window:void 0,C=T?window.navigator:void 0;function D(...e){let t,r,a,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,a,n]=e,t=E):[t,r,a,n]=e,!t)return L;Array.isArray(r)||(r=[r]),Array.isArray(a)||(a=[a]);const o=[],c=()=>{o.forEach(i=>i()),o.length=0},u=(i,l,d,w)=>(i.addEventListener(l,d,w),()=>i.removeEventListener(l,d,w)),y=k(()=>[j(t),x(n)],([i,l])=>{if(c(),!i)return;const d=N(l)?{...l}:l;o.push(...r.flatMap(w=>a.map(g=>u(i,w,g,d))))},{immediate:!0,flush:"post"}),f=()=>{y(),c()};return $(f),f}function P(){const e=h(!1),t=U();return t&&R(()=>{e.value=!0},t),e}function I(e){const t=P();return b(()=>(t.value,!!e()))}function V(e,t={}){const{immediate:r=!0,fpsLimit:a=void 0,window:n=E}=t,o=h(!1),c=a?1e3/a:null;let u=0,y=null;function f(d){if(!o.value||!n)return;u||(u=d);const w=d-u;if(c&&w<c){y=n.requestAnimationFrame(f);return}u=d,e({delta:w,timestamp:d}),y=n.requestAnimationFrame(f)}function i(){!o.value&&n&&(o.value=!0,u=0,y=n.requestAnimationFrame(f))}function l(){o.value=!1,y!=null&&n&&(n.cancelAnimationFrame(y),y=null)}return r&&i(),$(l),{isActive:O(o),pause:l,resume:i}}function S(e,t={}){const{controls:r=!1,navigator:a=C}=t,n=I(()=>a&&"permissions"in a);let o;const c=typeof e=="string"?{name:e}:e,u=h(),y=()=>{o&&(u.value=o.state)},f=q(async()=>{if(n.value){if(!o)try{o=await a.permissions.query(c),D(o,"change",y),y()}catch{u.value="prompt"}return o}});return f(),r?{state:u,isSupported:n,query:f}:u}function K(e={}){const{navigator:t=C,read:r=!1,source:a,copiedDuring:n=1500,legacy:o=!1}=e,c=I(()=>t&&"clipboard"in t),u=S("clipboard-read"),y=S("clipboard-write"),f=b(()=>c.value||o),i=h(""),l=h(!1),d=M(()=>l.value=!1,n);function w(){c.value&&v(u.value)?t.clipboard.readText().then(s=>{i.value=s}):i.value=p()}f.value&&r&&D(["copy","cut"],w);async function g(s=x(a)){f.value&&s!=null&&(c.value&&v(y.value)?await t.clipboard.writeText(s):A(s),i.value=s,l.value=!0,d.start())}function A(s){const m=document.createElement("textarea");m.value=s??"",m.style.position="absolute",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),m.remove()}function p(){var s,m,F;return(F=(m=(s=document==null?void 0:document.getSelection)==null?void 0:s.call(document))==null?void 0:m.toString())!=null?F:""}function v(s){return s==="granted"||s==="prompt"}return{isSupported:f,text:i,copied:l,copy:g}}function W(e={}){const{controls:t=!1,interval:r="requestAnimationFrame"}=e,a=h(new Date),n=()=>a.value=new Date,o=r==="requestAnimationFrame"?V(n,{immediate:!0}):_(n,r,{immediate:!0});return t?{now:a,...o}:a}const B=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],G={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function Y(e){return e.toISOString().slice(0,10)}function Q(e,t={}){const{controls:r=!1,updateInterval:a=3e4}=t,{now:n,...o}=W({interval:a,controls:!0}),c=b(()=>z(new Date(x(e)),t,x(n)));return r?{timeAgo:c,...o}:c}function z(e,t={},r=Date.now()){var a;const{max:n,messages:o=G,fullDateFormatter:c=Y,units:u=B,showSecond:y=!1,rounding:f="round"}=t,i=typeof f=="number"?p=>+p.toFixed(f):Math[f],l=+r-+e,d=Math.abs(l);function w(p,v){return i(Math.abs(p)/v.value)}function g(p,v){const s=w(p,v),m=p>0,F=A(v.name,s,m);return A(m?"past":"future",F,m)}function A(p,v,s){const m=o[p];return typeof m=="function"?m(v,s):m.replace("{0}",v.toString())}if(d<6e4&&!y)return o.justNow;if(typeof n=="number"&&d>n)return c(new Date(e));if(typeof n=="string"){const p=(a=u.find(v=>v.name===n))==null?void 0:a.max;if(p&&d>p)return c(new Date(e))}for(const[p,v]of u.entries()){if(w(l,v)<=0&&u[p-1])return g(l,u[p-1]);if(d<v.max)return g(l,v)}return o.invalid}export{Q as a,K as u};
