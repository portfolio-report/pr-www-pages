import V from"./DRsAggwH.js";import L from"./BnDEHFto.js";import{_ as F}from"./v6cjTu0q.js";import{h as x,c as D,J as f,u as o,r as I,l as p,x as v,m as e,K as d,L as U,v as k,q as l,t as i,A as N,H as Y,_ as H}from"./BGiO7zQw.js";import S from"./BcTmlemJ.js";import{u as M}from"./YIsGGZA_.js";import W from"./BfoI1gDv.js";import{a as q}from"./nk3lBDBD.js";import{u as z}from"./YRORligW.js";import{s as E}from"./DMzXsRwu.js";import{a as J}from"./3dVoIFgL.js";import"./C_WQoFeu.js";import"./99ucK42n.js";import"./DlAUqK2U.js";import"./DgAL07md.js";import"./D3q9xhJO.js";import"./Ded2R-Za.js";import"./BmUiErYL.js";import"./D6Sc5A3y.js";import"./DSrISKJ_.js";import"./CEBooXCk.js";import"./DIyoiqnI.js";import"./DvdOgAKu.js";import"./CugDv2gZ.js";import"./BZ9OIGSu.js";import"./ZB6oP4Aj.js";import"./BNcXjh92.js";import"./_Eb_cAaY.js";import"./BfEFFRQZ.js";import"./Dwj_aWcc.js";import"./aghpzbe_.js";import"./CMKqPOxl.js";const K=x({__name:"Date",props:{value:{}},setup(h){const m=h,u=D(()=>new Date(m.value)),r=M(u.value,"YYYY-MM-DD HH:mm:ss");return(y,b)=>f(o(r))}}),O={class:"p-buttonset"},P=v("h2",null,"Version Statistics",-1),R={class:"flex align-items-end",style:{height:"400px"}},$t=x({__name:"index",setup(h){const m=I(new Date),u=J(m),{data:r,pending:y,refresh:b}=q(async()=>{const s=await z("/stats/updates");for(const t of s)t.firstUpdate&&(t.firstUpdate=new Date(t.firstUpdate),t.firstUpdateInt=t.firstUpdate.getTime()),t.lastUpdate&&(t.lastUpdate=new Date(t.lastUpdate),t.lastUpdateInt=t.lastUpdate.getTime());return m.value=new Date,{versions:s}},"$AU7PyxXx3W"),w=D(()=>{var s,t;return{labels:(s=r.value)==null?void 0:s.versions.map(n=>n.version),datasets:[{backgroundColor:"#3B82F6",data:(t=r.value)==null?void 0:t.versions.map(n=>n.count)}]}}),T={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(s,t)=>{const n=V,_=L,$=F,A=H,c=S,g=K,B=W;return i(),p("div",null,[v("div",O,[e(n,{label:"Versions",icon:"i-carbon-tag",class:"p-button-primary",disabled:!0}),e(n,{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-secondary",onClick:t[0]||(t[0]=a=>("navigateTo"in s?s.navigateTo:o(N))("/stats/weekly/"))})]),P,o(y)||!o(r)?(i(),p(d,{key:0},[e(_,{width:"15em"}),v("div",R,[(i(),p(d,null,U([30,25,45,70,90],(a,C)=>e(_,{key:C,width:"20%",height:`${a}%`,class:"mr-2"},null,8,["height"])),64))]),(i(!0),p(d,null,U(Array(10).keys(),a=>(i(),Y(_,{key:a,class:"mt-4"}))),128))],64)):(i(),p(d,{key:1},[k(" Last updated "+f(o(u))+" ",1),e($,{small:"",icon:"i-carbon-renew",onClick:t[1]||(t[1]=a=>o(b)())}),e(o(E),{type:"bar",data:o(w),options:T,style:{height:"400px"}},null,8,["data"]),e(B,{value:o(r).versions,"sort-field":"version",class:"p-datatable-sm font-mono","sort-order":-1},{default:l(()=>[e(c,{field:"version",header:"Version",sortable:!0},{body:l(({data:a})=>[e(A,{to:`/stats/${a.version}`},{default:l(()=>[k(f(a.version),1)]),_:2},1032,["to"])]),_:1}),e(c,{field:"firstUpdateInt",header:"From",sortable:!0},{body:l(a=>[e(g,{value:a.data.firstUpdate},null,8,["value"])]),_:1}),e(c,{field:"lastUpdateInt",header:"To",sortable:!0},{body:l(a=>[e(g,{value:a.data.lastUpdate},null,8,["value"])]),_:1}),e(c,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])],64))])}}});export{$t as default};
