import{u as k,c as x,r as h,i as N,w as T,V as E,O as Y,Q as O,C as R,g as H}from"./DKx1n7Cs.js";function M(e){return Y()?(O(e),!0):!1}function w(e){return typeof e=="function"?e():k(e)}const b=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const j=Object.prototype.toString,q=e=>j.call(e)==="[object Object]",P=()=>{};function W(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const a=t;t=void 0,a&&await a},n}const G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,V=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function U(e,t,n,a){let o=e<12?"AM":"PM";return a&&(o=o.split("").reduce((r,i)=>r+=`${i}.`,"")),n?o.toLowerCase():o}function A(e){const t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}function X(e,t,n={}){var a;const o=e.getFullYear(),r=e.getMonth(),i=e.getDate(),s=e.getHours(),u=e.getMinutes(),l=e.getSeconds(),c=e.getMilliseconds(),m=e.getDay(),f=(a=n.customMeridiem)!=null?a:U,y={Yo:()=>A(o),YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>r+1,Mo:()=>A(r+1),MM:()=>`${r+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(i),Do:()=>A(i),DD:()=>`${i}`.padStart(2,"0"),H:()=>String(s),Ho:()=>A(s),HH:()=>`${s}`.padStart(2,"0"),h:()=>`${s%12||12}`.padStart(1,"0"),ho:()=>A(s%12||12),hh:()=>`${s%12||12}`.padStart(2,"0"),m:()=>String(u),mo:()=>A(u),mm:()=>`${u}`.padStart(2,"0"),s:()=>String(l),so:()=>A(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${c}`.padStart(3,"0"),d:()=>m,dd:()=>e.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>f(s,u),AA:()=>f(s,u,!1,!0),a:()=>f(s,u,!0),aa:()=>f(s,u,!0,!0)};return t.replace(V,(S,D)=>{var p,v;return(v=D??((p=y[S])==null?void 0:p.call(y)))!=null?v:S})}function Z(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(G);if(t){const n=t[2]-1||0,a=(t[7]||"0").substring(0,3);return new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,a)}}return new Date(e)}function se(e,t="HH:mm:ss",n={}){return x(()=>X(Z(w(e)),w(t),n))}function z(e,t=1e3,n={}){const{immediate:a=!0,immediateCallback:o=!1}=n;let r=null;const i=h(!1);function s(){r&&(clearInterval(r),r=null)}function u(){i.value=!1,s()}function l(){const c=w(t);c<=0||(i.value=!0,o&&e(),s(),r=setInterval(e,c))}if(a&&b&&l(),N(t)||typeof t=="function"){const c=T(t,()=>{i.value&&b&&l()});M(c)}return M(u),{isActive:i,pause:u,resume:l}}function B(e,t,n={}){const{immediate:a=!0}=n,o=h(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function s(){o.value=!1,i()}function u(...l){i(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,e(...l)},w(t))}return a&&(o.value=!0,b&&u()),M(s),{isPending:E(o),start:u,stop:s}}function Q(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const _=b?window:void 0,C=b?window.navigator:void 0;function L(...e){let t,n,a,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,o]=e,t=_):[t,n,a,o]=e,!t)return P;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const r=[],i=()=>{r.forEach(c=>c()),r.length=0},s=(c,m,f,y)=>(c.addEventListener(m,f,y),()=>c.removeEventListener(m,f,y)),u=T(()=>[Q(t),w(o)],([c,m])=>{if(i(),!c)return;const f=q(m)?{...m}:m;r.push(...n.flatMap(y=>a.map(S=>s(c,y,S,f))))},{immediate:!0,flush:"post"}),l=()=>{u(),i()};return M(l),l}function J(){const e=h(!1),t=H();return t&&R(()=>{e.value=!0},t),e}function I(e){const t=J();return x(()=>(t.value,!!e()))}function K(e,t={}){const{immediate:n=!0,fpsLimit:a=void 0,window:o=_}=t,r=h(!1),i=a?1e3/a:null;let s=0,u=null;function l(f){if(!r.value||!o)return;s||(s=f);const y=f-s;if(i&&y<i){u=o.requestAnimationFrame(l);return}s=f,e({delta:y,timestamp:f}),u=o.requestAnimationFrame(l)}function c(){!r.value&&o&&(r.value=!0,s=0,u=o.requestAnimationFrame(l))}function m(){r.value=!1,u!=null&&o&&(o.cancelAnimationFrame(u),u=null)}return n&&c(),M(m),{isActive:E(r),pause:m,resume:c}}function F(e,t={}){const{controls:n=!1,navigator:a=C}=t,o=I(()=>a&&"permissions"in a);let r;const i=typeof e=="string"?{name:e}:e,s=h(),u=()=>{r&&(s.value=r.state)},l=W(async()=>{if(o.value){if(!r)try{r=await a.permissions.query(i),L(r,"change",u),u()}catch{s.value="prompt"}return r}});return l(),n?{state:s,isSupported:o,query:l}:s}function ie(e={}){const{navigator:t=C,read:n=!1,source:a,copiedDuring:o=1500,legacy:r=!1}=e,i=I(()=>t&&"clipboard"in t),s=F("clipboard-read"),u=F("clipboard-write"),l=x(()=>i.value||r),c=h(""),m=h(!1),f=B(()=>m.value=!1,o);function y(){i.value&&v(s.value)?t.clipboard.readText().then(d=>{c.value=d}):c.value=p()}l.value&&n&&L(["copy","cut"],y);async function S(d=w(a)){l.value&&d!=null&&(i.value&&v(u.value)?await t.clipboard.writeText(d):D(d),c.value=d,m.value=!0,f.start())}function D(d){const g=document.createElement("textarea");g.value=d??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function p(){var d,g,$;return($=(g=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:g.toString())!=null?$:""}function v(d){return d==="granted"||d==="prompt"}return{isSupported:l,text:c,copied:m,copy:S}}function ee(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,a=h(new Date),o=()=>a.value=new Date,r=n==="requestAnimationFrame"?K(o,{immediate:!0}):z(o,n,{immediate:!0});return t?{now:a,...r}:a}const te=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],ne={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function oe(e){return e.toISOString().slice(0,10)}function ue(e,t={}){const{controls:n=!1,updateInterval:a=3e4}=t,{now:o,...r}=ee({interval:a,controls:!0}),i=x(()=>re(new Date(w(e)),t,w(o)));return n?{timeAgo:i,...r}:i}function re(e,t={},n=Date.now()){var a;const{max:o,messages:r=ne,fullDateFormatter:i=oe,units:s=te,showSecond:u=!1,rounding:l="round"}=t,c=typeof l=="number"?p=>+p.toFixed(l):Math[l],m=+n-+e,f=Math.abs(m);function y(p,v){return c(Math.abs(p)/v.value)}function S(p,v){const d=y(p,v),g=p>0,$=D(v.name,d,g);return D(g?"past":"future",$,g)}function D(p,v,d){const g=r[p];return typeof g=="function"?g(v,d):g.replace("{0}",v.toString())}if(f<6e4&&!u)return r.justNow;if(typeof o=="number"&&f>o)return i(new Date(e));if(typeof o=="string"){const p=(a=s.find(v=>v.name===o))==null?void 0:a.max;if(p&&f>p)return i(new Date(e))}for(const[p,v]of s.entries()){if(y(m,v)<=0&&s[p-1])return S(m,s[p-1]);if(f<v.max)return S(m,v)}return r.invalid}export{se as a,ue as b,ie as u};
