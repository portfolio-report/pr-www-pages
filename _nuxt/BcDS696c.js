const __vite__fileDeps=["./3aJSERp8.js","./C-DAi4iE.js","./entry.DF6X26t6.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{W as h,X as f,Y as p,t as d,l as y,x as m,Z as o}from"./C-DAi4iE.js";var v={root:{position:"relative"}},g={root:"p-chart"},b=h.extend({name:"chart",classes:g,inlineStyles:v}),C={name:"BaseChart",extends:p,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:b,provide:function(){return{$pcChart:this,$parentInstance:this}}},O={name:"Chart",extends:C,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var e=this;f(()=>import("./3aJSERp8.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(r){e.chart&&(e.chart.destroy(),e.chart=null),r&&r.default&&(e.chart=new r.default(e.$refs.canvas,{type:e.type,data:e.data,options:e.options,plugins:e.plugins})),e.$emit("loaded",e.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(e){if(this.chart){var r=this.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1),n=this.chart.getElementsAtEventForMode(e,"dataset",{intersect:!0},!1);r&&r[0]&&n&&this.$emit("select",{originalEvent:e,element:r[0],dataset:n})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function i(t){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?s(Object(r),!0).forEach(function(n){P(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function P(t,e,r){return(e=w(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=j(t,"string");return i(e)=="symbol"?e:e+""}function j(t,e){if(i(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(i(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var S=["width","height"];function E(t,e,r,n,a,u){return d(),y("div",o({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[m("canvas",o({ref:"canvas",width:t.width,height:t.height,onClick:e[0]||(e[0]=function(l){return u.onCanvasClick(l)})},c(c({},t.canvasProps),t.ptm("canvas"))),null,16,S)],16)}O.render=E;export{O as s};
