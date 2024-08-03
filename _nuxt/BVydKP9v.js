import{W as P,a6 as g,Z as s,Y as k,am as v,t as d,l as f,H as I,I as _,B as l,q as h,m,y as C,ao as p,F as b,G as $,S as x}from"./CxjR5n0f.js";import{s as S}from"./CcItIHZd.js";import{s as B}from"./C138-hlb.js";import w from"./KXv6TC-v.js";import H from"./BdyCehk0.js";import N from"./CMDyUWq8.js";import"./v_KMEa1H.js";var D=function(e){var o=e.dt;return`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: `.concat(o("accordion.panel.border.width"),`;
    border-color: `).concat(o("accordion.panel.border.color"),`;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(o("accordion.header.padding"),`;
    color: `).concat(o("accordion.header.color"),`;
    background: `).concat(o("accordion.header.background"),`;
    border-style: solid;
    border-width: `).concat(o("accordion.header.border.width"),`;
    border-color: `).concat(o("accordion.header.border.color"),`;
    font-weight: `).concat(o("accordion.header.font.weight"),`;
    border-radius: `).concat(o("accordion.header.border.radius"),`;
    transition: background `).concat(o("accordion.transition.duration"),"; color ").concat(o("accordion.transition.duration"),"color ").concat(o("accordion.transition.duration"),", outline-color ").concat(o("accordion.transition.duration"),", box-shadow ").concat(o("accordion.transition.duration"),`;
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: `).concat(o("accordion.header.first.border.width"),`;
    border-top-left-radius: `).concat(o("accordion.header.first.top.border.radius"),`;
    border-top-right-radius: `).concat(o("accordion.header.first.top.border.radius"),`;
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-bottom-left-radius: `).concat(o("accordion.header.last.bottom.border.radius"),`;
    border-bottom-right-radius: `).concat(o("accordion.header.last.bottom.border.radius"),`;
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-bottom-left-radius: `).concat(o("accordion.header.last.active.bottom.border.radius"),`;
    border-bottom-right-radius:`).concat(o("accordion.header.last.active.bottom.border.radius"),`;
}

.p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.color"),`;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: `).concat(o("accordion.header.focus.ring.shadow"),`;
    outline: `).concat(o("accordion.header.focus.ring.width")," ").concat(o("accordion.header.focus.ring.style")," ").concat(o("accordion.header.focus.ring.color"),`;
    outline-offset: `).concat(o("accordion.header.focus.ring.offset"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: `).concat(o("accordion.header.hover.background"),`;
    color: `).concat(o("accordion.header.hover.color"),`
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: `).concat(o("accordion.header.active.background"),`;
    color: `).concat(o("accordion.header.active.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: `).concat(o("accordion.header.active.hover.background"),`;
    color: `).concat(o("accordion.header.active.hover.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.active.hover.color"),`;
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: `).concat(o("accordion.content.border.width"),`;
    border-color: `).concat(o("accordion.content.border.color"),`;
    background: color: `).concat(o("accordion.content.background"),`;
    color: `).concat(o("accordion.content.color"),`;
    padding: `).concat(o("accordion.content.padding"),`
}
`)},E={root:"p-accordion p-component"},F=P.extend({name:"accordion",theme:D,classes:E}),K={name:"BaseAccordion",extends:k,props:{value:{type:[String,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:F,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},U={name:"Accordion",extends:K,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||g()},value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e==null?void 0:e.map(String):e==null?void 0:e.toString())}}},mounted:function(){this.id=this.id||g()},methods:{isItemActive:function(e){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(e):this.d_value===e},updateValue:function(e){var o,t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(i){return i!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.map(Number):Number(this.d_value)),this.$emit(t?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,o){return e.props?e.props[o]:void 0},getKey:function(e,o){return this.getTabProp(e,"header")||o},getHeaderPT:function(e,o){var t=this;return{root:s({onClick:function(c){return t.onTabClick(c,o)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",o)),toggleicon:s(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",o))}},getContentPT:function(e,o){return{root:s(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",o)),transition:this.getTabPT(e,"transition",o),content:this.getTabPT(e,"content",o)}},getTabPT:function(e,o,t){var i=this.tabs.length,c={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:t,count:i,first:t===0,last:t===i-1,active:this.isItemActive("".concat(t))}};return s(this.ptm("accordiontab.".concat(o),c),this.ptmo(this.getTabProp(e,"pt"),o,c))},onTabClick:function(e,o){this.$emit("tab-click",{originalEvent:e,index:o})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(o,t){return e.isAccordionTab(t)?o.push(t):t.children&&t.children instanceof Array&&t.children.forEach(function(i){e.isAccordionTab(i)&&o.push(i)}),o},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:N,AccordionHeader:H,AccordionContent:w,ChevronUpIcon:B,ChevronRightIcon:S}};function q(n,e,o,t,i,c){var T=v("AccordionHeader"),y=v("AccordionContent"),A=v("AccordionPanel");return d(),f("div",s({class:n.cx("root")},n.ptmi("root")),[c.hasAccordionTab?(d(!0),f(I,{key:0},_(c.tabs,function(r,a){return d(),l(A,{key:c.getKey(r,a),value:"".concat(a),pt:{root:c.getTabPT(r,"root",a)},disabled:c.getTabProp(r,"disabled")},{default:h(function(){return[m(T,{class:C(c.getTabProp(r,"headerClass")),pt:c.getHeaderPT(r,a)},{toggleicon:h(function(u){return[u.active?(d(),l(p(n.$slots.collapseicon?n.$slots.collapseicon:n.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[n.collapseIcon,u.class],"aria-hidden":"true",ref_for:!0},c.getTabPT(r,"headericon",a)),null,16,["class"])):(d(),l(p(n.$slots.expandicon?n.$slots.expandicon:n.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[n.expandIcon,u.class],"aria-hidden":"true",ref_for:!0},c.getTabPT(r,"headericon",a)),null,16,["class"]))]}),default:h(function(){return[r.children&&r.children.headericon?(d(),l(p(r.children.headericon),{key:0,isTabActive:c.isItemActive("".concat(a)),active:c.isItemActive("".concat(a)),index:a},null,8,["isTabActive","active","index"])):b("",!0),r.props&&r.props.header?(d(),f("span",s({key:1,ref_for:!0},c.getTabPT(r,"headertitle",a)),$(r.props.header),17)):b("",!0),r.children&&r.children.header?(d(),l(p(r.children.header),{key:2})):b("",!0)]}),_:2},1032,["class","pt"]),m(y,{pt:c.getContentPT(r,a)},{default:h(function(){return[(d(),l(p(r)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):x(n.$slots,"default",{key:1})],16)}U.render=q;export{U as default};
