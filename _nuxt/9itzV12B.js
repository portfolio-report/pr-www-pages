import{W as Z,a6 as T,a7 as x,a8 as f,ar as J,a5 as p,a9 as w,as as Y,aa as L,ab as Q,ac as X,ad as $,ae as _,af as ee,ag as ne,ai as E,ah as te,aj as ie,ak as oe,Y as j,at as A,al as ae,am as m,E as se,t as c,l as h,H as R,I as le,Z as r,J as re,B as b,ao as K,G as k,F as G,y as M,x as y,U as P,v as ce,m as V,q as B,ap as de}from"./BQSA147h.js";import{s as H}from"./05KXEwH5.js";import{s as ue}from"./BvXMjB5V.js";import{s as pe}from"./CtHF2O0I.js";import{O as he}from"./CwIJdgYc.js";var fe=function(e){var n=e.dt;return`
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("cascadeselect.background"),`;
    border: 1px solid `).concat(n("cascadeselect.border.color"),`;
    transition: background `).concat(n("cascadeselect.transition.duration"),", color ").concat(n("cascadeselect.transition.duration"),", border-color ").concat(n("cascadeselect.transition.duration"),", outline-color ").concat(n("cascadeselect.transition.duration"),", box-shadow ").concat(n("cascadeselect.transition.duration"),`;
    border-radius: `).concat(n("cascadeselect.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("cascadeselect.shadow"),`;
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: `).concat(n("cascadeselect.hover.border.color"),`;
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: `).concat(n("cascadeselect.focus.border.color"),`;
    box-shadow: `).concat(n("cascadeselect.focus.ring.shadow"),`;
    outline: `).concat(n("cascadeselect.focus.ring.width")," ").concat(n("cascadeselect.focus.ring.style")," ").concat(n("cascadeselect.focus.ring.color"),`;
    outline-offset: `).concat(n("multiscascadeselectelect.focus.ring.offset"),`;
}

.p-cascadeselect.p-variant-filled {
    background: `).concat(n("cascadeselect.filled.background"),`;
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: `).concat(n("cascadeselect.filled.focus.background"),`;
}

.p-cascadeselect.p-invalid {
    border-color: `).concat(n("cascadeselect.invalid.border.color"),`;
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: `).concat(n("cascadeselect.disabled.background"),`;
}

