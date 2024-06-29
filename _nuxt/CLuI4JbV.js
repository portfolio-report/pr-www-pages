import{W as T,av as A,au as L,ax as p,az as _,aj as w,aB as B,aC as x,b2 as P,a6 as N,al as F,Y as K,am as D,t as o,l as c,Z as l,S as d,F as h,x as v,B as b,q as V,ao as k,H as g,I as y,v as E,G as M}from"./DVpp4kSu.js";import{s as R}from"./CosDkeTr.js";import{s as z}from"./BraqSQ16.js";import{s as U}from"./B3f7OJxv.js";import{s as j}from"./D-xAGMym.js";import H from"./BdpNaarX.js";import"./qWGDYRoh.js";import"./aVpby_GE.js";var O=function(t){var i=t.dt;return`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-item-list {
    display: flex;
    flex-direction: row;
}

.p-carousel-prev-button,
.p-carousel-next-button {
    align-self: center;
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: `.concat(i("carousel.indicator.list.padding"),`;
    gap: `).concat(i("carousel.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(i("carousel.indicator.background"),`;
    width: `).concat(i("carousel.indicator.width"),`;
    height: `).concat(i("carousel.indicator.height"),`;
    border: 0 none;
    transition: background `).concat(i("carousel.transition.duration"),", color ").concat(i("carousel.transition.duration"),", outline-color ").concat(i("carousel.transition.duration"),", box-shadow ").concat(i("carousel.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(i("carousel.indicator.border.radius"),`;
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: `).concat(i("carousel.indicator.focus.ring.shadow"),`;
    outline: `).concat(i("carousel.indicator.focus.ring.width")," ").concat(i("carousel.indicator.focus.ring.style")," ").concat(i("carousel.indicator.focus.ring.color"),`;
    outline-offset: `).concat(i("carousel.indicator.focus.ring.offset"),`;
}

.p-carousel-indicator-button:hover {
    background: `).concat(i("carousel.indicator.hover.background"),`;
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: `).concat(i("carousel.indicator.active.background"),`;
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-item-list {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`)},Y={root:function(t){var i=t.instance;return["p-carousel p-component",{"p-carousel-vertical":i.isVertical(),"p-carousel-horizontal":!i.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(t){var i=t.instance;return["p-carousel-prev-button",{"p-disabled":i.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(t){var i=t.index,a=t.value,r=t.totalShiftedItems,n=t.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":r*-1===a.length+n,"p-carousel-item-start":i===0,"p-carousel-item-end":a.slice(-1*n).length-1===i}]},item:function(t){var i=t.instance,a=t.index;return["p-carousel-item",{"p-carousel-item-active":i.firstIndex()<=a&&i.lastIndex()>=a,"p-carousel-item-start":i.firstIndex()===a,"p-carousel-item-end":i.lastIndex()===a}]},pcNextButton:function(t){var i=t.instance;return["p-carousel-next-button",{"p-disabled":i.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(t){var i=t.instance,a=t.index;return["p-carousel-indicator",{"p-carousel-indicator-active":i.d_page===a}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},W=T.extend({name:"carousel",theme:O,classes:Y}),X={name:"BaseCarousel",extends:K,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:W,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function f(e){return J(e)||Z(e)||G(e)||q()}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,t){if(e){if(typeof e=="string")return S(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?S(e,t):void 0}}function Z(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function J(e){if(Array.isArray(e))return S(e)}function S(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}var Q={name:"Carousel",extends:X,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,i){this.d_numVisible=t,this.d_oldNumVisible=i},numScroll:function(t,i){this.d_oldNumScroll=i,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.$el.setAttribute(this.attributeSelector,""),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var i=this.totalShiftedItems;this.d_page===0?i=-1*this.d_numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var t=this.isCircular(),i=!1,a=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,i=!0),a=r*this.d_numScroll*-1,t&&(a-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(a+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,a!==this.totalShiftedItems&&(this.totalShiftedItems=a,i=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?a=-1*this.d_numVisible:a===0&&(a=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),a!==this.totalShiftedItems&&(this.totalShiftedItems=a,i=!0)),!i&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:t===this.d_page}}},step:function(t,i){var a=this.totalShiftedItems,r=this.isCircular();if(i!=null)a=this.d_numScroll*i*-1,r&&(a-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{a+=this.d_numScroll*t,this.isRemainingItemsAdded&&(a+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var n=r?a+this.d_numVisible:a;i=Math.abs(Math.floor(n/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&t===-1?(a=-1*(this.value.length+this.d_numVisible),i=0):r&&this.d_page===0&&t===1?(a=0,i=this.totalIndicators-1):i===this.totalIndicators-1&&this.remainingItems>0&&(a+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&A(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a,this.$emit("update:page",i),this.d_page=i},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,i={numVisible:this.numVisible,numScroll:this.numScroll},a=0;a<this.responsiveOptions.length;a++){var r=this.responsiveOptions[a];parseInt(r.breakpoint,10)>=t&&(i=r)}if(this.d_numScroll!==i.numScroll){var n=this.d_page;n=parseInt(n*this.d_numScroll/i.numScroll),this.totalShiftedItems=i.numScroll*n*-1,this.isCircular()&&(this.totalShiftedItems-=i.numVisible),this.d_numScroll=i.numScroll,this.$emit("update:page",n),this.d_page=n}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible)}},navBackward:function(t,i){(this.d_circular||this.d_page!==0)&&this.step(1,i),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,i){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,i),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,i){var a=this.d_page;i>a?this.navForward(t,i):i<a&&this.navBackward(t,i)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&L(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var i=t.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}},onTouchMove:function(t){var i=t.changedTouches[0],a=this.isVertical()?i.pageY-this.startPos.y:i.pageX-this.startPos.x;Math.abs(a)>this.swipeThreshold&&t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var i=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,i.pageY-this.startPos.y):this.changePageOnTouch(t,i.pageX-this.startPos.x)},changePageOnTouch:function(t,i){Math.abs(i)>this.swipeThreshold&&(i<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=f(p(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===t.length?t.length-1:i+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=f(p(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,t.length-1)},onTabKey:function(){var t=f(p(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=t.findIndex(function(n){return _(n,"data-p-active")===!0}),a=w(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(function(n){return n===a.parentElement});t[r].children[0].tabIndex="-1",t[i].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=f(p(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=w(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(a){return a===i.parentElement})},changedFocusedIndicator:function(t,i){var a=f(p(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));a[t].children[0].tabIndex="-1",a[i].children[0].tabIndex="0",a[i].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(i){t.calculatePosition(i)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",B(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var i=`
                .p-carousel[`.concat(this.attributeSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var a=f(this.responsiveOptions),r=x();a.sort(function(u,s){var C=u.breakpoint,I=s.breakpoint;return P(C,I,-1,r)});for(var n=0;n<a.length;n++){var m=a[n];i+=`
                        @media screen and (max-width: `.concat(m.breakpoint,`) {
                            .p-carousel[`).concat(this.attributeSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/m.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=i},isVertical:function(){return this.orientation==="vertical"},isCircular:function(){return this.value&&this.d_circular&&this.value.length>=this.d_numVisible},isAutoplay:function(){return this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},attributeSelector:function(){return N()},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""}},components:{Button:H,ChevronRightIcon:U,ChevronDownIcon:R,ChevronLeftIcon:z,ChevronUpIcon:j},directives:{ripple:F}},$=["aria-live"],tt=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],et=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],it=["data-p-active"],nt=["tabindex","aria-label","aria-current","onClick"];function at(e,t,i,a,r,n){var m=D("Button");return o(),c("div",l({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(o(),c("div",l({key:0,class:e.cx("header")},e.ptm("header")),[d(e.$slots,"header")],16)):h("",!0),n.empty?d(e.$slots,"empty",{key:2},function(){return[E(M(n.emptyMessageText),1)]}):(o(),c("div",l({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[v("div",l({class:[e.cx("content"),e.contentClass],"aria-live":r.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(o(),b(m,l({key:0,class:e.cx("pcPrevButton"),disabled:n.backwardIsDisabled,"aria-label":n.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:n.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:V(function(u){return[d(e.$slots,"previcon",{},function(){return[(o(),b(k(n.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),l({class:u.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):h("",!0),v("div",l({class:e.cx("viewport"),style:[{height:n.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:t[1]||(t[1]=function(){return n.onTouchEnd&&n.onTouchEnd.apply(n,arguments)}),onTouchstart:t[2]||(t[2]=function(){return n.onTouchStart&&n.onTouchStart.apply(n,arguments)}),onTouchmove:t[3]||(t[3]=function(){return n.onTouchMove&&n.onTouchMove.apply(n,arguments)})},e.ptm("viewport")),[v("div",l({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:t[0]||(t[0]=function(){return n.onTransitionEnd&&n.onTransitionEnd.apply(n,arguments)})},e.ptm("itemList")),[n.isCircular()?(o(!0),c(g,{key:0},y(e.value.slice(-1*r.d_numVisible),function(u,s){return o(),c("div",l({key:s+"_scloned",class:e.cx("itemClone",{index:s,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===e.value.length+r.d_numVisible,"data-p-carousel-item-start":s===0,"data-p-carousel-item-end":e.value.slice(-1*r.d_numVisible).length-1===s}),[d(e.$slots,"item",{data:u,index:s})],16,tt)}),128)):h("",!0),(o(!0),c(g,null,y(e.value,function(u,s){return o(),c("div",l({key:s,class:e.cx("item",{index:s}),role:"group","aria-hidden":n.firstIndex()>s||n.lastIndex()<s?!0:void 0,"aria-label":n.ariaSlideNumber(s),"aria-roledescription":n.ariaSlideLabel,ref_for:!0},e.ptm("item"),{"data-p-carousel-item-active":n.firstIndex()<=s&&n.lastIndex()>=s,"data-p-carousel-item-start":n.firstIndex()===s,"data-p-carousel-item-end":n.lastIndex()===s}),[d(e.$slots,"item",{data:u,index:s})],16,et)}),128)),n.isCircular()?(o(!0),c(g,{key:1},y(e.value.slice(0,r.d_numVisible),function(u,s){return o(),c("div",l({key:s+"_fcloned",class:e.cx("itemClone",{index:s,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[d(e.$slots,"item",{data:u,index:s})],16)}),128)):h("",!0)],16)],16),e.showNavigators?(o(),b(m,l({key:1,class:e.cx("pcNextButton"),disabled:n.forwardIsDisabled,"aria-label":n.ariaNextButtonLabel,unstyled:e.unstyled,onClick:n.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:V(function(u){return[d(e.$slots,"nexticon",{},function(){return[(o(),b(k(n.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),l({class:u.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):h("",!0)],16,$),n.totalIndicators>=0&&e.showIndicators?(o(),c("ul",l({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:t[4]||(t[4]=function(){return n.onIndicatorKeydown&&n.onIndicatorKeydown.apply(n,arguments)})},e.ptm("indicatorList")),[(o(!0),c(g,null,y(n.totalIndicators,function(u,s){return o(),c("li",l({key:"p-carousel-indicator-"+s.toString(),class:e.cx("indicator",{index:s}),ref_for:!0},e.ptm("indicator",n.getIndicatorPTOptions(s)),{"data-p-active":r.d_page===s}),[v("button",l({class:e.cx("indicatorButton"),type:"button",tabindex:r.d_page===s?"0":"-1","aria-label":n.ariaPageLabel(s+1),"aria-current":r.d_page===s?"page":void 0,onClick:function(I){return n.onIndicatorClick(I,s)},ref_for:!0},e.ptm("indicatorButton",n.getIndicatorPTOptions(s))),null,16,nt)],16,it)}),128))],16)):h("",!0)],16)),e.$slots.footer?(o(),c("div",l({key:3,class:e.cx("footer")},e.ptm("footer")),[d(e.$slots,"footer")],16)):h("",!0)],16)}Q.render=at;export{Q as default};
