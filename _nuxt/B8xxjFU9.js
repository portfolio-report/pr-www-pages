import{W as x,a6 as P,Z as c,a8 as l,ab as C,Y as K,E as S,t as d,l as b,x as p,J as h,S as k,B as g,ae as m,F as v,H as T,I as A,G as D,ai as H}from"./BeTAzwAv.js";import{s as E}from"./BafBYXue.js";import{s as L}from"./D0rmquXk.js";var O=function(e){var n=e.dt;return`
.p-tabview-tablist-container {
    position: relative;
}

.p-tabview-scrollable > .p-tabview-tablist-container {
    overflow: hidden;
}

.p-tabview-tablist-scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-tablist-scroll-container::-webkit-scrollbar {
    display: none;
}

.p-tabview-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: `.concat(n("tabview.tab.list.background"),`;
    border: 1px solid `).concat(n("tabview.tab.list.border.color"),`;
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabview-tab-header {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent `).concat(n("tabview.tab.border.color"),` transparent;
    color: `).concat(n("tabview.tab.color"),`;
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: `).concat(n("border.radius.md"),`;
    border-top-left-radius: `).concat(n("border.radius.md"),`;
    transition: color `).concat(n("tabview.transition.duration"),", outline-color ").concat(n("tabview.transition.duration"),`;
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-tablist-item:not(.p-disabled) .p-tabview-tab-header:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: -1px;
}

.p-tabview-tablist-item:not(.p-highlight):not(.p-disabled):hover > .p-tabview-tab-header {
    color: `).concat(n("tabview.tab.hover.color"),`;
}

.p-tabview-tablist-item.p-highlight > .p-tabview-tab-header {
    color: `).concat(n("tabview.tab.active.color"),`;
}

.p-tabview-tab-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-next-button,
.p-tabview-prev-button {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("tabview.nav.button.background"),`;
    color: `).concat(n("tabview.nav.button.color"),`;
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color `).concat(n("tabview.transition.duration"),", outline-color ").concat(n("tabview.transition.duration"),`;
    box-shadow: `).concat(n("tabview.nav.button.shadow"),`;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-tabview-next-button:focus-visible,
.p-tabview-prev-button:focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-tabview-next-button:hover,
.p-tabview-prev-button:hover {
    color: `).concat(n("tabview.nav.button.hover.color"),`;
}

.p-tabview-prev-button {
    left: 0;
}

.p-tabview-next-button {
    right: 0;
}

.p-tabview-panels {
    background: `).concat(n("tabview.tab.panel.background"),`;
    color: `).concat(n("tabview.tab.panel.color"),`;
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background: `).concat(n("tabview.tab.active.border.color"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},N={root:function(e){var n=e.props;return["p-tabview p-component",{"p-tabview-scrollable":n.scrollable}]},navContainer:"p-tabview-tablist-container",prevButton:"p-tabview-prev-button",navContent:"p-tabview-tablist-scroll-container",nav:"p-tabview-tablist",tab:{header:function(e){var n=e.instance,a=e.tab,o=e.index;return["p-tabview-tablist-item",n.getTabProp(a,"headerClass"),{"p-tabview-tablist-item-active":n.d_activeIndex===o,"p-disabled":n.getTabProp(a,"disabled")}]},headerAction:"p-tabview-tab-header",headerTitle:"p-tabview-tab-title",content:function(e){var n=e.instance,a=e.tab;return["p-tabview-panel",n.getTabProp(a,"contentClass")]}},inkbar:"p-tabview-ink-bar",nextButton:"p-tabview-next-button",panelContainer:"p-tabview-panels"},V=x.extend({name:"tabview",theme:O,classes:N}),j={name:"BaseTabView",extends:K,props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},prevIcon:{type:String,default:void 0},nextIcon:{type:String,default:void 0}},style:V,provide:function(){return{$pcTabs:void 0,$pcTabView:this,$parentInstance:this}}},F={name:"TabView",extends:j,inheritAttrs:!1,emits:["update:activeIndex","tab-change","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex,isPrevButtonDisabled:!0,isNextButtonDisabled:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},activeIndex:function(e){this.d_activeIndex=e,this.scrollInView({index:e})}},mounted:function(){console.warn("Deprecated since v4. Use Tabs component instead."),this.id=this.id||P(),this.updateInkBar(),this.scrollable&&this.updateButtonState()},updated:function(){this.updateInkBar(),this.scrollable&&this.updateButtonState()},methods:{isTabPanel:function(e){return e.type.name==="TabPanel"},isTabActive:function(e){return this.d_activeIndex===e},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getTabHeaderActionId:function(e){return"".concat(this.id,"_").concat(e,"_header_action")},getTabContentId:function(e){return"".concat(this.id,"_").concat(e,"_content")},getTabPT:function(e,n,a){var o=this.tabs.length,r={props:e.props,parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:o,first:a===0,last:a===o-1,active:this.isTabActive(a)}};return c(this.ptm("tabpanel.".concat(n),{tabpanel:r}),this.ptm("tabpanel.".concat(n),r),this.ptmo(this.getTabProp(e,"pt"),n,r))},onScroll:function(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=l.getWidth(e),a=e.scrollLeft-n;e.scrollLeft=a<=0?0:a},onNextButtonClick:function(){var e=this.$refs.content,n=l.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft+n,o=e.scrollWidth-n;e.scrollLeft=a>=o?o:a},onTabClick:function(e,n,a){this.changeActiveIndex(e,n,a),this.$emit("tab-click",{originalEvent:e,index:a})},onTabKeyDown:function(e,n,a){switch(e.code){case"ArrowLeft":this.onTabArrowLeftKey(e);break;case"ArrowRight":this.onTabArrowRightKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onTabEnterKey(e,n,a);break}},onTabArrowRightKey:function(e){var n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(e,n):this.onTabHomeKey(e),e.preventDefault()},onTabArrowLeftKey:function(e){var n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(e,n):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var n=this.findFirstHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEndKey:function(e){var n=this.findLastHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView({index:this.$refs.nav.children.length-2}),e.preventDefault()},onPageUpKey:function(e){this.scrollInView({index:0}),e.preventDefault()},onTabEnterKey:function(e,n,a){this.changeActiveIndex(e,n,a),e.preventDefault()},findNextHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling;return a?l.getAttribute(a,"data-p-disabled")||l.getAttribute(a,"data-pc-section")==="inkbar"?this.findNextHeaderAction(a):l.findSingle(a,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling;return a?l.getAttribute(a,"data-p-disabled")||l.getAttribute(a,"data-pc-section")==="inkbar"?this.findPrevHeaderAction(a):l.findSingle(a,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$refs.nav.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$refs.nav.lastElementChild,!0)},changeActiveIndex:function(e,n,a){!this.getTabProp(n,"disabled")&&this.d_activeIndex!==a&&(this.d_activeIndex=a,this.$emit("update:activeIndex",a),this.$emit("tab-change",{originalEvent:e,index:a}),this.scrollInView({index:a}))},changeFocusedTab:function(e,n){if(n&&(l.focus(n),this.scrollInView({element:n}),this.selectOnFocus)){var a=parseInt(n.parentElement.dataset.pcIndex,10),o=this.tabs[a];this.changeActiveIndex(e,o,a)}},scrollInView:function(e){var n=e.element,a=e.index,o=a===void 0?-1:a,r=n||this.$refs.nav.children[o];r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest"})},updateInkBar:function(){var e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=l.getWidth(e)+"px",this.$refs.inkbar.style.left=l.getOffset(e).left-l.getOffset(this.$refs.nav).left+"px"},updateButtonState:function(){var e=this.$refs.content,n=e.scrollLeft,a=e.scrollWidth,o=l.getWidth(e);this.isPrevButtonDisabled=n===0,this.isNextButtonDisabled=parseInt(n)===a-o},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevBtn,a=e.nextBtn;return[n,a].reduce(function(o,r){return r?o+l.getWidth(r):o},0)}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,a){return e.isTabPanel(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(o){e.isTabPanel(o)&&n.push(o)}),n},[])},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},directives:{ripple:C},components:{ChevronLeftIcon:E,ChevronRightIcon:L}};function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?I(Object(n),!0).forEach(function(a){W(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function W(t,e,n){return(e=R(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t){var e=z(t,"string");return f(e)=="symbol"?e:e+""}function z(t,e){if(f(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(f(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var U=["tabindex","aria-label"],q=["data-p-active","data-p-disabled","data-pc-index"],G=["id","tabindex","aria-disabled","aria-selected","aria-controls","onClick","onKeydown"],J=["tabindex","aria-label"],M=["id","aria-labelledby","data-pc-index","data-p-active"];function Y(t,e,n,a,o,r){var w=S("ripple");return d(),b("div",c({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[p("div",c({class:t.cx("navContainer")},t.ptm("navContainer")),[t.scrollable&&!o.isPrevButtonDisabled?h((d(),b("button",c({key:0,ref:"prevBtn",type:"button",class:t.cx("prevButton"),tabindex:t.tabindex,"aria-label":r.prevButtonAriaLabel,onClick:e[0]||(e[0]=function(){return r.onPrevButtonClick&&r.onPrevButtonClick.apply(r,arguments)})},u(u({},t.prevButtonProps),t.ptm("prevButton")),{"data-pc-group-section":"navbutton"}),[k(t.$slots,"previcon",{},function(){return[(d(),g(m(t.prevIcon?"span":"ChevronLeftIcon"),c({"aria-hidden":"true",class:t.prevIcon},t.ptm("prevIcon")),null,16,["class"]))]})],16,U)),[[w]]):v("",!0),p("div",c({ref:"content",class:t.cx("navContent"),onScroll:e[1]||(e[1]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)})},t.ptm("navContent")),[p("ul",c({ref:"nav",class:t.cx("nav")},t.ptm("nav")),[(d(!0),b(T,null,A(r.tabs,function(i,s){return d(),b("li",c({key:r.getKey(i,s),style:r.getTabProp(i,"headerStyle"),class:t.cx("tab.header",{tab:i,index:s}),role:"presentation",ref_for:!0},u(u(u({},r.getTabProp(i,"headerProps")),r.getTabPT(i,"root",s)),r.getTabPT(i,"header",s)),{"data-pc-name":"tabpanel","data-p-active":o.d_activeIndex===s,"data-p-disabled":r.getTabProp(i,"disabled"),"data-pc-index":s}),[h((d(),b("a",c({id:r.getTabHeaderActionId(s),class:t.cx("tab.headerAction"),tabindex:r.getTabProp(i,"disabled")||!r.isTabActive(s)?-1:t.tabindex,role:"tab","aria-disabled":r.getTabProp(i,"disabled"),"aria-selected":r.isTabActive(s),"aria-controls":r.getTabContentId(s),onClick:function(y){return r.onTabClick(y,i,s)},onKeydown:function(y){return r.onTabKeyDown(y,i,s)},ref_for:!0},u(u({},r.getTabProp(i,"headerActionProps")),r.getTabPT(i,"headerAction",s))),[i.props&&i.props.header?(d(),b("span",c({key:0,class:t.cx("tab.headerTitle"),ref_for:!0},r.getTabPT(i,"headerTitle",s)),D(i.props.header),17)):v("",!0),i.children&&i.children.header?(d(),g(m(i.children.header),{key:1})):v("",!0)],16,G)),[[w]])],16,q)}),128)),p("li",c({ref:"inkbar",class:t.cx("inkbar"),role:"presentation","aria-hidden":"true"},t.ptm("inkbar")),null,16)],16)],16),t.scrollable&&!o.isNextButtonDisabled?h((d(),b("button",c({key:1,ref:"nextBtn",type:"button",class:t.cx("nextButton"),tabindex:t.tabindex,"aria-label":r.nextButtonAriaLabel,onClick:e[2]||(e[2]=function(){return r.onNextButtonClick&&r.onNextButtonClick.apply(r,arguments)})},u(u({},t.nextButtonProps),t.ptm("nextButton")),{"data-pc-group-section":"navbutton"}),[k(t.$slots,"nexticon",{},function(){return[(d(),g(m(t.nextIcon?"span":"ChevronRightIcon"),c({"aria-hidden":"true",class:t.nextIcon},t.ptm("nextIcon")),null,16,["class"]))]})],16,J)),[[w]]):v("",!0)],16),p("div",c({class:t.cx("panelContainer")},t.ptm("panelContainer")),[(d(!0),b(T,null,A(r.tabs,function(i,s){return d(),b(T,{key:r.getKey(i,s)},[!t.lazy||r.isTabActive(s)?h((d(),b("div",c({key:0,id:r.getTabContentId(s),style:r.getTabProp(i,"contentStyle"),class:t.cx("tab.content",{tab:i}),role:"tabpanel","aria-labelledby":r.getTabHeaderActionId(s),ref_for:!0},u(u(u({},r.getTabProp(i,"contentProps")),r.getTabPT(i,"root",s)),r.getTabPT(i,"content",s)),{"data-pc-name":"tabpanel","data-pc-index":s,"data-p-active":o.d_activeIndex===s}),[(d(),g(m(i)))],16,M)),[[H,t.lazy?!0:r.isTabActive(s)]]):v("",!0)],64)}),128))],16)],16)}F.render=Y;export{F as default};
