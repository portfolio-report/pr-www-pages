import{s as ne}from"./B3CZHirk.js";import{q as B,o as t,G as b,u as a,a as k,H as oe,p as se,c as i,B as W,I as z,J as D,K as N,L as A,R as te,M as re,s as Y,N as ae,O as ce,y as d,P as I,A as u,m as f,r as T,Q as ie,S as v,T as le,U as ue,V as pe,h as me,t as de,w as ge,x,z as l,D as fe,d as R,W as _,E as O,X as M,Y as E,F as be,_ as he,Z as ye,$ as ve}from"./CHB-j1sf.js";import{s as we,_ as ke}from"./CLRy4WE7.js";import{u as xe}from"./B4YP8GCo.js";import{T as _e}from"./Ca9eREKu.js";import{s as Se,a as $e}from"./BnjH40W3.js";import{u as L}from"./BlFhohyD.js";import{_ as Te}from"./DlAUqK2U.js";const Ie=B({__name:"SelectSecurityType",props:{modelValue:{}},emits:["update:modelValue"],setup(n,{emit:o}){const e=o,s=[{text:"*",value:""},{text:"share",value:"share"},{text:"fund",value:"fund"},{text:"crypto",value:"crypto"},{text:"bond",value:"bond"},{text:"index",value:"index"}];function p(r){e("update:modelValue",r)}return(r,g)=>(t(),b(a(ne),{"model-value":r.modelValue,options:s,"option-label":"text","option-value":"value","show-clear":!0,placeholder:"Security Type","onUpdate:modelValue":p},null,8,["model-value"]))}}),Pe=Symbol.for("nuxt:client-only"),Oe=B({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:o,attrs:e}){const s=k(!1);return oe(()=>{s.value=!0}),se(Pe,!0),p=>{var h;if(s.value)return(h=o.default)==null?void 0:h.call(o);const r=o.fallback||o.placeholder;if(r)return r();const g=p.fallback||p.placeholder||"",w=p.fallbackTag||p.placeholderTag||"span";return i(w,e,g)}}});var je=function(o){var e=o.dt;return`
.p-message {
    border-radius: `.concat(e("message.border.radius"),`;
    outline-width: `).concat(e("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(e("message.content.padding"),`;
    gap: `).concat(e("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(e("message.close.button.width"),`;
    height: `).concat(e("message.close.button.height"),`;
    border-radius: `).concat(e("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(e("message.transition.duration"),", color ").concat(e("message.transition.duration"),", outline-color ").concat(e("message.transition.duration"),", box-shadow ").concat(e("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(e("message.close.icon.size"),`;
    width: `).concat(e("message.close.icon.size"),`;
    height: `).concat(e("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(e("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(e("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(e("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(e("message.info.background"),`;
    outline-color: `).concat(e("message.info.border.color"),`;
    color: `).concat(e("message.info.color"),`;
    box-shadow: `).concat(e("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(e("message.info.close.button.hover.background"),`;
}

.p-message-success {
    background: `).concat(e("message.success.background"),`;
    outline-color: `).concat(e("message.success.border.color"),`;
    color: `).concat(e("message.success.color"),`;
    box-shadow: `).concat(e("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(e("message.success.close.button.hover.background"),`;
}

.p-message-warn {
    background: `).concat(e("message.warn.background"),`;
    outline-color: `).concat(e("message.warn.border.color"),`;
    color: `).concat(e("message.warn.color"),`;
    box-shadow: `).concat(e("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(e("message.warn.close.button.hover.background"),`;
}

.p-message-error {
    background: `).concat(e("message.error.background"),`;
    outline-color: `).concat(e("message.error.border.color"),`;
    color: `).concat(e("message.error.color"),`;
    box-shadow: `).concat(e("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(e("message.error.close.button.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(e("message.secondary.background"),`;
    outline-color: `).concat(e("message.secondary.border.color"),`;
    color: `).concat(e("message.secondary.color"),`;
    box-shadow: `).concat(e("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(e("message.secondary.close.button.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(e("message.contrast.background"),`;
    outline-color: `).concat(e("message.contrast.border.color"),`;
    color: `).concat(e("message.contrast.color"),`;
    box-shadow: `).concat(e("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(e("message.contrast.close.button.hover.background"),`;
}

.p-message-text {
    font-size: `).concat(e("message.text.font.size"),`;
    font-weight: `).concat(e("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(e("message.icon.size"),`;
    width: `).concat(e("message.icon.size"),`;
    height: `).concat(e("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}
`)},Be={root:function(o){var e=o.props;return"p-message p-component p-message-"+e.severity},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ve=W.extend({name:"message",theme:je,classes:Be}),Ce={name:"BaseMessage",extends:Y,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:Ve,provide:function(){return{$pcMessage:this,$parentInstance:this}}},j={name:"Message",extends:Ce,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var o=this;this.life&&setTimeout(function(){o.visible=!1,o.$emit("life-end")},this.life)},methods:{close:function(o){this.visible=!1,this.$emit("close",o)}},computed:{iconComponent:function(){return{info:z,success:D,warn:N,error:A}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:te},components:{TimesIcon:re,InfoCircleIcon:z,CheckIcon:D,ExclamationTriangleIcon:N,TimesCircleIcon:A}};function $(n){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},$(n)}function U(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);o&&(s=s.filter(function(p){return Object.getOwnPropertyDescriptor(n,p).enumerable})),e.push.apply(e,s)}return e}function K(n){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?arguments[o]:{};o%2?U(Object(e),!0).forEach(function(s){qe(n,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))})}return n}function qe(n,o,e){return(o=ze(o))in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function ze(n){var o=De(n,"string");return $(o)=="symbol"?o:o+""}function De(n,o){if($(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,o||"default");if($(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}var Ne=["aria-label"];function Ae(n,o,e,s,p,r){var g=ae("TimesIcon"),w=ce("ripple");return t(),b(ue,f({name:"p-message",appear:""},n.ptmi("transition")),{default:d(function(){return[I(u("div",f({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("root")),[n.$slots.container?T(n.$slots,"container",{key:0,closeCallback:r.close}):(t(),i("div",f({key:1,class:n.cx("content")},n.ptm("content")),[T(n.$slots,"icon",{class:"p-message-icon"},function(){return[(t(),b(ie(n.icon?"span":null),f({class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(t(),i("div",f({key:0,class:["p-message-text",n.cx("text")]},n.ptm("text")),[T(n.$slots,"default")],16)):v("",!0),n.closable?I((t(),i("button",f({key:1,class:n.cx("closeButton"),"aria-label":r.closeAriaLabel,type:"button",onClick:o[0]||(o[0]=function(h){return r.close(h)})},K(K({},n.closeButtonProps),n.ptm("closeButton"))),[T(n.$slots,"closeicon",{},function(){return[n.closeIcon?(t(),i("i",f({key:0,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16)):(t(),b(g,f({key:1,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,Ne)),[[w]]):v("",!0)],16))],16),[[le,p.visible]])]}),_:3},16)}j.render=Ae;var Re=function(o){var e=o.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(e("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(e("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(e("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(e("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(e("progressspinner.color.4"),`;
    }
}
`)},Me={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ee=W.extend({name:"progressspinner",theme:Re,classes:Me}),Le={name:"BaseProgressSpinner",extends:Y,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Ee,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},G={name:"ProgressSpinner",extends:Le,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Ue=["fill","stroke-width"];function Ke(n,o,e,s,p,r){return t(),i("div",f({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(t(),i("svg",f({class:n.cx("spin"),viewBox:"25 25 50 50",style:r.svgStyle},n.ptm("spin")),[u("circle",f({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,Ue)],16))],16)}G.render=Ke;const H=n=>(ye("data-v-200a6cc8"),n=n(),ve(),n),We={class:"flex justify-center"},Ye={style:{width:"800px"}},Ge={key:0,class:"font-bold"},He=H(()=>u("br",null,null,-1)),Fe={class:"text-lg font-medium flex items-center"},Qe={key:0,class:"i-carbon-chart-line mr-1 text-blue-500"},Je={class:"text-gray-600 separator-container font-mono"},Xe={key:0},Ze={key:1},en={key:2},nn=H(()=>u("ul",null,[u("li",null,[l(" Actively maintain and develop the "),u("a",{href:"https://www.github.com/portfolio-report",class:"text-blue-500"},"source code on Github"),l(". ")]),u("li",null,[l(" Become member of the "),u("a",{href:"https://forum.portfolio-performance.info",class:"text-blue-500"},"forum"),l(" and help other users. ")]),u("li",null,[l(" Cover monthly costs for server operation and licence fees. Become sponsor on "),u("a",{href:"https://github.com/sponsors/tfabritius",class:"text-blue-500"},"Github"),l(". ")])],-1)),on=B({__name:"search",setup(n){const o=L("q","",{transform:m=>m||""}),e=L("securityType","",{transform:m=>m||""}),s=pe(),p=me(()=>{let m="https://www.portfolio-report.net/search";return s.query&&s.query.q&&(m+=`?q=${s.query.q}`,s.query.securityType&&(m+=`&securityType=${s.query.securityType}`)),m});de({title:"Portfolio Report Search",link:[{rel:"canonical",href:p.value}]});const r=k(""),g=k(""),w=k([]),h=k(!1),S=k(!1),P=k(!1),V=k("");async function F(){r.value=r.value.trim(),o.value=r.value,e.value=g.value}ge([o,e],()=>{r.value=o.value,g.value=e.value,Q()},{immediate:!0});async function Q(){if(o.value){S.value=!0,h.value=!1,P.value=!1;try{const m={q:o.value};g.value&&(m.securityType=e.value);const y=await xe("/v1/securities/search",{params:m});S.value=!1,w.value=y,h.value=y.length===0,y.length===1&&await be(`/securities/${y[0].uuid}`)}catch(m){S.value=!1,w.value=[],h.value=!1,P.value=!0,V.value=String(m)}}}return(m,y)=>{const J=Ie,X=Oe,Z=he,ee=ke,C=_e;return t(),i("div",We,[u("div",Ye,[x(a(O),null,{title:d(()=>[l(" Security Search ")]),content:d(()=>[u("form",{onSubmit:fe(F,["prevent"])},[x(X,null,{default:d(()=>[x(a(Se),{id:"searchTermInput",modelValue:a(r),"onUpdate:modelValue":y[0]||(y[0]=c=>R(r)?r.value=c:null),type:"search",class:"mt-2 w-full",autofocus:"",placeholder:"ISIN/WKN/Symbol/Name"},null,8,["modelValue"]),x(J,{modelValue:a(g),"onUpdate:modelValue":y[1]||(y[1]=c=>R(g)?g.value=c:null),class:"w-full mt-4"},null,8,["modelValue"]),x(a($e),{type:"submit",disabled:!a(r)||a(S),class:"w-full flex justify-center mt-4"},{default:d(()=>[a(S)?(t(),b(a(G),{key:1,style:{height:"20px"}})):(t(),i("span",Ge,"Search"))]),_:1},8,["disabled"])]),_:1}),a(h)?(t(),b(a(j),{key:0,severity:"info"},{default:d(()=>[l(" Sorry, no results were found. ")]),_:1})):v("",!0),a(P)?(t(),b(a(j),{key:1,severity:"error"},{default:d(()=>[l(" Sorry, there was an error:"),He,l(_(a(V)),1)]),_:1})):v("",!0)],32)]),_:1}),a(w).length>0?(t(),b(a(O),{key:0,class:"mt-4"},{title:d(()=>[l(" Results ")]),content:d(()=>[(t(!0),i(M,null,E(a(w),c=>(t(),i("div",{key:c.uuid,class:"mb-3"},[u("div",Fe,[c.pricesAvailable?I((t(),i("i",Qe,null,512)),[[C,"Prices available",void 0,{top:!0}]]):v("",!0),I((t(),b(Z,{to:`/securities/${c.uuid}`,class:"text-blue-500"},{default:d(()=>[l(_(c.name),1)]),_:2},1032,["to"])),[[C,"Drag and drop me to Portfolio Performance!",void 0,{top:!0}]]),x(a(we),{class:"mx-1 p-1 !text-xs !bg-teal-500 !text-white"},{default:d(()=>[l(_(c.securityType),1)]),_:2},1024),(t(!0),i(M,null,E(c.tags,q=>(t(),b(ee,{key:q,name:q},null,8,["name"]))),128))]),u("div",Je,[c.isin?(t(),i("span",Xe,_(c.isin),1)):v("",!0),c.wkn?(t(),i("span",Ze,_(c.wkn),1)):v("",!0),c.code?(t(),i("span",en,_(c.code),1)):v("",!0)])]))),128))]),_:1})):v("",!0),x(a(O),{class:"mt-4"},{title:d(()=>[l(" Your contribution is needed 💪 ")]),content:d(()=>[l(" Your help is needed to keep this website up and running. Have you thought about contributing? You could: "),nn]),_:1})])])}}}),mn=Te(on,[["__scopeId","data-v-200a6cc8"]]);export{mn as default};
