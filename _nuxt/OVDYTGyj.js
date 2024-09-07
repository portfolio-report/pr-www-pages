import{_ as Ee}from"./DieEz3Dt.js";import{B as oe,s as ie,o as H,c as U,r as Ve,m as ue,i as je,u as s,g as Oe,a as y,b as Pe,w as z,d as G,e as Y,f as Ce,h,j as ze,k as Se,l as Q,p as X,n as ee,q as Te,t as Ie,v as Be,x as R,y as P,z as S,A as E,C as T,D as Le,E as Ae}from"./C5SKv2oY.js";import{u as ke}from"./8ocHVVj1.js";import{s as D}from"./BdtAJReI.js";import"./DlAUqK2U.js";var Fe=function(n){var t=n.dt;return`
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
`)},Ne={root:"p-floatlabel"},De=oe.extend({name:"floatlabel",theme:Fe,classes:Ne}),qe={name:"BaseFloatLabel",extends:ie,props:{},style:De,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},C={name:"FloatLabel",extends:qe,inheritAttrs:!1};function Ge(e,n,t,a,o,l){return H(),U("span",ue({class:e.cx("root")},e.ptmi("root")),[Ve(e.$slots,"default")],16)}C.render=Ge;var Me=function(n){var t=n.dt;return`
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
`)},He={root:function(n){var t=n.instance,a=n.props;return["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":a.autoResize,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-textarea-fluid":t.hasFluid}]}},Ue=oe.extend({name:"textarea",theme:Me,classes:He}),Ye={name:"BaseTextarea",extends:ie,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Ue,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},ce={name:"Textarea",extends:Ye,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(n){this.autoResize&&this.resize(),this.$emit("update:modelValue",n.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return je(this.fluid)?!!this.$pcFluid:this.fluid}}},We=["value","aria-invalid"];function Ze(e,n,t,a,o,l){return H(),U("textarea",ue({class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:n[0]||(n[0]=function(){return l.onInput&&l.onInput.apply(l,arguments)})},e.ptmi("root",l.ptmParams)),null,16,We)}ce.render=Ze;const de=e=>{if(e=s(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let n in e)return!0;return!1}return!!String(e).length};function O(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return a=>(a=s(a),!de(a)||n.every(o=>(o.lastIndex=0,o.test(a))))}O(/^[a-zA-Z]*$/);O(/^[a-zA-Z0-9]*$/);O(/^\d*(\.\d+)?$/);const Je=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Ke=O(Je),Qe={$validator:Ke,$message:"Value is not a valid email address",$params:{type:"email"}};function Xe(e){return typeof e=="string"&&(e=e.trim()),de(e)}var I={$validator:Xe,$message:"Value is required",$params:{type:"required"}};const et=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;O(et);O(/(^[0-9]*$)|(^-[0-9]+$)/);O(/^[-]?\d*(\.\d+)?$/);function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?te(Object(t),!0).forEach(function(a){tt(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function tt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ae(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((t,a)=>(n.includes(a)||(t[a]=s(e[a])),t),{})}function L(e){return typeof e=="function"}function at(e){return ze(e)||Se(e)}function fe(e,n,t){let a=e;const o=n.split(".");for(let l=0;l<o.length;l++){if(!a[o[l]])return t;a=a[o[l]]}return a}function q(e,n,t){return h(()=>e.some(a=>fe(n,a,{[t]:!1})[t]))}function ne(e,n,t){return h(()=>e.reduce((a,o)=>{const l=fe(n,o,{[t]:!1})[t]||[];return a.concat(l)},[]))}function pe(e,n,t,a){return e.call(a,s(n),s(t),a)}function me(e){return e.$valid!==void 0?!e.$valid:!e}function nt(e,n,t,a,o,l,$){let{$lazy:u,$rewardEarly:p}=o,i=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],m=arguments.length>8?arguments[8]:void 0,c=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=y(!!a.value),r=y(0);t.value=!1;const f=z([n,a].concat(i,g),()=>{if(u&&!a.value||p&&!c.value&&!t.value)return;let d;try{d=pe(e,n,m,$)}catch(b){d=Promise.reject(b)}r.value++,t.value=!!r.value,v.value=!1,Promise.resolve(d).then(b=>{r.value--,t.value=!!r.value,l.value=b,v.value=me(b)}).catch(b=>{r.value--,t.value=!!r.value,l.value=b,v.value=!0})},{immediate:!0,deep:typeof n=="object"});return{$invalid:v,$unwatch:f}}function rt(e,n,t,a,o,l,$,u){let{$lazy:p,$rewardEarly:i}=a;const m=()=>({}),c=h(()=>{if(p&&!t.value||i&&!u.value)return!1;let g=!0;try{const v=pe(e,n,$,l);o.value=v,g=me(v)}catch(v){o.value=v}return g});return{$unwatch:m,$invalid:c}}function lt(e,n,t,a,o,l,$,u,p,i,m){const c=y(!1),g=e.$params||{},v=y(null);let r,f;e.$async?{$invalid:r,$unwatch:f}=nt(e.$validator,n,c,t,a,v,o,e.$watchTargets,p,i,m):{$invalid:r,$unwatch:f}=rt(e.$validator,n,t,a,v,o,p,i);const d=e.$message;return{$message:L(d)?h(()=>d(ae({$pending:c,$invalid:r,$params:ae(g),$model:n,$response:v,$validator:l,$propertyPath:u,$property:$}))):d||"",$params:g,$pending:c,$invalid:r,$response:v,$unwatch:f}}function st(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=s(e),t=Object.keys(n),a={},o={},l={};let $=null;return t.forEach(u=>{const p=n[u];switch(!0){case L(p.$validator):a[u]=p;break;case L(p):a[u]={$validator:p};break;case u==="$validationGroups":$=p;break;case u.startsWith("$"):l[u]=p;break;default:o[u]=p}}),{rules:a,nestedValidators:o,config:l,validationGroups:$}}const ot="__root";function it(e,n,t,a,o,l,$,u,p){const i=Object.keys(e),m=a.get(o,e),c=y(!1),g=y(!1),v=y(0);if(m){if(!m.$partial)return m;m.$unwatch(),c.value=m.$dirty.value}const r={$dirty:c,$path:o,$touch:()=>{c.value||(c.value=!0)},$reset:()=>{c.value&&(c.value=!1)},$commit:()=>{}};return i.length?(i.forEach(f=>{r[f]=lt(e[f],n,r.$dirty,l,$,f,t,o,p,g,v)}),r.$externalResults=h(()=>u.value?[].concat(u.value).map((f,d)=>({$propertyPath:o,$property:t,$validator:"$externalResults",$uid:`${o}-externalResult-${d}`,$message:f,$params:{},$response:null,$pending:!1})):[]),r.$invalid=h(()=>{const f=i.some(d=>s(r[d].$invalid));return g.value=f,!!r.$externalResults.value.length||f}),r.$pending=h(()=>i.some(f=>s(r[f].$pending))),r.$error=h(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=h(()=>i.filter(f=>s(r[f].$invalid)).map(f=>{const d=r[f];return Y({$propertyPath:o,$property:t,$validator:f,$uid:`${o}-${f}`,$message:d.$message,$params:d.$params,$response:d.$response,$pending:d.$pending})}).concat(r.$externalResults.value)),r.$errors=h(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>i.forEach(f=>{r[f].$unwatch()}),r.$commit=()=>{g.value=!0,v.value=Date.now()},a.set(o,e,r),r):(m&&a.set(o,e,r),r)}function ut(e,n,t,a,o,l,$){const u=Object.keys(e);return u.length?u.reduce((p,i)=>(p[i]=M({validations:e[i],state:n,key:i,parentKey:t,resultsCache:a,globalConfig:o,instance:l,externalResults:$}),p),{}):{}}function ct(e,n,t){const a=h(()=>[n,t].filter(r=>r).reduce((r,f)=>r.concat(Object.values(s(f))),[])),o=h({get(){return e.$dirty.value||(a.value.length?a.value.every(r=>r.$dirty):!1)},set(r){e.$dirty.value=r}}),l=h(()=>{const r=s(e.$silentErrors)||[],f=a.value.filter(d=>(s(d).$silentErrors||[]).length).reduce((d,b)=>d.concat(...b.$silentErrors),[]);return r.concat(f)}),$=h(()=>{const r=s(e.$errors)||[],f=a.value.filter(d=>(s(d).$errors||[]).length).reduce((d,b)=>d.concat(...b.$errors),[]);return r.concat(f)}),u=h(()=>a.value.some(r=>r.$invalid)||s(e.$invalid)||!1),p=h(()=>a.value.some(r=>s(r.$pending))||s(e.$pending)||!1),i=h(()=>a.value.some(r=>r.$dirty)||a.value.some(r=>r.$anyDirty)||o.value),m=h(()=>o.value?p.value||u.value:!1),c=()=>{e.$touch(),a.value.forEach(r=>{r.$touch()})},g=()=>{e.$commit(),a.value.forEach(r=>{r.$commit()})},v=()=>{e.$reset(),a.value.forEach(r=>{r.$reset()})};return a.value.length&&a.value.every(r=>r.$dirty)&&c(),{$dirty:o,$errors:$,$invalid:u,$anyDirty:i,$error:m,$pending:p,$touch:c,$reset:v,$silentErrors:l,$commit:g}}function M(e){let{validations:n,state:t,key:a,parentKey:o,childResults:l,resultsCache:$,globalConfig:u={},instance:p,externalResults:i}=e;const m=o?`${o}.${a}`:a,{rules:c,nestedValidators:g,config:v,validationGroups:r}=st(n),f=_(_({},u),v),d=a?h(()=>{const x=s(t);return x?s(x[a]):void 0}):t,b=_({},s(i)||{}),W=h(()=>{const x=s(i);return a?x?s(x[a]):void 0:x}),Z=it(c,d,a,$,m,f,p,W,t),V=ut(g,d,m,$,f,p,W),J={};r&&Object.entries(r).forEach(x=>{let[j,w]=x;J[j]={$invalid:q(w,V,"$invalid"),$error:q(w,V,"$error"),$pending:q(w,V,"$pending"),$errors:ne(w,V,"$errors"),$silentErrors:ne(w,V,"$silentErrors")}});const{$dirty:A,$errors:ve,$invalid:k,$anyDirty:he,$error:ge,$pending:F,$touch:N,$reset:be,$silentErrors:xe,$commit:K}=ct(Z,V,l),ye=a?h({get:()=>s(d),set:x=>{A.value=!0;const j=s(t),w=s(i);w&&(w[a]=b[a]),G(j[a])?j[a].value=x:j[a]=x}}):null;a&&f.$autoDirty&&z(d,()=>{A.value||N();const x=s(i);x&&(x[a]=b[a])},{flush:"sync"});async function Re(){return N(),f.$rewardEarly&&(K(),await ee()),await ee(),new Promise(x=>{if(!F.value)return x(!k.value);const j=z(F,()=>{x(!k.value),j()})})}function we(x){return(l.value||{})[x]}function _e(){G(i)?i.value=b:Object.keys(b).length===0?Object.keys(i).forEach(x=>{delete i[x]}):Object.assign(i,b)}return Y(_(_(_({},Z),{},{$model:ye,$dirty:A,$error:ge,$errors:ve,$invalid:k,$anyDirty:he,$pending:F,$touch:N,$reset:be,$path:m||ot,$silentErrors:xe,$validate:Re,$commit:K},l&&{$getResultsForChild:we,$clearExternalResults:_e,$validationGroups:J}),V))}class dt{constructor(){this.storage=new Map}set(n,t,a){this.storage.set(n,{rules:t,result:a})}checkRulesValidity(n,t,a){const o=Object.keys(a),l=Object.keys(t);return l.length!==o.length||!l.every(u=>o.includes(u))?!1:l.every(u=>t[u].$params?Object.keys(t[u].$params).every(p=>s(a[u].$params[p])===s(t[u].$params[p])):!0)}get(n,t){const a=this.storage.get(n);if(!a)return;const{rules:o,result:l}=a,$=this.checkRulesValidity(n,t,o),u=l.$unwatch?l.$unwatch:()=>({});return $?l:{$dirty:l.$dirty,$partial:!0,$unwatch:u}}}const B={COLLECT_ALL:!0,COLLECT_NONE:!1},re=Symbol("vuelidate#injectChildResults"),le=Symbol("vuelidate#removeChildResults");function ft(e){let{$scope:n,instance:t}=e;const a={},o=y([]),l=h(()=>o.value.reduce((m,c)=>(m[c]=s(a[c]),m),{}));function $(m,c){let{$registerAs:g,$scope:v,$stopPropagation:r}=c;r||n===B.COLLECT_NONE||v===B.COLLECT_NONE||n!==B.COLLECT_ALL&&n!==v||(a[g]=m,o.value.push(g))}t.__vuelidateInjectInstances=[].concat(t.__vuelidateInjectInstances||[],$);function u(m){o.value=o.value.filter(c=>c!==m),delete a[m]}t.__vuelidateRemoveInstances=[].concat(t.__vuelidateRemoveInstances||[],u);const p=Q(re,[]);X(re,t.__vuelidateInjectInstances);const i=Q(le,[]);return X(le,t.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:p,removeValidationResultsFromParent:i}}function $e(e){return new Proxy(e,{get(n,t){return typeof n[t]=="object"?$e(n[t]):h(()=>n[t])}})}let se=0;function pt(e,n){var t;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(a=e,e=void 0,n=void 0);let{$registerAs:o,$scope:l=B.COLLECT_ALL,$stopPropagation:$,$externalResults:u,currentVueInstance:p}=a;const i=p||((t=Oe())===null||t===void 0?void 0:t.proxy),m=i?i.$options:{};o||(se+=1,o=`_vuelidate_${se}`);const c=y({}),g=new dt,{childResults:v,sendValidationResultsToParent:r,removeValidationResultsFromParent:f}=i?ft({$scope:l,instance:i}):{childResults:y({})};if(!e&&m.validations){const d=m.validations;n=y({}),Pe(()=>{n.value=i,z(()=>L(d)?d.call(n.value,new $e(n.value)):d,b=>{c.value=M({validations:b,state:n,childResults:v,resultsCache:g,globalConfig:a,instance:i,externalResults:u||i.vuelidateExternalResults})},{immediate:!0})}),a=m.validationsConfig||a}else{const d=G(e)||at(e)?e:Y(e||{});z(d,b=>{c.value=M({validations:b,state:n,childResults:v,resultsCache:g,globalConfig:a,instance:i??{},externalResults:u})},{immediate:!0})}return i&&(r.forEach(d=>d(c,{$registerAs:o,$scope:l,$stopPropagation:$})),Ce(()=>f.forEach(d=>d(o)))),h(()=>_(_({},s(c.value)),v.value))}const mt={class:"flex justify-center"},$t=E("a",{href:"https://forum.portfolio-performance.info/"}," discussion forum ",-1),vt=E("br",null,null,-1),ht=E("label",{for:"formName"},"Your name",-1),gt=E("label",{form:"formEmail"},"Your email address",-1),bt=E("label",{for:"formSubject"},"Subject",-1),xt=E("label",{for:"formMessage"},"Your message",-1),yt={class:"flex justify-content-end mt-8"},jt=Te({__name:"contact",setup(e){Ie({title:"Portfolio Report - Contact",link:[{rel:"canonical",href:"https://www.portfolio-report.net/contact"}]});const n=Be(),t={name:"",email:"",subject:"",message:""},a=y({...t}),l=pt({name:{required:I},email:{required:I,email:Qe},subject:{required:I},message:{required:I}},a),$=y(!1);async function u(){if(l.value.$invalid){l.value.$touch(),n.add({severity:"error",summary:"Error",detail:"Please fill all fields.",life:5e3});return}$.value=!0;try{await ke("/contact",{method:"post",body:a.value}),a.value={...t},l.value.$reset(),n.add({severity:"success",summary:"Thank you",detail:"Your message has been sent.",life:5e3}),$.value=!1}catch(p){$.value=!1,n.add({severity:"error",summary:"Error",detail:"Message could not be sent. Please try again later.",life:5e3}),console.log(p)}}return(p,i)=>{const m=Ee;return H(),U("div",mt,[R(s(Ae),{style:{width:"800px"}},{title:P(()=>[S(" Contact ")]),content:P(()=>[S(" Please use the "),$t,S(" for all matters that can be discussed publicly."),vt,S(" This contact form can be used to establish direct contact with the operators for all matters that cannot be discussed publicly. "),E("form",{class:"mt-2",onSubmit:Le(u,["prevent"])},[R(s(C),{class:"mt-8"},{default:P(()=>[R(s(D),{id:"formName",modelValue:s(l).name.$model,"onUpdate:modelValue":i[0]||(i[0]=c=>s(l).name.$model=c),class:T(["w-full",{"p-invalid":s(l).name.$invalid&&s(l).name.$dirty}]),onBlur:s(l).name.$touch},null,8,["modelValue","class","onBlur"]),ht]),_:1}),R(s(C),{class:"mt-8"},{default:P(()=>[R(s(D),{id:"formEmail",modelValue:s(l).email.$model,"onUpdate:modelValue":i[1]||(i[1]=c=>s(l).email.$model=c),class:T(["w-full",{"p-invalid":s(l).email.$invalid&&s(l).email.$dirty}]),onBlur:s(l).email.$touch},null,8,["modelValue","class","onBlur"]),gt]),_:1}),R(s(C),{class:"mt-8"},{default:P(()=>[R(s(D),{id:"formSubject",modelValue:s(l).subject.$model,"onUpdate:modelValue":i[2]||(i[2]=c=>s(l).subject.$model=c),class:T(["w-full",{"p-invalid":s(l).subject.$invalid&&s(l).subject.$dirty}]),onBlur:s(l).subject.$touch},null,8,["modelValue","class","onBlur"]),bt]),_:1}),R(s(C),{class:"mt-8"},{default:P(()=>[R(s(ce),{id:"message",modelValue:s(l).message.$model,"onUpdate:modelValue":i[3]||(i[3]=c=>s(l).message.$model=c),class:T(["w-full",{"p-invalid":s(l).message.$invalid&&s(l).message.$dirty}]),"auto-resize":!0,onBlur:s(l).message.$touch},null,8,["modelValue","class","onBlur"]),xt]),_:1}),E("div",yt,[R(m,{type:"submit",icon:"i-carbon-send",label:"Send",disabled:s($)},null,8,["disabled"])])],32)]),_:1})])}}});export{jt as default};
