import{W as E,aA as l,a7 as g,a8 as c,ak as P,a9 as S,aa as R,Y as B,ac as j,E as H,t as s,B as L,q as p,m as y,af as F,Z as r,J as K,l as u,S as f,H as I,ae as C,y as D,F as w,x as m,G as T,ag as z}from"./U2uVmZ6V.js";import N from"./m9kIYgDd.js";import{F as U}from"./hjRrASiM.js";import{O as V}from"./BLgYJk_n.js";import"./CJUNB2VD.js";import"./BLQDyD77.js";var q=function(n){var t=n.dt;return`
.p-confirmpopup {
    position: absolute;
    margin-top: `.concat(t("confirmpopup.gutter"),`;
    top: 0;
    left: 0;
    background: `).concat(t("confirmpopup.background"),`;
    color: `).concat(t("confirmpopup.color"),`;
    border: 1px solid `).concat(t("confirmpopup.border.color"),`;
    border-radius: `).concat(t("confirmpopup.border.radius"),`;
    box-shadow: `).concat(t("confirmpopup.shadow"),`;
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: `).concat(t("confirmpopup.content.padding"),`;
    gap: `).concat(t("confirmpopup.content.gap"),`;
}

.p-confirmpopup-icon {
    font-size: `).concat(t("confirmpopup.icon.size"),`;
    width: `).concat(t("confirmpopup.icon.size"),`;
    height: `).concat(t("confirmpopup.icon.size"),`;
    color: `).concat(t("confirmpopup.icon.color"),`;
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: `).concat(t("confirmpopup.footer.gap"),`;
    padding: `).concat(t("confirmpopup.footer.padding"),`;
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(`).concat(t("confirmpopup.gutter"),` * -1);
    margin-bottom: `).concat(t("confirmpopup.gutter"),`;
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: `).concat(t("confirmpopup.arrow.offset"),`;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(`).concat(t("confirmpopup.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(t("confirmpopup.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(t("confirmpopup.background"),`;
}

.p-confirmpopup:before {
    border-width: `).concat(t("confirmpopup.gutter"),`;
    margin-left: calc(-1 * `).concat(t("confirmpopup.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(t("confirmpopup.border.color"),`;
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(t("confirmpopup.background"),`;
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(t("confirmpopup.border.color"),`;
}
`)},X={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},Y=E.extend({name:"confirmpopup",theme:q,classes:X}),Z={name:"BaseConfirmPopup",extends:B,props:{group:String},style:Y,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},G={name:"ConfirmPopup",extends:Z,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var n=this;this.confirmListener=function(t){t&&t.group===n.group&&(n.confirmation=t,n.target=t.target,n.confirmation.onShow&&n.confirmation.onShow(),n.visible=!0)},this.closeListener=function(){n.visible=!1,n.confirmation=null},l.on("confirm",this.confirmListener),l.on("close",this.closeListener)},beforeUnmount:function(){l.off("confirm",this.confirmListener),l.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(g.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(n){(n.code==="Space"||n.code==="Enter"||n.code==="NumpadEnter")&&(this.accept(),c.focus(this.target),n.preventDefault())},onRejectKeydown:function(n){(n.code==="Space"||n.code==="Enter"||n.code==="NumpadEnter")&&(this.reject(),c.focus(this.target),n.preventDefault())},onEnter:function(n){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),g.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(n){g.clear(n)},alignOverlay:function(){c.absolutePosition(this.container,this.target,!1);var n=c.getOffset(this.container),t=c.getOffset(this.target),d=0;n.left<t.left&&(d=t.left-n.left),this.container.style.setProperty(P("overlay.arrow.left").name,"".concat(d,"px")),n.top<t.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.isUnstyled&&c.addClass(this.container,"p-confirmpopup-flipped"))},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.visible&&n.container&&!n.container.contains(t.target)&&!n.isTargetClicked(t)?(n.confirmation.onHide&&n.confirmation.onHide(),n.visible=!1):n.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new S(this.target,function(){n.visible&&(n.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.visible&&!c.isTouchDevice()&&(n.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var n=this.container.querySelector("[autofocus]");n&&n.focus({preventScroll:!0})},isTargetClicked:function(n){return this.target&&(this.target===n.target||this.target.contains(n.target))},containerRef:function(n){this.container=n},onOverlayClick:function(n){V.emit("overlay-click",{originalEvent:n,target:this.target})},onOverlayKeydown:function(n){n.code==="Escape"&&(l.emit("close",this.closeListener),c.focus(this.target))},getCXOptions:function(n,t){return{contenxt:{icon:n,iconClass:t.class}}}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var n=this.confirmation;return n.acceptLabel?n.acceptLabel:n.acceptProps?n.acceptProps.label||this.$primevue.config.locale.accept:null}return null},rejectLabel:function(){if(this.confirmation){var n=this.confirmation;return n.rejectLabel?n.rejectLabel:n.rejectProps?n.rejectProps.label||this.$primevue.config.locale.reject:null}return null},acceptIcon:function(){var n;return this.confirmation?this.confirmation.acceptIcon:(n=this.confirmation)!==null&&n!==void 0&&n.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var n;return this.confirmation?this.confirmation.rejectIcon:(n=this.confirmation)!==null&&n!==void 0&&n.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:N,Portal:R},directives:{focustrap:U}},J=["aria-modal"];function W(e,n,t,d,i,o){var k=j("Button"),O=j("Portal"),A=H("focustrap");return s(),L(O,null,{default:p(function(){return[y(F,r({name:"p-confirmpopup",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},e.ptm("transition")),{default:p(function(){var h,b,v;return[i.visible?K((s(),u("div",r({key:0,ref:o.containerRef,role:"alertdialog",class:e.cx("root"),"aria-modal":i.visible,onClick:n[2]||(n[2]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:n[3]||(n[3]=function(){return o.onOverlayKeydown&&o.onOverlayKeydown.apply(o,arguments)})},e.ptmi("root")),[e.$slots.container?f(e.$slots,"container",{key:0,message:i.confirmation,acceptCallback:o.accept,rejectCallback:o.reject}):(s(),u(I,{key:1},[e.$slots.message?(s(),L(C(e.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(s(),u("div",r({key:0,class:e.cx("content")},e.ptm("content")),[f(e.$slots,"icon",{},function(){return[e.$slots.icon?(s(),L(C(e.$slots.icon),{key:0,class:D(e.cx("icon"))},null,8,["class"])):i.confirmation.icon?(s(),u("span",r({key:1,class:[i.confirmation.icon,e.cx("icon")]},e.ptm("icon")),null,16)):w("",!0)]}),m("span",r({class:e.cx("message")},e.ptm("message")),T(i.confirmation.message),17)],16)),m("div",r({class:e.cx("footer")},e.ptm("footer")),[y(k,r({class:[e.cx("pcRejectButton"),i.confirmation.rejectClass],autofocus:i.autoFocusReject,unstyled:e.unstyled,size:((h=i.confirmation.rejectProps)===null||h===void 0?void 0:h.size)||"small",text:((b=i.confirmation.rejectProps)===null||b===void 0?void 0:b.text)||!1,onClick:n[0]||(n[0]=function(a){return o.reject()}),onKeydown:o.onRejectKeydown},i.confirmation.rejectProps,{label:o.rejectLabel,pt:e.ptm("pcRejectButton")}),z({_:2},[o.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:p(function(a){return[f(e.$slots,"rejecticon",{},function(){return[m("span",r({class:[o.rejectIcon,a.class]},e.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","text","onKeydown","label","pt"]),y(k,r({class:[e.cx("pcAcceptButton"),i.confirmation.acceptClass],autofocus:i.autoFocusAccept,unstyled:e.unstyled,size:((v=i.confirmation.acceptProps)===null||v===void 0?void 0:v.size)||"small",onClick:n[1]||(n[1]=function(a){return o.accept()}),onKeydown:o.onAcceptKeydown},i.confirmation.acceptProps,{label:o.acceptLabel,pt:e.ptm("pcAcceptButton")}),z({_:2},[o.acceptIcon||e.$slots.accepticon?{name:"icon",fn:p(function(a){return[f(e.$slots,"accepticon",{},function(){return[m("span",r({class:[o.acceptIcon,a.class]},e.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","onKeydown","label","pt"])],16)],64))],16,J)),[[A]]):w("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}G.render=W;export{G as default};
