import{_ as V}from"./CnImWuSS.js";import{q as D,c as $,W as _,u as e,r as F,j as p,x as a,y as r,A as x,X as u,Y as g,z as U,h as i,G as Y,F as I,_ as L}from"./Ct_f5JLT.js";import{u as N}from"./DzqaZX8t.js";import{c as z,a as c,b as W}from"./BEr4Db5E.js";import{u as H}from"./dvt8dKfL.js";import{a as M}from"./LBfzC6jd.js";import{a as k}from"./BcF4ZRRZ.js";import{s as S,a as f}from"./D4bHHUQT.js";import{s as X}from"./DkTk4tqC.js";import"./DlAUqK2U.js";import"./DY11Gepc.js";const j=D({__name:"Date",props:{value:{}},setup(v){const d=v,m=$(()=>new Date(d.value)),n=N(m.value,"YYYY-MM-DD HH:mm:ss");return(y,b)=>_(e(n))}}),q={class:"flex items-end",style:{height:"400px"}},at=D({__name:"index",setup(v){const d=F(new Date),m=M(d),{data:n,pending:y,refresh:b}=z(async()=>{const o=await H("/stats/updates");for(const t of o)t.firstUpdate&&(t.firstUpdate=new Date(t.firstUpdate),t.firstUpdateInt=t.firstUpdate.getTime()),t.lastUpdate&&(t.lastUpdate=new Date(t.lastUpdate),t.lastUpdateInt=t.lastUpdate.getTime());return d.value=new Date,{versions:o}},"$AU7PyxXx3W"),w=$(()=>{var o,t;return{labels:(o=n.value)==null?void 0:o.versions.map(l=>l.version),datasets:[{backgroundColor:"#3B82F6",data:(t=n.value)==null?void 0:t.versions.map(l=>l.count)}]}}),A={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};function T(o){I(o)}return(o,t)=>{const l=V,B=L,h=j;return i(),p("div",null,[a(e(S),null,{default:r(()=>[a(e(k),{label:"Versions",icon:"i-carbon-tag",class:"p-button-primary",disabled:!0}),a(e(k),{label:"Weekly",icon:"i-carbon-calendar",class:"p-button-secondary",onClick:t[0]||(t[0]=s=>T("/stats/weekly"))})]),_:1}),t[2]||(t[2]=x("h2",null,"Version Statistics",-1)),e(y)||!e(n)?(i(),p(u,{key:0},[a(e(f),{width:"15em"}),x("div",q,[(i(),p(u,null,g([30,25,45,70,90],(s,C)=>a(e(f),{key:C,width:"20%",height:`${s}%`,class:"mr-2"},null,8,["height"])),64))]),(i(!0),p(u,null,g(Array(10).keys(),s=>(i(),Y(e(f),{key:s,class:"mt-4"}))),128))],64)):(i(),p(u,{key:1},[U(" Last updated "+_(e(m))+" ",1),a(l,{small:"",icon:"i-carbon-renew",onClick:t[1]||(t[1]=s=>e(b)())}),a(e(X),{type:"bar",data:e(w),options:A,style:{height:"400px"}},null,8,["data"]),a(e(W),{value:e(n).versions,"sort-field":"version",class:"font-mono",size:"small","sort-order":-1},{default:r(()=>[a(e(c),{field:"version",header:"Version",sortable:!0},{body:r(({data:s})=>[a(B,{to:`/stats/${s.version}`,class:"text-blue-500"},{default:r(()=>[U(_(s.version),1)]),_:2},1032,["to"])]),_:1}),a(e(c),{field:"firstUpdateInt",header:"From",sortable:!0},{body:r(s=>[a(h,{value:s.data.firstUpdate},null,8,["value"])]),_:1}),a(e(c),{field:"lastUpdateInt",header:"To",sortable:!0},{body:r(s=>[a(h,{value:s.data.lastUpdate},null,8,["value"])]),_:1}),a(e(c),{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])],64))])}}});export{at as default};
