import{W as l,bf as o,bs as n,a7 as a,au as r,bx as c,bt as d,Y as k,t as u,l as m,S as h,Z as p}from"./2OpEOLBg.js";var b=function(e){var t=e.dt;return`
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: `.concat(t("blockui.border.radius"),`;
}

.p-blockui-mask.p-overlay-mask {
    position: absolute;
}

.p-blockui-mask-document.p-overlay-mask {
    position: fixed;
}
`)},f={root:"p-blockui"},v=l.extend({name:"blockui",theme:b,classes:f}),y={name:"BaseBlockUI",extends:k,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:v,provide:function(){return{$pcBlockUI:this,$parentInstance:this}}},B={name:"BlockUI",extends:y,inheritAttrs:!1,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(e){e===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var e="p-blockui-mask p-overlay-mask p-overlay-mask-enter";this.fullScreen?(e+=" p-blockui-mask-document",this.mask=o("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),n(),document.activeElement.blur()):(this.mask=o("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&a.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var e=this;!this.isUnstyled&&r(this.mask,"p-overlay-mask-leave"),c(this.mask)>0?this.mask.addEventListener("animationend",function(){e.removeMask()}):this.removeMask()},removeMask:function(){if(a.clear(this.mask),this.fullScreen)document.body.removeChild(this.mask),d();else{var e;(e=this.$refs.container)===null||e===void 0||e.removeChild(this.mask)}this.isBlocked=!1,this.$emit("unblock")}}},x=["aria-busy"];function I(s,e,t,S,i,C){return u(),m("div",p({ref:"container",class:s.cx("root"),"aria-busy":i.isBlocked},s.ptmi("root")),[h(s.$slots,"default")],16,x)}B.render=I;export{B as default};
