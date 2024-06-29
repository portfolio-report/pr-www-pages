import{W as n,a8 as s,a7 as i,Y as l,t as r,l as c,S as d,Z as k}from"./U2uVmZ6V.js";var m=function(t){var o=t.dt;return`
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: `.concat(o("blockui.border.radius"),`;
}

.p-blockui-mask.p-overlay-mask {
    position: absolute;
}

.p-blockui-mask-document.p-overlay-mask {
    position: fixed;
}
`)},u={root:"p-blockui"},h=n.extend({name:"blockui",theme:m,classes:u}),p={name:"BaseBlockUI",extends:l,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:h,provide:function(){return{$pcBlockUI:this,$parentInstance:this}}},b={name:"BlockUI",extends:p,inheritAttrs:!1,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(t){t===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var t="p-blockui-mask p-overlay-mask p-overlay-mask-enter";this.fullScreen?(t+=" p-blockui-mask-document",this.mask=s.createElement("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),s.blockBodyScroll(),document.activeElement.blur()):(this.mask=s.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&i.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var t=this;!this.isUnstyled&&s.addClass(this.mask,"p-overlay-mask-leave"),s.hasCSSAnimation(this.mask)>0?this.mask.addEventListener("animationend",function(){t.removeMask()}):this.removeMask()},removeMask:function(){i.clear(this.mask),this.fullScreen?(document.body.removeChild(this.mask),s.unblockBodyScroll()):this.$refs.container.removeChild(this.mask),this.isBlocked=!1,this.$emit("unblock")}}},f=["aria-busy"];function v(e,t,o,y,a,B){return r(),c("div",k({ref:"container",class:e.cx("root"),"aria-busy":a.isBlocked},e.ptmi("root")),[d(e.$slots,"default")],16,f)}b.render=v;export{b as default};
