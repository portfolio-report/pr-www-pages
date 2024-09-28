import{B as x,aB as B,bd as D,a$ as u,at as p,l as I,s as V,h as d,j as m,k as g,m as O,be as G,q as _,bf as N,V as P,r as w,x as i,y as f,A as c,u as a,P as v,G as k,S as C,D as R,i as j,_ as L,c as A,C as S,bc as q}from"./B4Oq2uxo.js";import{a as $,s as z}from"./DIqzlAPX.js";import{_ as b}from"./DlAUqK2U.js";import{T as H}from"./j-Rn_Mhn.js";var U=x.extend({name:"styleclass-directive"}),W=B.extend({style:U}),M=W.extend("styleclass",{mounted:function(e,t){e.setAttribute("data-pd-styleclass",!0),this.bind(e,t)},unmounted:function(e){this.unbind(e)},methods:{bind:function(e,t){var n=this,s=this.resolveTarget(e,t);this.$el=s,e.$_pstyleclass_clicklistener=function(){t.value.toggleClass?D(s,t.value.toggleClass)?u(s,t.value.toggleClass):p(s,t.value.toggleClass):s.offsetParent===null?n.enter(s,e,t):n.leave(s,t)},e.addEventListener("click",e.$_pstyleclass_clicklistener)},unbind:function(e){e.$_pstyleclass_clicklistener&&(e.removeEventListener("click",e.$_pstyleclass_clicklistener),e.$_pstyleclass_clicklistener=null),this.unbindDocumentListener(e)},enter:function(e,t,n){n.value.enterActiveClass?e.$_pstyleclass_animating||(e.$_pstyleclass_animating=!0,n.value.enterActiveClass.includes("slidedown")&&(e.style.height="0px",u(e,n.value.hiddenClass||n.value.enterFromClass),e.style.maxHeight=e.scrollHeight+"px",p(e,n.value.hiddenClass||n.value.enterActiveClass),e.style.height=""),p(e,n.value.enterActiveClass),n.value.enterFromClass&&u(e,n.value.enterFromClass),e.$p_styleclass_enterlistener=function(){u(e,n.value.enterActiveClass),n.value.enterToClass&&p(e,n.value.enterToClass),e.removeEventListener("animationend",e.$p_styleclass_enterlistener),n.value.enterActiveClass.includes("slidedown")&&(e.style.maxHeight=""),e.$_pstyleclass_animating=!1},e.addEventListener("animationend",e.$p_styleclass_enterlistener)):(n.value.enterFromClass&&u(e,n.value.enterFromClass),n.value.enterToClass&&p(e,n.value.enterToClass)),n.value.hideOnOutsideClick&&this.bindDocumentListener(e,t,n)},leave:function(e,t){t.value.leaveActiveClass?e.$_pstyleclass_animating||(e.$_pstyleclass_animating=!0,p(e,t.value.leaveActiveClass),t.value.leaveFromClass&&u(e,t.value.leaveFromClass),e.$p_styleclass_leavelistener=function(){u(e,t.value.leaveActiveClass),t.value.leaveToClass&&p(e,t.value.leaveToClass),e.removeEventListener("animationend",e.$p_styleclass_leavelistener),e.$_pstyleclass_animating=!1},e.addEventListener("animationend",e.$p_styleclass_leavelistener)):(t.value.leaveFromClass&&u(e,t.value.leaveFromClass),t.value.leaveToClass&&p(e,t.value.leaveToClass)),t.value.hideOnOutsideClick&&this.unbindDocumentListener(e)},resolveTarget:function(e,t){switch(t.value.selector){case"@next":return e.nextElementSibling;case"@prev":return e.previousElementSibling;case"@parent":return e.parentElement;case"@grandparent":return e.parentElement.parentElement;default:return document.querySelector(t.value.selector)}},bindDocumentListener:function(e,t,n){var s=this;e.$p_styleclass_documentlistener||(e.$p_styleclass_documentlistener=function(l){!s.isVisible(e)||getComputedStyle(e).getPropertyValue("position")==="static"?s.unbindDocumentListener(e):s.isOutsideClick(l,e,t)&&s.leave(e,n)},e.ownerDocument.addEventListener("click",e.$p_styleclass_documentlistener))},unbindDocumentListener:function(e){e.$p_styleclass_documentlistener&&(e.ownerDocument.removeEventListener("click",e.$p_styleclass_documentlistener),e.$p_styleclass_documentlistener=null)},isVisible:function(e){return e.offsetParent!==null},isOutsideClick:function(e,t,n){return!n.isSameNode(e.target)&&!n.contains(e.target)&&!t.contains(e.target)}}}),J=function(e){var t=e.dt;return`
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: `.concat(t("inputgroup.addon.background"),`;
    color: `).concat(t("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-left: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-floatlabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup-fluid .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-inputgroup-fluid .p-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-floatlabel > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + .p-inputgroupaddon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroupaddon,
.p-inputgroup > .p-floatlabel > .p-component + .p-inputgroupaddon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-floatlabel > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-floatlabel > .p-component:focus~label {
    z-index: 1;
}

.p-inputgroupaddon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:first-child input {
    border-top-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:last-child input {
    border-top-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup-fluid .p-button {
    width: auto;
}

.p-inputgroup-fluid .p-button.p-button-icon-only {
    width: 2.5rem;
}
`)},K={root:function(e){var t=e.instance;return["p-inputgroup",{"p-inputgroup-fluid":t.hasFluid}]}},Q=x.extend({name:"inputgroup",theme:J,classes:K}),X={name:"BaseInputGroup",extends:V,props:{fluid:{type:Boolean,default:null}},style:Q,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},F={name:"InputGroup",extends:X,inheritAttrs:!1,inject:{$pcFluid:{default:null}},computed:{hasFluid:function(){return I(this.fluid)?!!this.$pcFluid:this.fluid}}};function Y(o,e,t,n,s,l){return d(),m("div",O({class:o.cx("root")},o.ptmi("root")),[g(o.$slots,"default")],16)}F.render=Y;const Z=G("/favicon-192.png"),ee={class:"layout-topbar bg-white"},te={key:1,class:"layout-topbar-menu !hidden lg:!flex origin-top"},ne=_({__name:"AppTopBar",setup(o){const e=N(),t=P(),n=w("");function s(){const l=n.value;n.value="",e.push({path:"/search",query:{q:l}})}return(l,r)=>{const h=L,y=F,T=M;return d(),m("div",ee,[i(h,{to:"/",class:"layout-topbar-logo text-gray-600"},{default:f(()=>r[1]||(r[1]=[c("img",{class:"mx-2 h-4rem",src:Z,alt:"Logo"},null,-1),c("span",{class:"text-2xl font-medium self-center"}," Portfolio Report ",-1)])),_:1}),a(t).path.startsWith("/search")?C("",!0):v((d(),k(a($),{key:0,text:"",rounded:"",class:"p-button-icon-only layout-topbar-menu-button"},{default:f(()=>r[2]||(r[2]=[c("i",{class:"i-carbon-overflow-menu-vertical"},null,-1)])),_:1})),[[T,{selector:"@next",enterFromClass:"!hidden",enterActiveClass:"scalein",leaveToClass:"!hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),a(t).path.startsWith("/search")?C("",!0):(d(),m("ul",te,[c("li",null,[c("form",{onSubmit:R(s,["prevent"])},[i(y,null,{default:f(()=>[i(a(z),{modelValue:a(n),"onUpdate:modelValue":r[0]||(r[0]=E=>j(n)?n.value=E:null),placeholder:"Search"},null,8,["modelValue"]),i(a($),{type:"submit",icon:"i-carbon-search i-lg",class:"p-button-secondary"})]),_:1})],32)])]))])}}}),oe=b(ne,[["__scopeId","data-v-992ad538"]]),se=_({__name:"IconLink",props:{color:{},to:{},href:{},target:{},icon:{},small:{type:Boolean},type:{}},emits:["click"],setup(o,{emit:e}){const t=o,n=e,s=A(()=>t.icon&&!t.small?`${t.icon} i-lg`:t.icon);return(l,r)=>{const h=L;return d(),k(h,{to:l.to,href:l.to?void 0:l.href||"#",target:l.target,class:"text-slate-500 hover:text-blue-500",onClick:r[0]||(r[0]=y=>n("click",y))},{default:f(()=>[c("i",{class:S(["ii",a(s)])},null,2)]),_:1},8,["to","href","target"])}}}),le={class:"flex justify-center"},re=_({__name:"AppFooter",setup(o){const e=q(),t=A(()=>e.public.gitSha?`https://github.com/portfolio-report/pr-www/tree/${e.public.gitSha}`:"https://www.github.com/portfolio-report/pr-www");return(n,s)=>{const l=se,r=H;return d(),m("footer",le,[v(i(l,{href:"https://forum.portfolio-performance.info/",icon:"i-carbon-forum"},null,512),[[r,"Get help and discuss",void 0,{top:!0}]]),v(i(l,{to:"/contact",icon:"i-carbon-email"},null,512),[[r,"Get in contact",void 0,{top:!0}]]),v(i(l,{href:a(t),target:"_blank",icon:"i-carbon-logo-github"},null,8,["href"]),[[r,"Source code",void 0,{top:!0}]])])}}}),ae=b(re,[["__scopeId","data-v-fabca52c"]]),ie={class:"layout-main-container"},ue={class:"layout-main"},pe=_({__name:"default",setup(o){const e=w(["layout-wrapper","layout-overlay"]);return(t,n)=>{const s=oe,l=ae;return d(),m("div",{class:S(a(e))},[i(s),c("div",ie,[c("div",ue,[g(t.$slots,"default",{},void 0,!0)]),i(l)])],2)}}}),ve=b(pe,[["__scopeId","data-v-31593209"]]);export{ve as default};
