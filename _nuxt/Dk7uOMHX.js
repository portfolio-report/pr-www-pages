import V from"./E3tkmLOe.js";import I from"./N_pTd20x.js";import{_ as F}from"./DzahQEgd.js";import{h as k,c as D,G as f,u as a,r as L,l as p,x as v,m as e,H as d,I as x,v as U,q as l,t as i,A as N,B as Y,_ as H}from"./C-DAi4iE.js";import S from"./DxJnftei.js";import{u as z}from"./el-X5MaW.js";import M from"./CXvfQrf7.js";import{a as W}from"./xQifVdZG.js";import{u as q}from"./CnxCSkJ8.js";import{s as E}from"./BcDS696c.js";import{a as G}from"./CXHsRiEg.js";import"./Z54PIhmM.js";import"./sGFJxgu5.js";import"./DlAUqK2U.js";import"./FC1tMGqU.js";import"./BbMGFCCg.js";import"./2-2MqEYE.js";import"./GTsObHz_.js";import"./DE0D7TOg.js";import"./BHBbgVXf.js";import"./Ds87hRWV.js";import"./UcpHpg-y.js";import"./xMY87BDV.js";import"./CigGDnp8.js";import"./CkIvP8yU.js";import"./9KR7Z2b5.js";import"./D0gb_MS-.js";import"./CJvQCPkl.js";import"./HWUeVG1l.js";import"./C8sftSVe.js";import"./D_j1Qpqw.js";import"./CxahRcJe.js";import"./Bf2PzmqE.js";import"./DuCCLXZx.js";import"./CIlAfroq.js";import"./nJJ7mlYw.js";import"./CwQYZvff.js";const O=k({__name:"Date",props:{value:{}},setup(h){const m=h,u=D(()=>new Date(m.value)),r=z(u.value,"YYYY-MM-DD HH:mm:ss");return(y,b)=>f(a(r))}}),P={class:"p-buttonset"},R=v("h2",null,"Version Statistics",-1),X={class:"flex items-end",style:{height:"400px"}},It=k({__name:"index",setup(h){const m=L(new Date),u=G(m),{data:r,pending:y,refresh:b}=W(async()=>{const s=await q("/stats/updates");for(const t of s)t.firstUpdate&&(t.firstUpdate=new Date(t.firstUpdate),t.firstUpdateInt=t.firstUpdate.getTime()),t.lastUpdate&&(t.lastUpdate=new Date(t.lastUpdate),t.lastUpdateInt=t.lastUpdate.getTime());return m.value=new Date,{versions:s}},"$AU7PyxXx3W"),w=D(()=>{var s,t;return{labels:(s=r.value)==null?void 0:s.versions.map(n=>n.version),datasets:[{backgroundColor:"#3B82F6",data:(t=r.value)==null?void 0:t.versions.map(n=>n.count)}]}}),T={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(s,t)=>{const n=V,_=I,$=F,A=H,c=S,g=O,B=M;return i(),p("div",null,[v("div",P,[e(n,{label:"Versions",icon:"i-carbon-tag",class:"p-button-primary",disabled:!0}),e(n,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-secondary",onClick:t[0]||(t[0]=o=>("navigateTo"in s?s.navigateTo:a(N))("/stats/weekly/"))})]),R,a(y)||!a(r)?(i(),p(d,{key:0},[e(_,{width:"15em"}),v("div",X,[(i(),p(d,null,x([30,25,45,70,90],(o,C)=>e(_,{key:C,width:"20%",height:`${o}%`,class:"mr-2"},null,8,["height"])),64))]),(i(!0),p(d,null,x(Array(10).keys(),o=>(i(),Y(_,{key:o,class:"mt-4"}))),128))],64)):(i(),p(d,{key:1},[U(" Last updated "+f(a(u))+" ",1),e($,{small:"",icon:"i-carbon-renew",onClick:t[1]||(t[1]=o=>a(b)())}),e(a(E),{type:"bar",data:a(w),options:T,style:{height:"400px"}},null,8,["data"]),e(B,{value:a(r).versions,"sort-field":"version",class:"font-mono",size:"small","sort-order":-1},{default:l(()=>[e(c,{field:"version",header:"Version",sortable:!0},{body:l(({data:o})=>[e(A,{to:`/stats/${o.version}`,class:"text-blue-500"},{default:l(()=>[U(f(o.version),1)]),_:2},1032,["to"])]),_:1}),e(c,{field:"firstUpdateInt",header:"From",sortable:!0},{body:l(o=>[e(g,{value:o.data.firstUpdate},null,8,["value"])]),_:1}),e(c,{field:"lastUpdateInt",header:"To",sortable:!0},{body:l(o=>[e(g,{value:o.data.lastUpdate},null,8,["value"])]),_:1}),e(c,{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])],64))])}}});export{It as default};
