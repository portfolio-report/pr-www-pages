import{W as N,a6 as D,a7 as k,a5 as l,a8 as h,a9 as U,aa as q,Y as A,ab as W,ac as m,E as Z,t as d,l as f,H as E,I as J,Z as c,J as Y,B as b,ae as P,G as w,F as V,y as K,x as y,S as C,v as Q,m as x,q as M,af as X}from"./DW4Z2p4M.js";import{s as R}from"./DY9kcwT0.js";import{s as $}from"./CPcBKC4j.js";import{s as _}from"./BpgmeFoH.js";import{O as ee}from"./Bz-fcKh3.js";var te=function(e){var t=e.dt;return`
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(t("cascadeselect.background"),`;
    border: 1px solid `).concat(t("cascadeselect.border.color"),`;
    transition: background `).concat(t("cascadeselect.transition.duration"),", color ").concat(t("cascadeselect.transition.duration"),", border-color ").concat(t("cascadeselect.transition.duration"),", outline-color ").concat(t("cascadeselect.transition.duration"),", box-shadow ").concat(t("cascadeselect.transition.duration"),`;
    border-radius: `).concat(t("cascadeselect.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("cascadeselect.shadow"),`;
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: `).concat(t("cascadeselect.hover.border.color"),`;
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: `).concat(t("cascadeselect.focus.border.color"),`;
    box-shadow: `).concat(t("cascadeselect.focus.ring.shadow"),`;
    outline: `).concat(t("cascadeselect.focus.ring.width")," ").concat(t("cascadeselect.focus.ring.style")," ").concat(t("cascadeselect.focus.ring.color"),`;
    outline-offset: `).concat(t("multiscascadeselectelect.focus.ring.offset"),`;
}

.p-cascadeselect.p-variant-filled {
    background: `).concat(t("cascadeselect.filled.background"),`;
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: `).concat(t("cascadeselect.filled.focus.background"),`;
}

.p-cascadeselect.p-invalid {
    border-color: `).concat(t("cascadeselect.invalid.border.color"),`;
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: `).concat(t("cascadeselect.disabled.background"),`;
}

