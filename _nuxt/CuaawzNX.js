import{W as f,a7 as i,ba as d,Z as o,Y as h,am as m,t as r,B as s,q as c,U as v,y as b,ao as L,F as y,ap as S}from"./D87NN1-r.js";import{s as w}from"./B4Kw7zUp.js";import g from"./DaA5Azpo.js";import"./BBXj4KMN.js";import"./Dpl4jREF.js";var T=function(n){return n.dt,`
.p-scrolltop.p-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky;
    display: flex;
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`},k={root:function(n){var l=n.props;return["p-scrolltop",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},P=f.extend({name:"scrolltop",theme:T,classes:k}),E={name:"BaseScrollTop",extends:h,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:P,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},C={name:"ScrollTop",extends:E,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(i.clear(this.container),this.overlay=null)},methods:{onClick:function(){var n=this.target==="window"?window:this.$el.parentElement;n.scroll({top:0,behavior:this.behavior})},checkVisibility:function(n){n>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(n.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(d())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(n){i.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(n){i.clear(n)},containerRef:function(n){this.container=n?n.$el:void 0},rootPTOptions:function(){return o(this.ptmi("root"),this.ptm("button"))},iconPTOptions:function(){return o(this.ptmi("root").icon,this.ptm("button").icon)}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:w,Button:g}};function $(t,n,l,A,a,e){var p=m("Button");return r(),s(S,o({name:"p-scrolltop",appear:"",onEnter:e.onEnter,onAfterLeave:e.onAfterLeave},t.ptm("transition")),{default:c(function(){return[a.visible?(r(),s(p,o({key:0,ref:e.containerRef,class:t.cx("root"),onClick:e.onClick,"aria-label":e.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:e.rootPTOptions()}),{icon:c(function(u){return[v(t.$slots,"icon",{class:b(t.cx("icon"))},function(){return[(r(),s(L(t.icon?"span":"ChevronUpIcon"),o({class:[t.cx("icon"),t.icon,u.class]},e.iconPTOptions),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):y("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}C.render=$;export{C as default};
