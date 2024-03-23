import{_ as he}from"./DkBwS4xd.js";import{u as i,g as ye,r as x,o as be,w as C,i as F,a as G,b as xe,c as g,d as _e,e as Re,f as W,p as Z,n as J,h as we,j as Ee,k as Oe,l as D,m as je,q as V,s as K,t as Ve,v as P,x as _,y as T,z as Ce}from"./BTS62n4b.js";import{u as Pe}from"./CVcp0L-D.js";import"./DlAUqK2U.js";const ae=t=>{if(t=i(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let a in t)return!0;return!1}return!!String(t).length};function j(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e=>(e=i(e),!ae(e)||a.every(l=>(l.lastIndex=0,l.test(e))))}j(/^[a-zA-Z]*$/);j(/^[a-zA-Z0-9]*$/);j(/^\d*(\.\d+)?$/);const Te=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var ze=j(Te),Se={$validator:ze,$message:"Value is not a valid email address",$params:{type:"email"}};function Ae(t){return typeof t=="string"&&(t=t.trim()),ae(t)}var z={$validator:Ae,$message:"Value is required",$params:{type:"required"}};const Ie=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;j(Ie);j(/(^[0-9]*$)|(^-[0-9]+$)/);j(/^[-]?\d*(\.\d+)?$/);function Q(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,e)}return n}function w(t){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?Q(Object(n),!0).forEach(function(e){Le(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function Le(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function X(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,e)=>(a.includes(e)||(n[e]=i(t[e])),n),{})}function A(t){return typeof t=="function"}function Be(t){return _e(t)||Re(t)}function se(t,a,n){let e=t;const l=a.split(".");for(let s=0;s<l.length;s++){if(!e[l[s]])return n;e=e[l[s]]}return e}function k(t,a,n){return g(()=>t.some(e=>se(a,e,{[n]:!1})[n]))}function ee(t,a,n){return g(()=>t.reduce((e,l)=>{const s=se(a,l,{[n]:!1})[n]||[];return e.concat(s)},[]))}function le(t,a,n,e){return t.call(e,i(a),i(n),e)}function oe(t){return t.$valid!==void 0?!t.$valid:!t}function Ne(t,a,n,e,l,s,p){let{$lazy:u,$rewardEarly:f}=l,o=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],m=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const v=x(!!e.value),r=x(0);n.value=!1;const d=C([a,e].concat(o,h),()=>{if(u&&!e.value||f&&!$.value&&!n.value)return;let c;try{c=le(t,a,m,p)}catch(y){c=Promise.reject(y)}r.value++,n.value=!!r.value,v.value=!1,Promise.resolve(c).then(y=>{r.value--,n.value=!!r.value,s.value=y,v.value=oe(y)}).catch(y=>{r.value--,n.value=!!r.value,s.value=y,v.value=!0})},{immediate:!0,deep:typeof a=="object"});return{$invalid:v,$unwatch:d}}function De(t,a,n,e,l,s,p,u){let{$lazy:f,$rewardEarly:o}=e;const m=()=>({}),$=g(()=>{if(f&&!n.value||o&&!u.value)return!1;let h=!0;try{const v=le(t,a,p,s);l.value=v,h=oe(v)}catch(v){l.value=v}return h});return{$unwatch:m,$invalid:$}}function ke(t,a,n,e,l,s,p,u,f,o,m){const $=x(!1),h=t.$params||{},v=x(null);let r,d;t.$async?{$invalid:r,$unwatch:d}=Ne(t.$validator,a,$,n,e,v,l,t.$watchTargets,f,o,m):{$invalid:r,$unwatch:d}=De(t.$validator,a,n,e,v,l,f,o);const c=t.$message;return{$message:A(c)?g(()=>c(X({$pending:$,$invalid:r,$params:X(h),$model:a,$response:v,$validator:s,$propertyPath:u,$property:p}))):c||"",$params:h,$pending:$,$invalid:r,$response:v,$unwatch:d}}function Fe(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=i(t),n=Object.keys(a),e={},l={},s={};let p=null;return n.forEach(u=>{const f=a[u];switch(!0){case A(f.$validator):e[u]=f;break;case A(f):e[u]={$validator:f};break;case u==="$validationGroups":p=f;break;case u.startsWith("$"):s[u]=f;break;default:l[u]=f}}),{rules:e,nestedValidators:l,config:s,validationGroups:p}}const qe="__root";function Ge(t,a,n,e,l,s,p,u,f){const o=Object.keys(t),m=e.get(l,t),$=x(!1),h=x(!1),v=x(0);if(m){if(!m.$partial)return m;m.$unwatch(),$.value=m.$dirty.value}const r={$dirty:$,$path:l,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return o.length?(o.forEach(d=>{r[d]=ke(t[d],a,r.$dirty,s,p,d,n,l,f,h,v)}),r.$externalResults=g(()=>u.value?[].concat(u.value).map((d,c)=>({$propertyPath:l,$property:n,$validator:"$externalResults",$uid:`${l}-externalResult-${c}`,$message:d,$params:{},$response:null,$pending:!1})):[]),r.$invalid=g(()=>{const d=o.some(c=>i(r[c].$invalid));return h.value=d,!!r.$externalResults.value.length||d}),r.$pending=g(()=>o.some(d=>i(r[d].$pending))),r.$error=g(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=g(()=>o.filter(d=>i(r[d].$invalid)).map(d=>{const c=r[d];return G({$propertyPath:l,$property:n,$validator:d,$uid:`${l}-${d}`,$message:c.$message,$params:c.$params,$response:c.$response,$pending:c.$pending})}).concat(r.$externalResults.value)),r.$errors=g(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>o.forEach(d=>{r[d].$unwatch()}),r.$commit=()=>{h.value=!0,v.value=Date.now()},e.set(l,t,r),r):(m&&e.set(l,t,r),r)}function Me(t,a,n,e,l,s,p){const u=Object.keys(t);return u.length?u.reduce((f,o)=>(f[o]=q({validations:t[o],state:a,key:o,parentKey:n,resultsCache:e,globalConfig:l,instance:s,externalResults:p}),f),{}):{}}function Ue(t,a,n){const e=g(()=>[a,n].filter(r=>r).reduce((r,d)=>r.concat(Object.values(i(d))),[])),l=g({get(){return t.$dirty.value||(e.value.length?e.value.every(r=>r.$dirty):!1)},set(r){t.$dirty.value=r}}),s=g(()=>{const r=i(t.$silentErrors)||[],d=e.value.filter(c=>(i(c).$silentErrors||[]).length).reduce((c,y)=>c.concat(...y.$silentErrors),[]);return r.concat(d)}),p=g(()=>{const r=i(t.$errors)||[],d=e.value.filter(c=>(i(c).$errors||[]).length).reduce((c,y)=>c.concat(...y.$errors),[]);return r.concat(d)}),u=g(()=>e.value.some(r=>r.$invalid)||i(t.$invalid)||!1),f=g(()=>e.value.some(r=>i(r.$pending))||i(t.$pending)||!1),o=g(()=>e.value.some(r=>r.$dirty)||e.value.some(r=>r.$anyDirty)||l.value),m=g(()=>l.value?f.value||u.value:!1),$=()=>{t.$touch(),e.value.forEach(r=>{r.$touch()})},h=()=>{t.$commit(),e.value.forEach(r=>{r.$commit()})},v=()=>{t.$reset(),e.value.forEach(r=>{r.$reset()})};return e.value.length&&e.value.every(r=>r.$dirty)&&$(),{$dirty:l,$errors:p,$invalid:u,$anyDirty:o,$error:m,$pending:f,$touch:$,$reset:v,$silentErrors:s,$commit:h}}function q(t){let{validations:a,state:n,key:e,parentKey:l,childResults:s,resultsCache:p,globalConfig:u={},instance:f,externalResults:o}=t;const m=l?`${l}.${e}`:e,{rules:$,nestedValidators:h,config:v,validationGroups:r}=Fe(a),d=w(w({},u),v),c=e?g(()=>{const b=i(n);return b?i(b[e]):void 0}):n,y=w({},i(o)||{}),M=g(()=>{const b=i(o);return e?b?i(b[e]):void 0:b}),U=Ge($,c,e,p,m,d,f,M,n),E=Me(h,c,m,p,d,f,M),Y={};r&&Object.entries(r).forEach(b=>{let[O,R]=b;Y[O]={$invalid:k(R,E,"$invalid"),$error:k(R,E,"$error"),$pending:k(R,E,"$pending"),$errors:ee(R,E,"$errors"),$silentErrors:ee(R,E,"$silentErrors")}});const{$dirty:I,$errors:ue,$invalid:L,$anyDirty:ce,$error:de,$pending:B,$touch:N,$reset:fe,$silentErrors:me,$commit:H}=Ue(U,E,s),$e=e?g({get:()=>i(c),set:b=>{I.value=!0;const O=i(n),R=i(o);R&&(R[e]=y[e]),F(O[e])?O[e].value=b:O[e]=b}}):null;e&&d.$autoDirty&&C(c,()=>{I.value||N();const b=i(o);b&&(b[e]=y[e])},{flush:"sync"});async function ve(){return N(),d.$rewardEarly&&(H(),await J()),await J(),new Promise(b=>{if(!B.value)return b(!L.value);const O=C(B,()=>{b(!L.value),O()})})}function pe(b){return(s.value||{})[b]}function ge(){F(o)?o.value=y:Object.keys(y).length===0?Object.keys(o).forEach(b=>{delete o[b]}):Object.assign(o,y)}return G(w(w(w({},U),{},{$model:$e,$dirty:I,$error:de,$errors:ue,$invalid:L,$anyDirty:ce,$pending:B,$touch:N,$reset:fe,$path:m||qe,$silentErrors:me,$validate:ve,$commit:H},s&&{$getResultsForChild:pe,$clearExternalResults:ge,$validationGroups:Y}),E))}class Ye{constructor(){this.storage=new Map}set(a,n,e){this.storage.set(a,{rules:n,result:e})}checkRulesValidity(a,n,e){const l=Object.keys(e),s=Object.keys(n);return s.length!==l.length||!s.every(u=>l.includes(u))?!1:s.every(u=>n[u].$params?Object.keys(n[u].$params).every(f=>i(e[u].$params[f])===i(n[u].$params[f])):!0)}get(a,n){const e=this.storage.get(a);if(!e)return;const{rules:l,result:s}=e,p=this.checkRulesValidity(a,n,l),u=s.$unwatch?s.$unwatch:()=>({});return p?s:{$dirty:s.$dirty,$partial:!0,$unwatch:u}}}const S={COLLECT_ALL:!0,COLLECT_NONE:!1},te=Symbol("vuelidate#injectChildResults"),ne=Symbol("vuelidate#removeChildResults");function He(t){let{$scope:a,instance:n}=t;const e={},l=x([]),s=g(()=>l.value.reduce((m,$)=>(m[$]=i(e[$]),m),{}));function p(m,$){let{$registerAs:h,$scope:v,$stopPropagation:r}=$;r||a===S.COLLECT_NONE||v===S.COLLECT_NONE||a!==S.COLLECT_ALL&&a!==v||(e[h]=m,l.value.push(h))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],p);function u(m){l.value=l.value.filter($=>$!==m),delete e[m]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],u);const f=W(te,[]);Z(te,n.__vuelidateInjectInstances);const o=W(ne,[]);return Z(ne,n.__vuelidateRemoveInstances),{childResults:s,sendValidationResultsToParent:f,removeValidationResultsFromParent:o}}function ie(t){return new Proxy(t,{get(a,n){return typeof a[n]=="object"?ie(a[n]):g(()=>a[n])}})}let re=0;function We(t,a){var n;let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(e=t,t=void 0,a=void 0);let{$registerAs:l,$scope:s=S.COLLECT_ALL,$stopPropagation:p,$externalResults:u,currentVueInstance:f}=e;const o=f||((n=ye())===null||n===void 0?void 0:n.proxy),m=o?o.$options:{};l||(re+=1,l=`_vuelidate_${re}`);const $=x({}),h=new Ye,{childResults:v,sendValidationResultsToParent:r,removeValidationResultsFromParent:d}=o?He({$scope:s,instance:o}):{childResults:x({})};if(!t&&m.validations){const c=m.validations;a=x({}),be(()=>{a.value=o,C(()=>A(c)?c.call(a.value,new ie(a.value)):c,y=>{$.value=q({validations:y,state:a,childResults:v,resultsCache:h,globalConfig:e,instance:o,externalResults:u||o.vuelidateExternalResults})},{immediate:!0})}),e=m.validationsConfig||e}else{const c=F(t)||Be(t)?t:G(t||{});C(c,y=>{$.value=q({validations:y,state:a,childResults:v,resultsCache:h,globalConfig:e,instance:o??{},externalResults:u})},{immediate:!0})}return o&&(r.forEach(c=>c($,{$registerAs:l,$scope:s,$stopPropagation:p})),xe(()=>d.forEach(c=>c(l)))),g(()=>w(w({},i($.value)),v.value))}const Ze={class:"flex justify-content-center"},Je=_("a",{href:"https://forum.portfolio-performance.info/"}," discussion forum ",-1),Ke=_("br",null,null,-1),Qe={class:"p-float-label mt-4"},Xe=_("label",{for:"formName"},"Your name",-1),et={class:"p-float-label mt-4"},tt=_("label",{form:"formEmail"},"Your email address",-1),nt={class:"p-float-label mt-4"},rt=_("label",{for:"formSubject"},"Subject",-1),at={class:"p-float-label mt-4"},st=_("label",{for:"formMessage"},"Your message",-1),lt={class:"flex justify-content-end mt-4"},dt=we({__name:"contact",setup(t){Ee({title:"Portfolio Report - Contact",link:[{rel:"canonical",href:"https://www.portfolio-report.net/contact"}]});const a=Oe(),n={name:"",email:"",subject:"",message:""},e=x({...n}),s=We({name:{required:z},email:{required:z,email:Se},subject:{required:z},message:{required:z}},e),p=x(!1);async function u(){if(s.value.$invalid){s.value.$touch(),a.add({severity:"error",summary:"Error",detail:"Please fill all fields.",life:5e3});return}p.value=!0;try{await Pe("/contact",{method:"post",body:e.value}),e.value={...n},s.value.$reset(),a.add({severity:"success",summary:"Thank you",detail:"Your message has been sent.",life:5e3}),p.value=!1}catch(f){p.value=!1,a.add({severity:"error",summary:"Error",detail:"Message could not be sent. Please try again later.",life:5e3}),console.log(f)}}return(f,o)=>{const m=D("InputText"),$=D("Textarea"),h=he,v=D("Card");return Ve(),je("div",Ze,[V(v,{style:{width:"800px"}},{title:K(()=>[P(" Contact ")]),content:K(()=>[P(" Please use the "),Je,P(" for all matters that can be discussed publicly."),Ke,P(" This contact form can be used to establish direct contact with the operators for all matters that cannot be discussed publicly. "),_("form",{class:"mt-2",onSubmit:Ce(u,["prevent"])},[_("div",Qe,[V(m,{id:"formName",modelValue:i(s).name.$model,"onUpdate:modelValue":o[0]||(o[0]=r=>i(s).name.$model=r),class:T(["w-full",{"p-invalid":i(s).name.$invalid&&i(s).name.$dirty}]),onBlur:i(s).name.$touch},null,8,["modelValue","class","onBlur"]),Xe]),_("div",et,[V(m,{id:"formEmail",modelValue:i(s).email.$model,"onUpdate:modelValue":o[1]||(o[1]=r=>i(s).email.$model=r),class:T(["w-full",{"p-invalid":i(s).email.$invalid&&i(s).email.$dirty}]),onBlur:i(s).email.$touch},null,8,["modelValue","class","onBlur"]),tt]),_("div",nt,[V(m,{id:"formSubject",modelValue:i(s).subject.$model,"onUpdate:modelValue":o[2]||(o[2]=r=>i(s).subject.$model=r),class:T(["w-full",{"p-invalid":i(s).subject.$invalid&&i(s).subject.$dirty}]),onBlur:i(s).subject.$touch},null,8,["modelValue","class","onBlur"]),rt]),_("div",at,[V($,{id:"message",modelValue:i(s).message.$model,"onUpdate:modelValue":o[3]||(o[3]=r=>i(s).message.$model=r),class:T(["w-full",{"p-invalid":i(s).message.$invalid&&i(s).message.$dirty}]),"auto-resize":!0,onBlur:i(s).message.$touch},null,8,["modelValue","class","onBlur"]),st]),_("div",lt,[V(h,{type:"submit",icon:"i-carbon-send",label:"Send",disabled:i(p)},null,8,["disabled"])])],32)]),_:1})])}}});export{dt as default};
