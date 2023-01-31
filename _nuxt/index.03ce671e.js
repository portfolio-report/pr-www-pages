import{_ as A}from"./TextBtn.ff225a43.js";import{d as L,h as S,n as V,c as i,b as v,a,f as o,K as u,L as h,e as m,t as _,w as l,r as d,o as r,E as $,B as E,_ as I}from"./entry.d58d3095.js";import{a as N}from"./asyncData.547cd82e.js";import{u as F}from"./useApi.ce1daea2.js";import{u as W}from"./index.c36dc3b8.js";import"./_plugin-vue_export-helper.c27b6911.js";const z={class:"p-buttonset"},K=v("h2",null,"Version Statistics",-1),O={class:"flex align-items-end",style:{height:"400px"}},J=L({__name:"index",setup(P){const b=S(new Date),g=W(b),{data:c,pending:y,refresh:k}=N(async()=>{const s=await F("/stats/updates");for(const t of s)t.firstUpdate&&(t.firstUpdate=new Date(t.firstUpdate),t.firstUpdateInt=t.firstUpdate.getTime()),t.lastUpdate&&(t.lastUpdate=new Date(t.lastUpdate),t.lastUpdateInt=t.lastUpdate.getTime());return b.value=new Date,{versions:s}},"$AU7PyxXx3W"),U=V(()=>{var s,t;return{labels:(s=c.value)==null?void 0:s.versions.map(n=>n.version),datasets:[{backgroundColor:"#3B82F6",data:(t=c.value)==null?void 0:t.versions.map(n=>n.count)}]}}),x={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(s,t)=>{const n=d("Button"),f=d("Skeleton"),w=A,C=d("Chart"),D=I,p=d("Column"),T=d("DataTable");return r(),i("div",null,[v("div",z,[a(n,{label:"Versions",icon:"i-carbon-tag",class:"p-button-primary",disabled:!0}),a(n,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-secondary",onClick:t[0]||(t[0]=e=>("navigateTo"in s?s.navigateTo:o($))("/stats/weekly/"))})]),K,o(y)||!o(c)?(r(),i(u,{key:0},[a(f,{width:"15em"}),v("div",O,[(r(),i(u,null,h([30,25,45,70,90],(e,B)=>a(f,{key:B,width:"20%",height:e+"%",class:"mr-2"},null,8,["height"])),64))]),(r(!0),i(u,null,h(Array(10).keys(),e=>(r(),E(f,{key:e,class:"mt-4"}))),128))],64)):(r(),i(u,{key:1},[m(" Last updated "+_(o(g))+" ",1),a(w,{small:"",icon:"i-carbon-renew",onClick:t[1]||(t[1]=e=>o(k)())}),a(C,{type:"bar",data:o(U),options:x,style:{height:"400px"}},null,8,["data"]),a(T,{value:o(c).versions,"sort-field":"version",class:"p-datatable-sm","sort-order":-1},{default:l(()=>[a(p,{field:"version",header:"Version",sortable:!0},{body:l(({data:e})=>[a(D,{to:`/stats/${e.version}`},{default:l(()=>[m(_(e.version),1)]),_:2},1032,["to"])]),_:1}),a(p,{field:"firstUpdateInt",header:"From",sortable:!0},{body:l(e=>[m(_(e.data.firstUpdate.toLocaleString("de-DE")),1)]),_:1}),a(p,{field:"lastUpdateInt",header:"To",sortable:!0},{body:l(e=>[m(_(e.data.lastUpdate.toLocaleString("de-DE")),1)]),_:1}),a(p,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{J as default};
