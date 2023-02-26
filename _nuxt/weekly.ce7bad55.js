import{_ as S}from"./TextBtn.f752e0cf.js";import{d as W,h as k,j as $,n as I,c as u,b as p,a as t,f as n,e as f,t as y,w as _,I as d,J as h,r,o as i,B as L,k as P,F as R}from"./entry.3b25f032.js";import{a as Y}from"./asyncData.99736b61.js";import{u as j}from"./useApi.48978ccb.js";import{u as z}from"./index.d03a6b77.js";import"./_plugin-vue_export-helper.c27b6911.js";const E={class:"p-buttonset"},J={class:"flex align-items-end",style:{height:"400px"}},Z=W({__name:"weekly",setup(q){const l=k(new Date().getFullYear());$(l,()=>v());const w=k(),C=a=>{w.value.toggle(a)},g=k(new Date),D=z(g),{data:c,pending:B,refresh:v}=Y(`statsWeeks:${l.value}`,async()=>{const a=await j(`/stats/updates/weeks?year=${l.value}`);for(const e of a)e.firstUpdate&&(e.firstUpdate=new Date(e.firstUpdate)),e.lastUpdate&&(e.lastUpdate=new Date(e.lastUpdate));return g.value=new Date,{weeks:a.sort((e,o)=>e.week-o.week)}}),x=I(()=>{var a,e;return{labels:(a=c.value)==null?void 0:a.weeks.map(o=>o.week),datasets:[{backgroundColor:"#3B82F6",data:(e=c.value)==null?void 0:e.weeks.map(o=>o.count)}]}}),T={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(a,e)=>{const o=r("Button"),U=r("InputNumber"),V=r("OverlayPanel"),m=r("Skeleton"),A=S,O=r("Chart"),b=r("Column"),N=r("DataTable");return i(),u("div",null,[p("div",E,[t(o,{label:"Versions",icon:"i-carbon-tag",class:"p-button-secondary",onClick:e[0]||(e[0]=s=>("navigateTo"in a?a.navigateTo:n(L))("/stats/"))}),t(o,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-primary",disabled:!0})]),p("h2",null,[f(" Weekly Statistics for "),p("a",{class:"cursor-pointer",onClick:C},y(n(l)),1)]),t(V,{ref_key:"yearOverlay",ref:w,"show-close-icon":!0},{default:_(()=>[t(U,{modelValue:n(l),"onUpdate:modelValue":e[1]||(e[1]=s=>P(l)?l.value=s:null),"use-grouping":!1},null,8,["modelValue"])]),_:1},512),n(B)||!n(c)?(i(),u(d,{key:0},[t(m,{width:"15em"}),p("div",J,[(i(),u(d,null,h([30,25,45,70,90],(s,F)=>t(m,{key:F,width:"20%",height:s+"%",class:"mr-2"},null,8,["height"])),64))]),(i(!0),u(d,null,h(Array(10).keys(),s=>(i(),R(m,{key:s,class:"mt-4"}))),128))],64)):(i(),u(d,{key:1},[f(" Last updated "+y(n(D))+" ",1),t(A,{small:"",icon:"i-carbon-renew",onClick:e[2]||(e[2]=s=>n(v)())}),t(O,{type:"line",data:n(x),options:T,style:{height:"400px"}},null,8,["data"]),t(N,{value:n(c).weeks,"sort-field":"week",class:"p-datatable-sm","sort-order":-1},{default:_(()=>[t(b,{field:"week",header:"Week",sortable:!0},{body:_(s=>[f(y(s.data.week),1)]),_:1}),t(b,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{Z as default};