.p-cascadeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(t("cascadeselect.dropdown.color"),`;
    width: `).concat(t("cascadeselect.dropdown.width"),`;
    border-top-right-radius: `).concat(t("border.radius.md"),`;
    border-bottom-right-radius: `).concat(t("border.radius.md"),`;
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: `).concat(t("cascadeselect.padding.y")," ").concat(t("cascadeselect.padding.x"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: `).concat(t("cascadeselect.placeholder.color"),`;
}

.p-cascadeselect-clearable .p-cascadeselect-label {
    padding-right: 1.75rem;
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: `).concat(t("cascadeselect.disabled.color"),`;
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-fluid .p-cascadeselect {
    display: flex;
}

.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-overlay {
    background: `).concat(t("cascadeselect.overlay.background"),`;
    color: `).concat(t("cascadeselect.overlay.color"),`;
    border: 1px solid `).concat(t("cascadeselect.overlay.border.color"),`;
    border-radius: `).concat(t("cascadeselect.overlay.border.radius"),`;
    box-shadow: `).concat(t("cascadeselect.overlay.shadow"),`;
}

.p-cascadeselect .p-cascadeselect-overlay {
    min-width: 100%;
}

.p-cascadeselect-option-list {
    display: none;
    min-width: 100%;
    position: absolute;
    z-index: 1;
}

.p-cascadeselect-list {
    min-width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: `).concat(t("cascadeselect.list.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("cascadeselect.list.gap"),`
}

.p-cascadeselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    border: 0 none;
    color: `).concat(t("cascadeselect.option.color"),`;
    background: transparent;
    transition: background `).concat(t("cascadeselect.transition.duration"),", color ").concat(t("cascadeselect.transition.duration"),", border-color ").concat(t("cascadeselect.transition.duration"),", box-shadow ").concat(t("cascadeselect.transition.duration"),", outline-color ").concat(t("cascadeselect.transition.duration"),`;
    border-radius: `).concat(t("cascadeselect.option.border.radius"),`;
}

.p-cascadeselect-option-active {
    overflow: visible;
    background: `).concat(t("cascadeselect.option.focus.background"),`;
    color: `).concat(t("cascadeselect.option.focus.color"),`;
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus {
    background: `).concat(t("cascadeselect.option.focus.background"),`;
    color: `).concat(t("cascadeselect.option.focus.color"),`;
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus .p-cascadeselect-group-icon {
    color: `).concat(t("cascadeselect.option.icon.focus.color"),`;
}

.p-cascadeselect-option-selected {
    background: `).concat(t("cascadeselect.option.selected.background"),`;
    color: `).concat(t("cascadeselect.option.selected.color"),`;
}

.p-cascadeselect-option-selected.p-focus {
    background: `).concat(t("cascadeselect.option.selected.focus.background"),`;
    color: `).concat(t("cascadeselect.option.selected.focus.color"),`;
}

.p-cascadeselect-option-active > .p-cascadeselect-option-list {
    display: block;
    left: 100%;
    top: 0;
}

.p-cascadeselect-option-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: `).concat(t("cascadeselect.option.padding"),`;
}

.p-cascadeselect-group-icon {
    margin-left: auto;
    font-size: `).concat(t("cascadeselect.option.icon.size"),`;
    width: `).concat(t("cascadeselect.option.icon.size"),`;
    height: `).concat(t("cascadeselect.option.icon.size"),`;
    color: `).concat(t("cascadeselect.option.icon.color"),`;
}
`)},ne={root:function(e){var t=e.props;return{position:t.appendTo==="self"?"relative":void 0}}},ie={root:function(e){var t=e.instance,i=e.props;return["p-cascadeselect p-component p-inputwrapper",{"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-focus":t.focused,"p-inputwrapper-filled":i.modelValue,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-cascadeselect-open":t.overlayVisible}]},label:function(e){var t=e.instance,i=e.props;return["p-cascadeselect-label",{"p-placeholder":t.label===i.placeholder,"p-cascadeselect-label-empty":!t.$slots.value&&(t.label==="p-emptylabel"||t.label.length===0)}]},dropdown:"p-cascadeselect-dropdown",loadingIcon:"p-cascadeselect-loading-icon",dropdownIcon:"p-cascadeselect-dropdown-icon",overlay:"p-cascadeselect-overlay p-component",listContainer:"p-cascadeselect-list-container",list:"p-cascadeselect-list",option:function(e){var t=e.instance,i=e.processedOption;return["p-cascadeselect-option",{"p-cascadeselect-option-active":t.isOptionActive(i),"p-cascadeselect-option-selected":t.isOptionSelected(i),"p-focus":t.isOptionFocused(i),"p-disabled":t.isOptionDisabled(i)}]},optionContent:"p-cascadeselect-option-content",optionText:"p-cascadeselect-option-text",groupIcon:"p-cascadeselect-group-icon",optionList:"p-cascadeselect-overlay p-cascadeselect-option-list"},oe=N.extend({name:"cascadeselect",theme:te,classes:ie,inlineStyles:ne}),ae={name:"BaseCascadeSelect",extends:A,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,placeholder:String,variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},dropdownIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},optionGroupIcon:{type:String,default:void 0},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:oe,provide:function(){return{$pcCascadeSelect:this,$parentInstance:this}}},z={name:"CascadeSelectSub",hostName:"CascadeSelect",extends:A,emits:["option-change","option-focus-change"],container:null,props:{selectId:String,focusedOptionId:String,options:Array,optionLabel:String,optionValue:String,optionDisabled:null,optionGroupIcon:String,optionGroupLabel:String,optionGroupChildren:{type:[String,Array],default:null},activeOptionPath:Array,level:Number,templates:null,isParentMount:Boolean},data:function(){return{mounted:!1}},watch:{isParentMount:{handler:function(e){e&&h.nestedPosition(this.container,this.level)}}},mounted:function(){(this.isParentMount||this.level===0)&&h.nestedPosition(this.container,this.level),this.mounted=!0},methods:{getOptionId:function(e){return"".concat(this.selectId,"_").concat(e.key)},getOptionLabel:function(e){return this.optionLabel?l.resolveFieldData(e.option,this.optionLabel):e.option},getOptionValue:function(e){return this.optionValue?l.resolveFieldData(e.option,this.optionValue):e.option},getPTOptions:function(e,t,i){return this.ptm(i,{context:{option:e,index:t,level:this.level,optionGroup:this.isOptionGroup(e),active:this.isOptionActive(e),focused:this.isOptionFocused(e),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?l.resolveFieldData(e.option,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?l.resolveFieldData(e.option,this.optionGroupLabel):null},getOptionGroupChildren:function(e){return e.children},isOptionGroup:function(e){return l.isNotEmpty(e.children)},isOptionSelected:function(e){return!this.isOptionGroup(e)&&this.isOptionActive(e)},isOptionActive:function(e){return this.activeOptionPath.some(function(t){return t.key===e.key})},isOptionFocused:function(e){return this.focusedOptionId===this.getOptionId(e)},getOptionLabelToRender:function(e){return this.isOptionGroup(e)?this.getOptionGroupLabel(e):this.getOptionLabel(e)},onOptionClick:function(e,t){this.$emit("option-change",{originalEvent:e,processedOption:t,isFocus:!0})},onOptionMouseMove:function(e,t){this.$emit("option-focus-change",{originalEvent:e,processedOption:t})},onOptionChange:function(e){this.$emit("option-change",e)},onOptionFocusChange:function(e){this.$emit("option-focus-change",e)},containerRef:function(e){this.container=e},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0}},directives:{ripple:W},components:{AngleRightIcon:R}},se=["id","aria-label","aria-selected","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-option-group","data-p-active","data-p-focus","data-p-disabled"],le=["onClick","onMousemove"];function re(n,e,t,i,a,o){var r=m("AngleRightIcon"),u=m("CascadeSelectSub",!0),v=Z("ripple");return d(),f("ul",c({ref:o.containerRef,class:n.cx("list")},t.level===0?n.ptm("list"):n.ptm("optionList")),[(d(!0),f(E,null,J(t.options,function(s,p){return d(),f("li",c({key:o.getOptionLabelToRender(s),id:o.getOptionId(s),class:n.cx("option",{processedOption:s}),role:"treeitem","aria-label":o.getOptionLabelToRender(s),"aria-selected":o.isOptionGroup(s)?void 0:o.isOptionSelected(s),"aria-expanded":o.isOptionGroup(s)?o.isOptionActive(s):void 0,"aria-level":t.level+1,"aria-setsize":t.options.length,"aria-posinset":p+1,ref_for:!0},o.getPTOptions(s,p,"option"),{"data-p-option-group":o.isOptionGroup(s),"data-p-active":o.isOptionActive(s),"data-p-focus":o.isOptionFocused(s),"data-p-disabled":o.isOptionDisabled(s)}),[Y((d(),f("div",c({class:n.cx("optionContent"),onClick:function(g){return o.onOptionClick(g,s)},onMousemove:function(g){return o.onOptionMouseMove(g,s)},ref_for:!0},o.getPTOptions(s,p,"optionContent")),[t.templates.option?(d(),b(P(t.templates.option),{key:0,option:s.option,selected:o.isOptionGroup(s)?!1:o.isOptionSelected(s)},null,8,["option","selected"])):(d(),f("span",c({key:1,class:n.cx("optionText"),ref_for:!0},o.getPTOptions(s,p,"optionText")),w(o.getOptionLabelToRender(s)),17)),o.isOptionGroup(s)?(d(),f(E,{key:2},[t.templates.optiongroupicon?(d(),b(P(t.templates.optiongroupicon),{key:0,"aria-hidden":"true"})):t.optionGroupIcon?(d(),f("span",c({key:1,class:[n.cx("groupIcon"),t.optionGroupIcon],"aria-hidden":"true",ref_for:!0},o.getPTOptions(s,p,"groupIcon")),null,16)):(d(),b(r,c({key:2,class:n.cx("groupIcon"),"aria-hidden":"true",ref_for:!0},o.getPTOptions(s,p,"groupIcon")),null,16,["class"]))],64)):V("",!0)],16,le)),[[v]]),o.isOptionGroup(s)&&o.isOptionActive(s)?(d(),b(u,{key:0,role:"group",class:K(n.cx("optionList")),selectId:t.selectId,focusedOptionId:t.focusedOptionId,options:o.getOptionGroupChildren(s),activeOptionPath:t.activeOptionPath,level:t.level+1,templates:t.templates,optionLabel:t.optionLabel,optionValue:t.optionValue,optionDisabled:t.optionDisabled,optionGroupIcon:t.optionGroupIcon,optionGroupLabel:t.optionGroupLabel,optionGroupChildren:t.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:n.pt,unstyled:n.unstyled,isParentMount:a.mounted},null,8,["class","selectId","focusedOptionId","options","activeOptionPath","level","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled","isParentMount"])):V("",!0)],16,se)}),128))],16)}z.render=re;var ce={name:"CascadeSelect",extends:ae,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","click","group-change","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionInfo:{index:-1,level:0,parentKey:""},activeOptionPath:[],overlayVisible:!1,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||D()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||D(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(k.clear(this.overlay),this.overlay=null)},methods:{getOptionLabel:function(e){return this.optionLabel?l.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?l.resolveFieldData(e,this.optionValue):e},isOptionDisabled:function(e){return this.optionDisabled?l.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?l.resolveFieldData(e,this.optionGroupLabel):null},getOptionGroupChildren:function(e,t){return l.isString(this.optionGroupChildren)?l.resolveFieldData(e,this.optionGroupChildren):l.resolveFieldData(e,this.optionGroupChildren[t])},isOptionGroup:function(e,t){return Object.prototype.hasOwnProperty.call(e,this.optionGroupChildren[t])},getProccessedOptionLabel:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=this.isProccessedOptionGroup(e);return t?this.getOptionGroupLabel(e.option,e.level):this.getOptionLabel(e.option)},isProccessedOptionGroup:function(e){return l.isNotEmpty(e==null?void 0:e.children)},show:function(e){if(this.$emit("before-show"),this.overlayVisible=!0,this.activeOptionPath=this.hasSelectedOption?this.findOptionPathByValue(this.modelValue):this.activeOptionPath,this.hasSelectedOption&&l.isNotEmpty(this.activeOptionPath)){var t=this.activeOptionPath[this.activeOptionPath.length-1];this.focusedOptionInfo={index:t.index,level:t.level,parentKey:t.parentKey}}else this.focusedOptionInfo={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),level:0,parentKey:""};e&&h.focus(this.$refs.focusInput)},hide:function(e){var t=this,i=function(){t.$emit("before-hide"),t.overlayVisible=!1,t.clicked=!1,t.activeOptionPath=[],t.focusedOptionInfo={index:-1,level:0,parentKey:""},e&&h.focus(t.$refs.focusInput)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||this.loading){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&l.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key));break}this.clicked=!1},onOptionChange:function(e){var t=e.originalEvent,i=e.processedOption,a=e.isFocus,o=e.isHide;if(!l.isEmpty(i)){var r=i.index,u=i.level,v=i.parentKey,s=i.children,p=l.isNotEmpty(s),L=l.isEmpty(i.parent),g=this.isSelected(i);if(g){var B=i.index,G=i.key,j=i.level,H=i.parentKey;this.focusedOptionInfo={index:B,level:j,parentKey:H},this.activeOptionPath=this.activeOptionPath.filter(function(S){return G!==S.key&&G.startsWith(S.key)}),this.dirty=!L}else{var F=this.activeOptionPath.filter(function(S){return S.parentKey!==v});F.push(i),this.focusedOptionInfo={index:r,level:u,parentKey:v},this.activeOptionPath=F}p?this.onOptionGroupSelect(t,i):this.onOptionSelect(t,i,o),a&&h.focus(this.$refs.focusInput)}},onOptionFocusChange:function(e){if(this.focusOnHover){var t=e.originalEvent,i=e.processedOption,a=i.index,o=i.level,r=i.parentKey;this.focusedOptionInfo={index:a,level:o,parentKey:r},this.changeFocusedOptionIndex(t,a)}},onOptionSelect:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=this.getOptionValue(t==null?void 0:t.option);this.activeOptionPath.forEach(function(o){return o.selected=!0}),this.updateModel(e,a),i&&this.hide(!0)},onOptionGroupSelect:function(e,t){this.dirty=!0,this.$emit("group-change",{originalEvent:e,value:t.option})},onContainerClick:function(e){this.disabled||this.loading||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),h.focus(this.$refs.focusInput)),this.clicked=!0,this.$emit("click",e))},onOverlayClick:function(e){ee.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show();else{var t=this.focusedOptionInfo.index!==-1?this.findNextOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t)}e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedOptionInfo.index!==-1){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);!i&&this.onOptionChange({originalEvent:e,processedOption:t})}this.overlayVisible&&this.hide(),e.preventDefault()}else{var a=this.focusedOptionInfo.index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,a),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var t=this;if(this.overlayVisible){var i=this.visibleOptions[this.focusedOptionInfo.index],a=this.activeOptionPath.find(function(u){return u.key===(i==null?void 0:i.parentKey)}),o=this.focusedOptionInfo.parentKey===""||a&&a.key===this.focusedOptionInfo.parentKey,r=l.isEmpty(i==null?void 0:i.parent);o&&(this.activeOptionPath=this.activeOptionPath.filter(function(u){return u.parentKey!==t.focusedOptionInfo.parentKey})),r||(this.focusedOptionInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}},onArrowRightKey:function(e){if(this.overlayVisible){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);if(i){var a=this.activeOptionPath.some(function(o){return(t==null?void 0:t.key)===o.key});a?(this.focusedOptionInfo={index:-1,parentKey:t==null?void 0:t.key},this.searchValue="",this.onArrowDownKey(e)):this.onOptionChange({originalEvent:e,processedOption:t})}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEnterKey:function(e){if(!this.overlayVisible)this.focusedOptionInfo.index,this.onArrowDownKey(e);else if(this.focusedOptionInfo.index!==-1){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);this.onOptionChange({originalEvent:e,processedOption:t}),!i&&this.hide()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){if(this.focusedOptionInfo.index!==-1){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);!i&&this.onOptionChange({originalEvent:e,processedOption:t})}this.overlayVisible&&this.hide()},onOverlayEnter:function(e){k.set("overlay",e,this.$primevue.config.zIndex.overlay),h.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null,this.dirty=!1},onOverlayAfterLeave:function(e){k.clear(e)},alignOverlay:function(){this.appendTo==="self"?h.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=h.getOuterWidth(this.$el)+"px",h.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.overlayVisible&&e.overlay&&!e.$el.contains(t.target)&&!e.overlay.contains(t.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new U(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!h.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOptionMatched:function(e){var t;return this.isValidOption(e)&&((t=this.getProccessedOptionLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isValidOption:function(e){return l.isNotEmpty(e)&&!this.isOptionDisabled(e.option)},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.activeOptionPath.some(function(t){return t.key===e.key})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(t){return e.isValidOption(t)})},findLastOptionIndex:function(){var e=this;return l.findLastIndex(this.visibleOptions,function(t){return e.isValidOption(t)})},findNextOptionIndex:function(e){var t=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(a){return t.isValidOption(a)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var t=this,i=e>0?l.findLastIndex(this.visibleOptions.slice(0,e),function(a){return t.isValidOption(a)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(t){return e.isValidSelectedOption(t)})},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},findOptionPathByValue:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t=t||i===0&&this.processedOptions,!t)return null;if(l.isEmpty(e))return[];for(var a=0;a<t.length;a++){var o=t[a];if(l.equals(e,this.getOptionValue(o.option),this.equalityKey))return[o];var r=this.findOptionPathByValue(e,o.children,i+1);if(r)return r.unshift(o),r}},searchOptions:function(e,t){var i=this;this.searchValue=(this.searchValue||"")+t;var a=-1,o=!1;return l.isNotEmpty(this.searchValue)&&(this.focusedOptionInfo.index!==-1?(a=this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}),a=a===-1?this.visibleOptions.slice(0,this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}):a+this.focusedOptionInfo.index):a=this.visibleOptions.findIndex(function(r){return i.isOptionMatched(r)}),a!==-1&&(o=!0),a===-1&&this.focusedOptionInfo.index===-1&&(a=this.findFirstFocusedOptionIndex()),a!==-1&&this.changeFocusedOptionIndex(e,a)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),o},changeFocusedOptionIndex:function(e,t){this.focusedOptionInfo.index!==t&&(this.focusedOptionInfo.index=t,this.scrollInView(),this.selectOnFocus&&this.onOptionChange({originalEvent:e,processedOption:this.visibleOptions[t],isHide:!1}))},scrollInView:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=t!==-1?"".concat(e.id,"_").concat(t):e.focusedOptionId,a=h.findSingle(e.list,'li[id="'.concat(i,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionInfo.index=this.findFirstFocusedOptionIndex(),this.onOptionChange({processedOption:this.visibleOptions[this.focusedOptionInfo.index],isHide:!1}),!this.overlayVisible&&(this.focusedOptionInfo={index:-1,level:0,parentKey:""}))},updateModel:function(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},createProcessedOptions:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",r=[];return e&&e.forEach(function(u,v){var s=(o!==""?o+"_":"")+v,p={option:u,index:v,level:i,key:s,parent:a,parentKey:o};p.children=t.createProcessedOptions(t.getOptionGroupChildren(u,i),i+1,p,s),r.push(p)}),r},overlayRef:function(e){this.overlay=e}},computed:{hasSelectedOption:function(){return l.isNotEmpty(this.modelValue)},label:function(){var e=this.placeholder||"p-emptylabel";if(this.hasSelectedOption){var t=this.findOptionPathByValue(this.modelValue),i=l.isNotEmpty(t)?t[t.length-1]:null;return i?this.getOptionLabel(i.option):e}return e},processedOptions:function(){return this.createProcessedOptions(this.options||[])},visibleOptions:function(){var e=this,t=this.activeOptionPath.find(function(i){return i.key===e.focusedOptionInfo.parentKey});return t?t.children:this.processedOptions},equalityKey:function(){return this.optionValue?null:this.dataKey},searchResultMessageText:function(){return l.isNotEmpty(this.visibleOptions)?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionInfo.index!==-1?"".concat(this.id).concat(l.isNotEmpty(this.focusedOptionInfo.parentKey)?"_"+this.focusedOptionInfo.parentKey:"","_").concat(this.focusedOptionInfo.index):null}},components:{CascadeSelectSub:z,Portal:q,ChevronDownIcon:$,SpinnerIcon:_,AngleRightIcon:R}};function I(n){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(n)}function T(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,i)}return t}function O(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?T(Object(t),!0).forEach(function(i){de(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function de(n,e,t){return(e=ue(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ue(n){var e=pe(n,"string");return I(e)=="symbol"?e:e+""}function pe(n,e){if(I(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(I(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var he=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"];function fe(n,e,t,i,a,o){var r=m("SpinnerIcon"),u=m("CascadeSelectSub"),v=m("Portal");return d(),f("div",c({ref:"container",class:n.cx("root"),style:n.sx("root"),onClick:e[5]||(e[5]=function(s){return o.onContainerClick(s)})},n.ptmi("root")),[y("div",c({class:"p-hidden-accessible"},n.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[y("input",c({ref:"focusInput",id:n.inputId,type:"text",class:n.inputClass,style:n.inputStyle,readonly:"",disabled:n.disabled,placeholder:n.placeholder,tabindex:n.disabled?-1:n.tabindex,role:"combobox","aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-haspopup":"tree","aria-expanded":a.overlayVisible,"aria-controls":a.id+"_tree","aria-activedescendant":a.focused?o.focusedOptionId:void 0,"aria-invalid":n.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},O(O({},n.inputProps),n.ptm("input"))),null,16,he)],16),y("span",c({class:n.cx("label")},n.ptm("label")),[C(n.$slots,"value",{value:n.modelValue,placeholder:n.placeholder},function(){return[Q(w(o.label),1)]})],16),y("div",c({class:n.cx("dropdown"),role:"button",tabindex:"-1","aria-hidden":"true"},n.ptm("dropdown")),[n.loading?C(n.$slots,"loadingicon",{key:0,class:K(n.cx("loadingIcon"))},function(){return[n.loadingIcon?(d(),f("span",c({key:0,class:[n.cx("loadingIcon"),"pi-spin",n.loadingIcon],"aria-hidden":"true"},n.ptm("loadingIcon")),null,16)):(d(),b(r,c({key:1,class:n.cx("loadingIcon"),spin:"","aria-hidden":"true"},n.ptm("loadingIcon")),null,16,["class"]))]}):C(n.$slots,"dropdownicon",{key:1,class:K(n.cx("dropdownIcon"))},function(){return[(d(),b(P(n.dropdownIcon?"span":"ChevronDownIcon"),c({class:[n.cx("dropdownIcon"),n.dropdownIcon],"aria-hidden":"true"},n.ptm("dropdownIcon")),null,16,["class"]))]})],16),y("span",c({role:"status","aria-live":"polite",class:"p-hidden-accessible"},n.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),w(o.searchResultMessageText),17),x(v,{appendTo:n.appendTo},{default:M(function(){return[x(X,c({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},n.ptm("transition")),{default:M(function(){return[a.overlayVisible?(d(),f("div",c({key:0,ref:o.overlayRef,class:[n.cx("overlay"),n.panelClass,n.overlayClass],style:[n.panelStyle,n.overlayStyle],onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[4]||(e[4]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},O(O(O({},n.panelProps),n.overlayProps),n.ptm("overlay"))),[y("div",c({class:n.cx("listContainer")},n.ptm("listContainer")),[x(u,{id:a.id+"_tree",role:"tree","aria-orientation":"horizontal",selectId:a.id,focusedOptionId:a.focused?o.focusedOptionId:void 0,options:o.processedOptions,activeOptionPath:a.activeOptionPath,level:0,templates:n.$slots,optionLabel:n.optionLabel,optionValue:n.optionValue,optionDisabled:n.optionDisabled,optionGroupIcon:n.optionGroupIcon,optionGroupLabel:n.optionGroupLabel,optionGroupChildren:n.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:n.pt,unstyled:n.unstyled},null,8,["id","selectId","focusedOptionId","options","activeOptionPath","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled"])],16),y("span",c({role:"status","aria-live":"polite",class:"p-hidden-accessible"},n.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),w(o.selectedMessageText),17)],16)):V("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])],16)}ce.render=fe;export{ce as default};
