import{s as G}from"./BSlv4X6t.js";import{s as M,u as Q,d as J,b as _,a as x}from"./CdgON6hT.js";import{B as $,a3 as B,a4 as S,ak as X,al as E,m as c,R,s as T,K as F,L as A,h as b,G as P,y as p,k as h,M as L,C as H,am as k,an as Y,ao as C,$ as Z,ap as tt,j as v,N as V,A as y,S as D,O as et,q as at,P as nt,ab as st,ac as ot,r as rt,c as it,Q as lt,u as r,x as l,z as I,i as ct}from"./CRYZwY3H.js";import{s as ut}from"./YgXgznja.js";import{U as O}from"./CVCtVhqw.js";import{u as dt}from"./0ZkFnHae.js";import"./CYX3GZJZ.js";import"./rDXeFEtc.js";var bt={root:function(t){var a=t.instance,s=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},pt=$.extend({name:"tab",classes:bt}),ft={name:"BaseTab",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:pt,provide:function(){return{$pcTab:this,$parentInstance:this}}},z={name:"Tab",extends:ft,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.nextElementSibling;return s?B(s,"data-p-disabled")||B(s,"data-pc-section")==="inkbar"?this.findNextTab(s):S(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.previousElementSibling;return s?B(s,"data-p-disabled")||B(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):S(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){X(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return E((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:R}};function ht(e,t,a,s,o,n){var d=F("ripple");return e.asChild?h(e.$slots,"default",{key:1,class:H(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):A((b(),P(L(e.as),c({key:0,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:p(function(){return[h(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[d]])}z.render=ht;var vt={root:"p-tablist",content:function(t){var a=t.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},mt=$.extend({name:"tablist",classes:vt}),gt={name:"BaseTabList",extends:T,props:{},style:mt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},U={name:"TabList",extends:gt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=k(t),s=t.scrollLeft-a;t.scrollLeft=s<=0?0:s},onNextButtonClick:function(){var t=this.$refs.content,a=k(t)-this.getVisibleButtonWidths(),s=t.scrollLeft+a,o=t.scrollWidth-a;t.scrollLeft=s>=o?o:s},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,s=t.inkbar,o=t.tabs,n=S(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=Y(n)+"px",s.style.top=C(n).top-C(o).top+"px"):(s.style.width=Z(n)+"px",s.style.left=C(n).left-C(o).left+"px")},updateButtonState:function(){var t=this.$refs,a=t.list,s=t.content,o=s.scrollLeft,n=s.scrollTop,d=s.scrollWidth,f=s.scrollHeight,N=s.offsetWidth,w=s.offsetHeight,m=[k(s),tt(s)],u=m[0],i=m[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=n!==0,this.isNextButtonEnabled=a.offsetHeight>=w&&parseInt(n)!==f-i):(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=a.offsetWidth>=N&&parseInt(o)!==d-u)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevBtn,s=t.nextBtn;return[a,s].reduce(function(o,n){return n?o+k(n):o},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:ut,ChevronRightIcon:M},directives:{ripple:R}},yt=["aria-label","tabindex"],$t=["aria-orientation"],Tt=["aria-label","tabindex"];function wt(e,t,a,s,o,n){var d=F("ripple");return b(),v("div",c({ref:"list",class:e.cx("root")},e.ptmi("root")),[n.showNavigators&&o.isPrevButtonEnabled?A((b(),v("button",c({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(b(),P(L(n.templates.previcon||"ChevronLeftIcon"),c({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,yt)),[[d]]):V("",!0),y("div",c({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},e.ptm("content")),[y("div",c({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[h(e.$slots,"default"),y("span",c({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,$t)],16),n.showNavigators&&o.isNextButtonEnabled?A((b(),v("button",c({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(b(),P(L(n.templates.nexticon||"ChevronRightIcon"),c({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Tt)),[[d]]):V("",!0)],16)}U.render=wt;var xt={root:function(t){var a=t.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},Bt=$.extend({name:"tabpanel",classes:xt}),kt={name:"BaseTabPanel",extends:T,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Bt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},K={name:"TabPanel",extends:kt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return E((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Ct(e,t,a,s,o,n){var d,f;return n.$pcTabs?(b(),v(D,{key:1},[e.asChild?h(e.$slots,"default",{key:1,class:H(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(b(),v(D,{key:0},[!((d=n.$pcTabs)!==null&&d!==void 0&&d.lazy)||n.active?A((b(),P(L(e.as),c({key:0,class:e.cx("root")},n.attrs),{default:p(function(){return[h(e.$slots,"default")]}),_:3},16,["class"])),[[et,(f=n.$pcTabs)!==null&&f!==void 0&&f.lazy?!0:n.active]]):V("",!0)],64))],64)):h(e.$slots,"default",{key:0})}K.render=Ct;var At={root:"p-tabpanels"},Pt=$.extend({name:"tabpanels",classes:At}),Lt={name:"BaseTabPanels",extends:T,props:{},style:Pt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},W={name:"TabPanels",extends:Lt,inheritAttrs:!1};function Nt(e,t,a,s,o,n){return b(),v("div",c({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[h(e.$slots,"default")],16)}W.render=Nt;var St=function(t){var a=t.dt;return`
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
`)},Vt={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},zt=$.extend({name:"tabs",theme:St,classes:Vt}),Kt={name:"BaseTabs",extends:T,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:zt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},j={name:"Tabs",extends:Kt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||O()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||O()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function _t(e,t,a,s,o,n){return b(),v("div",c({class:e.cx("root")},e.ptmi("root")),[h(e.$slots,"default")],16)}j.render=_t;const Dt={class:"flex items-center my-2"},jt=at({__name:"[version]",async setup(e){var w;let t,a;const s=nt(),{data:o,error:n}=([t,a]=st(()=>Q(`stats:${s.params.version}`,()=>dt(`/stats/updates/${s.params.version}`))),t=await t,a(),t);if(n.value||((w=o.value)==null?void 0:w.byCountry)==null||o.value.byDate==null)throw ot({statusCode:404});const d={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},f=rt(!1),N=it(()=>{var u;if(!((u=o.value)!=null&&u.byCountry))return{labels:[],datasets:[]};const m=[...o.value.byDate].sort((i,g)=>i.date.localeCompare(g.date));return{labels:m.map(i=>i.date),datasets:[{backgroundColor:"#3B82F6",borderColor:"#3B82F6",fill:!1,data:f.value?m.reduce((i,g)=>{const q=i.length>0?(i[i.length-1]??0)+g.count:g.count;return i.push(q),i},[]):m.map(i=>i.count)}]}});return(m,u)=>(b(),v("div",null,[y("h2",null,"Version Statistics for "+lt(r(s).params.version),1),l(r(j),{value:"byDate"},{default:p(()=>[l(r(U),null,{default:p(()=>[l(r(z),{value:"byDate"},{default:p(()=>u[1]||(u[1]=[I(" By date ")])),_:1}),l(r(z),{value:"byCountry"},{default:p(()=>u[2]||(u[2]=[I(" By country ")])),_:1})]),_:1}),l(r(W),null,{default:p(()=>[l(r(K),{value:"byDate"},{default:p(()=>{var i;return[l(r(G),{type:"line",data:r(N),options:d,style:{height:"400px"}},null,8,["data"]),y("div",Dt,[l(r(J),{modelValue:r(f),"onUpdate:modelValue":u[0]||(u[0]=g=>ct(f)?f.value=g:null),binary:"","input-id":"checkboxAccumulated"},null,8,["modelValue"]),u[3]||(u[3]=y("label",{for:"checkboxAccumulated",class:"ml-2"},"Accumulated numbers",-1))]),l(r(_),{value:(i=r(o))==null?void 0:i.byDate,"sort-field":"date","sort-order":-1,class:"font-mono",size:"small"},{default:p(()=>[l(r(x),{field:"date",header:"Date",sortable:!0}),l(r(x),{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])]}),_:1}),l(r(K),{value:"byCountry"},{default:p(()=>{var i;return[l(r(_),{value:(i=r(o))==null?void 0:i.byCountry,"sort-field":"count","sort-order":-1,class:"font-mono",size:"small"},{default:p(()=>[l(r(x),{field:"country",header:"Country",sortable:!0}),l(r(x),{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])]}),_:1})]),_:1})]),_:1})]))}});export{jt as default};
