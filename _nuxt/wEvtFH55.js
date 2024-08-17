import{W as x,az as m,aj as u,ax as T,aT as w,b6 as p,Z as s,al as L,Y as P,E as B,t as l,l as d,x as f,H as v,I as F,J as C,B as h,y as M,ao as g,F as I,G as D}from"./DHyAdtEl.js";var K=function(t){var e=t.dt;return`
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: `.concat(e("tabmenu.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(e("tabmenu.tablist.border.color"),`;
    border-width: `).concat(e("tabmenu.tablist.border.width"),`;
    position: relative;
}

.p-tabmenu-item-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    background: `).concat(e("tabmenu.item.background"),`;
    border-style: solid;
    border-width: `).concat(e("tabmenu.item.border.width"),`;
    border-color: `).concat(e("tabmenu.item.border.color"),`;
    color: `).concat(e("tabmenu.item.color"),`;
    padding: `).concat(e("tabmenu.item.padding"),`;
    font-weight: `).concat(e("tabmenu.item.font.weight"),`;
    transition: background `).concat(e("tabmenu.transition.duration"),", border-color ").concat(e("tabmenu.transition.duration"),", color ").concat(e("tabmenu.transition.duration"),", outline-color ").concat(e("tabmenu.transition.duration"),", box-shadow ").concat(e("tabmenu.transition.duration"),`;
    margin: `).concat(e("tabmenu.item.margin"),`;
    outline-color: transparent;
    gap: `).concat(e("tabmenu.item.gap"),`;
}

.p-tabmenu-item-link:focus-visible {
    z-index: 1;
    box-shadow: `).concat(e("tabmenu.item.focus.ring.shadow"),`;
    outline: `).concat(e("tabmenu.item.focus.ring.width")," ").concat(e("tabmenu.item.focus.ring.style")," ").concat(e("tabmenu.item.focus.ring.color"),`;
    outline-offset: `).concat(e("tabmenu.item.focus.ring.offset"),`;
}

.p-tabmenu-item-icon {
    color: `).concat(e("tabmenu.item.icon.color"),`;
    transition: background `).concat(e("tabmenu.transition.duration"),", border-color ").concat(e("tabmenu.transition.duration"),", color ").concat(e("tabmenu.transition.duration"),", outline-color ").concat(e("tabmenu.transition.duration"),", box-shadow ").concat(e("tabmenu.transition.duration"),`;
}

.p-tabmenu-item-label {
    line-height: 1;
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {
    background: `).concat(e("tabmenu.item.hover.background"),`;
    border-color: `).concat(e("tabmenu.item.hover.border.color"),`;
    color: `).concat(e("tabmenu.item.hover.color"),`;
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {
    color: `).concat(e("tabmenu.item.icon.hover.color"),`;
}

.p-tabmenu-item-active .p-tabmenu-item-link {
    background: `).concat(e("tabmenu.item.active.background"),`;
    border-color: `).concat(e("tabmenu.item.active.border.color"),`;
    color: `).concat(e("tabmenu.item.active.color"),`;
}

.p-tabmenu-item-active .p-tabmenu-item-icon {
    color: `).concat(e("tabmenu.item.icon.active.color"),`;
}

.p-tabmenu-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(e("tabmenu.active.bar.bottom"),`;
    height: `).concat(e("tabmenu.active.bar.height"),`;
    background: `).concat(e("tabmenu.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`)},E={root:"p-tabmenu p-component",tablist:"p-tabmenu-tablist",item:function(t){var e=t.instance,o=t.index,c=t.item;return["p-tabmenu-item",{"p-tabmenu-item-active":e.d_activeIndex===o,"p-disabled":e.disabled(c)}]},itemLink:"p-tabmenu-item-link",itemIcon:"p-tabmenu-item-icon",itemLabel:"p-tabmenu-item-label",activeBar:"p-tabmenu-active-bar"},N=x.extend({name:"tabmenu",theme:K,classes:E}),S={name:"BaseTabMenu",extends:P,props:{model:{type:Array,default:null},activeIndex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:N,provide:function(){return{$pcTabMenu:this,$parentInstance:this}}},O={name:"TabMenu",extends:S,inheritAttrs:!1,emits:["update:activeIndex","tab-change"],data:function(){return{d_activeIndex:this.activeIndex}},watch:{activeIndex:{flush:"post",handler:function(t){this.d_activeIndex=t,this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()});var e=this.findActiveItem();e&&(e.tabIndex="0")},updated:function(){this.updateInkBar()},methods:{getPTOptions:function(t,e,o){return this.ptm(t,{context:{item:e,index:o}})},onItemClick:function(t,e,o){if(this.disabled(e)){t.preventDefault();return}e.command&&e.command({originalEvent:t,item:e}),o!==this.d_activeIndex&&(this.d_activeIndex=o,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:t,index:o})},onKeydownItem:function(t,e,o){switch(t.code){case"ArrowRight":{this.navigateToNextItem(t.target),t.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(t.target),t.preventDefault();break}case"Home":{this.navigateToFirstItem(t.target),t.preventDefault();break}case"End":{this.navigateToLastItem(t.target),t.preventDefault();break}case"Space":case"NumpadEnter":case"Enter":{this.onItemClick(t,e,o),t.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(t){var e=this.findNextItem(t);e&&this.setFocusToMenuitem(t,e)},navigateToPrevItem:function(t){var e=this.findPrevItem(t);e&&this.setFocusToMenuitem(t,e)},navigateToFirstItem:function(t){var e=this.findFirstItem(t);e&&this.setFocusToMenuitem(t,e)},navigateToLastItem:function(t){var e=this.findLastItem(t);e&&this.setFocusToMenuitem(t,e)},findNextItem:function(t){var e=t.parentElement.nextElementSibling;return e?m(e,"data-p-disabled")===!0?this.findNextItem(e.children[0]):e.children[0]:null},findPrevItem:function(t){var e=t.parentElement.previousElementSibling;return e?m(e,"data-p-disabled")===!0?this.findPrevItem(e.children[0]):e.children[0]:null},findFirstItem:function(){var t=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return t?t.children[0]:null},findLastItem:function(){var t=T(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return t?t[t.length-1].children[0]:null},findActiveItem:function(){var t=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');return t?t.children[0]:null},setFocusToMenuitem:function(t,e){t.tabIndex="-1",e.tabIndex="0",e.focus()},onTabKey:function(){var t=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]'),e=u(this.$refs.nav,'[data-pc-section="itemlink"][tabindex="0"]');e!==t.children[0]&&(t&&(t.children[0].tabIndex="0"),e.tabIndex="-1")},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled===!0},label:function(t){return typeof t.label=="function"?t.label():t.label},updateInkBar:function(){for(var t=this.$refs.nav.children,e=!1,o=0;o<t.length;o++){var c=t[o];m(c,"data-p-active")&&(this.$refs.inkbar.style.width=w(c)+"px",this.$refs.inkbar.style.left=p(c).left-p(this.$refs.nav).left+"px",e=!0)}e||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(t,e){var o=this;return{action:s({class:this.cx("itemLink"),tabindex:-1,onClick:function(i){return o.onItemClick(i,t,e)},onKeyDown:function(i){return o.onKeydownItem(i,t,e)}},this.getPTOptions("itemLink",t,e)),icon:s({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon",t,e)),label:s({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",t,e))}}},directives:{ripple:L}},$=["aria-labelledby","aria-label"],A=["onClick","onKeydown","data-p-active","data-p-disabled"],_=["href","target","aria-label","aria-disabled"];function z(n,t,e,o,c,i){var k=B("ripple");return l(),d("div",s({class:n.cx("root")},n.ptmi("root")),[f("ul",s({ref:"nav",class:n.cx("tablist"),role:"menubar","aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptm("tablist")),[(l(!0),d(v,null,F(n.model,function(a,r){return l(),d(v,{key:i.label(a)+"_"+r.toString()},[i.visible(a)?(l(),d("li",s({key:0,ref_for:!0,ref:"tab",class:[n.cx("item",{item:a,index:r}),a.class],role:"presentation",onClick:function(b){return i.onItemClick(b,a,r)},onKeydown:function(b){return i.onKeydownItem(b,a,r)}},i.getPTOptions("item",a,r),{"data-p-active":c.d_activeIndex===r,"data-p-disabled":i.disabled(a)}),[n.$slots.item?(l(),h(g(n.$slots.item),{key:1,item:a,index:r,active:r===c.d_activeIndex,label:i.label(a),props:i.getMenuItemProps(a,r)},null,8,["item","index","active","label","props"])):C((l(),d("a",s({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:a.url,class:n.cx("itemLink"),target:a.target,"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1},i.getPTOptions("itemLink",a,r)),[n.$slots.itemicon?(l(),h(g(n.$slots.itemicon),{key:0,item:a,class:M(n.cx("itemIcon"))},null,8,["item","class"])):a.icon?(l(),d("span",s({key:1,class:[n.cx("itemIcon"),a.icon],ref_for:!0},i.getPTOptions("itemIcon",a,r)),null,16)):I("",!0),f("span",s({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",a,r)),D(i.label(a)),17)],16,_)),[[k]])],16,A)):I("",!0)],64)}),128)),f("li",s({ref:"inkbar",role:"none",class:n.cx("activeBar")},n.ptm("activeBar")),null,16)],16,$)],16)}O.render=z;export{O as default};
