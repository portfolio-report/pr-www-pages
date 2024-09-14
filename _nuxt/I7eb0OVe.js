import{_ as Ve}from"./BPZbP8kS.js";import{g as je,r as y,o as Oe,w as S,i as G,a as H,b as Pe,c as h,d as Ce,e as ze,u as o,f as Q,p as X,n as ee,B as oe,s as ie,h as U,j as Y,k as Se,m as ue,l as Te,q as Ie,t as Be,v as Le,x as R,y as C,z as T,A as E,C as I,D as Ae,E as ke}from"./DqL6bTQY.js";import{u as Fe}from"./BSP0V7uN.js";import{s as D}from"./BnIXBy3Q.js";import"./DlAUqK2U.js";function te(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function V(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?te(Object(t),!0).forEach(function(n){_e(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function _e(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function ne(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((t,n)=>(a.includes(n)||(t[n]=o(e[n])),t),{})}function A(e){return typeof e=="function"}function Ne(e){return Ce(e)||ze(e)}function ce(e,a,t){let n=e;const i=a.split(".");for(let s=0;s<i.length;s++){if(!n[i[s]])return t;n=n[i[s]]}return n}function q(e,a,t){return h(()=>e.some(n=>ce(a,n,{[t]:!1})[t]))}function ae(e,a,t){return h(()=>e.reduce((n,i)=>{const s=ce(a,i,{[t]:!1})[t]||[];return n.concat(s)},[]))}function de(e,a,t,n){return e.call(n,o(a),o(t),n)}function fe(e){return e.$valid!==void 0?!e.$valid:!e}function De(e,a,t,n,i,s,$){let{$lazy:u,$rewardEarly:p}=i,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],m=arguments.length>8?arguments[8]:void 0,c=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=y(!!n.value),r=y(0);t.value=!1;const f=S([a,n].concat(l,g),()=>{if(u&&!n.value||p&&!c.value&&!t.value)return;let d;try{d=de(e,a,m,$)}catch(b){d=Promise.reject(b)}r.value++,t.value=!!r.value,v.value=!1,Promise.resolve(d).then(b=>{r.value--,t.value=!!r.value,s.value=b,v.value=fe(b)}).catch(b=>{r.value--,t.value=!!r.value,s.value=b,v.value=!0})},{immediate:!0,deep:typeof a=="object"});return{$invalid:v,$unwatch:f}}function qe(e,a,t,n,i,s,$,u){let{$lazy:p,$rewardEarly:l}=n;const m=()=>({}),c=h(()=>{if(p&&!t.value||l&&!u.value)return!1;let g=!0;try{const v=de(e,a,$,s);i.value=v,g=fe(v)}catch(v){i.value=v}return g});return{$unwatch:m,$invalid:c}}function Ge(e,a,t,n,i,s,$,u,p,l,m){const c=y(!1),g=e.$params||{},v=y(null);let r,f;e.$async?{$invalid:r,$unwatch:f}=De(e.$validator,a,c,t,n,v,i,e.$watchTargets,p,l,m):{$invalid:r,$unwatch:f}=qe(e.$validator,a,t,n,v,i,p,l);const d=e.$message;return{$message:A(d)?h(()=>d(ne({$pending:c,$invalid:r,$params:ne(g),$model:a,$response:v,$validator:s,$propertyPath:u,$property:$}))):d||"",$params:g,$pending:c,$invalid:r,$response:v,$unwatch:f}}function Me(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=o(e),t=Object.keys(a),n={},i={},s={};let $=null;return t.forEach(u=>{const p=a[u];switch(!0){case A(p.$validator):n[u]=p;break;case A(p):n[u]={$validator:p};break;case u==="$validationGroups":$=p;break;case u.startsWith("$"):s[u]=p;break;default:i[u]=p}}),{rules:n,nestedValidators:i,config:s,validationGroups:$}}const He="__root";function Ue(e,a,t,n,i,s,$,u,p){const l=Object.keys(e),m=n.get(i,e),c=y(!1),g=y(!1),v=y(0);if(m){if(!m.$partial)return m;m.$unwatch(),c.value=m.$dirty.value}const r={$dirty:c,$path:i,$touch:()=>{c.value||(c.value=!0)},$reset:()=>{c.value&&(c.value=!1)},$commit:()=>{}};return l.length?(l.forEach(f=>{r[f]=Ge(e[f],a,r.$dirty,s,$,f,t,i,p,g,v)}),r.$externalResults=h(()=>u.value?[].concat(u.value).map((f,d)=>({$propertyPath:i,$property:t,$validator:"$externalResults",$uid:`${i}-externalResult-${d}`,$message:f,$params:{},$response:null,$pending:!1})):[]),r.$invalid=h(()=>{const f=l.some(d=>o(r[d].$invalid));return g.value=f,!!r.$externalResults.value.length||f}),r.$pending=h(()=>l.some(f=>o(r[f].$pending))),r.$error=h(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=h(()=>l.filter(f=>o(r[f].$invalid)).map(f=>{const d=r[f];return H({$propertyPath:i,$property:t,$validator:f,$uid:`${i}-${f}`,$message:d.$message,$params:d.$params,$response:d.$response,$pending:d.$pending})}).concat(r.$externalResults.value)),r.$errors=h(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>l.forEach(f=>{r[f].$unwatch()}),r.$commit=()=>{g.value=!0,v.value=Date.now()},n.set(i,e,r),r):(m&&n.set(i,e,r),r)}function Ye(e,a,t,n,i,s,$){const u=Object.keys(e);return u.length?u.reduce((p,l)=>(p[l]=M({validations:e[l],state:a,key:l,parentKey:t,resultsCache:n,globalConfig:i,instance:s,externalResults:$}),p),{}):{}}function We(e,a,t){const n=h(()=>[a,t].filter(r=>r).reduce((r,f)=>r.concat(Object.values(o(f))),[])),i=h({get(){return e.$dirty.value||(n.value.length?n.value.every(r=>r.$dirty):!1)},set(r){e.$dirty.value=r}}),s=h(()=>{const r=o(e.$silentErrors)||[],f=n.value.filter(d=>(o(d).$silentErrors||[]).length).reduce((d,b)=>d.concat(...b.$silentErrors),[]);return r.concat(f)}),$=h(()=>{const r=o(e.$errors)||[],f=n.value.filter(d=>(o(d).$errors||[]).length).reduce((d,b)=>d.concat(...b.$errors),[]);return r.concat(f)}),u=h(()=>n.value.some(r=>r.$invalid)||o(e.$invalid)||!1),p=h(()=>n.value.some(r=>o(r.$pending))||o(e.$pending)||!1),l=h(()=>n.value.some(r=>r.$dirty)||n.value.some(r=>r.$anyDirty)||i.value),m=h(()=>i.value?p.value||u.value:!1),c=()=>{e.$touch(),n.value.forEach(r=>{r.$touch()})},g=()=>{e.$commit(),n.value.forEach(r=>{r.$commit()})},v=()=>{e.$reset(),n.value.forEach(r=>{r.$reset()})};return n.value.length&&n.value.every(r=>r.$dirty)&&c(),{$dirty:i,$errors:$,$invalid:u,$anyDirty:l,$error:m,$pending:p,$touch:c,$reset:v,$silentErrors:s,$commit:g}}function M(e){let{validations:a,state:t,key:n,parentKey:i,childResults:s,resultsCache:$,globalConfig:u={},instance:p,externalResults:l}=e;const m=i?`${i}.${n}`:n,{rules:c,nestedValidators:g,config:v,validationGroups:r}=Me(a),f=V(V({},u),v),d=n?h(()=>{const x=o(t);return x?o(x[n]):void 0}):t,b=V({},o(l)||{}),W=h(()=>{const x=o(l);return n?x?o(x[n]):void 0:x}),Z=Ue(c,d,n,$,m,f,p,W,t),j=Ye(g,d,m,$,f,p,W),J={};r&&Object.entries(r).forEach(x=>{let[O,w]=x;J[O]={$invalid:q(w,j,"$invalid"),$error:q(w,j,"$error"),$pending:q(w,j,"$pending"),$errors:ae(w,j,"$errors"),$silentErrors:ae(w,j,"$silentErrors")}});const{$dirty:k,$errors:ve,$invalid:F,$anyDirty:he,$error:ge,$pending:_,$touch:N,$reset:be,$silentErrors:xe,$commit:K}=We(Z,j,s),ye=n?h({get:()=>o(d),set:x=>{k.value=!0;const O=o(t),w=o(l);w&&(w[n]=b[n]),G(O[n])?O[n].value=x:O[n]=x}}):null;n&&f.$autoDirty&&S(d,()=>{k.value||N();const x=o(l);x&&(x[n]=b[n])},{flush:"sync"});async function Re(){return N(),f.$rewardEarly&&(K(),await ee()),await ee(),new Promise(x=>{if(!_.value)return x(!F.value);const O=S(_,()=>{x(!F.value),O()})})}function we(x){return(s.value||{})[x]}function Ee(){G(l)?l.value=b:Object.keys(b).length===0?Object.keys(l).forEach(x=>{delete l[x]}):Object.assign(l,b)}return H(V(V(V({},Z),{},{$model:ye,$dirty:k,$error:ge,$errors:ve,$invalid:F,$anyDirty:he,$pending:_,$touch:N,$reset:be,$path:m||He,$silentErrors:xe,$validate:Re,$commit:K},s&&{$getResultsForChild:we,$clearExternalResults:Ee,$validationGroups:J}),j))}class Ze{constructor(){this.storage=new Map}set(a,t,n){this.storage.set(a,{rules:t,result:n})}checkRulesValidity(a,t,n){const i=Object.keys(n),s=Object.keys(t);return s.length!==i.length||!s.every(u=>i.includes(u))?!1:s.every(u=>t[u].$params?Object.keys(t[u].$params).every(p=>o(n[u].$params[p])===o(t[u].$params[p])):!0)}get(a,t){const n=this.storage.get(a);if(!n)return;const{rules:i,result:s}=n,$=this.checkRulesValidity(a,t,i),u=s.$unwatch?s.$unwatch:()=>({});return $?s:{$dirty:s.$dirty,$partial:!0,$unwatch:u}}}const L={COLLECT_ALL:!0,COLLECT_NONE:!1},re=Symbol("vuelidate#injectChildResults"),le=Symbol("vuelidate#removeChildResults");function Je(e){let{$scope:a,instance:t}=e;const n={},i=y([]),s=h(()=>i.value.reduce((m,c)=>(m[c]=o(n[c]),m),{}));function $(m,c){let{$registerAs:g,$scope:v,$stopPropagation:r}=c;r||a===L.COLLECT_NONE||v===L.COLLECT_NONE||a!==L.COLLECT_ALL&&a!==v||(n[g]=m,i.value.push(g))}t.__vuelidateInjectInstances=[].concat(t.__vuelidateInjectInstances||[],$);function u(m){i.value=i.value.filter(c=>c!==m),delete n[m]}t.__vuelidateRemoveInstances=[].concat(t.__vuelidateRemoveInstances||[],u);const p=Q(re,[]);X(re,t.__vuelidateInjectInstances);const l=Q(le,[]);return X(le,t.__vuelidateRemoveInstances),{childResults:s,sendValidationResultsToParent:p,removeValidationResultsFromParent:l}}function pe(e){return new Proxy(e,{get(a,t){return typeof a[t]=="object"?pe(a[t]):h(()=>a[t])}})}let se=0;function Ke(e,a){var t;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(n=e,e=void 0,a=void 0);let{$registerAs:i,$scope:s=L.COLLECT_ALL,$stopPropagation:$,$externalResults:u,currentVueInstance:p}=n;const l=p||((t=je())===null||t===void 0?void 0:t.proxy),m=l?l.$options:{};i||(se+=1,i=`_vuelidate_${se}`);const c=y({}),g=new Ze,{childResults:v,sendValidationResultsToParent:r,removeValidationResultsFromParent:f}=l?Je({$scope:s,instance:l}):{childResults:y({})};if(!e&&m.validations){const d=m.validations;a=y({}),Oe(()=>{a.value=l,S(()=>A(d)?d.call(a.value,new pe(a.value)):d,b=>{c.value=M({validations:b,state:a,childResults:v,resultsCache:g,globalConfig:n,instance:l,externalResults:u||l.vuelidateExternalResults})},{immediate:!0})}),n=m.validationsConfig||n}else{const d=G(e)||Ne(e)?e:H(e||{});S(d,b=>{c.value=M({validations:b,state:a,childResults:v,resultsCache:g,globalConfig:n,instance:l??{},externalResults:u})},{immediate:!0})}return l&&(r.forEach(d=>d(c,{$registerAs:i,$scope:s,$stopPropagation:$})),Pe(()=>f.forEach(d=>d(i)))),h(()=>V(V({},o(c.value)),v.value))}const me=e=>{if(e=o(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let a in e)return!0;return!1}return!!String(e).length};function P(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return n=>(n=o(n),!me(n)||a.every(i=>(i.lastIndex=0,i.test(n))))}P(/^[a-zA-Z]*$/);P(/^[a-zA-Z0-9]*$/);P(/^\d*(\.\d+)?$/);const Qe=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Xe=P(Qe),et={$validator:Xe,$message:"Value is not a valid email address",$params:{type:"email"}};function tt(e){return typeof e=="string"&&(e=e.trim()),me(e)}var B={$validator:tt,$message:"Value is required",$params:{type:"required"}};const nt=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;P(nt);P(/(^[0-9]*$)|(^-[0-9]+$)/);P(/^[-]?\d*(\.\d+)?$/);var at=function(a){var t=a.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    left: 0.75rem;
    color: `.concat(t("floatlabel.color"),`;
    transition-duration: `).concat(t("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(textarea) label {
    top: 1rem;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: -.75rem;
    font-size: 12px;
    color: `).concat(t("floatlabel.focus.color"),`;
}

.p-floatlabel .p-placeholder,
.p-floatlabel input::placeholder,
.p-floatlabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel .p-focus .p-placeholder,
.p-floatlabel input:focus::placeholder,
.p-floatlabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel > .p-invalid + label {
    color: `).concat(t("floatlabel.invalid.color"),`;
}
`)},rt={root:"p-floatlabel"},lt=oe.extend({name:"floatlabel",theme:at,classes:rt}),st={name:"BaseFloatLabel",extends:ie,props:{},style:lt,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},z={name:"FloatLabel",extends:st,inheritAttrs:!1};function ot(e,a,t,n,i,s){return U(),Y("span",ue({class:e.cx("root")},e.ptmi("root")),[Se(e.$slots,"default")],16)}z.render=ot;var it=function(a){var t=a.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("textarea.color"),`;
    background: `).concat(t("textarea.background"),`;
    padding: `).concat(t("textarea.padding.y")," ").concat(t("textarea.padding.x"),`;
    border: 1px solid `).concat(t("textarea.border.color"),`;
    transition: background `).concat(t("textarea.transition.duration"),", color ").concat(t("textarea.transition.duration"),", border-color ").concat(t("textarea.transition.duration"),", outline-color ").concat(t("textarea.transition.duration"),", box-shadow ").concat(t("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(t("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(t("textarea.focus.border.color"),`;
    box-shadow: `).concat(t("textarea.focus.ring.shadow"),`;
    outline: `).concat(t("textarea.focus.ring.width")," ").concat(t("textarea.focus.ring.style")," ").concat(t("textarea.focus.ring.color"),`;
    outline-offset: `).concat(t("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(t("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(t("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(t("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(t("textarea.disabled.background"),`;
    color: `).concat(t("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(t("textarea.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},ut={root:function(a){var t=a.instance,n=a.props;return["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":n.autoResize,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-textarea-fluid":t.hasFluid}]}},ct=oe.extend({name:"textarea",theme:it,classes:ut}),dt={name:"BaseTextarea",extends:ie,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:ct,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},$e={name:"Textarea",extends:dt,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(a){this.autoResize&&this.resize(),this.$emit("update:modelValue",a.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return Te(this.fluid)?!!this.$pcFluid:this.fluid}}},ft=["value","aria-invalid"];function pt(e,a,t,n,i,s){return U(),Y("textarea",ue({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:a[0]||(a[0]=function(){return s.onInput&&s.onInput.apply(s,arguments)})},e.ptmi("root",s.ptmParams)),null,16,ft)}$e.render=pt;const mt={class:"flex justify-center"},$t={class:"flex justify-content-end mt-8"},yt=Ie({__name:"contact",setup(e){Be({title:"Portfolio Report - Contact",link:[{rel:"canonical",href:"https://www.portfolio-report.net/contact"}]});const a=Le(),t={name:"",email:"",subject:"",message:""},n=y({...t}),s=Ke({name:{required:B},email:{required:B,email:et},subject:{required:B},message:{required:B}},n),$=y(!1);async function u(){if(s.value.$invalid){s.value.$touch(),a.add({severity:"error",summary:"Error",detail:"Please fill all fields.",life:5e3});return}$.value=!0;try{await Fe("/contact",{method:"post",body:n.value}),n.value={...t},s.value.$reset(),a.add({severity:"success",summary:"Thank you",detail:"Your message has been sent.",life:5e3}),$.value=!1}catch(p){$.value=!1,a.add({severity:"error",summary:"Error",detail:"Message could not be sent. Please try again later.",life:5e3}),console.log(p)}}return(p,l)=>{const m=Ve;return U(),Y("div",mt,[R(o(ke),{style:{width:"800px"}},{title:C(()=>l[4]||(l[4]=[T(" Contact ")])),content:C(()=>[l[9]||(l[9]=T(" Please use the ")),l[10]||(l[10]=E("a",{href:"https://forum.portfolio-performance.info/"}," discussion forum ",-1)),l[11]||(l[11]=T(" for all matters that can be discussed publicly.")),l[12]||(l[12]=E("br",null,null,-1)),l[13]||(l[13]=T(" This contact form can be used to establish direct contact with the operators for all matters that cannot be discussed publicly. ")),E("form",{class:"mt-2",onSubmit:Ae(u,["prevent"])},[R(o(z),{class:"mt-8"},{default:C(()=>[R(o(D),{id:"formName",modelValue:o(s).name.$model,"onUpdate:modelValue":l[0]||(l[0]=c=>o(s).name.$model=c),class:I(["w-full",{"p-invalid":o(s).name.$invalid&&o(s).name.$dirty}]),onBlur:o(s).name.$touch},null,8,["modelValue","class","onBlur"]),l[5]||(l[5]=E("label",{for:"formName"},"Your name",-1))]),_:1}),R(o(z),{class:"mt-8"},{default:C(()=>[R(o(D),{id:"formEmail",modelValue:o(s).email.$model,"onUpdate:modelValue":l[1]||(l[1]=c=>o(s).email.$model=c),class:I(["w-full",{"p-invalid":o(s).email.$invalid&&o(s).email.$dirty}]),onBlur:o(s).email.$touch},null,8,["modelValue","class","onBlur"]),l[6]||(l[6]=E("label",{form:"formEmail"},"Your email address",-1))]),_:1}),R(o(z),{class:"mt-8"},{default:C(()=>[R(o(D),{id:"formSubject",modelValue:o(s).subject.$model,"onUpdate:modelValue":l[2]||(l[2]=c=>o(s).subject.$model=c),class:I(["w-full",{"p-invalid":o(s).subject.$invalid&&o(s).subject.$dirty}]),onBlur:o(s).subject.$touch},null,8,["modelValue","class","onBlur"]),l[7]||(l[7]=E("label",{for:"formSubject"},"Subject",-1))]),_:1}),R(o(z),{class:"mt-8"},{default:C(()=>[R(o($e),{id:"message",modelValue:o(s).message.$model,"onUpdate:modelValue":l[3]||(l[3]=c=>o(s).message.$model=c),class:I(["w-full",{"p-invalid":o(s).message.$invalid&&o(s).message.$dirty}]),"auto-resize":!0,rows:"5",onBlur:o(s).message.$touch},null,8,["modelValue","class","onBlur"]),l[8]||(l[8]=E("label",{for:"formMessage"},"Your message",-1))]),_:1}),E("div",$t,[R(m,{type:"submit",icon:"i-carbon-send",label:"Send",disabled:o($)},null,8,["disabled"])])],32)]),_:1})])}}});export{yt as default};
