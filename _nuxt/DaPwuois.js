import{s as I}from"./CcmPejsy.js";import{W as C,Y as v,Z as i,t as a,l as m,B as u,y as B,ao as p,F as l,G as w,am as h,x as O,H as f,I as L,U as x,m as y}from"./D87NN1-r.js";var P=function(n){var t=n.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},U={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:function(n){var t=n.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},N=C.extend({name:"breadcrumb",theme:P,classes:U}),S={name:"BaseBreadcrumb",extends:v,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:N,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},g={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:v,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,o=n.url,s=typeof window<"u"?window.location.pathname:"";return t===s||o===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(o){return n.onClick(o)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},M=["href","target","aria-current"];function R(e,n,t,o,s,r){return r.visible()?(a(),m("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(a(),u(p(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),m("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),u(p(t.templates.itemicon),{key:0,item:t.item,class:B(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),m("span",i({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):l("",!0),t.item.label?(a(),m("span",i({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),w(r.label()),17)):l("",!0)],16,M))],16)):l("",!0)}g.render=R;var V={name:"Breadcrumb",extends:S,inheritAttrs:!1,components:{BreadcrumbItem:g,ChevronRightIcon:I}};function A(e,n,t,o,s,r){var d=h("BreadcrumbItem"),k=h("ChevronRightIcon");return a(),m("nav",i({class:e.cx("root")},e.ptmi("root")),[O("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),u(d,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(a(!0),m(f,null,L(e.model,function(b,c){return a(),m(f,{key:b.label+"_"+c},[e.home||c!==0?(a(),m("li",i({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[x(e.$slots,"separator",{},function(){return[y(k,i({"aria-hidden":"true",ref_for:!0},e.ptm("separatorIcon")),null,16)]})],16)):l("",!0),y(d,{item:b,index:c,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}V.render=A;export{V as default};
