import{s as Q}from"./XG6rDnCo.js";import{q as B,h as t,G as h,u as c,r as w,H as J,p as X,j as l,B as L,R as Z,I as ee,s as E,J as ne,K as oe,y as g,L as P,A as p,m as b,k as T,C as se,M as te,N as v,O as re,T as ae,P as ce,c as ie,t as le,w as ue,x,z as u,D as pe,i as C,Q as S,E as I,S as D,U as N,F as me,_ as de}from"./BF7OD9wd.js";import{s as ge,_ as fe}from"./B_yTDF1u.js";import{T as be}from"./BW6ZRXev.js";import{u as A}from"./BXkM2ZPZ.js";import{s as he,a as ye}from"./rf1zdUmJ.js";import{u as ve}from"./e3ZtvKj8.js";import{_ as ke}from"./DlAUqK2U.js";import"./CEoMN0_k.js";import"./BejlMSNL.js";const we=B({__name:"SelectSecurityType",props:{modelValue:{}},emits:["update:modelValue"],setup(n,{emit:o}){const e=o,s=[{text:"*",value:""},{text:"share",value:"share"},{text:"fund",value:"fund"},{text:"crypto",value:"crypto"},{text:"bond",value:"bond"},{text:"index",value:"index"}];function m(a){e("update:modelValue",a)}return(a,f)=>(t(),h(c(Q),{"model-value":a.modelValue,options:s,"option-label":"text","option-value":"value","show-clear":!0,placeholder:"Security Type","onUpdate:modelValue":m},null,8,["model-value"]))}}),xe=Symbol.for("nuxt:client-only"),Se=B({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:o,attrs:e}){const s=w(!1);return J(()=>{s.value=!0}),X(xe,!0),m=>{var y;if(s.value)return(y=o.default)==null?void 0:y.call(o);const a=o.fallback||o.placeholder;if(a)return a();const f=m.fallback||m.placeholder||"",k=m.fallbackTag||m.placeholderTag||"span";return l(k,e,f)}}});var $e=function(o){var e=o.dt;return`
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
`)},_e={root:function(o){var e=o.props;return"p-message p-component p-message-"+e.severity},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Te=L.extend({name:"message",theme:$e,classes:_e}),Pe={name:"BaseMessage",extends:E,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:Te,provide:function(){return{$pcMessage:this,$parentInstance:this}}},j={name:"Message",extends:Pe,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var o=this;this.life&&setTimeout(function(){o.visible=!1,o.$emit("life-end")},this.life)},methods:{close:function(o){this.visible=!1,this.$emit("close",o)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:Z},components:{TimesIcon:ee}};function _(n){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_(n)}function R(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);o&&(s=s.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),e.push.apply(e,s)}return e}function M(n){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?arguments[o]:{};o%2?R(Object(e),!0).forEach(function(s){Oe(n,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))})}return n}function Oe(n,o,e){return(o=Ie(o))in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function Ie(n){var o=je(n,"string");return _(o)=="symbol"?o:o+""}function je(n,o){if(_(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,o||"default");if(_(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}var Be=["aria-label"];function Ve(n,o,e,s,m,a){var f=ne("TimesIcon"),k=oe("ripple");return t(),h(ae,b({name:"p-message",appear:""},n.ptmi("transition")),{default:g(function(){return[P(p("div",b({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("root")),[n.$slots.container?T(n.$slots,"container",{key:0,closeCallback:a.close}):(t(),l("div",b({key:1,class:n.cx("content")},n.ptm("content")),[T(n.$slots,"icon",{class:se(n.cx("icon"))},function(){return[(t(),h(te(n.icon?"span":null),b({class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(t(),l("div",b({key:0,class:n.cx("text")},n.ptm("text")),[T(n.$slots,"default")],16)):v("",!0),n.closable?P((t(),l("button",b({key:1,class:n.cx("closeButton"),"aria-label":a.closeAriaLabel,type:"button",onClick:o[0]||(o[0]=function(y){return a.close(y)})},M(M({},n.closeButtonProps),n.ptm("closeButton"))),[T(n.$slots,"closeicon",{},function(){return[n.closeIcon?(t(),l("i",b({key:0,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16)):(t(),h(f,b({key:1,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,Be)),[[k]]):v("",!0)],16))],16),[[re,m.visible]])]}),_:3},16)}j.render=Ve;var ze=function(o){var e=o.dt;return`
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
`)},qe={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ce=L.extend({name:"progressspinner",theme:ze,classes:qe}),De={name:"BaseProgressSpinner",extends:E,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Ce,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},U={name:"ProgressSpinner",extends:De,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Ne=["fill","stroke-width"];function Ae(n,o,e,s,m,a){return t(),l("div",b({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(t(),l("svg",b({class:n.cx("spin"),viewBox:"25 25 50 50",style:a.svgStyle},n.ptm("spin")),[p("circle",b({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,Ne)],16))],16)}U.render=Ae;const Re={class:"flex justify-center"},Me={style:{width:"800px"}},Le={key:0,class:"font-bold"},Ee={class:"text-lg font-medium flex items-center"},Ue={key:0,class:"i-carbon-chart-line mr-1 text-blue-500"},Ke={class:"text-gray-600 separator-container font-mono"},Ge={key:0},He={key:1},We={key:2},Ye=B({__name:"search",setup(n){const o=A("q","",{transform:d=>d||""}),e=A("securityType","",{transform:d=>d||""}),s=ce(),m=ie(()=>{let d="https://www.portfolio-report.net/search";return s.query&&s.query.q&&(d+=`?q=${s.query.q}`,s.query.securityType&&(d+=`&securityType=${s.query.securityType}`)),d});le({title:"Portfolio Report Search",link:[{rel:"canonical",href:m.value}]});const a=w(""),f=w(""),k=w([]),y=w(!1),$=w(!1),O=w(!1),V=w("");async function K(){a.value=a.value.trim(),o.value=a.value,e.value=f.value}ue([o,e],()=>{a.value=o.value,f.value=e.value,G()},{immediate:!0});async function G(){if(o.value){$.value=!0,y.value=!1,O.value=!1;try{const d={q:o.value};f.value&&(d.securityType=e.value);const r=await ve("/v1/securities/search",{params:d});$.value=!1,k.value=r,y.value=r.length===0,r.length===1&&r[0]&&await me(`/securities/${r[0].uuid}`)}catch(d){$.value=!1,k.value=[],y.value=!1,O.value=!0,V.value=String(d)}}}return(d,r)=>{const H=we,W=Se,Y=de,F=fe,z=be;return t(),l("div",Re,[p("div",Me,[x(c(I),null,{title:g(()=>r[2]||(r[2]=[u(" Security Search ")])),content:g(()=>[p("form",{onSubmit:pe(K,["prevent"])},[x(W,null,{default:g(()=>[x(c(he),{id:"searchTermInput",modelValue:c(a),"onUpdate:modelValue":r[0]||(r[0]=i=>C(a)?a.value=i:null),type:"search",class:"mt-2 w-full",autofocus:"",placeholder:"ISIN/WKN/Symbol/Name"},null,8,["modelValue"]),x(H,{modelValue:c(f),"onUpdate:modelValue":r[1]||(r[1]=i=>C(f)?f.value=i:null),class:"w-full mt-4"},null,8,["modelValue"]),x(c(ye),{type:"submit",disabled:!c(a)||c($),class:"w-full flex justify-center mt-4"},{default:g(()=>[c($)?(t(),h(c(U),{key:1,style:{height:"20px"}})):(t(),l("span",Le,"Search"))]),_:1},8,["disabled"])]),_:1}),c(y)?(t(),h(c(j),{key:0,severity:"info"},{default:g(()=>r[3]||(r[3]=[u(" Sorry, no results were found. ")])),_:1})):v("",!0),c(O)?(t(),h(c(j),{key:1,severity:"error"},{default:g(()=>[r[4]||(r[4]=u(" Sorry, there was an error:")),r[5]||(r[5]=p("br",null,null,-1)),u(S(c(V)),1)]),_:1})):v("",!0)],32)]),_:1}),c(k).length>0?(t(),h(c(I),{key:0,class:"mt-4"},{title:g(()=>r[6]||(r[6]=[u(" Results ")])),content:g(()=>[(t(!0),l(D,null,N(c(k),i=>(t(),l("div",{key:i.uuid,class:"mb-3"},[p("div",Ee,[i.pricesAvailable?P((t(),l("i",Ue,null,512)),[[z,"Prices available",void 0,{top:!0}]]):v("",!0),P((t(),h(Y,{to:`/securities/${i.uuid}`,class:"text-blue-500"},{default:g(()=>[u(S(i.name),1)]),_:2},1032,["to"])),[[z,"Drag and drop me to Portfolio Performance!",void 0,{top:!0}]]),x(c(ge),{class:"mx-1 p-1 !text-xs !bg-teal-500 !text-white"},{default:g(()=>[u(S(i.securityType),1)]),_:2},1024),(t(!0),l(D,null,N(i.tags,q=>(t(),h(F,{key:q,name:q},null,8,["name"]))),128))]),p("div",Ke,[i.isin?(t(),l("span",Ge,S(i.isin),1)):v("",!0),i.wkn?(t(),l("span",He,S(i.wkn),1)):v("",!0),i.code?(t(),l("span",We,S(i.code),1)):v("",!0)])]))),128))]),_:1})):v("",!0),x(c(I),{class:"mt-4"},{title:g(()=>r[7]||(r[7]=[u(" Your contribution is needed 💪 ")])),content:g(()=>r[8]||(r[8]=[u(" Your help is needed to keep this website up and running. Have you thought about contributing? You could: "),p("ul",null,[p("li",null,[u(" Actively maintain and develop the "),p("a",{href:"https://www.github.com/portfolio-report",class:"text-blue-500"},"source code on Github"),u(". ")]),p("li",null,[u(" Become member of the "),p("a",{href:"https://forum.portfolio-performance.info",class:"text-blue-500"},"forum"),u(" and help other users. ")]),p("li",null,[u(" Cover monthly costs for server operation and licence fees. Become sponsor on "),p("a",{href:"https://github.com/sponsors/tfabritius",class:"text-blue-500"},"Github"),u(". ")])],-1)])),_:1})])])}}}),rn=ke(Ye,[["__scopeId","data-v-de89c1ae"]]);export{rn as default};
