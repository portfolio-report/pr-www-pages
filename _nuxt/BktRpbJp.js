import{_ as L}from"./CCkiNjHz.js";import{a as S}from"./Ct5OasH8.js";import{u as W}from"./3W3hMwcY.js";import{h as F,r as f,w as I,c as P,l as r,m as u,x as p,q as t,u as n,v as k,J as y,s as _,K as d,L as b,t as i,A as R,i as Y,H as q}from"./BZQDUFb1.js";import{a as z}from"./KR7i51cn.js";import"./DlAUqK2U.js";import"./Bp9Ue7t3.js";const E={class:"p-buttonset"},H={class:"flex align-items-end",style:{height:"400px"}},ee=F({__name:"weekly",setup(J){const l=f(new Date().getFullYear()),w=f();function C(a){w.value.toggle(a)}const g=f(new Date),D=z(g),{data:c,pending:x,refresh:v}=S(`statsWeeks:${l.value}`,async()=>{const a=await W(`/stats/updates/weeks?year=${l.value}`);for(const e of a)e.firstUpdate&&(e.firstUpdate=new Date(e.firstUpdate)),e.lastUpdate&&(e.lastUpdate=new Date(e.lastUpdate));return g.value=new Date,{weeks:a.sort((e,o)=>e.week-o.week)}});I(l,()=>v());const B=P(()=>{var a,e;return{labels:(a=c.value)==null?void 0:a.weeks.map(o=>o.week),datasets:[{backgroundColor:"#3B82F6",data:(e=c.value)==null?void 0:e.weeks.map(o=>o.count)}]}}),T={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(a,e)=>{const o=r("Button"),U=r("InputNumber"),A=r("OverlayPanel"),m=r("Skeleton"),V=L,O=r("Chart"),h=r("Column"),N=r("DataTable");return i(),u("div",null,[p("div",E,[t(o,{label:"Versions",icon:"i-carbon-tag",class:"p-button-secondary",onClick:e[0]||(e[0]=s=>("navigateTo"in a?a.navigateTo:n(R))("/stats/"))}),t(o,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-primary",disabled:!0})]),p("h2",null,[k(" Weekly Statistics for "),p("a",{class:"cursor-pointer",onClick:C},y(n(l)),1)]),t(A,{ref_key:"yearOverlay",ref:w,"show-close-icon":!0},{default:_(()=>[t(U,{modelValue:n(l),"onUpdate:modelValue":e[1]||(e[1]=s=>Y(l)?l.value=s:null),"use-grouping":!1},null,8,["modelValue"])]),_:1},512),n(x)||!n(c)?(i(),u(d,{key:0},[t(m,{width:"15em"}),p("div",H,[(i(),u(d,null,b([30,25,45,70,90],(s,$)=>t(m,{key:$,width:"20%",height:`${s}%`,class:"mr-2"},null,8,["height"])),64))]),(i(!0),u(d,null,b(Array(10).keys(),s=>(i(),q(m,{key:s,class:"mt-4"}))),128))],64)):(i(),u(d,{key:1},[k(" Last updated "+y(n(D))+" ",1),t(V,{small:"",icon:"i-carbon-renew",onClick:e[2]||(e[2]=s=>n(v)())}),t(O,{type:"line",data:n(B),options:T,style:{height:"400px"}},null,8,["data"]),t(N,{value:n(c).weeks,"sort-field":"week",class:"p-datatable-sm","sort-order":-1},{default:_(()=>[t(h,{field:"week",header:"Week",sortable:!0},{body:_(s=>[k(y(s.data.week),1)]),_:1}),t(h,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{ee as default};
