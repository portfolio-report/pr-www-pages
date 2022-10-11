import{d as A,h as L,n as S,o as r,c as i,b,a,f as s,I as u,J as v,e as m,t as _,w as d,r as l,C as V,F as I,_ as F}from"./entry.49bc9768.js";import{a as N}from"./asyncData.3ae7452f.js";import{u as $}from"./useApi.15294794.js";import{u as E}from"./index.8517c8c9.js";const W={class:"p-buttonset"},z=b("h2",null,"Version Statistics",-1),J={class:"flex align-items-end",style:{height:"400px"}},q=A({__name:"index",setup(O){const h=L(new Date),y=E(h),{data:c,pending:g,refresh:k}=N(async()=>{const n=await $("/stats/updates");for(const t of n)t.firstUpdate&&(t.firstUpdate=new Date(t.firstUpdate),t.firstUpdateInt=t.firstUpdate.getTime()),t.lastUpdate&&(t.lastUpdate=new Date(t.lastUpdate),t.lastUpdateInt=t.lastUpdate.getTime());return h.value=new Date,{versions:n}},"$AU7PyxXx3W"),U=S(()=>{var n,t;return{labels:(n=c.value)==null?void 0:n.versions.map(o=>o.version),datasets:[{backgroundColor:"#3B82F6",data:(t=c.value)==null?void 0:t.versions.map(o=>o.count)}]}}),x={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(n,t)=>{const o=l("Button"),f=l("Skeleton"),C=l("TextBtn"),w=l("Chart"),D=F,p=l("Column"),T=l("DataTable");return r(),i("div",null,[b("div",W,[a(o,{label:"Versions",icon:"i-carbon-tag",class:"p-button-primary",disabled:!0}),a(o,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-secondary",onClick:t[0]||(t[0]=e=>s(V)("/stats/weekly/"))})]),z,s(g)||!s(c)?(r(),i(u,{key:0},[a(f,{width:"15em"}),b("div",J,[(r(),i(u,null,v([30,25,45,70,90],(e,B)=>a(f,{key:B,width:"20%",height:e+"%",class:"mr-2"},null,8,["height"])),64))]),(r(!0),i(u,null,v(Array(10).keys(),e=>(r(),I(f,{key:e,class:"mt-4"}))),128))],64)):(r(),i(u,{key:1},[m(" Last updated "+_(s(y))+" ",1),a(C,{small:"",icon:"i-carbon-renew",onClick:t[1]||(t[1]=e=>s(k)())}),a(w,{type:"bar",data:s(U),options:x,style:{height:"400px"}},null,8,["data"]),a(T,{value:s(c).versions,"sort-field":"version",class:"p-datatable-sm","sort-order":-1},{default:d(()=>[a(p,{field:"version",header:"Version",sortable:!0},{body:d(({data:e})=>[a(D,{to:`/stats/${e.version}`},{default:d(()=>[m(_(e.version),1)]),_:2},1032,["to"])]),_:1}),a(p,{field:"firstUpdateInt",header:"From",sortable:!0},{body:d(e=>[m(_(e.data.firstUpdate.toLocaleString("de-DE")),1)]),_:1}),a(p,{field:"lastUpdateInt",header:"To",sortable:!0},{body:d(e=>[m(_(e.data.lastUpdate.toLocaleString("de-DE")),1)]),_:1}),a(p,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{q as default};
