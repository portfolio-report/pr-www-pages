import{W as m,a5 as d,ab as g,Y as v,ac as S,t as c,l as b,H as O,I as V,B,ag as L,q as A,S as D,x as w,Z as f,G as K}from"./7TUxAo9i.js";import I from"./AjAWaDyh.js";var T=function(n){var t=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-left-width: 1px;
    border-top-left-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-left-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: `).concat(t("selectbutton.border.radius"),`;
    border-bottom-right-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},q={root:function(n){var t=n.props;return["p-selectbutton p-component",{"p-invalid":t.invalid}]}},x=m.extend({name:"selectbutton",theme:T,classes:q}),k={name:"BaseSelectButton",extends:v,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:x,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function C(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=h(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var l=0,s=function(){};return{s,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(u){throw u},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,r=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return r=u.done,u},e:function(u){o=!0,a=u},f:function(){try{r||t.return==null||t.return()}finally{if(o)throw a}}}}function $(e){return j(e)||E(e)||h(e)||F()}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(e,n){if(e){if(typeof e=="string")return p(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,n):void 0}}function E(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j(e){if(Array.isArray(e))return p(e)}function p(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,l=Array(n);t<n;t++)l[t]=e[t];return l}var R={name:"SelectButton",extends:k,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getOptionLabel:function(n){return this.optionLabel?d.resolveFieldData(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?d.resolveFieldData(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?d.resolveFieldData(n,this.dataKey):this.getOptionLabel(n)},getPTOptions:function(n,t){return this.ptm(t,{context:{active:this.isSelected(n),disabled:this.isOptionDisabled(n),option:n}})},isOptionDisabled:function(n){return this.optionDisabled?d.resolveFieldData(n,this.optionDisabled):!1},onOptionSelect:function(n,t,l){var s=this;if(!(this.disabled||this.isOptionDisabled(t))){var a=this.isSelected(t);if(!(a&&!this.allowEmpty)){var r=this.getOptionValue(t),o;this.multiple?a?o=this.modelValue.filter(function(i){return!d.equals(i,r,s.equalityKey)}):o=this.modelValue?[].concat($(this.modelValue),[r]):[r]:o=a?null:r,this.focusedIndex=l,this.$emit("update:modelValue",o),this.$emit("change",{event:n,value:o})}}},isSelected:function(n){var t=!1,l=this.getOptionValue(n);if(this.multiple){if(this.modelValue){var s=C(this.modelValue),a;try{for(s.s();!(a=s.n()).done;){var r=a.value;if(d.equals(r,l,this.equalityKey)){t=!0;break}}}catch(o){s.e(o)}finally{s.f()}}}else t=d.equals(this.modelValue,l,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:g},components:{ToggleButton:I}},H=["aria-labelledby"];function P(e,n,t,l,s,a){var r=S("ToggleButton");return c(),b("div",f({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(c(!0),b(O,null,V(e.options,function(o,i){return c(),B(r,{key:a.getOptionRenderKey(o),modelValue:a.isSelected(o),onLabel:a.getOptionLabel(o),offLabel:a.getOptionLabel(o),disabled:e.disabled||a.isOptionDisabled(o),unstyled:e.unstyled,onChange:function(y){return a.onOptionSelect(y,o,i)},pt:e.ptm("pcButton")},L({_:2},[e.$slots.option?{name:"default",fn:A(function(){return[D(e.$slots,"option",{option:o,index:i},function(){return[w("span",f({ref_for:!0},e.ptm("pcButton").label),K(a.getOptionLabel(o)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","onChange","pt"])}),128))],16,H)}R.render=P;export{R as default};
