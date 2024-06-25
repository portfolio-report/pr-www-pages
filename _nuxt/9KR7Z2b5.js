import{W as T,a5 as E,a8 as C,ac as K,t as f,l as w,m as j,y as G,ad as z,Z as d,S as b,x as N,B as x,ae as S,ax as B,F as $,Y as W}from"./C-DAi4iE.js";import{s as H}from"./D0gb_MS-.js";import{s as _}from"./CJvQCPkl.js";import Y from"./xMY87BDV.js";var Z=function(e){var t=e.dt;return`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: `.concat(t("inputnumber.button.background"),`;
    color: `).concat(t("inputnumber.button.color"),`;
    width: `).concat(t("inputnumber.button.width"),`;
    transition: background `).concat(t("inputnumber.transition.duration"),", color ").concat(t("inputnumber.transition.duration"),", border-color ").concat(t("inputnumber.transition.duration"),", outline-color ").concat(t("inputnumber.transition.duration"),`;
}

.p-inputnumber-button:hover {
    background: `).concat(t("inputnumber.button.hover.background"),`;
    color: `).concat(t("inputnumber.button.hover.color"),`;
}

.p-inputnumber-button:active {
    background: `).concat(t("inputnumber.button.active.background"),`;
    color: `).concat(t("inputnumber.button.active.color"),`;
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1px;
    right: 1px;
    height: calc(100% - 2px);
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-top-right-radius: calc(`).concat(t("inputnumber.button.border.radius"),` - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-bottom-right-radius: calc(`).concat(t("inputnumber.button.border.radius"),` - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid `).concat(t("inputnumber.button.border.color"),`;
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: `).concat(t("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: `).concat(t("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-top-right-radius: `).concat(t("border.radius.md"),`;
    border-bottom-right-radius: `).concat(t("border.radius.md"),`;
    border-left: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-top-left-radius: `).concat(t("border.radius.md"),`;
    border-bottom-left-radius: `).concat(t("border.radius.md"),`;
    border-right: 0 none;
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid `).concat(t("inputnumber.button.border.color"),`;
    padding: `).concat(t("inputnumber.button.vertical.padding"),`; 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: `).concat(t("inputnumber.button.hover.border.color"),`;
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: `).concat(t("inputnumber.button.active.border.color"),`;
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-top-left-radius: `).concat(t("border.radius.md"),`;
    border-top-right-radius: `).concat(t("border.radius.md"),`;
    width: 100%;
    border-bottom: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-bottom-left-radius: `).concat(t("border.radius.md"),`;
    border-bottom-right-radius: `).concat(t("border.radius.md"),`;
    width: 100%;
    border-top: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}
`)},q={root:function(e){var t=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":t.filled||i.allowEmpty===!1,"p-inputwrapper-focus":t.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical"}]},pcInput:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max!==null&&t.maxBoundry()}]},decrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min!==null&&t.minBoundry()}]}},J=T.extend({name:"inputnumber",theme:Z,classes:q}),Q={name:"BaseInputNumber",extends:W,props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},incrementIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},decrementIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},roundingMode:{type:String,default:"halfExpand",validator:function(e){return["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"].includes(e)}},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:J,provide:function(){return{$pcInputNumber:this,$parentInstance:this}}};function I(n){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(n)}function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),t.push.apply(t,i)}return t}function U(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?O(Object(t),!0).forEach(function(i){X(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function X(n,e,t){return(e=ee(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ee(n){var e=te(n,"string");return I(e)=="symbol"?e:e+""}function te(n,e){if(I(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(I(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ne(n){return se(n)||ue(n)||re(n)||ie()}function ie(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(n,e){if(n){if(typeof n=="string")return V(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?V(n,e):void 0}}function ue(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function se(n){if(Array.isArray(n))return V(n)}function V(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}var ae={name:"InputNumber",extends:Q,inheritAttrs:!1,emits:["update:modelValue","input","focus","blur"],numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue:function(e){this.d_modelValue=e},locale:function(e,t){this.updateConstructParser(e,t)},localeMatcher:function(e,t){this.updateConstructParser(e,t)},mode:function(e,t){this.updateConstructParser(e,t)},currency:function(e,t){this.updateConstructParser(e,t)},currencyDisplay:function(e,t){this.updateConstructParser(e,t)},useGrouping:function(e,t){this.updateConstructParser(e,t)},minFractionDigits:function(e,t){this.updateConstructParser(e,t)},maxFractionDigits:function(e,t){this.updateConstructParser(e,t)},suffix:function(e,t){this.updateConstructParser(e,t)},prefix:function(e,t){this.updateConstructParser(e,t)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits,roundingMode:this.roundingMode}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=ne(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),t=new Map(e.map(function(i,u){return[i,u]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return t.get(i)}},updateConstructParser:function(e,t){e!==t&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,U(U({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var t=new Intl.NumberFormat(this.locale,this.getOptions()),i=t.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var t=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(t){if(t==="-")return t;var i=+t;return isNaN(i)?null:i}return null},repeat:function(e,t,i){var u=this;if(!this.readonly){var r=t||500;this.clearTimer(),this.timer=setTimeout(function(){u.repeat(e,40,i)},r),this.spin(e,i)}},spin:function(e,t){if(this.$refs.input){var i=this.step*t,u=this.parseValue(this.$refs.input.$el.value)||0,r=this.validateValue(u+i);this.updateInput(r,null,"spin"),this.updateModel(e,r),this.handleOnInput(e,u,r)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(e.altKey||e.ctrlKey||e.metaKey){this.isSpecialChar=!0,this.lastValue=this.$refs.input.$el.value;return}this.lastValue=e.target.value;var t=e.target.selectionStart,i=e.target.selectionEnd,u=e.target.value,r=null;switch(e.code){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(u.charAt(t-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(u.charAt(t))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":r=this.validateValue(this.parseValue(u)),this.$refs.input.$el.value=this.formatValue(r),this.$refs.input.$el.setAttribute("aria-valuenow",r),this.updateModel(e,r);break;case"Backspace":{if(e.preventDefault(),t===i){var s=u.charAt(t-1),a=this.getDecimalCharIndexes(u),h=a.decimalCharIndex,c=a.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(s)){var g=this.getDecimalLength(u);if(this._group.test(s))this._group.lastIndex=0,r=u.slice(0,t-2)+u.slice(t-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,g?this.$refs.input.$el.setSelectionRange(t-1,t-1):r=u.slice(0,t-1)+u.slice(t);else if(h>0&&t>h){var o=this.isDecimalMode()&&(this.minFractionDigits||0)<g?"":"0";r=u.slice(0,t-1)+o+u.slice(t)}else c===1?(r=u.slice(0,t-1)+"0"+u.slice(t),r=this.parseValue(r)>0?r:""):r=u.slice(0,t-1)+u.slice(t)}this.updateValue(e,r,null,"delete-single")}else r=this.deleteRange(u,t,i),this.updateValue(e,r,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===i){var p=u.charAt(t),l=this.getDecimalCharIndexes(u),y=l.decimalCharIndex,v=l.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(p)){var m=this.getDecimalLength(u);if(this._group.test(p))this._group.lastIndex=0,r=u.slice(0,t)+u.slice(t+2);else if(this._decimal.test(p))this._decimal.lastIndex=0,m?this.$refs.input.$el.setSelectionRange(t+1,t+1):r=u.slice(0,t)+u.slice(t+1);else if(y>0&&t>y){var D=this.isDecimalMode()&&(this.minFractionDigits||0)<m?"":"0";r=u.slice(0,t)+D+u.slice(t+1)}else v===1?(r=u.slice(0,t)+"0"+u.slice(t+1),r=this.parseValue(r)>0?r:""):r=u.slice(0,t)+u.slice(t+1)}this.updateValue(e,r,null,"delete-back-single")}else r=this.deleteRange(u,t,i),this.updateValue(e,r,null,"delete-range");break;case"Home":e.preventDefault(),E.isEmpty(this.min)||this.updateModel(e,this.min);break;case"End":e.preventDefault(),E.isEmpty(this.max)||this.updateModel(e,this.max);break}}},onInputKeyPress:function(e){if(!this.readonly){var t=e.key,i=this.isDecimalSign(t),u=this.isMinusSign(t);e.code!=="Enter"&&e.preventDefault(),(Number(t)>=0&&Number(t)<=9||u||i)&&this.insert(e,t,{isDecimalSign:i,isMinusSign:u})}},onPaste:function(e){e.preventDefault();var t=(e.clipboardData||window.clipboardData).getData("Text");if(t){var i=this.parseValue(t);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),u=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:u}},getCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var u=e.search(this._suffix);this._suffix.lastIndex=0;var r=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:i,suffixCharIndex:u,currencyCharIndex:r}},insert:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},u=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&u!==-1)){var r=this.$refs.input.$el.selectionStart,s=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),h=this.getCharIndexes(a),c=h.decimalCharIndex,g=h.minusCharIndex,o=h.suffixCharIndex,p=h.currencyCharIndex,l;if(i.isMinusSign)r===0&&(l=a,(g===-1||s!==0)&&(l=this.insertText(a,t,0,s)),this.updateValue(e,l,t,"insert"));else if(i.isDecimalSign)c>0&&r===c?this.updateValue(e,a,t,"insert"):c>r&&c<s?(l=this.insertText(a,t,r,s),this.updateValue(e,l,t,"insert")):c===-1&&this.maxFractionDigits&&(l=this.insertText(a,t,r,s),this.updateValue(e,l,t,"insert"));else{var y=this.numberFormat.resolvedOptions().maximumFractionDigits,v=r!==s?"range-insert":"insert";if(c>0&&r>c){if(r+t.length-(c+1)<=y){var m=p>=r?p-1:o>=r?o:a.length;l=a.slice(0,r)+t+a.slice(r+t.length,m)+a.slice(m),this.updateValue(e,l,t,v)}}else l=this.insertText(a,t,r,s),this.updateValue(e,l,t,v)}}},insertText:function(e,t,i,u){var r=t==="."?t:t.split(".");if(r.length===2){var s=e.slice(i,u).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,i)+this.formatValue(t)+e.slice(u):this.formatValue(t)||e}else return u-i===e.length?this.formatValue(t):i===0?t+e.slice(u):u===e.length?e.slice(0,i)+t:e.slice(0,i)+t+e.slice(u)},deleteRange:function(e,t,i){var u;return i-t===e.length?u="":t===0?u=e.slice(i):i===e.length?u=e.slice(0,t):u=e.slice(0,t)+e.slice(i),u},initCursor:function(){var e=this.$refs.input.$el.selectionStart,t=this.$refs.input.$el.value,i=t.length,u=null,r=(this.prefixChar||"").length;t=t.replace(this._prefix,""),e=e-r;var s=t.charAt(e);if(this.isNumeralChar(s))return e+r;for(var a=e-1;a>=0;)if(s=t.charAt(a),this.isNumeralChar(s)){u=a+r;break}else a--;if(u!==null)this.$refs.input.$el.setSelectionRange(u+1,u+1);else{for(a=e;a<i;)if(s=t.charAt(a),this.isNumeralChar(s)){u=a+r;break}else a++;u!==null&&this.$refs.input.$el.setSelectionRange(u,u)}return u||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==C.getSelection()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,t,i,u){var r=this.$refs.input.$el.value,s=null;t!=null&&(s=this.parseValue(t),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,i,u,t),this.handleOnInput(e,r,s))},handleOnInput:function(e,t,i){this.isValueChanged(t,i)&&this.$emit("input",{originalEvent:e,value:i,formattedValue:t})},isValueChanged:function(e,t){if(t===null&&e!==null)return!0;if(t!=null){var i=typeof e=="string"?this.parseValue(e):e;return t!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,t,i,u){t=t||"";var r=this.$refs.input.$el.value,s=this.formatValue(e),a=r.length;if(s!==u&&(s=this.concatValues(s,u)),a===0){this.$refs.input.$el.value=s,this.$refs.input.$el.setSelectionRange(0,0);var h=this.initCursor(),c=h+t.length;this.$refs.input.$el.setSelectionRange(c,c)}else{var g=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=s;var p=s.length;if(i==="range-insert"){var l=this.parseValue((r||"").slice(0,g)),y=l!==null?l.toString():"",v=y.split("").join("(".concat(this.groupChar,")?")),m=new RegExp(v,"g");m.test(s);var D=t.split("").join("(".concat(this.groupChar,")?")),M=new RegExp(D,"g");M.test(s.slice(m.lastIndex)),o=m.lastIndex+M.lastIndex,this.$refs.input.$el.setSelectionRange(o,o)}else if(p===a)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(o+1,o+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(o-1,o-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(o,o);else if(i==="delete-back-single"){var A=r.charAt(o-1),L=r.charAt(o),k=a-p,P=this._group.test(L);P&&k===1?o+=1:!P&&this.isNumeralChar(A)&&(o+=-1*k+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(o,o)}else if(r==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var R=this.initCursor(),F=R+t.length+1;this.$refs.input.$el.setSelectionRange(F,F)}else o=o+(p-a),this.$refs.input.$el.setSelectionRange(o,o)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,t){if(e&&t){var i=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+t.slice(i):e}return e},getDecimalLength:function(e){if(e){var t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,t){this.d_modelValue=t,this.$emit("update:modelValue",t)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==C.getSelection()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){this.focused=!1;var t=e.target,i=this.validateValue(this.parseValue(t.value));this.$emit("blur",{originalEvent:e,value:t.value}),t.value=this.formatValue(i),t.setAttribute("aria-valuenow",i),this.updateModel(e,i),!this.disabled&&!this.readonly&&this.highlightOnFocus&&C.clearSelection()},clearTimer:function(){this.timer&&clearInterval(this.timer)},maxBoundry:function(){return this.d_modelValue>=this.max},minBoundry:function(){return this.d_modelValue<=this.min}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter:function(){return this.numberFormat}},components:{InputText:Y,AngleUpIcon:_,AngleDownIcon:H}},oe=["disabled"],le=["disabled"],ce=["disabled"],pe=["disabled"];function de(n,e,t,i,u,r){var s=K("InputText");return f(),w("span",d({class:n.cx("root")},n.ptmi("root")),[j(s,{ref:"input",id:n.inputId,role:"spinbutton",class:G([n.cx("pcInput"),n.inputClass]),style:z(n.inputStyle),value:r.formattedValue,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.modelValue,inputmode:n.mode==="decimal"&&!n.minFractionDigits?"numeric":"decimal",disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,invalid:n.invalid,variant:n.variant,onInput:r.onUserInput,onKeydown:r.onInputKeyDown,onKeypress:r.onInputKeyPress,onPaste:r.onPaste,onClick:r.onInputClick,onFocus:r.onInputFocus,onBlur:r.onInputBlur,pt:n.ptm("pcInput"),unstyled:n.unstyled},null,8,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","inputmode","disabled","readonly","placeholder","aria-labelledby","aria-label","invalid","variant","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","pt","unstyled"]),n.showButtons&&n.buttonLayout==="stacked"?(f(),w("span",d({key:0,class:n.cx("buttonGroup")},n.ptm("buttonGroup")),[b(n.$slots,"incrementbutton",{listeners:r.upButtonListeners},function(){return[N("button",d({class:[n.cx("incrementButton"),n.incrementButtonClass]},B(r.upButtonListeners,!0),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},n.ptm("incrementButton")),[b(n.$slots,n.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(f(),x(S(n.incrementIcon||n.incrementButtonIcon?"span":"AngleUpIcon"),d({class:[n.incrementIcon,n.incrementButtonIcon]},n.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,oe)]}),b(n.$slots,"decrementbutton",{listeners:r.downButtonListeners},function(){return[N("button",d({class:[n.cx("decrementButton"),n.decrementButtonClass]},B(r.downButtonListeners,!0),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},n.ptm("decrementButton")),[b(n.$slots,n.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(f(),x(S(n.decrementIcon||n.decrementButtonIcon?"span":"AngleDownIcon"),d({class:[n.decrementIcon,n.decrementButtonIcon]},n.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,le)]})],16)):$("",!0),b(n.$slots,"incrementbutton",{listeners:r.upButtonListeners},function(){return[n.showButtons&&n.buttonLayout!=="stacked"?(f(),w("button",d({key:0,class:[n.cx("incrementButton"),n.incrementButtonClass]},B(r.upButtonListeners,!0),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},n.ptm("incrementButton")),[b(n.$slots,n.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(f(),x(S(n.incrementIcon||n.incrementButtonIcon?"span":"AngleUpIcon"),d({class:[n.incrementIcon,n.incrementButtonIcon]},n.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,ce)):$("",!0)]}),b(n.$slots,"decrementbutton",{listeners:r.downButtonListeners},function(){return[n.showButtons&&n.buttonLayout!=="stacked"?(f(),w("button",d({key:0,class:[n.cx("decrementButton"),n.decrementButtonClass]},B(r.downButtonListeners,!0),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},n.ptm("decrementButton")),[b(n.$slots,n.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(f(),x(S(n.decrementIcon||n.decrementButtonIcon?"span":"AngleDownIcon"),d({class:[n.decrementIcon,n.decrementButtonIcon]},n.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,pe)):$("",!0)]})],16)}ae.render=de;export{ae as default};
