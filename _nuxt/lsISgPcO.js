import{W as $,a6 as I,a7 as E,a8 as s,a9 as H,aa as D,ab as B,Y as z,ac as T,t as u,l as f,x as y,Z as d,S as h,H as O,v as V,G as K,I as M,m as k,y as m,F as C,B as U,ae as x,q as v,af as R,ag as W}from"./DW4Z2p4M.js";import{s as q}from"./CPcBKC4j.js";import Z from"./wU1qpuzq.js";import{O as G}from"./Bz-fcKh3.js";import Y from"./nHVxjTn2.js";import"./BDTQ7zzb.js";import"./BpgmeFoH.js";import"./DF5IixPk.js";import"./LTB6aYJA.js";import"./B3kUrikX.js";import"./C7hdSwkO.js";import"./DHoyVbvn.js";import"./BCpAnhM1.js";var J=function(t){var n=t.dt;return`
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("treeselect.background"),`;
    border: 1px solid `).concat(n("treeselect.border.color"),`;
    transition: background `).concat(n("treeselect.transition.duration"),", color ").concat(n("treeselect.transition.duration"),", border-color ").concat(n("treeselect.transition.duration"),", outline-color ").concat(n("treeselect.transition.duration"),", box-shadow ").concat(n("treeselect.transition.duration"),`;
    border-radius: `).concat(n("treeselect.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("treeselect.shadow"),`;
}

.p-treeselect:not(.p-disabled):hover {
    border-color: `).concat(n("treeselect.hover.border.color"),`;
}

.p-treeselect:not(.p-disabled).p-focus {
    border-color: `).concat(n("treeselect.focus.border.color"),`;
    box-shadow: `).concat(n("treeselect.focus.ring.shadow"),`;
    outline: `).concat(n("treeselect.focus.ring.width")," ").concat(n("treeselect.focus.ring.style")," ").concat(n("treeselect.focus.ring.color"),`;
    outline-offset: `).concat(n("treeselect.focus.ring.offset"),`;
}

.p-treeselect.p-variant-filled {
    background: `).concat(n("treeselect.filled.background"),`;
}

.p-treeselect.p-variant-filled.p-focus {
    background: `).concat(n("treeselect.filled.focus.background"),`;
}

.p-treeselect.p-invalid {
    border-color: `).concat(n("treeselect.invalid.border.color"),`;
}

.p-treeselect.p-disabled {
    opacity: 1;
    background: `).concat(n("treeselect.disabled.background"),`;
}

.p-treeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("treeselect.dropdown.color"),`;
    width: `).concat(n("treeselect.dropdown.width"),`;
    border-top-right-radius: `).concat(n("border.radius.md"),`;
    border-bottom-right-radius: `).concat(n("border.radius.md"),`;
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label {
    display: flex;
    align-items-center;
    gap: calc(`).concat(n("treeselect.padding.y"),` / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: `).concat(n("treeselect.padding.y")," ").concat(n("treeselect.padding.x"),`;
    color: `).concat(n("treeselect.color"),`;
}

.p-treeselect-label.p-placeholder {
    color: `).concat(n("treeselect.placeholder.color"),`;
}

.p-treeselect.p-disabled .p-treeselect-label {
    color: `).concat(n("treeselect.disabled.color"),`;
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect .p-treeselect-overlay {
    min-width: 100%;
}

.p-treeselect-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("treeselect.overlay.background"),`;
    color: `).concat(n("treeselect.overlay.color"),`;
    border: 1px solid `).concat(n("treeselect.overlay.border.color"),`;
    border-radius: `).concat(n("treeselect.overlay.border.radius"),`;
    box-shadow: `).concat(n("treeselect.overlay.shadow"),`;
    overflow: hidden;
}


.p-treeselect-tree-container {
    overflow: auto;
}

.p-treeselect-empty-message {
    padding: `).concat(n("treeselect.empty.message.padding"),`;
    background: transparent;
}

.p-fluid .p-treeselect {
    display: flex;
}

.p-treeselect-overlay .p-tree {
    padding: `).concat(n("treeselect.tree.padding"),`;
}

.p-treeselect-label .p-chip {
    padding-top: calc(`).concat(n("treeselect.padding.y"),` / 2);
    padding-bottom: calc(`).concat(n("treeselect.padding.y"),` / 2);
    border-radius: `).concat(n("treeselect.chip.border.radius"),`;
}

