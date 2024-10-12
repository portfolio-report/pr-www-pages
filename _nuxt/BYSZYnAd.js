import{B as x,az as B,b8 as F,aZ as i,ar as u,h as d,j as m,k as w,m as I,s as V,b9 as O,q as _,ba as G,P as N,r as g,x as r,y as f,A as c,u as p,L as v,G as k,N as b,D as P,i as R,_ as L,c as A,C as S,b7 as q}from"./JjumSdZF.js";import{a as $,s as j}from"./1a2lCtVd.js";import{_ as C}from"./DlAUqK2U.js";import{T as z}from"./De0y7koV.js";import"./W-fVTuAY.js";var H=x.extend({name:"styleclass-directive"}),U=B.extend({style:H}),W=U.extend("styleclass",{mounted:function(e,t){e.setAttribute("data-pd-styleclass",!0),this.bind(e,t)},unmounted:function(e){this.unbind(e)},methods:{bind:function(e,t){var n=this,s=this.resolveTarget(e,t);this.$el=s,e.$_pstyleclass_clicklistener=function(){t.value.toggleClass?F(s,t.value.toggleClass)?i(s,t.value.toggleClass):u(s,t.value.toggleClass):s.offsetParent===null?n.enter(s,e,t):n.leave(s,t)},e.addEventListener("click",e.$_pstyleclass_clicklistener)},unbind:function(e){e.$_pstyleclass_clicklistener&&(e.removeEventListener("click",e.$_pstyleclass_clicklistener),e.$_pstyleclass_clicklistener=null),this.unbindDocumentListener(e)},enter:function(e,t,n){n.value.enterActiveClass?e.$_pstyleclass_animating||(e.$_pstyleclass_animating=!0,n.value.enterActiveClass.includes("slidedown")&&(e.style.height="0px",i(e,n.value.hiddenClass||n.value.enterFromClass),e.style.maxHeight=e.scrollHeight+"px",u(e,n.value.hiddenClass||n.value.enterActiveClass),e.style.height=""),u(e,n.value.enterActiveClass),n.value.enterFromClass&&i(e,n.value.enterFromClass),e.$p_styleclass_enterlistener=function(){i(e,n.value.enterActiveClass),n.value.enterToClass&&u(e,n.value.enterToClass),e.removeEventListener("animationend",e.$p_styleclass_enterlistener),n.value.enterActiveClass.includes("slidedown")&&(e.style.maxHeight=""),e.$_pstyleclass_animating=!1},e.addEventListener("animationend",e.$p_styleclass_enterlistener)):(n.value.enterFromClass&&i(e,n.value.enterFromClass),n.value.enterToClass&&u(e,n.value.enterToClass)),n.value.hideOnOutsideClick&&this.bindDocumentListener(e,t,n)},leave:function(e,t){t.value.leaveActiveClass?e.$_pstyleclass_animating||(e.$_pstyleclass_animating=!0,u(e,t.value.leaveActiveClass),t.value.leaveFromClass&&i(e,t.value.leaveFromClass),e.$p_styleclass_leavelistener=function(){i(e,t.value.leaveActiveClass),t.value.leaveToClass&&u(e,t.value.leaveToClass),e.removeEventListener("animationend",e.$p_styleclass_leavelistener),e.$_pstyleclass_animating=!1},e.addEventListener("animationend",e.$p_styleclass_leavelistener)):(t.value.leaveFromClass&&i(e,t.value.leaveFromClass),t.value.leaveToClass&&u(e,t.value.leaveToClass)),t.value.hideOnOutsideClick&&this.unbindDocumentListener(e)},resolveTarget:function(e,t){switch(t.value.selector){case"@next":return e.nextElementSibling;case"@prev":return e.previousElementSibling;case"@parent":return e.parentElement;case"@grandparent":return e.parentElement.parentElement;default:return document.querySelector(t.value.selector)}},bindDocumentListener:function(e,t,n){var s=this;e.$p_styleclass_documentlistener||(e.$p_styleclass_documentlistener=function(l){!s.isVisible(e)||getComputedStyle(e).getPropertyValue("position")==="static"?s.unbindDocumentListener(e):s.isOutsideClick(l,e,t)&&s.leave(e,n)},e.ownerDocument.addEventListener("click",e.$p_styleclass_documentlistener))},unbindDocumentListener:function(e){e.$p_styleclass_documentlistener&&(e.ownerDocument.removeEventListener("click",e.$p_styleclass_documentlistener),e.$p_styleclass_documentlistener=null)},isVisible:function(e){return e.offsetParent!==null},isOutsideClick:function(e,t,n){return!n.isSameNode(e.target)&&!n.contains(e.target)&&!t.contains(e.target)}}}),M=function(e){var t=e.dt;return`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `.concat(t("inputgroup.addon.padding"),`;
    background: `).concat(t("inputgroup.addon.background"),`;
    color: `).concat(t("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    min-width: `).concat(t("inputgroup.addon.min.width"),`;
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-left: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-top-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-top-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}
`)},Z={root:"p-inputgroup"},J=x.extend({name:"inputgroup",theme:M,classes:Z}),K={name:"BaseInputGroup",extends:V,style:J,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},T={name:"InputGroup",extends:K,inheritAttrs:!1};function Q(o,e,t,n,s,l){return d(),m("div",I({class:o.cx("root")},o.ptmi("root")),[w(o.$slots,"default")],16)}T.render=Q;const X=O("/favicon-192.png"),Y={class:"layout-topbar bg-white"},ee={key:1,class:"layout-topbar-menu !hidden lg:!flex origin-top"},te=_({__name:"AppTopBar",setup(o){const e=G(),t=N(),n=g("");function s(){const l=n.value;n.value="",e.push({path:"/search",query:{q:l}})}return(l,a)=>{const h=L,y=T,E=W;return d(),m("div",Y,[r(h,{to:"/",class:"layout-topbar-logo text-gray-600"},{default:f(()=>a[1]||(a[1]=[c("img",{class:"mx-2 h-4rem",src:X,alt:"Logo"},null,-1),c("span",{class:"text-2xl font-medium self-center"}," Portfolio Report ",-1)])),_:1}),p(t).path.startsWith("/search")?b("",!0):v((d(),k(p($),{key:0,text:"",rounded:"",class:"p-button-icon-only layout-topbar-menu-button"},{default:f(()=>a[2]||(a[2]=[c("i",{class:"i-carbon-overflow-menu-vertical"},null,-1)])),_:1})),[[E,{selector:"@next",enterFromClass:"!hidden",enterActiveClass:"scalein",leaveToClass:"!hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),p(t).path.startsWith("/search")?b("",!0):(d(),m("ul",ee,[c("li",null,[c("form",{onSubmit:P(s,["prevent"])},[r(y,null,{default:f(()=>[r(p(j),{modelValue:p(n),"onUpdate:modelValue":a[0]||(a[0]=D=>R(n)?n.value=D:null),placeholder:"Search"},null,8,["modelValue"]),r(p($),{type:"submit",icon:"i-carbon-search i-lg",class:"p-button-secondary"})]),_:1})],32)])]))])}}}),ne=C(te,[["__scopeId","data-v-992ad538"]]),oe=_({__name:"IconLink",props:{color:{},to:{},href:{},target:{},icon:{},small:{type:Boolean},type:{}},emits:["click"],setup(o,{emit:e}){const t=o,n=e,s=A(()=>t.icon&&!t.small?`${t.icon} i-lg`:t.icon);return(l,a)=>{const h=L;return d(),k(h,{to:l.to,href:l.to?void 0:l.href||"#",target:l.target,class:"text-slate-500 hover:text-blue-500",onClick:a[0]||(a[0]=y=>n("click",y))},{default:f(()=>[c("i",{class:S(["ii",p(s)])},null,2)]),_:1},8,["to","href","target"])}}}),se={class:"flex justify-center"},le=_({__name:"AppFooter",setup(o){const e=q(),t=A(()=>e.public.gitSha?`https://github.com/portfolio-report/pr-www/tree/${e.public.gitSha}`:"https://www.github.com/portfolio-report/pr-www");return(n,s)=>{const l=oe,a=z;return d(),m("footer",se,[v(r(l,{href:"https://forum.portfolio-performance.info/",icon:"i-carbon-forum"},null,512),[[a,"Get help and discuss",void 0,{top:!0}]]),v(r(l,{to:"/contact",icon:"i-carbon-email"},null,512),[[a,"Get in contact",void 0,{top:!0}]]),v(r(l,{href:p(t),target:"_blank",icon:"i-carbon-logo-github"},null,8,["href"]),[[a,"Source code",void 0,{top:!0}]])])}}}),ae=C(le,[["__scopeId","data-v-fabca52c"]]),pe={class:"layout-main-container"},re={class:"layout-main"},ie=_({__name:"default",setup(o){const e=g(["layout-wrapper","layout-overlay"]);return(t,n)=>{const s=ne,l=ae;return d(),m("div",{class:S(p(e))},[r(s),c("div",pe,[c("div",re,[w(t.$slots,"default",{},void 0,!0)]),r(l)])],2)}}}),ve=C(ie,[["__scopeId","data-v-31593209"]]);export{ve as default};
