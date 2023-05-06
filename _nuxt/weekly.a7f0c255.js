import{_ as F}from"./TextBtn.33cd4075.js";import{a as S}from"./asyncData.877e8b0c.js";import{d as W,h as f,j as I,n as L,c as u,b as p,a as t,f as n,e as k,t as y,w as _,I as d,J as h,r,o as i,B as P,k as R,F as Y}from"./entry.ecceb3d4.js";import{u as j}from"./useApi.e357a1c0.js";import{u as z}from"./index.52366cc3.js";import"./_plugin-vue_export-helper.c27b6911.js";const E={class:"p-buttonset"},J={class:"flex align-items-end",style:{height:"400px"}},Z=W({__name:"weekly",setup(q){const l=f(new Date().getFullYear()),w=f();function C(a){w.value.toggle(a)}const g=f(new Date),D=z(g),{data:c,pending:B,refresh:v}=S(`statsWeeks:${l.value}`,async()=>{const a=await j(`/stats/updates/weeks?year=${l.value}`);for(const e of a)e.firstUpdate&&(e.firstUpdate=new Date(e.firstUpdate)),e.lastUpdate&&(e.lastUpdate=new Date(e.lastUpdate));return g.value=new Date,{weeks:a.sort((e,o)=>e.week-o.week)}});I(l,()=>v());const x=L(()=>{var a,e;return{labels:(a=c.value)==null?void 0:a.weeks.map(o=>o.week),datasets:[{backgroundColor:"#3B82F6",data:(e=c.value)==null?void 0:e.weeks.map(o=>o.count)}]}}),T={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(a,e)=>{const o=r("Button"),U=r("InputNumber"),V=r("OverlayPanel"),m=r("Skeleton"),A=F,O=r("Chart"),b=r("Column"),N=r("DataTable");return i(),u("div",null,[p("div",E,[t(o,{label:"Versions",icon:"i-carbon-tag",class:"p-button-secondary",onClick:e[0]||(e[0]=s=>("navigateTo"in a?a.navigateTo:n(P))("/stats/"))}),t(o,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-primary",disabled:!0})]),p("h2",null,[k(" Weekly Statistics for "),p("a",{class:"cursor-pointer",onClick:C},y(n(l)),1)]),t(V,{ref_key:"yearOverlay",ref:w,"show-close-icon":!0},{default:_(()=>[t(U,{modelValue:n(l),"onUpdate:modelValue":e[1]||(e[1]=s=>R(l)?l.value=s:null),"use-grouping":!1},null,8,["modelValue"])]),_:1},512),n(B)||!n(c)?(i(),u(d,{key:0},[t(m,{width:"15em"}),p("div",J,[(i(),u(d,null,h([30,25,45,70,90],(s,$)=>t(m,{key:$,width:"20%",height:`${s}%`,class:"mr-2"},null,8,["height"])),64))]),(i(!0),u(d,null,h(Array(10).keys(),s=>(i(),Y(m,{key:s,class:"mt-4"}))),128))],64)):(i(),u(d,{key:1},[k(" Last updated "+y(n(D))+" ",1),t(A,{small:"",icon:"i-carbon-renew",onClick:e[2]||(e[2]=s=>n(v)())}),t(O,{type:"line",data:n(x),options:T,style:{height:"400px"}},null,8,["data"]),t(N,{value:n(c).weeks,"sort-field":"week",class:"p-datatable-sm","sort-order":-1},{default:_(()=>[t(b,{field:"week",header:"Week",sortable:!0},{body:_(s=>[k(y(s.data.week),1)]),_:1}),t(b,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{Z as default};
