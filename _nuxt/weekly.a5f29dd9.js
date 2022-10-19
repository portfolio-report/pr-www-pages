import{d as S,h as k,j as W,n as $,c,b as d,a as t,f as l,e as f,t as y,w,I as p,J as h,r as o,o as u,C as I,F as L}from"./entry.4a29625f.js";import{a as P}from"./asyncData.de0567e7.js";import{u as Y}from"./useApi.8dd354f0.js";import{u as j}from"./index.ba665648.js";const z={class:"p-buttonset"},E={class:"flex align-items-end",style:{height:"400px"}},K=S({__name:"weekly",setup(J){const r=k(new Date().getFullYear());W(r,()=>g());const _=k(),C=s=>{_.value.toggle(s)},v=k(new Date),x=j(v),{data:i,pending:D,refresh:g}=P(`statsWeeks:${r.value}`,async()=>{const s=await Y(`/stats/updates/weeks?year=${r.value}`);for(const e of s)e.firstUpdate&&(e.firstUpdate=new Date(e.firstUpdate)),e.lastUpdate&&(e.lastUpdate=new Date(e.lastUpdate));return v.value=new Date,{weeks:s.sort((e,n)=>e.week-n.week)}}),B=$(()=>{var s,e;return{labels:(s=i.value)==null?void 0:s.weeks.map(n=>n.week),datasets:[{backgroundColor:"#3B82F6",data:(e=i.value)==null?void 0:e.weeks.map(n=>n.count)}]}}),U={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(s,e)=>{const n=o("Button"),T=o("InputNumber"),V=o("OverlayPanel"),m=o("Skeleton"),A=o("TextBtn"),O=o("Chart"),b=o("Column"),N=o("DataTable");return u(),c("div",null,[d("div",z,[t(n,{label:"Versions",icon:"i-carbon-tag",class:"p-button-secondary",onClick:e[0]||(e[0]=a=>l(I)("/stats/"))}),t(n,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-primary",disabled:!0})]),d("h2",null,[f(" Weekly Statistics for "),d("a",{class:"cursor-pointer",onClick:C},y(r.value),1)]),t(V,{ref_key:"yearOverlay",ref:_,"show-close-icon":!0},{default:w(()=>[t(T,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=a=>r.value=a),"use-grouping":!1},null,8,["modelValue"])]),_:1},512),l(D)||!l(i)?(u(),c(p,{key:0},[t(m,{width:"15em"}),d("div",E,[(u(),c(p,null,h([30,25,45,70,90],(a,F)=>t(m,{key:F,width:"20%",height:a+"%",class:"mr-2"},null,8,["height"])),64))]),(u(!0),c(p,null,h(Array(10).keys(),a=>(u(),L(m,{key:a,class:"mt-4"}))),128))],64)):(u(),c(p,{key:1},[f(" Last updated "+y(l(x))+" ",1),t(A,{small:"",icon:"i-carbon-renew",onClick:e[2]||(e[2]=a=>l(g)())}),t(O,{type:"line",data:l(B),options:U,style:{height:"400px"}},null,8,["data"]),t(N,{value:l(i).weeks,"sort-field":"week",class:"p-datatable-sm","sort-order":-1},{default:w(()=>[t(b,{field:"week",header:"Week",sortable:!0},{body:w(a=>[f(y(a.data.week),1)]),_:1}),t(b,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{K as default};
