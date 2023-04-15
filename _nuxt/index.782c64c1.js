import{f as E,h,k as j,j as T,O as M,P as N,n as C,Q as R}from"./entry.3cd68093.js";function _(e){return M()?(N(e),!0):!1}function $(e){return typeof e=="function"?e():E(e)}const O=typeof window<"u";function V(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:a=!1}=n;let o=null;const u=h(!1);function s(){o&&(clearInterval(o),o=null)}function m(){u.value=!1,s()}function f(){const c=$(t);c<=0||(u.value=!0,a&&e(),s(),o=setInterval(e,c))}if(r&&O&&f(),j(t)||typeof t=="function"){const c=T(t,()=>{u.value&&O&&f()});_(c)}return _(m),{isActive:u,pause:m,resume:f}}const q=O?window:void 0;function U(e,t={}){const{immediate:n=!0,window:r=q}=t,a=h(!1);let o=0,u=null;function s(c){if(!a.value||!r)return;const v=c-o;e({delta:v,timestamp:c}),o=c,u=r.requestAnimationFrame(s)}function m(){!a.value&&r&&(a.value=!0,u=r.requestAnimationFrame(s))}function f(){a.value=!1,u!=null&&r&&(r.cancelAnimationFrame(u),u=null)}return n&&m(),_(f),{isActive:R(a),pause:f,resume:m}}var k=Object.defineProperty,F=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&P(e,n,t[n]);if(F)for(var n of F(t))W.call(t,n)&&P(e,n,t[n]);return e};function Q(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,r=h(new Date),a=()=>r.value=new Date,o=n==="requestAnimationFrame"?U(a,{immediate:!0}):V(a,n,{immediate:!0});return t?G({now:r},o):r}var z=Object.defineProperty,y=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&S(e,n,t[n]);if(y)for(var n of y(t))I.call(t,n)&&S(e,n,t[n]);return e},H=(e,t)=>{var n={};for(var r in e)D.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&y)for(var r of y(e))t.indexOf(r)<0&&I.call(e,r)&&(n[r]=e[r]);return n};const J=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:1/0,value:31536e6,name:"year"}],K={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function X(e){return e.toISOString().slice(0,10)}function ee(e,t={}){const{controls:n=!1,updateInterval:r=3e4}=t,a=Q({interval:r,controls:!0}),{now:o}=a,u=H(a,["now"]),s=C(()=>Y(new Date($(e)),t,$(o.value)));return n?B({timeAgo:s},u):s}function Y(e,t={},n=Date.now()){var r;const{max:a,messages:o=K,fullDateFormatter:u=X,units:s=J,showSecond:m=!1,rounding:f="round"}=t,c=typeof f=="number"?i=>+i.toFixed(f):Math[f],v=+n-+e,d=Math.abs(v);function x(i,l){return c(Math.abs(i)/l.value)}function g(i,l){const w=x(i,l),p=i>0,b=A(l.name,w,p);return A(p?"past":"future",b,p)}function A(i,l,w){const p=o[i];return typeof p=="function"?p(l,w):p.replace("{0}",l.toString())}if(d<6e4&&!m)return o.justNow;if(typeof a=="number"&&d>a)return u(new Date(e));if(typeof a=="string"){const i=(r=s.find(l=>l.name===a))==null?void 0:r.max;if(i&&d>i)return u(new Date(e))}for(const[i,l]of s.entries()){if(x(v,l)<=0&&s[i-1])return g(v,s[i-1]);if(d<l.max)return g(v,l)}return o.invalid}export{ee as u};
