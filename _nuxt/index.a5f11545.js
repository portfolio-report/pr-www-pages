import{_ as A}from"./TextBtn.fb99fcce.js";import{_ as L}from"./nuxt-link.48655d4c.js";import{a as S}from"./asyncData.fd837d22.js";import{d as V,h as $,n as I,r as i,c as l,b as v,a,f as o,I as u,J as h,e as m,t as _,w as d,o as r,B as N,G as E}from"./entry.7b347a18.js";import{u as F}from"./useApi.2da3ca22.js";import{u as W}from"./index.a4b3ff71.js";import"./_plugin-vue_export-helper.c27b6911.js";const z={class:"p-buttonset"},G=v("h2",null,"Version Statistics",-1),J={class:"flex align-items-end",style:{height:"400px"}},M=V({__name:"index",setup(O){const b=$(new Date),g=W(b),{data:c,pending:y,refresh:k}=S(async()=>{const s=await F("/stats/updates");for(const t of s)t.firstUpdate&&(t.firstUpdate=new Date(t.firstUpdate),t.firstUpdateInt=t.firstUpdate.getTime()),t.lastUpdate&&(t.lastUpdate=new Date(t.lastUpdate),t.lastUpdateInt=t.lastUpdate.getTime());return b.value=new Date,{versions:s}},"$AU7PyxXx3W"),U=I(()=>{var s,t;return{labels:(s=c.value)==null?void 0:s.versions.map(n=>n.version),datasets:[{backgroundColor:"#3B82F6",data:(t=c.value)==null?void 0:t.versions.map(n=>n.count)}]}}),x={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(s,t)=>{const n=i("Button"),f=i("Skeleton"),w=A,C=i("Chart"),D=L,p=i("Column"),T=i("DataTable");return r(),l("div",null,[v("div",z,[a(n,{label:"Versions",icon:"i-carbon-tag",class:"p-button-primary",disabled:!0}),a(n,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-secondary",onClick:t[0]||(t[0]=e=>("navigateTo"in s?s.navigateTo:o(N))("/stats/weekly/"))})]),G,o(y)||!o(c)?(r(),l(u,{key:0},[a(f,{width:"15em"}),v("div",J,[(r(),l(u,null,h([30,25,45,70,90],(e,B)=>a(f,{key:B,width:"20%",height:`${e}%`,class:"mr-2"},null,8,["height"])),64))]),(r(!0),l(u,null,h(Array(10).keys(),e=>(r(),E(f,{key:e,class:"mt-4"}))),128))],64)):(r(),l(u,{key:1},[m(" Last updated "+_(o(g))+" ",1),a(w,{small:"",icon:"i-carbon-renew",onClick:t[1]||(t[1]=e=>o(k)())}),a(C,{type:"bar",data:o(U),options:x,style:{height:"400px"}},null,8,["data"]),a(T,{value:o(c).versions,"sort-field":"version",class:"p-datatable-sm","sort-order":-1},{default:d(()=>[a(p,{field:"version",header:"Version",sortable:!0},{body:d(({data:e})=>[a(D,{to:`/stats/${e.version}`},{default:d(()=>[m(_(e.version),1)]),_:2},1032,["to"])]),_:1}),a(p,{field:"firstUpdateInt",header:"From",sortable:!0},{body:d(e=>[m(_(e.data.firstUpdate.toLocaleString("de-DE")),1)]),_:1}),a(p,{field:"lastUpdateInt",header:"To",sortable:!0},{body:d(e=>[m(_(e.data.lastUpdate.toLocaleString("de-DE")),1)]),_:1}),a(p,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{M as default};
