import L from"./E3tkmLOe.js";import{W as S,aA as u,Y as P,ac as b,t as r,B as m,ag as p,q as l,S as f,m as v,Z as s,x as d,l as g,H as j,ae as k,y,F as B,G as F}from"./C-DAi4iE.js";import I from"./BMxx_jot.js";import"./Z54PIhmM.js";import"./sGFJxgu5.js";import"./nJJ7mlYw.js";var D=function(n){var o=n.dt;return`
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  `.concat(o("confirmdialog.content.gap"),`;
}

.p-confirmdialog-icon {
    color: `).concat(o("confirmdialog.icon.color"),`;
    font-size: `).concat(o("confirmdialog.icon.size"),`;
    width: `).concat(o("confirmdialog.icon.size"),`;
    height: `).concat(o("confirmdialog.icon.size"),`;
}
`)},O={root:"p-confirmdialog",icon:"p-confirmdialog-icon",message:"p-confirmdialog-message",pcRejectButton:"p-confirmdialog-reject-button",pcAcceptButton:"p-confirmdialog-accept-button"},A=S.extend({name:"confirmdialog",theme:D,classes:O}),E={name:"BaseConfirmDialog",extends:P,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:A,provide:function(){return{$pcConfirmDialog:this,$parentInstance:this}}},R={name:"ConfirmDialog",extends:E,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var n=this;this.confirmListener=function(o){o&&o.group===n.group&&(n.confirmation=o,n.confirmation.onShow&&n.confirmation.onShow(),n.visible=!0)},this.closeListener=function(){n.visible=!1,n.confirmation=null},u.on("confirm",this.confirmListener),u.on("close",this.closeListener)},beforeUnmount:function(){u.off("confirm",this.confirmListener),u.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},getCXOptions:function(n,o){return{contenxt:{icon:n,iconClass:o.class}}}},computed:{header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){if(this.confirmation){var n=this.confirmation;return n.acceptLabel?n.acceptLabel:n.acceptProps?n.acceptProps.label||this.$primevue.config.locale.accept:null}return null},rejectLabel:function(){if(this.confirmation){var n=this.confirmation;return n.rejectLabel?n.rejectLabel:n.rejectProps?n.rejectProps.label||this.$primevue.config.locale.reject:null}return null},acceptIcon:function(){var n;return this.confirmation?this.confirmation.acceptIcon:(n=this.confirmation)!==null&&n!==void 0&&n.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var n;return this.confirmation?this.confirmation.rejectIcon:(n=this.confirmation)!==null&&n!==void 0&&n.rejectProps?this.confirmation.rejectProps.icon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{Dialog:I,Button:L}};function H(e,n,o,z,c,t){var h=b("Button"),C=b("Dialog");return r(),m(C,{visible:c.visible,"onUpdate:visible":[n[2]||(n[2]=function(i){return c.visible=i}),t.onHide],role:"alertdialog",class:y(e.cx("root")),modal:!0,header:t.header,blockScroll:t.blockScroll,position:t.position,breakpoints:e.breakpoints,closeOnEscape:t.closeOnEscape,draggable:e.draggable,pt:e.pt,unstyled:e.unstyled},p({default:l(function(){return[e.$slots.container?B("",!0):(r(),g(j,{key:0},[e.$slots.message?(r(),m(k(e.$slots.message),{key:1,message:c.confirmation},null,8,["message"])):(r(),g(j,{key:0},[f(e.$slots,"icon",{},function(){return[e.$slots.icon?(r(),m(k(e.$slots.icon),{key:0,class:y(e.cx("icon"))},null,8,["class"])):c.confirmation.icon?(r(),g("span",s({key:1,class:[c.confirmation.icon,e.cx("icon")]},e.ptm("icon")),null,16)):B("",!0)]}),d("span",s({class:e.cx("message")},e.ptm("message")),F(t.message),17)],64))],64))]}),_:2},[e.$slots.container?{name:"container",fn:l(function(i){return[f(e.$slots,"container",{message:c.confirmation,closeCallback:i.onclose,acceptCallback:t.accept,rejectCallback:t.reject})]}),key:"0"}:void 0,e.$slots.container?void 0:{name:"footer",fn:l(function(){var i;return[v(h,s({class:[e.cx("pcRejectButton"),c.confirmation.rejectClass],autofocus:t.autoFocusReject,unstyled:e.unstyled,text:((i=c.confirmation.rejectProps)===null||i===void 0?void 0:i.text)||!1,onClick:n[0]||(n[0]=function(a){return t.reject()})},c.confirmation.rejectProps,{label:t.rejectLabel,pt:e.ptm("pcRejectButton")}),p({_:2},[t.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:l(function(a){return[f(e.$slots,"rejecticon",{},function(){return[d("span",s({class:[t.rejectIcon,a.class]},e.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","text","label","pt"]),v(h,s({label:t.acceptLabel,class:[e.cx("pcAcceptButton"),c.confirmation.acceptClass],autofocus:t.autoFocusAccept,unstyled:e.unstyled,onClick:n[1]||(n[1]=function(a){return t.accept()})},c.confirmation.acceptProps,{pt:e.ptm("pcAcceptButton")}),p({_:2},[t.acceptIcon||e.$slots.accepticon?{name:"icon",fn:l(function(a){return[f(e.$slots,"accepticon",{},function(){return[d("span",s({class:[t.acceptIcon,a.class]},e.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","header","blockScroll","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}R.render=H;export{R as default};
