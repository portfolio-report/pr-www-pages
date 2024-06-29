import{W as v,a8 as d,Z as o,Y as g,t as l,l as p,x as u,H as f,I,G as b,B as y,ae as k,F as w}from"./BDhoIBf6.js";var T=function(e){var t=e.dt;return`
.p-steps {
    position: relative;
}

.p-steps-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}

.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.p-steps-item.p-disabled,
.p-steps-item.p-disabled * {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;
    cursor: auto;
}

.p-steps-item:before {
    content: " ";
    border-top: 2px solid `.concat(t("steps.separator.background"),`;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
    margin-top: calc(-1rem + 1px);
}

.p-steps-item:first-child::before {
    width: calc(50% + 1rem);
    transform: translateX(100%);
}

.p-steps-item:last-child::before {
    width: 50%;
}

.p-steps-item-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    transition: outline-color `).concat(t("steps.transition.duration"),", box-shadow ").concat(t("steps.transition.duration"),`;
    border-radius: `).concat(t("steps.item.link.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(t("steps.item.link.gap"),`;
}

.p-steps-item-link:not(.p-disabled):focus-visible {
    box-shadow: `).concat(t("steps.item.link.focus.ring.shadow"),`;
    outline: `).concat(t("steps.item.link.focus.ring.width")," ").concat(t("steps.item.link.focus.ring.style")," ").concat(t("steps.item.link.focus.ring.color"),`;
    outline-offset: `).concat(t("steps.item.link.focus.ring.offset"),`;
}

.p-steps-item-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(t("steps.item.label.color"),`;
    display: block;
    font-weight: `).concat(t("steps.item.label.font.weight"),`;
}

.p-steps-item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(t("steps.item.number.color"),`;
    border: 2px solid `).concat(t("steps.item.number.border.color"),`;
    background: `).concat(t("steps.item.number.background"),`;
    min-width: `).concat(t("steps.item.number.size"),`;
    height: `).concat(t("steps.item.number.size"),`;
    line-height: `).concat(t("steps.item.number.size"),`;
    font-size: `).concat(t("steps.item.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(t("steps.item.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(t("steps.item.number.font.weight"),`;
}

.p-steps-item-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("steps.item.number.border.radius"),`;
    box-shadow: `).concat(t("steps.item.number.shadow"),`;
}

.p-steps:not(.p-readonly) .p-steps-item {
    cursor: pointer;
}

.p-steps-item-active .p-steps-item-number {
    background: `).concat(t("steps.item.number.active.background"),`;
    border-color: `).concat(t("steps.item.number.active.border.color"),`;
    color: `).concat(t("steps.item.number.active.color"),`;
}

.p-steps-item-active .p-steps-item-label {
    color: `).concat(t("steps.item.label.active.color"),`;
}
`)},S={root:function(e){var t=e.props;return["p-steps p-component",{"p-readonly":t.readonly}]},list:"p-steps-list",item:function(e){var t=e.instance,r=e.item,c=e.index;return["p-steps-item",{"p-steps-item-active":t.isActive(c),"p-disabled":t.isItemDisabled(r,c)}]},itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},x=v.extend({name:"steps",theme:T,classes:S}),P={name:"BaseSteps",extends:g,props:{id:{type:String},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},activeStep:{type:Number,default:0}},style:x,provide:function(){return{$pcSteps:this,$parentInstance:this}}},L={name:"Steps",extends:P,inheritAttrs:!1,emits:["update:activeStep","step-change"],data:function(){return{d_activeStep:this.activeStep}},watch:{activeStep:function(e){this.d_activeStep=e}},mounted:function(){var e=this.findFirstItem();e&&(e.tabIndex="0")},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r,active:this.isActive(r),disabled:this.isItemDisabled(t,r)}})},onItemClick:function(e,t,r){if(this.disabled(t)||this.readonly){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeStep&&(this.d_activeStep=r,this.$emit("update:activeStep",this.d_activeStep)),this.$emit("step-change",{originalEvent:e,index:r})},onItemKeydown:function(e,t){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":break;case"Enter":case"NumpadEnter":case"Space":{this.onItemClick(e,t),e.preventDefault();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?t.children[0]:null},findFirstItem:function(){var e=d.findSingle(this.$refs.list,'[data-pc-section="item"]');return e?e.children[0]:null},findLastItem:function(){var e=d.find(this.$refs.list,'[data-pc-section="item"]');return e?e[e.length-1].children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},isActive:function(e){return e===this.d_activeStep},isItemDisabled:function(e,t){return this.disabled(e)||this.readonly&&!this.isActive(t)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},getMenuItemProps:function(e,t){var r=this;return{action:o({class:this.cx("itemLink"),onClick:function(i){return r.onItemClick(i,e)},onKeyDown:function(i){return r.onItemKeydown(i,e)}},this.getPTOptions("itemLink",e,t)),step:o({class:this.cx("itemNumber")},this.getPTOptions("itemNumber",e,t)),label:o({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t))}}}},D=["id"],F=["aria-current","onClick","onKeydown","data-p-active","data-p-disabled"];function N(n,e,t,r,c,i){return l(),p("nav",o({id:n.id,class:n.cx("root")},n.ptmi("root")),[u("ol",o({ref:"list",class:n.cx("list")},n.ptm("list")),[(l(!0),p(f,null,I(n.model,function(s,a){return l(),p(f,{key:i.label(s)+"_"+a.toString()},[i.visible(s)?(l(),p("li",o({key:0,class:[n.cx("item",{item:s,index:a}),s.class],style:s.style,"aria-current":i.isActive(a)?"step":void 0,onClick:function(m){return i.onItemClick(m,s,a)},onKeydown:function(m){return i.onItemKeydown(m,s,a)},ref_for:!0},i.getPTOptions("item",s,a),{"data-p-active":i.isActive(a),"data-p-disabled":i.isItemDisabled(s,a)}),[n.$slots.item?(l(),y(k(n.$slots.item),{key:1,item:s,index:a,active:a===c.d_activeStep,label:i.label(s),props:i.getMenuItemProps(s,a)},null,8,["item","index","active","label","props"])):(l(),p("span",o({key:0,class:n.cx("itemLink"),ref_for:!0},i.getPTOptions("itemLink",s,a)),[u("span",o({class:n.cx("itemNumber"),ref_for:!0},i.getPTOptions("itemNumber",s,a)),b(a+1),17),u("span",o({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",s,a)),b(i.label(s)),17)],16))],16,F)):w("",!0)],64)}),128))],16)],16,D)}L.render=N;export{L as default};
