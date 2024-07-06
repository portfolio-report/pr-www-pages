import{W as f,Y as y,t as c,l as s,Z as l,aE as b,S as p}from"./DEDGitBy.js";var m=function(t){var n=t.dt;return`
.p-inplace-display {
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    padding: `.concat(n("inplace.padding"),`;
    border-radius: `).concat(n("inplace.border.radius"),`;
    transition: background `).concat(n("inplace.transition.duration"),", color ").concat(n("inplace.transition.duration"),", outline-color ").concat(n("inplace.transition.duration"),", box-shadow ").concat(n("inplace.transition.duration"),`;
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: `).concat(n("inplace.display.hover.background"),`;
    color: `).concat(n("inplace.display.hover.color"),`;
}

.p-inplace-display:focus-visible {
    box-shadow: `).concat(n("inplace.focus.ring.shadow"),`;
    outline: `).concat(n("inplace.focus.ring.width")," ").concat(n("inplace.focus.ring.style")," ").concat(n("inplace.focus.ring.color"),`;
    outline-offset: `).concat(n("inplace.focus.ring.offset"),`;
}

.p-inplace-content {
    display: block;
}
`)},v={root:"p-inplace p-component",display:function(t){var n=t.props;return["p-inplace-display",{"p-disabled":n.disabled}]},content:"p-inplace-content"},h=f.extend({name:"inplace",theme:m,classes:v}),g={name:"BaseInplace",extends:y,props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},displayProps:{type:null,default:null}},style:h,provide:function(){return{$pcInplace:this,$parentInstance:this}}},O={name:"Inplace",extends:g,inheritAttrs:!1,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(t){this.d_active=t}},methods:{open:function(t){this.disabled||(this.d_active=!0,this.$emit("open",t),this.$emit("update:active",!0))},close:function(t){var n=this;this.d_active=!1,this.$emit("close",t),this.$emit("update:active",!1),setTimeout(function(){n.$refs.display.focus()},0)}}};function i(e){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(o){w(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function w(e,t,n){return(t=P(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=j(e,"string");return i(t)=="symbol"?t:t+""}function j(e,t){if(i(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(i(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var S=["tabindex"];function k(e,t,n,o,a,r){return c(),s("div",l({class:e.cx("root"),"aria-live":"polite"},e.ptmi("root")),[a.d_active?(c(),s("div",l({key:1,class:e.cx("content")},e.ptm("content")),[p(e.$slots,"content",{closeCallback:r.close})],16)):(c(),s("div",l({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:t[0]||(t[0]=function(){return r.open&&r.open.apply(r,arguments)}),onKeydown:t[1]||(t[1]=b(function(){return r.open&&r.open.apply(r,arguments)},["enter"]))},d(d({},e.displayProps),e.ptm("display"))),[p(e.$slots,"display")],16,S))],16)}O.render=k;export{O as default};