.p-cascadeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("cascadeselect.dropdown.color"),`;
    width: `).concat(n("cascadeselect.dropdown.width"),`;
    border-top-right-radius: `).concat(n("border.radius.md"),`;
    border-bottom-right-radius: `).concat(n("border.radius.md"),`;
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: `).concat(n("cascadeselect.padding.y")," ").concat(n("cascadeselect.padding.x"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: `).concat(n("cascadeselect.placeholder.color"),`;
}

.p-cascadeselect-clearable .p-cascadeselect-label {
    padding-right: 1.75rem;
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: `).concat(n("cascadeselect.disabled.color"),`;
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-cascadeselect-fluid {
    display: flex;
}

.p-cascadeselect-fluid .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-overlay {
    background: `).concat(n("cascadeselect.overlay.background"),`;
    color: `).concat(n("cascadeselect.overlay.color"),`;
    border: 1px solid `).concat(n("cascadeselect.overlay.border.color"),`;
    border-radius: `).concat(n("cascadeselect.overlay.border.radius"),`;
    box-shadow: `).concat(n("cascadeselect.overlay.shadow"),`;
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
    padding: `).concat(n("cascadeselect.list.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("cascadeselect.list.gap"),`
}

.p-cascadeselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    border: 0 none;
    color: `).concat(n("cascadeselect.option.color"),`;
    background: transparent;
    transition: background `).concat(n("cascadeselect.transition.duration"),", color ").concat(n("cascadeselect.transition.duration"),", border-color ").concat(n("cascadeselect.transition.duration"),", box-shadow ").concat(n("cascadeselect.transition.duration"),", outline-color ").concat(n("cascadeselect.transition.duration"),`;
    border-radius: `).concat(n("cascadeselect.option.border.radius"),`;
}

.p-cascadeselect-option-active {
    overflow: visible;
    background: `).concat(n("cascadeselect.option.focus.background"),`;
    color: `).concat(n("cascadeselect.option.focus.color"),`;
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("cascadeselect.option.focus.background"),`;
    color: `).concat(n("cascadeselect.option.focus.color"),`;
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus .p-cascadeselect-group-icon {
    color: `).concat(n("cascadeselect.option.icon.focus.color"),`;
}

.p-cascadeselect-option-selected {
    background: `).concat(n("cascadeselect.option.selected.background"),`;
    color: `).concat(n("cascadeselect.option.selected.color"),`;
}

.p-cascadeselect-option-selected.p-focus {
    background: `).concat(n("cascadeselect.option.selected.focus.background"),`;
    color: `).concat(n("cascadeselect.option.selected.focus.color"),`;
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
    padding: `).concat(n("cascadeselect.option.padding"),`;
}

.p-cascadeselect-group-icon {
    margin-left: auto;
    font-size: `).concat(n("cascadeselect.option.icon.size"),`;
    width: `).concat(n("cascadeselect.option.icon.size"),`;
    height: `).concat(n("cascadeselect.option.icon.size"),`;
    color: `).concat(n("cascadeselect.option.icon.color"),`;
}
`)},ve={root:function(e){var n=e.props;return{position:n.appendTo==="self"?"relative":void 0}}},ye={root:function(e){var n=e.instance,i=e.props;return["p-cascadeselect p-component p-inputwrapper",{"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-focus":n.focused,"p-inputwrapper-filled":i.modelValue,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-cascadeselect-open":n.overlayVisible,"p-cascadeselect-fluid":i.fluid}]},label:function(e){var n=e.instance,i=e.props;return["p-cascadeselect-label",{"p-placeholder":n.label===i.placeholder,"p-cascadeselect-label-empty":!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},dropdown:"p-cascadeselect-dropdown",loadingIcon:"p-cascadeselect-loading-icon",dropdownIcon:"p-cascadeselect-dropdown-icon",overlay:"p-cascadeselect-overlay p-component",listContainer:"p-cascadeselect-list-container",list:"p-cascadeselect-list",option:function(e){var n=e.instance,i=e.processedOption;return["p-cascadeselect-option",{"p-cascadeselect-option-active":n.isOptionActive(i),"p-cascadeselect-option-selected":n.isOptionSelected(i),"p-focus":n.isOptionFocused(i),"p-disabled":n.isOptionDisabled(i)}]},optionContent:"p-cascadeselect-option-content",optionText:"p-cascadeselect-option-text",groupIcon:"p-cascadeselect-group-icon",optionList:"p-cascadeselect-overlay p-cascadeselect-option-list"},be=Z.extend({name:"cascadeselect",theme:fe,classes:ye,inlineStyles:ve}),ge={name:"BaseCascadeSelect",extends:j,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,placeholder:String,variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},dropdownIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},optionGroupIcon:{type:String,default:void 0},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},fluid:{type:Boolean,default:!1}},style:be,provide:function(){return{$pcCascadeSelect:this,$parentInstance:this}}},N={name:"CascadeSelectSub",hostName:"CascadeSelect",extends:j,emits:["option-change","option-focus-change"],container:null,props:{selectId:String,focusedOptionId:String,options:Array,optionLabel:String,optionValue:String,optionDisabled:null,optionGroupIcon:String,optionGroupLabel:String,optionGroupChildren:{type:[String,Array],default:null},activeOptionPath:Array,level:Number,templates:null,isParentMount:Boolean},data:function(){return{mounted:!1}},watch:{isParentMount:{handler:function(e){e&&A(this.container,this.level)}}},mounted:function(){(this.isParentMount||this.level===0)&&A(this.container,this.level),this.mounted=!0},methods:{getOptionId:function(e){return"".concat(this.selectId,"_").concat(e.key)},getOptionLabel:function(e){return this.optionLabel?f(e.option,this.optionLabel):e.option},getOptionValue:function(e){return this.optionValue?f(e.option,this.optionValue):e.option},getPTOptions:function(e,n,i){return this.ptm(i,{context:{option:e,index:n,level:this.level,optionGroup:this.isOptionGroup(e),active:this.isOptionActive(e),focused:this.isOptionFocused(e),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?f(e.option,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?f(e.option,this.optionGroupLabel):null},getOptionGroupChildren:function(e){return e.children},isOptionGroup:function(e){return p(e.children)},isOptionSelected:function(e){return!this.isOptionGroup(e)&&this.isOptionActive(e)},isOptionActive:function(e){return this.activeOptionPath.some(function(n){return n.key===e.key})},isOptionFocused:function(e){return this.focusedOptionId===this.getOptionId(e)},getOptionLabelToRender:function(e){return this.isOptionGroup(e)?this.getOptionGroupLabel(e):this.getOptionLabel(e)},onOptionClick:function(e,n){this.$emit("option-change",{originalEvent:e,processedOption:n,isFocus:!0})},onOptionMouseMove:function(e,n){this.$emit("option-focus-change",{originalEvent:e,processedOption:n})},onOptionChange:function(e){this.$emit("option-change",e)},onOptionFocusChange:function(e){this.$emit("option-focus-change",e)},containerRef:function(e){this.container=e},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0}},directives:{ripple:ae},components:{AngleRightIcon:H}},Oe=["id","aria-label","aria-selected","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-option-group","data-p-active","data-p-focus","data-p-disabled"],me=["onClick","onMousemove"];function Ie(t,e,n,i,a,o){var l=m("AngleRightIcon"),d=m("CascadeSelectSub",!0),v=se("ripple");return c(),h("ul",r({ref:o.containerRef,class:t.cx("list")},n.level===0?t.ptm("list"):t.ptm("optionList")),[(c(!0),h(R,null,le(n.options,function(s,u){return c(),h("li",r({key:o.getOptionLabelToRender(s),id:o.getOptionId(s),class:t.cx("option",{processedOption:s}),role:"treeitem","aria-label":o.getOptionLabelToRender(s),"aria-selected":o.isOptionGroup(s)?void 0:o.isOptionSelected(s),"aria-expanded":o.isOptionGroup(s)?o.isOptionActive(s):void 0,"aria-level":n.level+1,"aria-setsize":n.options.length,"aria-posinset":u+1,ref_for:!0},o.getPTOptions(s,u,"option"),{"data-p-option-group":o.isOptionGroup(s),"data-p-active":o.isOptionActive(s),"data-p-focus":o.isOptionFocused(s),"data-p-disabled":o.isOptionDisabled(s)}),[re((c(),h("div",r({class:t.cx("optionContent"),onClick:function(g){return o.onOptionClick(g,s)},onMousemove:function(g){return o.onOptionMouseMove(g,s)},ref_for:!0},o.getPTOptions(s,u,"optionContent")),[n.templates.option?(c(),b(K(n.templates.option),{key:0,option:s.option,selected:o.isOptionGroup(s)?!1:o.isOptionSelected(s)},null,8,["option","selected"])):(c(),h("span",r({key:1,class:t.cx("optionText"),ref_for:!0},o.getPTOptions(s,u,"optionText")),k(o.getOptionLabelToRender(s)),17)),o.isOptionGroup(s)?(c(),h(R,{key:2},[n.templates.optiongroupicon?(c(),b(K(n.templates.optiongroupicon),{key:0,"aria-hidden":"true"})):n.optionGroupIcon?(c(),h("span",r({key:1,class:[t.cx("groupIcon"),n.optionGroupIcon],"aria-hidden":"true",ref_for:!0},o.getPTOptions(s,u,"groupIcon")),null,16)):(c(),b(l,r({key:2,class:t.cx("groupIcon"),"aria-hidden":"true",ref_for:!0},o.getPTOptions(s,u,"groupIcon")),null,16,["class"]))],64)):G("",!0)],16,me)),[[v]]),o.isOptionGroup(s)&&o.isOptionActive(s)?(c(),b(d,{key:0,role:"group",class:M(t.cx("optionList")),selectId:n.selectId,focusedOptionId:n.focusedOptionId,options:o.getOptionGroupChildren(s),activeOptionPath:n.activeOptionPath,level:n.level+1,templates:n.templates,optionLabel:n.optionLabel,optionValue:n.optionValue,optionDisabled:n.optionDisabled,optionGroupIcon:n.optionGroupIcon,optionGroupLabel:n.optionGroupLabel,optionGroupChildren:n.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:t.pt,unstyled:t.unstyled,isParentMount:a.mounted},null,8,["class","selectId","focusedOptionId","options","activeOptionPath","level","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled","isParentMount"])):G("",!0)],16,Oe)}),128))],16)}N.render=Ie;var Se={name:"CascadeSelect",extends:ge,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","click","group-change","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionInfo:{index:-1,level:0,parentKey:""},activeOptionPath:[],overlayVisible:!1,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||T()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||T(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(x.clear(this.overlay),this.overlay=null)},methods:{getOptionLabel:function(e){return this.optionLabel?f(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?f(e,this.optionValue):e},isOptionDisabled:function(e){return this.optionDisabled?f(e,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?f(e,this.optionGroupLabel):null},getOptionGroupChildren:function(e,n){return J(this.optionGroupChildren)?f(e,this.optionGroupChildren):f(e,this.optionGroupChildren[n])},isOptionGroup:function(e,n){return Object.prototype.hasOwnProperty.call(e,this.optionGroupChildren[n])},getProccessedOptionLabel:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.isProccessedOptionGroup(e);return n?this.getOptionGroupLabel(e.option,e.level):this.getOptionLabel(e.option)},isProccessedOptionGroup:function(e){return p(e==null?void 0:e.children)},show:function(e){if(this.$emit("before-show"),this.overlayVisible=!0,this.activeOptionPath=this.hasSelectedOption?this.findOptionPathByValue(this.modelValue):this.activeOptionPath,this.hasSelectedOption&&p(this.activeOptionPath)){var n=this.activeOptionPath[this.activeOptionPath.length-1];this.focusedOptionInfo={index:n.index,level:n.level,parentKey:n.parentKey}}else this.focusedOptionInfo={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),level:0,parentKey:""};e&&w(this.$refs.focusInput)},hide:function(e){var n=this,i=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.activeOptionPath=[],n.focusedOptionInfo={index:-1,level:0,parentKey:""},e&&w(n.$refs.focusInput)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||this.loading){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&Y(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key));break}this.clicked=!1},onOptionChange:function(e){var n=e.originalEvent,i=e.processedOption,a=e.isFocus,o=e.isHide;if(!L(i)){var l=i.index,d=i.level,v=i.parentKey,s=i.children,u=p(s),C=L(i.parent),g=this.isSelected(i);if(g){var U=i.index,F=i.key,q=i.level,W=i.parentKey;this.focusedOptionInfo={index:U,level:q,parentKey:W},this.activeOptionPath=this.activeOptionPath.filter(function(S){return F!==S.key&&F.startsWith(S.key)}),this.dirty=!C}else{var D=this.activeOptionPath.filter(function(S){return S.parentKey!==v});D.push(i),this.focusedOptionInfo={index:l,level:d,parentKey:v},this.activeOptionPath=D}u?this.onOptionGroupSelect(n,i):this.onOptionSelect(n,i,o),a&&w(this.$refs.focusInput)}},onOptionFocusChange:function(e){if(this.focusOnHover){var n=e.originalEvent,i=e.processedOption,a=i.index,o=i.level,l=i.parentKey;this.focusedOptionInfo={index:a,level:o,parentKey:l},this.changeFocusedOptionIndex(n,a)}},onOptionSelect:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=this.getOptionValue(n==null?void 0:n.option);this.activeOptionPath.forEach(function(o){return o.selected=!0}),this.updateModel(e,a),i&&this.hide(!0)},onOptionGroupSelect:function(e,n){this.dirty=!0,this.$emit("group-change",{originalEvent:e,value:n.option})},onContainerClick:function(e){this.disabled||this.loading||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),w(this.$refs.focusInput)),this.clicked=!0,this.$emit("click",e))},onOverlayClick:function(e){he.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show();else{var n=this.focusedOptionInfo.index!==-1?this.findNextOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide(),e.preventDefault()}else{var a=this.focusedOptionInfo.index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,a),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=this;if(this.overlayVisible){var i=this.visibleOptions[this.focusedOptionInfo.index],a=this.activeOptionPath.find(function(d){return d.key===(i==null?void 0:i.parentKey)}),o=this.focusedOptionInfo.parentKey===""||a&&a.key===this.focusedOptionInfo.parentKey,l=L(i==null?void 0:i.parent);o&&(this.activeOptionPath=this.activeOptionPath.filter(function(d){return d.parentKey!==n.focusedOptionInfo.parentKey})),l||(this.focusedOptionInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}},onArrowRightKey:function(e){if(this.overlayVisible){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);if(i){var a=this.activeOptionPath.some(function(o){return(n==null?void 0:n.key)===o.key});a?(this.focusedOptionInfo={index:-1,parentKey:n==null?void 0:n.key},this.searchValue="",this.onArrowDownKey(e)):this.onOptionChange({originalEvent:e,processedOption:n})}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEnterKey:function(e){if(!this.overlayVisible)this.focusedOptionInfo.index,this.onArrowDownKey(e);else if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);this.onOptionChange({originalEvent:e,processedOption:n}),!i&&this.hide()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide()},onOverlayEnter:function(e){x.set("overlay",e,this.$primevue.config.zIndex.overlay),Q(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null,this.dirty=!1},onOverlayAfterLeave:function(e){x.clear(e)},alignOverlay:function(){this.appendTo==="self"?X(this.overlay,this.$el):(this.overlay.style.minWidth=$(this.$el)+"px",_(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ee(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ne()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOptionMatched:function(e){var n;return this.isValidOption(e)&&((n=this.getProccessedOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isValidOption:function(e){return p(e)&&!this.isOptionDisabled(e.option)},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.activeOptionPath.some(function(n){return n.key===e.key})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return E(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(a){return n.isValidOption(a)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var n=this,i=e>0?E(this.visibleOptions.slice(0,e),function(a){return n.isValidOption(a)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)})},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},findOptionPathByValue:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||i===0&&this.processedOptions,!n)return null;if(L(e))return[];for(var a=0;a<n.length;a++){var o=n[a];if(te(e,this.getOptionValue(o.option),this.equalityKey))return[o];var l=this.findOptionPathByValue(e,o.children,i+1);if(l)return l.unshift(o),l}},searchOptions:function(e,n){var i=this;this.searchValue=(this.searchValue||"")+n;var a=-1,o=!1;return p(this.searchValue)&&(this.focusedOptionInfo.index!==-1?(a=this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(l){return i.isOptionMatched(l)}),a=a===-1?this.visibleOptions.slice(0,this.focusedOptionInfo.index).findIndex(function(l){return i.isOptionMatched(l)}):a+this.focusedOptionInfo.index):a=this.visibleOptions.findIndex(function(l){return i.isOptionMatched(l)}),a!==-1&&(o=!0),a===-1&&this.focusedOptionInfo.index===-1&&(a=this.findFirstFocusedOptionIndex()),a!==-1&&this.changeFocusedOptionIndex(e,a)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),o},changeFocusedOptionIndex:function(e,n){this.focusedOptionInfo.index!==n&&(this.focusedOptionInfo.index=n,this.scrollInView(),this.selectOnFocus&&this.onOptionChange({originalEvent:e,processedOption:this.visibleOptions[n],isHide:!1}))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,a=ie(e.list,'li[id="'.concat(i,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionInfo.index=this.findFirstFocusedOptionIndex(),this.onOptionChange({processedOption:this.visibleOptions[this.focusedOptionInfo.index],isHide:!1}),!this.overlayVisible&&(this.focusedOptionInfo={index:-1,level:0,parentKey:""}))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},createProcessedOptions:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(d,v){var s=(o!==""?o+"_":"")+v,u={option:d,index:v,level:i,key:s,parent:a,parentKey:o};u.children=n.createProcessedOptions(n.getOptionGroupChildren(d,i),i+1,u,s),l.push(u)}),l},overlayRef:function(e){this.overlay=e}},computed:{hasSelectedOption:function(){return p(this.modelValue)},label:function(){var e=this.placeholder||"p-emptylabel";if(this.hasSelectedOption){var n=this.findOptionPathByValue(this.modelValue),i=p(n)?n[n.length-1]:null;return i?this.getOptionLabel(i.option):e}return e},processedOptions:function(){return this.createProcessedOptions(this.options||[])},visibleOptions:function(){var e=this,n=this.activeOptionPath.find(function(i){return i.key===e.focusedOptionInfo.parentKey});return n?n.children:this.processedOptions},equalityKey:function(){return this.optionValue?null:this.dataKey},searchResultMessageText:function(){return p(this.visibleOptions)?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionInfo.index!==-1?"".concat(this.id).concat(p(this.focusedOptionInfo.parentKey)?"_"+this.focusedOptionInfo.parentKey:"","_").concat(this.focusedOptionInfo.index):null}},components:{CascadeSelectSub:N,Portal:oe,ChevronDownIcon:ue,SpinnerIcon:pe,AngleRightIcon:H}};function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(i){we(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function we(t,e,n){return(e=Le(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Le(t){var e=ke(t,"string");return I(e)=="symbol"?e:e+""}function ke(t,e){if(I(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(I(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ce=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"];function xe(t,e,n,i,a,o){var l=m("SpinnerIcon"),d=m("CascadeSelectSub"),v=m("Portal");return c(),h("div",r({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[5]||(e[5]=function(s){return o.onContainerClick(s)})},t.ptmi("root")),[y("div",r({class:"p-hidden-accessible"},t.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[y("input",r({ref:"focusInput",id:t.inputId,type:"text",class:t.inputClass,style:t.inputStyle,readonly:"",disabled:t.disabled,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"tree","aria-expanded":a.overlayVisible,"aria-controls":a.id+"_tree","aria-activedescendant":a.focused?o.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},O(O({},t.inputProps),t.ptm("input"))),null,16,Ce)],16),y("span",r({class:t.cx("label")},t.ptm("label")),[P(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[ce(k(o.label),1)]})],16),y("div",r({class:t.cx("dropdown"),role:"button",tabindex:"-1","aria-hidden":"true"},t.ptm("dropdown")),[t.loading?P(t.$slots,"loadingicon",{key:0,class:M(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(c(),h("span",r({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(c(),b(l,r({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):P(t.$slots,"dropdownicon",{key:1,class:M(t.cx("dropdownIcon"))},function(){return[(c(),b(K(t.dropdownIcon?"span":"ChevronDownIcon"),r({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),y("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),k(o.searchResultMessageText),17),V(v,{appendTo:t.appendTo},{default:B(function(){return[V(de,r({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:B(function(){return[a.overlayVisible?(c(),h("div",r({key:0,ref:o.overlayRef,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.panelStyle,t.overlayStyle],onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[4]||(e[4]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},O(O(O({},t.panelProps),t.overlayProps),t.ptm("overlay"))),[y("div",r({class:t.cx("listContainer")},t.ptm("listContainer")),[V(d,{id:a.id+"_tree",role:"tree","aria-orientation":"horizontal",selectId:a.id,focusedOptionId:a.focused?o.focusedOptionId:void 0,options:o.processedOptions,activeOptionPath:a.activeOptionPath,level:0,templates:t.$slots,optionLabel:t.optionLabel,optionValue:t.optionValue,optionDisabled:t.optionDisabled,optionGroupIcon:t.optionGroupIcon,optionGroupLabel:t.optionGroupLabel,optionGroupChildren:t.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:t.pt,unstyled:t.unstyled},null,8,["id","selectId","focusedOptionId","options","activeOptionPath","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled"])],16),y("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),k(o.selectedMessageText),17)],16)):G("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])],16)}Se.render=xe;export{Se as default};