.p-treeselect-label:has(.p-chip) {
    padding: calc(`).concat(n("treeselect.padding.y")," / 2) calc(").concat(n("treeselect.padding.x"),` / 2);
}
`)},Q={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},X={root:function(t){var n=t.instance,r=t.props;return["p-treeselect p-component p-inputwrapper",{"p-treeselect-display-chip":r.display==="chip","p-disabled":r.disabled,"p-invalid":r.invalid,"p-focus":n.focused,"p-variant-filled":r.variant?r.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-inputwrapper-filled":!n.emptyValue,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-treeselect-open":n.overlayVisible}]},labelContainer:"p-treeselect-label-container",label:function(t){var n=t.instance,r=t.props;return["p-treeselect-label",{"p-placeholder":n.label===r.placeholder,"p-treeselect-label-empty":!r.placeholder&&n.emptyValue}]},chip:"p-treeselect-chip-item",pcChip:"p-treeselect-chip",dropdown:"p-treeselect-dropdown",dropdownIcon:"p-treeselect-dropdown-icon",panel:"p-treeselect-overlay p-component",treeContainer:"p-treeselect-tree-container",emptyMessage:"p-treeselect-empty-message"},_=$.extend({name:"treeselect",theme:J,classes:X,inlineStyles:Q}),ee={name:"BaseTreeSelect",extends:z,props:{modelValue:null,options:Array,scrollHeight:{type:String,default:"20rem"},placeholder:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:null},selectionMode:{type:String,default:"single"},appendTo:{type:[String,Object],default:"body"},emptyMessage:{type:String,default:null},display:{type:String,default:"comma"},metaKeySelection:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:_,provide:function(){return{$pcTreeSelect:this,$parentInstance:this}}};function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function te(e,t,n){return(t=ne(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){var t=re(e,"string");return w(t)=="symbol"?t:t+""}function re(e,t){if(w(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(w(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function g(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=A(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(o){throw o},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,p=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var o=n.next();return p=o.done,o},e:function(o){a=!0,i=o},f:function(){try{p||n.return==null||n.return()}finally{if(a)throw i}}}}function ie(e){return se(e)||le(e)||A(e)||oe()}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(e,t){if(e){if(typeof e=="string")return j(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function le(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function se(e){if(Array.isArray(e))return j(e)}function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var ae={name:"TreeSelect",extends:ee,inheritAttrs:!1,emits:["update:modelValue","before-show","before-hide","change","show","hide","node-select","node-unselect","node-expand","node-collapse","focus","blur"],data:function(){return{id:this.$attrs.id,focused:!1,overlayVisible:!1,expandedKeys:{}}},watch:{"$attrs.id":function(t){this.id=t||I()},modelValue:{handler:function(){this.selfChange||this.updateTreeState(),this.selfChange=!1},immediate:!0},options:function(){this.updateTreeState()}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,selfChange:!1,selfClick:!1,beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(E.clear(this.overlay),this.overlay=null)},mounted:function(){this.id=this.id||I(),this.updateTreeState()},methods:{show:function(){this.$emit("before-show"),this.overlayVisible=!0},hide:function(){this.$emit("before-hide"),this.overlayVisible=!1,this.$refs.focusInput.focus()},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onClick:function(t){this.disabled||!this.disabled&&(!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide():this.show(),s.focus(this.$refs.focusInput))},onSelectionChange:function(t){this.selfChange=!0,this.$emit("update:modelValue",t),this.$emit("change",t)},onNodeSelect:function(t){this.$emit("node-select",t),this.selectionMode==="single"&&this.hide()},onNodeUnselect:function(t){this.$emit("node-unselect",t)},onNodeToggle:function(t){this.expandedKeys=t},onFirstHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?s.getFirstFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;s.focus(n)},onLastHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?s.getLastFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;s.focus(n)},onKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"Space":case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break}},onArrowDownKey:function(t){var n=this;this.overlayVisible||(this.show(),this.$nextTick(function(){var r=s.find(n.$refs.tree.$el,'[data-pc-section="treeitem"]'),l=ie(r).find(function(i){return i.getAttribute("tabindex")==="0"});s.focus(l)}),t.preventDefault())},onEnterKey:function(t){this.overlayVisible?this.hide():this.onArrowDownKey(t),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&(this.hide(),t.preventDefault())},onTabKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||this.overlayVisible&&this.hasFocusableElements()&&(s.focus(this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault())},hasFocusableElements:function(){return s.getFocusableElements(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},onOverlayEnter:function(t){E.set("overlay",t,this.$primevue.config.zIndex.overlay),s.addStyles(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.focus()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.scrollValueInView(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){E.clear(t)},focus:function(){var t=s.getFocusableElements(this.overlay);t&&t.length>0&&t[0].focus()},alignOverlay:function(){this.appendTo==="self"?s.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=s.getOuterWidth(this.$el)+"px",s.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.overlayVisible&&!t.selfClick&&t.isOutsideClicked(n)&&t.hide(),t.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new H(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!s.isTouchDevice()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},overlayRef:function(t){this.overlay=t},onOverlayClick:function(t){G.emit("overlay-click",{originalEvent:t,target:this.$el}),this.selfClick=!0},onOverlayKeydown:function(t){t.code==="Escape"&&this.hide()},findSelectedNodes:function(t,n,r){if(t){if(this.isSelected(t,n)&&(r.push(t),delete n[t.key]),Object.keys(n).length&&t.children){var l=g(t.children),i;try{for(l.s();!(i=l.n()).done;){var p=i.value;this.findSelectedNodes(p,n,r)}}catch(b){l.e(b)}finally{l.f()}}}else{var a=g(this.options),c;try{for(a.s();!(c=a.n()).done;){var o=c.value;this.findSelectedNodes(o,n,r)}}catch(b){a.e(b)}finally{a.f()}}},isSelected:function(t,n){return this.selectionMode==="checkbox"?n[t.key]&&n[t.key].checked:n[t.key]},updateTreeState:function(){var t=P({},this.modelValue);this.expandedKeys={},t&&this.options&&this.updateTreeBranchState(null,null,t)},updateTreeBranchState:function(t,n,r){if(t){if(this.isSelected(t,r)&&(this.expandPath(n),delete r[t.key]),Object.keys(r).length&&t.children){var l=g(t.children),i;try{for(l.s();!(i=l.n()).done;){var p=i.value;n.push(t.key),this.updateTreeBranchState(p,n,r)}}catch(b){l.e(b)}finally{l.f()}}}else{var a=g(this.options),c;try{for(a.s();!(c=a.n()).done;){var o=c.value;this.updateTreeBranchState(o,[],r)}}catch(b){a.e(b)}finally{a.f()}}},expandPath:function(t){if(t.length>0){var n=g(t),r;try{for(n.s();!(r=n.n()).done;){var l=r.value;this.expandedKeys[l]=!0}}catch(i){n.e(i)}finally{n.f()}}},scrollValueInView:function(){if(this.overlay){var t=s.findSingle(this.overlay,'[data-p-selected="true"]');t&&t.scrollIntoView({block:"nearest",inline:"start"})}}},computed:{selectedNodes:function(){var t=[];if(this.modelValue&&this.options){var n=P({},this.modelValue);this.findSelectedNodes(null,n,t)}return t},label:function(){var t=this.selectedNodes;return t.length?t.map(function(n){return n.label}).join(", "):this.placeholder},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},emptyValue:function(){return!this.modelValue||Object.keys(this.modelValue).length===0},emptyOptions:function(){return!this.options||this.options.length===0},listId:function(){return this.id+"_list"}},components:{TSTree:Y,Chip:Z,Portal:D,ChevronDownIcon:q},directives:{ripple:B}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ce(e,t,n){return(t=de(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e){var t=ue(e,"string");return S(t)=="symbol"?t:t+""}function ue(e,t){if(S(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(S(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pe=["id","disabled","tabindex","aria-labelledby","aria-label","aria-expanded","aria-controls"],fe=["aria-expanded"];function ye(e,t,n,r,l,i){var p=T("Chip"),a=T("TSTree"),c=T("Portal");return u(),f("div",d({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[9]||(t[9]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},e.ptmi("root")),[y("div",d({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[y("input",d({ref:"focusInput",id:e.inputId,type:"text",role:"combobox",class:e.inputClass,style:e.inputStyle,readonly:"",disabled:e.disabled,tabindex:e.disabled?-1:e.tabindex,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-haspopup":"tree","aria-expanded":l.overlayVisible,"aria-controls":i.listId,onFocus:t[0]||(t[0]=function(o){return i.onFocus(o)}),onBlur:t[1]||(t[1]=function(o){return i.onBlur(o)}),onKeydown:t[2]||(t[2]=function(o){return i.onKeyDown(o)})},L(L({},e.inputProps),e.ptm("hiddenInput"))),null,16,pe)],16),y("div",d({class:e.cx("labelContainer")},e.ptm("labelContainer")),[y("div",d({class:e.cx("label")},e.ptm("label")),[h(e.$slots,"value",{value:i.selectedNodes,placeholder:e.placeholder},function(){return[e.display==="comma"?(u(),f(O,{key:0},[V(K(i.label||"empty"),1)],64)):e.display==="chip"?(u(),f(O,{key:1},[(u(!0),f(O,null,M(i.selectedNodes,function(o){return u(),f("div",d({key:o.key,class:e.cx("chipItem"),ref_for:!0},e.ptm("chipItem")),[k(p,{class:m(e.cx("pcChip")),label:o.label,unstyled:e.unstyled,pt:e.ptm("pcChip")},null,8,["class","label","unstyled","pt"])],16)}),128)),i.emptyValue?(u(),f(O,{key:0},[V(K(e.placeholder||"empty"),1)],64)):C("",!0)],64)):C("",!0)]})],16)],16),y("div",d({class:e.cx("dropdown"),role:"button","aria-haspopup":"tree","aria-expanded":l.overlayVisible},e.ptm("dropdown")),[h(e.$slots,e.$slots.dropdownicon?"dropdownicon":"triggericon",{class:m(e.cx("dropdownIcon"))},function(){return[(u(),U(x("ChevronDownIcon"),d({class:e.cx("dropdownIcon")},e.ptm("dropdownIcon")),null,16,["class"]))]})],16,fe),k(c,{appendTo:e.appendTo},{default:v(function(){return[k(R,d({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:v(function(){return[l.overlayVisible?(u(),f("div",d({key:0,ref:i.overlayRef,onClick:t[7]||(t[7]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),class:[e.cx("panel"),e.panelClass],onKeydown:t[8]||(t[8]=function(){return i.onOverlayKeydown&&i.onOverlayKeydown.apply(i,arguments)})},L(L({},e.panelProps),e.ptm("panel"))),[y("span",d({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),h(e.$slots,"header",{value:e.modelValue,options:e.options}),y("div",d({class:e.cx("treeContainer"),style:{"max-height":e.scrollHeight}},e.ptm("treeContainer")),[k(a,{ref:"tree",id:i.listId,value:e.options,selectionMode:e.selectionMode,"onUpdate:selectionKeys":i.onSelectionChange,selectionKeys:e.modelValue,expandedKeys:l.expandedKeys,"onUpdate:expandedKeys":i.onNodeToggle,metaKeySelection:e.metaKeySelection,onNodeExpand:t[4]||(t[4]=function(o){return e.$emit("node-expand",o)}),onNodeCollapse:t[5]||(t[5]=function(o){return e.$emit("node-collapse",o)}),onNodeSelect:i.onNodeSelect,onNodeUnselect:i.onNodeUnselect,level:0,unstyled:e.unstyled,pt:e.ptm("pcTree")},W({_:2},[e.$slots.itemtoggleicon?{name:"toggleicon",fn:v(function(o){return[h(e.$slots,"itemtoggleicon",{node:o.node,expanded:o.expanded,class:m(o.class)})]}),key:"0"}:e.$slots.itemtogglericon?{name:"togglericon",fn:v(function(o){return[h(e.$slots,"itemtogglericon",{node:o.node,expanded:o.expanded,class:m(o.class)})]}),key:"1"}:void 0,e.$slots.itemcheckboxicon?{name:"checkboxicon",fn:v(function(o){return[h(e.$slots,"itemcheckboxicon",{checked:o.checked,partialChecked:o.partialChecked,class:m(o.class)})]}),key:"2"}:void 0]),1032,["id","value","selectionMode","onUpdate:selectionKeys","selectionKeys","expandedKeys","onUpdate:expandedKeys","metaKeySelection","onNodeSelect","onNodeUnselect","unstyled","pt"]),i.emptyOptions?(u(),f("div",d({key:0,class:e.cx("emptyMessage")},e.ptm("emptyMessage")),[h(e.$slots,"empty",{},function(){return[V(K(i.emptyMessageText),1)]})],16)):C("",!0)],16),h(e.$slots,"footer",{value:e.modelValue,options:e.options}),y("span",d({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[6]||(t[6]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):C("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}ae.render=ye;export{ae as default};
