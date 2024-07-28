import{W as h,a6 as c,Y as B,am as b,t as f,l as w,m as u,aq as m,q as i,S as s,y as a,x as v,Z as l,B as $,ao as S}from"./CeOzsDqi.js";import{s as C}from"./3j3ziBXv.js";import D from"./CI5DjWPC.js";import k from"./pWZkDHo7.js";import"./DxuXaRJR.js";import"./CAXF9EMW.js";import"./DIj4wlRI.js";import"./CHECEE3Q.js";var I=function(n){var e=n.dt;return`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: `.concat(e("splitbutton.border.radius"),`;
}

.p-splitbutton-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-button:focus-visible,
.p-splitbutton-dropdown:focus-visible {
    z-index: 1;
}

.p-splitbutton-button:not(:disabled):hover,
.p-splitbutton-button:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-dropdown {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-top-right-radius: `).concat(e("splitbutton.rounded.border.radius"),`;
    border-bottom-right-radius: `).concat(e("splitbutton.rounded.border.radius"),`;
}

.p-splitbutton-rounded .p-splitbutton-button {
    border-top-left-radius: `).concat(e("splitbutton.rounded.border.radius"),`;
    border-bottom-left-radius: `).concat(e("splitbutton.rounded.border.radius"),`;
}

.p-splitbutton-raised {
    box-shadow: `).concat(e("splitbutton.raised.shadow"),`;
}
`)},g={root:function(n){var e=n.props;return["p-splitbutton p-component",{"p-splitbutton-raised":e.raised,"p-splitbutton-rounded":e.rounded,"p-splitbutton-fluid":e.fluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},z=h.extend({name:"splitbutton",theme:I,classes:g}),Z={name:"BaseSplitButton",extends:B,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:z,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},V={name:"SplitButton",extends:Z,inheritAttrs:!1,emits:["click"],data:function(){return{id:this.$attrs.id,isExpanded:!1}},watch:{"$attrs.id":function(n){this.id=n||c()}},mounted:function(){var n=this;this.id=this.id||c(),this.$watch("$refs.menu.visible",function(e){n.isExpanded=e})},methods:{onDropdownButtonClick:function(n){n&&n.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(n){(n.code==="ArrowDown"||n.code==="ArrowUp")&&(this.onDropdownButtonClick(),n.preventDefault())},onDefaultButtonClick:function(n){this.isExpanded&&this.$refs.menu.hide(n),this.$emit("click",n)}},computed:{containerClass:function(){return[this.cx("root"),this.class]}},components:{PVSButton:D,PVSMenu:k,ChevronDownIcon:C}},E=["data-p-severity"];function T(t,n,e,K,r,d){var p=b("PVSButton"),y=b("PVSMenu");return f(),w("div",l({class:d.containerClass,style:t.style},t.ptmi("root"),{"data-p-severity":t.severity}),[u(p,l({type:"button",class:t.cx("pcButton"),label:t.label,disabled:t.disabled,severity:t.severity,text:t.text,icon:t.icon,outlined:t.outlined,size:t.size,fluid:t.fluid,"aria-label":t.label,onClick:d.onDefaultButtonClick},t.buttonProps,{pt:t.ptm("pcButton"),unstyled:t.unstyled}),m({default:i(function(){return[s(t.$slots,"default")]}),_:2},[t.$slots.icon?{name:"icon",fn:i(function(o){return[s(t.$slots,"icon",{class:a(o.class)},function(){return[v("span",l({class:[t.icon,o.class]},t.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),u(p,l({ref:"button",type:"button",class:t.cx("pcDropdown"),disabled:t.disabled,"aria-haspopup":"true","aria-expanded":r.isExpanded,"aria-controls":r.id+"_overlay",onClick:d.onDropdownButtonClick,onKeydown:d.onDropdownKeydown,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size,unstyled:t.unstyled},t.menuButtonProps,{pt:t.ptm("pcDropdown")}),{icon:i(function(o){return[s(t.$slots,t.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:a(o.class)},function(){return[(f(),$(S(t.menuButtonIcon||t.dropdownIcon?"span":"ChevronDownIcon"),l({class:[t.dropdownIcon||t.menuButtonIcon,o.class]},t.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),u(y,{ref:"menu",id:r.id+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo,unstyled:t.unstyled,pt:t.ptm("ptMenu")},m({_:2},[t.$slots.menuitemicon?{name:"itemicon",fn:i(function(o){return[s(t.$slots,"menuitemicon",{item:o.item,class:a(o.class)})]}),key:"0"}:void 0,t.$slots.item?{name:"item",fn:i(function(o){return[s(t.$slots,"item",{item:o.item,hasSubmenu:o.hasSubmenu,label:o.label,props:o.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,E)}V.render=T;export{V as default};
