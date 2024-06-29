import{W as q,a5 as G,Y as V,a8 as y,an as J,ab as Y,ac as p,E as Z,t as d,l as h,x as I,J as Q,Z as u,H as C,B as f,y as k,ae as b,q as A,F as S,z as X,v as _,G as $,I as B,S as P,m as N}from"./U2uVmZ6V.js";import{s as ee}from"./JAOI8j_U.js";import{s as R}from"./CJUNB2VD.js";import ne from"./B28Kdvma.js";import te from"./BXKOq1JQ.js";import oe from"./CYJ7T2Fq.js";import{s as re}from"./AeN5ZyRB.js";import{s as ie}from"./c-FY85af.js";import{s as le}from"./DIRya2Eb.js";import ae from"./B6SRPtOY.js";var ce=function(t){var e=t.dt;return`
.p-tree {
    background: `.concat(e("tree.background"),`;
    color: `).concat(e("tree.color"),`;
    padding: `).concat(e("tree.padding"),`;
}

.p-tree-root-children,
.p-tree-node-children {
    display: flex;
    list-style-type: none;
    flex-direction: column;
    margin: 0;
    gap: `).concat(e("tree.gap"),`;
}

.p-tree-root-children {
    padding: `).concat(e("tree.gap"),` 0 0 0;
}

.p-tree-node-children {
    padding: `).concat(e("tree.gap")," 0 0 ").concat(e("tree.indent"),`;
}

.p-tree-node {
    padding: 0;
    outline: 0 none;
}

.p-tree-node-content {
    border-radius: `).concat(e("tree.node.border.radius"),`;
    padding: `).concat(e("tree.node.padding"),`;
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: `).concat(e("tree.node.color"),`;
    gap: `).concat(e("tree.node.gap"),`;
    transition: background `).concat(e("tree.transition.duration"),", color ").concat(e("tree.transition.duration"),", outline-color ").concat(e("tree.transition.duration"),", box-shadow ").concat(e("tree.transition.duration"),`;
}

.p-tree-node:focus-visible > .p-tree-node-content {
    box-shadow: `).concat(e("tree.node.focus.ring.shadow"),`;
    outline: `).concat(e("tree.node.focus.ring.width")," ").concat(e("tree.node.focus.ring.style")," ").concat(e("tree.node.focus.ring.color"),`;
    outline-offset: `).concat(e("tree.node.focus.ring.offset"),`;
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
    background: `).concat(e("tree.node.hover.background"),`;
    color: `).concat(e("tree.node.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
    color: `).concat(e("tree.node.icon.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selected {
    background: `).concat(e("tree.node.selected.background"),`;
    color: `).concat(e("tree.node.selected.color"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
    color: inherit;
}

.p-tree-node-toggle-button {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    width: `).concat(e("tree.node.toggle.button.size"),`;
    height: `).concat(e("tree.node.toggle.button.size"),`;
    color: `).concat(e("tree.node.toggle.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(e("tree.node.toggle.button.border.radius"),`;
    transition: background `).concat(e("tree.transition.duration"),", color ").concat(e("tree.transition.duration"),", border-color ").concat(e("tree.transition.duration"),", outline-color ").concat(e("tree.transition.duration"),", box-shadow ").concat(e("tree.transition.duration"),`;
    outline-color: transparent;
    padding: 0;
}

.p-tree-node-toggle-button:enabled:hover {
    background: `).concat(e("tree.node.toggle.button.hover.background"),`;
    color: `).concat(e("tree.node.toggle.button.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
    background: `).concat(e("tree.node.toggle.button.selected.hover.background"),`;
    color: `).concat(e("tree.node.toggle.button.selected.hover.color"),`;
}

.p-tree-root {
    overflow: auto;
}

.p-tree-node-selectable {
    cursor: pointer;
    user-select: none;
}

.p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
    visibility: hidden;
}

.p-tree-node-icon {
    color: `).concat(e("tree.node.icon.color"),`;
    transition: color `).concat(e("tree.transition.duration"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
    color: `).concat(e("tree.node.icon.selected.color"),`;
}

.p-tree-filter-input {
    width: 100%;
}

.p-tree-loading {
    position: relative;
    height: 100%;
}

.p-tree-loading-icon {
    font-size: `).concat(e("tree.loading.icon.size"),`;
    width: `).concat(e("tree.loading.icon.size"),`;
    height: `).concat(e("tree.loading.icon.size"),`;
}

.p-tree .p-tree-mask {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tree-flex-scrollable {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
}

.p-tree-flex-scrollable .p-tree-root {
    flex: 1;
}
`)},de={root:function(t){var e=t.props;return["p-tree p-component",{"p-tree-selectable":e.selectionMode!=null,"p-tree-loading":e.loading,"p-tree-flex-scrollable":e.scrollHeight==="flex"}]},mask:"p-tree-mask p-overlay-mask",loadingIcon:"p-tree-loading-icon",pcFilterInput:"p-tree-filter-input",wrapper:"p-tree-root",rootChildren:"p-tree-root-children",node:function(t){var e=t.instance;return["p-tree-node",{"p-tree-node-leaf":e.leaf}]},nodeContent:function(t){var e=t.instance;return["p-tree-node-content",e.node.styleClass,{"p-tree-node-selectable":e.selectable,"p-tree-node-selected":e.checkboxMode&&e.$parentInstance.highlightOnSelect?e.checked:e.selected}]},nodeToggleButton:"p-tree-node-toggle-button",nodeToggleIcon:"p-tree-node-toggle-icon",nodeCheckbox:"p-tree-node-checkbox",nodeIcon:"p-tree-node-icon",nodeLabel:"p-tree-node-label",nodeChildren:"p-tree-node-children"},se=q.extend({name:"tree",theme:ce,classes:de}),ue={name:"BaseTree",extends:V,props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:"mask"},filter:{type:Boolean,default:!1},filterBy:{type:String,default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},highlightOnSelect:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},level:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:se,provide:function(){return{$pcTree:this,$parentInstance:this}}};function x(n){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(n)}function j(n,t){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=z(n))||t&&n&&typeof n.length=="number"){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,l=!0,s=!1;return{s:function(){e=e.call(n)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,r=c},f:function(){try{l||e.return==null||e.return()}finally{if(s)throw r}}}}function D(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,o)}return e}function F(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?D(Object(e),!0).forEach(function(o){fe(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}function fe(n,t,e){return(t=he(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function he(n){var t=ge(n,"string");return x(t)=="symbol"?t:t+""}function ge(n,t){if(x(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(x(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function v(n){return be(n)||ye(n)||z(n)||pe()}function pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(n,t){if(n){if(typeof n=="string")return O(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(n,t):void 0}}function ye(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function be(n){if(Array.isArray(n))return O(n)}function O(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}var U={name:"TreeNode",hostName:"Tree",extends:V,emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},loadingMode:{type:String,default:"mask"},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:null},nodeTouched:!1,toggleClicked:!1,mounted:function(){this.setAllNodesTabIndexes()},methods:{toggle:function(){this.$emit("node-toggle",this.node),this.toggleClicked=!0},label:function(t){return typeof t.label=="function"?t.label():t.label},onChildNodeToggle:function(t){this.$emit("node-toggle",t)},getPTOptions:function(t){return this.ptm(t,{context:{index:this.index,expanded:this.expanded,selected:this.selected,checked:this.checked,leaf:this.leaf}})},onClick:function(t){if(this.toggleClicked||y.getAttribute(t.target,'[data-pc-section="nodetogglebutton"]')||y.getAttribute(t.target.parentElement,'[data-pc-section="nodetogglebutton"]')){this.toggleClicked=!1;return}this.isCheckboxSelectionMode()?this.toggleCheckbox():this.$emit("node-click",{originalEvent:t,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onChildNodeClick:function(t){this.$emit("node-click",t)},onTouchEnd:function(){this.nodeTouched=!0},onKeyDown:function(t){if(this.isSameNode(t))switch(t.code){case"Tab":this.onTabKey(t);break;case"ArrowDown":this.onArrowDown(t);break;case"ArrowUp":this.onArrowUp(t);break;case"ArrowRight":this.onArrowRight(t);break;case"ArrowLeft":this.onArrowLeft(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDown:function(t){var e=t.target.getAttribute("data-pc-section")==="nodetogglebutton"?t.target.closest('[role="treeitem"]'):t.target,o=e.children[1];if(o)this.focusRowChange(e,o.children[0]);else if(e.nextElementSibling)this.focusRowChange(e,e.nextElementSibling);else{var i=this.findNextSiblingOfAncestor(e);i&&this.focusRowChange(e,i)}t.preventDefault()},onArrowUp:function(t){var e=t.target;if(e.previousElementSibling)this.focusRowChange(e,e.previousElementSibling,this.findLastVisibleDescendant(e.previousElementSibling));else{var o=this.getParentNodeElement(e);o&&this.focusRowChange(e,o)}t.preventDefault()},onArrowRight:function(t){var e=this;this.leaf||this.expanded||(t.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(function(){e.onArrowDown(t)}))},onArrowLeft:function(t){var e=y.findSingle(t.currentTarget,'[data-pc-section="nodetogglebutton"]');if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return e.click(),!1;var o=this.findBeforeClickableNode(t.currentTarget);o&&this.focusRowChange(t.currentTarget,o)},onEnterKey:function(t){this.setTabIndexForSelectionMode(t,this.nodeTouched),this.onClick(t),t.preventDefault()},onTabKey:function(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes:function(){var t=y.find(this.$refs.currentNode.closest('[data-pc-section="rootchildren"]'),'[role="treeitem"]'),e=v(t).some(function(i){return i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true"});if(v(t).forEach(function(i){i.tabIndex=-1}),e){var o=v(t).filter(function(i){return i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true"});o[0].tabIndex=0;return}v(t)[0].tabIndex=0},setTabIndexForSelectionMode:function(t,e){if(this.selectionMode!==null){var o=v(y.find(this.$refs.currentNode.parentElement,'[role="treeitem"]'));t.currentTarget.tabIndex=e===!1?-1:0,o.every(function(i){return i.tabIndex===-1})&&(o[0].tabIndex=0)}},focusRowChange:function(t,e,o){t.tabIndex="-1",e.tabIndex="0",this.focusNode(o||e)},findBeforeClickableNode:function(t){var e=t.closest("ul").closest("li");if(e){var o=y.findSingle(e,"button");return o&&o.style.visibility!=="hidden"?e:this.findBeforeClickableNode(t.previousElementSibling)}return null},toggleCheckbox:function(){var t=this.selectionKeys?F({},this.selectionKeys):{},e=!this.checked;this.propagateDown(this.node,e,t),this.$emit("checkbox-change",{node:this.node,check:e,selectionKeys:t})},propagateDown:function(t,e,o){if(e?o[t.key]={checked:!0,partialChecked:!1}:delete o[t.key],t.children&&t.children.length){var i=j(t.children),r;try{for(i.s();!(r=i.n()).done;){var l=r.value;this.propagateDown(l,e,o)}}catch(s){i.e(s)}finally{i.f()}}},propagateUp:function(t){var e=t.check,o=F({},t.selectionKeys),i=0,r=!1,l=j(this.node.children),s;try{for(l.s();!(s=l.n()).done;){var a=s.value;o[a.key]&&o[a.key].checked?i++:o[a.key]&&o[a.key].partialChecked&&(r=!0)}}catch(c){l.e(c)}finally{l.f()}e&&i===this.node.children.length?o[this.node.key]={checked:!0,partialChecked:!1}:(e||delete o[this.node.key],r||i>0&&i!==this.node.children.length?o[this.node.key]={checked:!1,partialChecked:!0}:delete o[this.node.key]),this.$emit("checkbox-change",{node:t.node,check:t.check,selectionKeys:o})},onChildCheckboxChange:function(t){this.$emit("checkbox-change",t)},findNextSiblingOfAncestor:function(t){var e=this.getParentNodeElement(t);return e?e.nextElementSibling?e.nextElementSibling:this.findNextSiblingOfAncestor(e):null},findLastVisibleDescendant:function(t){var e=t.children[1];if(e){var o=e.children[e.children.length-1];return this.findLastVisibleDescendant(o)}else return t},getParentNodeElement:function(t){var e=t.parentElement.parentElement;return y.getAttribute(e,"role")==="treeitem"?e:null},focusNode:function(t){t.focus()},isCheckboxSelectionMode:function(){return this.selectionMode==="checkbox"},isSameNode:function(t){return t.currentTarget&&(t.currentTarget.isSameNode(t.target)||t.currentTarget.isSameNode(t.target.closest('[role="treeitem"]')))}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable:function(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},checkboxMode:function(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked:function(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected:function(){return this.checkboxMode?this.checked:void 0}},components:{Checkbox:ae,ChevronDownIcon:re,ChevronRightIcon:ie,CheckIcon:J,MinusIcon:le,SpinnerIcon:R},directives:{ripple:Y}},me=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],ke=["data-p-selected","data-p-selectable"];function ve(n,t,e,o,i,r){var l=p("SpinnerIcon"),s=p("Checkbox"),a=p("TreeNode",!0),c=Z("ripple");return d(),h("li",u({ref:"currentNode",class:n.cx("node"),role:"treeitem","aria-label":r.label(e.node),"aria-selected":r.ariaSelected,"aria-expanded":r.expanded,"aria-setsize":e.node.children?e.node.children.length:0,"aria-posinset":e.index+1,"aria-level":e.level,"aria-checked":r.ariaChecked,tabindex:e.index===0?0:-1,onKeydown:t[4]||(t[4]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},e.level===1?r.getPTOptions("node"):n.ptm("nodeChildren")),[I("div",u({class:n.cx("nodeContent"),onClick:t[2]||(t[2]=function(){return r.onClick&&r.onClick.apply(r,arguments)}),onTouchend:t[3]||(t[3]=function(){return r.onTouchEnd&&r.onTouchEnd.apply(r,arguments)}),style:e.node.style},r.getPTOptions("nodeContent"),{"data-p-selected":r.checkboxMode?r.checked:r.selected,"data-p-selectable":r.selectable}),[Q((d(),h("button",u({type:"button",class:n.cx("nodeToggleButton"),onClick:t[0]||(t[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),tabindex:"-1","aria-hidden":"true"},r.getPTOptions("nodeToggleButton")),[e.node.loading&&e.loadingMode==="icon"?(d(),h(C,{key:0},[e.templates.nodetoggleicon||e.templates.nodetogglericon?(d(),f(b(e.templates.nodetoggleicon||e.templates.nodetogglericon),{key:0,class:k(n.cx("nodeToggleIcon"))},null,8,["class"])):(d(),f(l,u({key:1,spin:"",class:n.cx("nodetogglericon")},n.ptm("nodeToggleIcon")),null,16,["class"]))],64)):(d(),h(C,{key:1},[e.templates.nodetoggleicon||e.templates.togglericon?(d(),f(b(e.templates.nodetoggleicon||e.templates.togglericon),{key:0,node:e.node,expanded:r.expanded,class:k(n.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):r.expanded?(d(),f(b(e.node.expandedIcon?"span":"ChevronDownIcon"),u({key:1,class:n.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"])):(d(),f(b(e.node.collapsedIcon?"span":"ChevronRightIcon"),u({key:2,class:n.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"]))],64))],16)),[[c]]),r.checkboxMode?(d(),f(s,{key:0,modelValue:r.checked,binary:!0,indeterminate:r.partialChecked,class:k(n.cx("nodeCheckbox")),tabindex:-1,unstyled:n.unstyled,pt:r.getPTOptions("nodeCheckbox"),"data-p-partialchecked":r.partialChecked},{icon:A(function(g){return[e.templates.checkboxicon?(d(),f(b(e.templates.checkboxicon),{key:0,checked:g.checked,partialChecked:r.partialChecked,class:k(g.class)},null,8,["checked","partialChecked","class"])):S("",!0)]}),_:1},8,["modelValue","indeterminate","class","unstyled","pt","data-p-partialchecked"])):S("",!0),e.templates.nodeicon?(d(),f(b(e.templates.nodeicon),u({key:1,node:e.node,class:[n.cx("nodeIcon")]},r.getPTOptions("nodeIcon")),null,16,["node","class"])):(d(),h("span",u({key:2,class:[n.cx("nodeIcon"),e.node.icon]},r.getPTOptions("nodeIcon")),null,16)),I("span",u({class:n.cx("nodeLabel")},r.getPTOptions("nodeLabel"),{onKeydown:t[1]||(t[1]=X(function(){},["stop"]))}),[e.templates[e.node.type]||e.templates.default?(d(),f(b(e.templates[e.node.type]||e.templates.default),{key:0,node:e.node,selected:r.checkboxMode?r.checked:r.selected},null,8,["node","selected"])):(d(),h(C,{key:1},[_($(r.label(e.node)),1)],64))],16)],16,ke),r.hasChildren&&r.expanded?(d(),h("ul",u({key:0,class:n.cx("nodeChildren"),role:"group"},n.ptm("nodeChildren")),[(d(!0),h(C,null,B(e.node.children,function(g){return d(),f(a,{key:g.key,node:g,templates:e.templates,level:e.level+1,loadingMode:e.loadingMode,expandedKeys:e.expandedKeys,onNodeToggle:r.onChildNodeToggle,onNodeClick:r.onChildNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:r.propagateUp,unstyled:n.unstyled,pt:n.pt},null,8,["node","templates","level","loadingMode","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","unstyled","pt"])}),128))],16)):S("",!0)],16,me)}U.render=ve;function T(n){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(n)}function M(n,t){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=H(n))||t&&n&&typeof n.length=="number"){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,l=!0,s=!1;return{s:function(){e=e.call(n)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,r=c},f:function(){try{l||e.return==null||e.return()}finally{if(s)throw r}}}}function Ce(n){return Te(n)||xe(n)||H(n)||Se()}function Se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(n,t){if(n){if(typeof n=="string")return E(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?E(n,t):void 0}}function xe(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Te(n){if(Array.isArray(n))return E(n)}function E(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}function L(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,o)}return e}function m(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?L(Object(e),!0).forEach(function(o){we(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}function we(n,t,e){return(t=Ie(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Ie(n){var t=Ke(n,"string");return T(t)=="symbol"?t:t+""}function Ke(n,t){if(T(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,t||"default");if(T(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var Ne={name:"Tree",extends:ue,inheritAttrs:!1,emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect","filter"],data:function(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys:function(t){this.d_expandedKeys=t}},methods:{onNodeToggle:function(t){var e=t.key;this.d_expandedKeys[e]?(delete this.d_expandedKeys[e],this.$emit("node-collapse",t)):(this.d_expandedKeys[e]=!0,this.$emit("node-expand",t)),this.d_expandedKeys=m({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick:function(t){if(this.selectionMode!=null&&t.node.selectable!==!1){var e=t.nodeTouched?!1:this.metaKeySelection,o=e?this.handleSelectionWithMetaKey(t):this.handleSelectionWithoutMetaKey(t);this.$emit("update:selectionKeys",o)}},onCheckboxChange:function(t){this.$emit("update:selectionKeys",t.selectionKeys),t.check?this.$emit("node-select",t.node):this.$emit("node-unselect",t.node)},handleSelectionWithMetaKey:function(t){var e=t.originalEvent,o=t.node,i=e.metaKey||e.ctrlKey,r=this.isNodeSelected(o),l;return r&&i?(this.isSingleSelectionMode()?l={}:(l=m({},this.selectionKeys),delete l[o.key]),this.$emit("node-unselect",o)):(this.isSingleSelectionMode()?l={}:this.isMultipleSelectionMode()&&(l=i?this.selectionKeys?m({},this.selectionKeys):{}:{}),l[o.key]=!0,this.$emit("node-select",o)),l},handleSelectionWithoutMetaKey:function(t){var e=t.node,o=this.isNodeSelected(e),i;return this.isSingleSelectionMode()?o?(i={},this.$emit("node-unselect",e)):(i={},i[e.key]=!0,this.$emit("node-select",e)):o?(i=m({},this.selectionKeys),delete i[e.key],this.$emit("node-unselect",e)):(i=this.selectionKeys?m({},this.selectionKeys):{},i[e.key]=!0,this.$emit("node-select",e)),i},isSingleSelectionMode:function(){return this.selectionMode==="single"},isMultipleSelectionMode:function(){return this.selectionMode==="multiple"},isNodeSelected:function(t){return this.selectionMode&&this.selectionKeys?this.selectionKeys[t.key]===!0:!1},isChecked:function(t){return this.selectionKeys?this.selectionKeys[t.key]&&this.selectionKeys[t.key].checked:!1},isNodeLeaf:function(t){return t.leaf===!1?!1:!(t.children&&t.children.length)},onFilterKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter")&&t.preventDefault(),this.$emit("filter",{originalEvent:t,value:t.target.value})},findFilteredNodes:function(t,e){if(t){var o=!1;if(t.children){var i=Ce(t.children);t.children=[];var r=M(i),l;try{for(r.s();!(l=r.n()).done;){var s=l.value,a=m({},s);this.isFilterMatched(a,e)&&(o=!0,t.children.push(a))}}catch(c){r.e(c)}finally{r.f()}}if(o)return!0}},isFilterMatched:function(t,e){var o=e.searchFields,i=e.filterText,r=e.strict,l=!1,s=M(o),a;try{for(s.s();!(a=s.n()).done;){var c=a.value,g=String(G.resolveFieldData(t,c)).toLocaleLowerCase(this.filterLocale);g.indexOf(i)>-1&&(l=!0)}}catch(K){s.e(K)}finally{s.f()}return(!l||r&&!this.isNodeLeaf(t))&&(l=this.findFilteredNodes(t,{searchFields:o,filterText:i,strict:r})||l),l}},computed:{filteredValue:function(){var t=[],e=this.filterBy.split(","),o=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),i=this.filterMode==="strict",r=M(this.value),l;try{for(r.s();!(l=r.n()).done;){var s=l.value,a=m({},s),c={searchFields:e,filterText:o,strict:i};(i&&(this.findFilteredNodes(a,c)||this.isFilterMatched(a,c))||!i&&(this.isFilterMatched(a,c)||this.findFilteredNodes(a,c)))&&t.push(a)}}catch(g){r.e(g)}finally{r.f()}return t},valueToRender:function(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:U,InputText:oe,InputIcon:te,IconField:ne,SearchIcon:ee,SpinnerIcon:R}},Me=["aria-labelledby","aria-label"];function Ae(n,t,e,o,i,r){var l=p("SpinnerIcon"),s=p("InputText"),a=p("SearchIcon"),c=p("InputIcon"),g=p("IconField"),K=p("TreeNode");return d(),h("div",u({class:n.cx("root")},n.ptmi("root")),[n.loading&&n.loadingMode==="mask"?(d(),h("div",u({key:0,class:n.cx("mask")},n.ptm("mask")),[P(n.$slots,"loadingicon",{class:k(n.cx("loadingIcon"))},function(){return[n.loadingIcon?(d(),h("i",u({key:0,class:[n.cx("loadingIcon"),"pi-spin",n.loadingIcon]},n.ptm("loadingIcon")),null,16)):(d(),f(l,u({key:1,spin:"",class:n.cx("loadingIcon")},n.ptm("loadingIcon")),null,16,["class"]))]})],16)):S("",!0),n.filter?(d(),f(g,u({key:1,unstyled:n.unstyled},n.ptm("pcFilterContainer")),{default:A(function(){return[N(s,u({modelValue:i.filterValue,"onUpdate:modelValue":t[0]||(t[0]=function(w){return i.filterValue=w}),autocomplete:"off",class:n.cx("pcFilterInput"),placeholder:n.filterPlaceholder,unstyled:n.unstyled,onKeydown:r.onFilterKeydown},n.ptm("pcFilterInput")),null,16,["modelValue","class","placeholder","unstyled","onKeydown"]),N(c,u({unstyled:n.unstyled},n.ptm("pcFilterIconContainer")),{default:A(function(){return[P(n.$slots,n.$slots.filtericon?"filtericon":"searchicon",{class:k(n.cx("filterIcon"))},function(){return[N(a,u({class:n.cx("filterIcon")},n.ptm("filterIcon")),null,16,["class"])]})]}),_:3},16,["unstyled"])]}),_:3},16,["unstyled"])):S("",!0),I("div",u({class:n.cx("wrapper"),style:{maxHeight:n.scrollHeight}},n.ptm("wrapper")),[I("ul",u({class:n.cx("rootChildren"),role:"tree","aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptm("rootChildren")),[(d(!0),h(C,null,B(r.valueToRender,function(w,W){return d(),f(K,{key:w.key,node:w,templates:n.$slots,level:n.level+1,index:W,expandedKeys:i.d_expandedKeys,onNodeToggle:r.onNodeToggle,onNodeClick:r.onNodeClick,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,onCheckboxChange:r.onCheckboxChange,loadingMode:n.loadingMode,unstyled:n.unstyled,pt:n.pt},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","loadingMode","unstyled","pt"])}),128))],16,Me)],16)],16)}Ne.render=Ae;export{Ne as default};
