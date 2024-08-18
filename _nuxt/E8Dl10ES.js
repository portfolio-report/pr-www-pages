import{B as $,ab as B,ac as _,ap as G,aq as E,m as c,R,s as T,O as F,P as A,o as d,G as P,y as b,r as f,Q as L,C as H,ar as x,as as Q,at as k,a7 as X,au as J,c as v,S as V,A as y,X as D,T as M,a1 as I,q as Y,V as Z,aj as tt,ak as et,a as at,h as nt,W as st,al as ot,x as l,u as i,z as K,d as rt}from"./rsw1wY18.js";import{s as it,u as lt,d as ct,b as O,a as C}from"./BU1iSamu.js";import{u as ut}from"./HYUVhAoZ.js";import{s as dt}from"./CBnX3I-6.js";import{s as bt}from"./Dl2oTqDK.js";import"./6G2I-Qju.js";import"./B-CAXvYM.js";var pt={root:function(t){var a=t.instance,s=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},ht=$.extend({name:"tab",classes:pt}),ft={name:"BaseTab",extends:T,props:{value:{type:String,default:void 0},disabled:{type:Boolean,default:!1},as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:ht,provide:function(){return{$pcTab:this,$parentInstance:this}}},N={name:"Tab",extends:ft,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.nextElementSibling;return s?B(s,"data-p-disabled")||B(s,"data-pc-section")==="inkbar"?this.findNextTab(s):_(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.previousElementSibling;return s?B(s,"data-p-disabled")||B(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):_(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){G(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return E((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:R}};function vt(e,t,a,s,o,n){var u=F("ripple");return e.asChild?f(e.$slots,"default",{key:1,class:H(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):A((d(),P(L(e.as),c({key:0,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:b(function(){return[f(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[u]])}N.render=vt;var mt={root:"p-tablist",content:function(t){var a=t.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},gt=$.extend({name:"tablist",classes:mt}),yt={name:"BaseTabList",extends:T,props:{},style:gt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},W={name:"TabList",extends:yt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=x(t),s=t.scrollLeft-a;t.scrollLeft=s<=0?0:s},onNextButtonClick:function(){var t=this.$refs.content,a=x(t)-this.getVisibleButtonWidths(),s=t.scrollLeft+a,o=t.scrollWidth-a;t.scrollLeft=s>=o?o:s},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,s=t.inkbar,o=t.tabs,n=_(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=Q(n)+"px",s.style.top=k(n).top-k(o).top+"px"):(s.style.width=X(n)+"px",s.style.left=k(n).left-k(o).left+"px")},updateButtonState:function(){var t=this.$refs,a=t.list,s=t.content,o=s.scrollLeft,n=s.scrollTop,u=s.scrollWidth,p=s.scrollHeight,S=s.offsetWidth,w=s.offsetHeight,h=[x(s),J(s)],m=h[0],r=h[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=n!==0,this.isNextButtonEnabled=a.offsetHeight>=w&&parseInt(n)!==p-r):(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=a.offsetWidth>=S&&parseInt(o)!==u-m)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevBtn,s=t.nextBtn;return[a,s].reduce(function(o,n){return n?o+x(n):o},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:bt,ChevronRightIcon:it},directives:{ripple:R}},$t=["aria-label","tabindex"],Tt=["aria-orientation"],wt=["aria-label","tabindex"];function Bt(e,t,a,s,o,n){var u=F("ripple");return d(),v("div",c({ref:"list",class:e.cx("root")},e.ptmi("root")),[n.showNavigators&&o.isPrevButtonEnabled?A((d(),v("button",c({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(d(),P(L(n.templates.previcon||"ChevronLeftIcon"),c({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,$t)),[[u]]):V("",!0),y("div",c({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},e.ptm("content")),[y("div",c({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[f(e.$slots,"default"),y("span",c({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Tt)],16),n.showNavigators&&o.isNextButtonEnabled?A((d(),v("button",c({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(d(),P(L(n.templates.nexticon||"ChevronRightIcon"),c({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,wt)),[[u]]):V("",!0)],16)}W.render=Bt;var xt={root:function(t){var a=t.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},kt=$.extend({name:"tabpanel",classes:xt}),Ct={name:"BaseTabPanel",extends:T,props:{value:{type:String,default:void 0},as:{type:String,default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:kt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},z={name:"TabPanel",extends:Ct,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return E((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function At(e,t,a,s,o,n){var u,p;return n.$pcTabs?(d(),v(D,{key:1},[e.asChild?f(e.$slots,"default",{key:1,class:H(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(d(),v(D,{key:0},[!((u=n.$pcTabs)!==null&&u!==void 0&&u.lazy)||n.active?A((d(),P(L(e.as),c({key:0,class:e.cx("root")},n.attrs),{default:b(function(){return[f(e.$slots,"default")]}),_:3},16,["class"])),[[M,(p=n.$pcTabs)!==null&&p!==void 0&&p.lazy?!0:n.active]]):V("",!0)],64))],64)):f(e.$slots,"default",{key:0})}z.render=At;var Pt={root:"p-tabpanels"},Lt=$.extend({name:"tabpanels",classes:Pt}),St={name:"BaseTabPanels",extends:T,props:{},style:Lt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},U={name:"TabPanels",extends:St,inheritAttrs:!1};function _t(e,t,a,s,o,n){return d(),v("div",c({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[f(e.$slots,"default")],16)}U.render=_t;var Vt=function(t){var a=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(a("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(a("tabs.tablist.border.color"),`;
    border-width: `).concat(a("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(a("tabs.nav.button.background"),`;
    color: `).concat(a("tabs.nav.button.color"),`;
    width: `).concat(a("tabs.nav.button.width"),`;
    transition: color `).concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    box-shadow: `).concat(a("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.nav.button.focus.ring.width")," ").concat(a("tabs.nav.button.focus.ring.style")," ").concat(a("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(a("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(a("tabs.tab.background"),`;
    border-width: `).concat(a("tabs.tab.border.width"),`;
    border-color: `).concat(a("tabs.tab.border.color"),`;
    color: `).concat(a("tabs.tab.color"),`;
    padding: `).concat(a("tabs.tab.padding"),`;
    font-weight: `).concat(a("tabs.tab.font.weight"),`;
    transition: background `).concat(a("tabs.transition.duration"),", border-color ").concat(a("tabs.transition.duration"),", color ").concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    margin: `).concat(a("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tab.focus.ring.width")," ").concat(a("tabs.tab.focus.ring.style")," ").concat(a("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(a("tabs.tab.hover.background"),`;
    border-color: `).concat(a("tabs.tab.hover.border.color"),`;
    color: `).concat(a("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(a("tabs.tab.active.background"),`;
    border-color: `).concat(a("tabs.tab.active.border.color"),`;
    color: `).concat(a("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(a("tabs.tabpanel.background"),`;
    color: `).concat(a("tabs.tabpanel.color"),`;
    padding: `).concat(a("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(a("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tabpanel.focus.ring.width")," ").concat(a("tabs.tabpanel.focus.ring.style")," ").concat(a("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(a("tabs.active.bar.bottom"),`;
    height: `).concat(a("tabs.active.bar.height"),`;
    background: `).concat(a("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},Nt={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},zt=$.extend({name:"tabs",theme:Vt,classes:Nt}),Dt={name:"BaseTabs",extends:T,props:{value:{type:String,default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:zt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},j={name:"Tabs",extends:Dt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||I()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||I()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function It(e,t,a,s,o,n){return d(),v("div",c({class:e.cx("root")},e.ptmi("root")),[f(e.$slots,"default")],16)}j.render=It;const Kt={class:"flex items-center my-2"},Ot=y("label",{for:"checkboxAccumulated",class:"ml-2"},"Accumulated numbers",-1),qt=Y({__name:"[version]",async setup(e){var w;let t,a;const s=Z(),{data:o,error:n}=([t,a]=tt(()=>lt(`stats:${s.params.version}`,()=>ut(`/stats/updates/${s.params.version}`))),t=await t,a(),t);if(n.value||((w=o.value)==null?void 0:w.byCountry)==null||o.value.byDate==null)throw et({statusCode:404});const u={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},p=at(!1),S=nt(()=>{var m;if(!((m=o.value)!=null&&m.byCountry))return{labels:[],datasets:[]};const h=[...o.value.byDate].sort((r,g)=>r.date.localeCompare(g.date));return{labels:h.map(r=>r.date),datasets:[{backgroundColor:"#3B82F6",borderColor:"#3B82F6",fill:!1,data:p.value?h.reduce((r,g)=>{const q=r.length>0?r[r.length-1]+g.count:g.count;return r.push(q),r},[]):h.map(r=>r.count)}]}});return(h,m)=>(d(),v("div",null,[y("h2",null,"Version Statistics for "+st((h._.provides[ot]||h.$route).params.version),1),l(i(j),{value:"byDate"},{default:b(()=>[l(i(W),null,{default:b(()=>[l(i(N),{value:"byDate"},{default:b(()=>[K(" By date ")]),_:1}),l(i(N),{value:"byCountry"},{default:b(()=>[K(" By country ")]),_:1})]),_:1}),l(i(U),null,{default:b(()=>[l(i(z),{value:"byDate"},{default:b(()=>{var r;return[l(i(dt),{type:"line",data:i(S),options:u,style:{height:"400px"}},null,8,["data"]),y("div",Kt,[l(i(ct),{modelValue:i(p),"onUpdate:modelValue":m[0]||(m[0]=g=>rt(p)?p.value=g:null),binary:"","input-id":"checkboxAccumulated"},null,8,["modelValue"]),Ot]),l(i(O),{value:(r=i(o))==null?void 0:r.byDate,"sort-field":"date","sort-order":-1,class:"font-mono",size:"small"},{default:b(()=>[l(i(C),{field:"date",header:"Date",sortable:!0}),l(i(C),{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])]}),_:1}),l(i(z),{value:"byCountry"},{default:b(()=>{var r;return[l(i(O),{value:(r=i(o))==null?void 0:r.byCountry,"sort-field":"count","sort-order":-1,class:"font-mono",size:"small"},{default:b(()=>[l(i(C),{field:"country",header:"Country",sortable:!0}),l(i(C),{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])]}),_:1})]),_:1})]),_:1})]))}});export{qt as default};
