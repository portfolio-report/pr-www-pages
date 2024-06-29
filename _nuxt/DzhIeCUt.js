import{W as D,a6 as M,a5 as d,a7 as x,a8 as I,Y as F,Z as l,ab as V,ac as w,E as z,t as c,l as f,H as L,I as B,x as S,J as T,B as v,y as K,ae as k,F as p,G as R,ad as j,S as P,m as A,ao as N,az as G}from"./BDhoIBf6.js";import{s as U}from"./DgboAzga.js";import{s as q}from"./mjmqJnSB.js";import{s as H}from"./DeGT-D_e.js";var _=function(e){var t=e.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(t("menubar.background"),`;
    border: 1px solid `).concat(t("menubar.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    color: `).concat(t("menubar.color"),`;
    padding: `).concat(t("menubar.padding"),`;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.base.item.border.radius"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.base.item.padding"),`;
}

.p-menubar-item-content {
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),`;
    border-radius: `).concat(t("menubar.item.border.radius"),`;
    color: `).concat(t("menubar.item.color"),`;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menubar.item.padding"),`;
    gap: `).concat(t("menubar.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.color"),`;
}

.p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("menubar.submenu.icon.size"),`;
    width: `).concat(t("menubar.submenu.icon.size"),`;
    height: `).concat(t("menubar.submenu.icon.size"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(t("menubar.item.active.color"),`;
    background: `).concat(t("menubar.item.active.background"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.active.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.active.color"),`;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    color: `).concat(t("menubar.submenu.color"),`;
    flex-direction: column;
    padding: `).concat(t("menubar.submenu.padding"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

 .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("menubar.mobile.button.size"),`;
    height: `).concat(t("menubar.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("menubar.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("menubar.mobile.button.border.radius"),`;
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),", outline-color ").concat(t("menubar.transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(t("menubar.mobile.button.hover.color"),`;
    background: `).concat(t("menubar.mobile.button.hover.background"),`;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(t("menubar.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("menubar.mobile.button.focus.ring.width")," ").concat(t("menubar.mobile.button.focus.ring.style")," ").concat(t("menubar.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("menubar.mobile.button.focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: `).concat(t("menubar.submenu.padding"),`;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.item.border.radius"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.item.padding"),`;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: `).concat(t("menubar.submenu.mobile.indent"),`;
}
`)},W={submenu:function(e){var t=e.instance,r=e.processedItem;return{display:t.isItemActive(r)?"flex":"none"}}},Z={root:function(e){var t=e.instance;return["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var t=e.instance,r=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":t.isItemActive(r),"p-focus":t.isItemFocused(r),"p-disabled":t.isItemDisabled(r)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},J=D.extend({name:"menubar",theme:_,classes:Z,inlineStyles:W}),Y={name:"BaseMenubar",extends:F,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:J,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},O={name:"MenubarSub",hostName:"Menubar",extends:F,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,r){return e&&e.item?d.getItemValue(e.item[t],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,r){return this.ptm(r,{context:{item:e,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return d.isNotEmpty(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(r){return t.isItemVisible(r)&&t.getItemProp(r,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,t,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},components:{AngleRightIcon:H,AngleDownIcon:q},directives:{ripple:V}},Q=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],X=["onClick","onMouseenter","onMousemove"],$=["href","target"],ee=["id"],te=["id"];function ne(n,e,t,r,o,i){var u=w("MenubarSub",!0),b=z("ripple");return c(),f("ul",l({class:t.level===0?n.cx("rootList"):n.cx("submenu")},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[(c(!0),f(L,null,B(t.items,function(a,s){return c(),f(L,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(c(),f("li",l({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[n.cx("item",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions(a,s,"item"),{"data-p-active":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[S("div",l({class:n.cx("itemContent"),onClick:function(h){return i.onItemClick(h,a)},onMouseenter:function(h){return i.onItemMouseEnter(h,a)},onMousemove:function(h){return i.onItemMouseMove(h,a)},ref_for:!0},i.getPTOptions(a,s,"itemContent")),[t.templates.item?(c(),v(k(t.templates.item),{key:1,item:a.item,root:t.root,hasSubmenu:i.getItemProp(a,"items"),label:i.getItemLabel(a),props:i.getMenuItemProps(a,s)},null,8,["item","root","hasSubmenu","label","props"])):T((c(),f("a",l({key:0,href:i.getItemProp(a,"url"),class:n.cx("itemLink"),target:i.getItemProp(a,"target"),tabindex:"-1","aria-hidden":"true",ref_for:!0},i.getPTOptions(a,s,"itemLink")),[t.templates.itemicon?(c(),v(k(t.templates.itemicon),{key:0,item:a.item,class:K(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(a,"icon")?(c(),f("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(a,"icon")],ref_for:!0},i.getPTOptions(a,s,"itemIcon")),null,16)):p("",!0),S("span",l({id:i.getItemLabelId(a),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(a,s,"itemLabel")),R(i.getItemLabel(a)),17,ee),i.getItemProp(a,"items")?(c(),f(L,{key:2},[t.templates.submenuicon?(c(),v(k(t.templates.submenuicon),{key:0,root:t.root,active:i.isItemActive(a),class:K(n.cx("submenuIcon"))},null,8,["root","active","class"])):(c(),v(k(t.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(a,s,"submenuIcon")),null,16,["class"]))],64)):p("",!0)],16,$)),[[b]])],16,X),i.isItemVisible(a)&&i.isItemGroup(a)?(c(),v(u,{key:0,id:i.getItemId(a)+"_list",menuId:t.menuId,role:"menu",style:j(n.sx("submenu",!0,{processedItem:a})),focusedItemId:t.focusedItemId,items:a.items,mobileActive:t.mobileActive,activeItemPath:t.activeItemPath,templates:t.templates,level:t.level+1,"aria-labelledby":i.getItemLabelId(a),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(m){return n.$emit("item-click",m)}),onItemMouseenter:e[1]||(e[1]=function(m){return n.$emit("item-mouseenter",m)}),onItemMousemove:e[2]||(e[2]=function(m){return n.$emit("item-mousemove",m)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):p("",!0)],16,Q)):p("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(c(),f("li",l({key:1,id:i.getItemId(a),class:[n.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,te)):p("",!0)],64)}),128))],16)}O.render=ne;var ie={name:"Menubar",extends:Y,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||M()},activeItemPath:function(e){d.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||M(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&x.clear(this.container),this.container=null},methods:{getItemProp:function(e,t){return e?d.getItemValue(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return d.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&d.isNotEmpty(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,x.clear(this.menubar),this.hide()):(this.mobileActive=!0,x.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){I.focus(this.menubar)},hide:function(e,t){var r=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){I.focus(r.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&I.focus(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&d.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,r=e.isFocus;if(!d.isEmpty(t)){var o=t.index,i=t.key,u=t.level,b=t.parentKey,a=t.items,s=d.isNotEmpty(a),m=this.activeItemPath.filter(function(h){return h.parentKey!==b&&h.parentKey!==i});s&&m.push(t),this.focusedItemInfo={index:o,level:u,parentKey:b},this.activeItemPath=m,s&&(this.dirty=!0),r&&I.focus(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,r=e.processedItem,o=this.isProccessedItemGroup(r),i=d.isEmpty(r.parent),u=this.isSelected(r);if(u){var b=r.index,a=r.key,s=r.level,m=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(y){return a!==y.key&&a.startsWith(y.key)}),this.focusedItemInfo={index:b,level:s,parentKey:m},this.dirty=!i,I.focus(this.menubar)}else if(o)this.onItemChange(e);else{var h=i?r:this.activeItemPath.find(function(y){return y.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,h?h.index:-1),this.mobileActive=!1,I.focus(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],r=t?d.isEmpty(t.parent):null;if(r){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var t=this,r=this.visibleItems[this.focusedItemInfo.index],o=d.isEmpty(r.parent);if(o){var i=this.isProccessedItemGroup(r);if(i){this.onItemChange({originalEvent:e,processedItem:r}),this.focusedItemInfo={index:-1,parentKey:r.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var b=this.activeItemPath.find(function(s){return s.key===r.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:b?b.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey:function(e){var t=this,r=this.visibleItems[this.focusedItemInfo.index],o=r?this.activeItemPath.find(function(u){return u.key===r.parentKey}):null;if(o)this.onItemChange({originalEvent:e,processedItem:o}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],r=t?this.activeItemPath.find(function(u){return u.key===t.parentKey}):null;if(r){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=I.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=t&&I.findSingle(t,'a[data-pc-section="itemlink"]');r?r.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);!r&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var r=e.container&&!e.container.contains(t.target),o=!(e.target&&(e.target===t.target||e.target.contains(t.target)));r&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){I.isTouchDevice()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return d.findLastIndex(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var t=this,r=e>0?d.findLastIndex(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var r=this;this.searchValue=(this.searchValue||"")+t;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return r.isItemMatched(u)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return r.isItemMatched(u)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(u){return r.isItemMatched(u)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,r=I.findSingle(this.menubar,'li[id="'.concat(t,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(b,a){var s=(i!==""?i+"_":"")+a,m={item:b,index:a,level:r,key:s,parent:o,parentKey:i};m.items=t.createProcessedItems(b.items,r+1,m,s),u.push(m)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(d.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:O,BarsIcon:U}};function g(n){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(n)}function C(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?C(Object(t),!0).forEach(function(r){re(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function re(n,e,t){return(e=ae(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ae(n){var e=oe(n,"string");return g(e)=="symbol"?e:e+""}function oe(n,e){if(g(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(g(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var se=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function ue(n,e,t,r,o,i){var u=w("BarsIcon"),b=w("MenubarSub");return c(),f("div",l({ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(c(),f("div",l({key:0,class:n.cx("start")},n.ptm("start")),[P(n.$slots,"start")],16)):p("",!0),P(n.$slots,n.$slots.button?"button":"menubutton",{id:o.id,class:K(n.cx("button")),toggleCallback:function(s){return i.menuButtonClick(s)}},function(){var a;return[n.model&&n.model.length>0?(c(),f("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":o.id,"aria-label":(a=n.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(s){return i.menuButtonClick(s)}),onKeydown:e[1]||(e[1]=function(s){return i.menuButtonKeydown(s)})},E(E({},n.buttonProps),n.ptm("button"))),[P(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[A(u,N(G(n.ptm("buttonicon"))),null,16)]})],16,se)):p("",!0)]}),A(b,{ref:i.menubarRef,id:o.id+"_list",role:"menubar",items:i.processedItems,templates:n.$slots,root:!0,mobileActive:o.mobileActive,tabindex:"0","aria-activedescendant":o.focused?i.focusedItemId:void 0,menuId:o.id,focusedItemId:o.focused?i.focusedItemId:void 0,activeItemPath:o.activeItemPath,level:0,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),n.$slots.end?(c(),f("div",l({key:1,class:n.cx("end")},n.ptm("end")),[P(n.$slots,"end")],16)):p("",!0)],16)}ie.render=ue;export{ie as default};
