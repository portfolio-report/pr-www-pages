import x from"./DeEtQ5Oc.js";import D from"./CmyByfQe.js";import A from"./Cpw1LCxf.js";import $ from"./DbbmNKYp.js";import B from"./CEtEMeDh.js";import{h as V,F as k,R as w,S as R,r as S,c as T,l as F,x as c,J as E,T as N,m as e,q as n,t as P,u as i,i as q}from"./Dj8eBBZx.js";import{u as J}from"./CHiNJl-4.js";import{u as O}from"./DqfBqBqo.js";import{s as U}from"./Bbj-KQyD.js";import"./T7UzWOG1.js";import"./Cgsm9QlA.js";import"./CIGznWKT.js";import"./NEkz9BgX.js";import"./BFY63otf.js";import"./DFx4YNxV.js";import"./CRZlSIVa.js";import"./W449YruT.js";import"./CNYk7JQd.js";import"./DQG29Bm6.js";import"./CFj-Od8Y.js";import"./CLncZbvQ.js";import"./Dt5fh6fP.js";import"./DUyEM3q-.js";import"./eFmDASps.js";import"./Byr1bFkf.js";import"./BzcOQpdq.js";import"./CPbI0jLB.js";import"./BX4m0m4n.js";import"./b8ODyf5A.js";import"./B38yA_ui.js";const j={class:"flex items-center my-2"},z=c("label",{for:"checkboxAccumulated",class:"ml-2"},"Accumulated numbers",-1),Ct=V({__name:"[version]",async setup(G){var _;let u,d;const f=k(),{data:a,error:y}=([u,d]=w(()=>J(`stats:${f.params.version}`,()=>O(`/stats/updates/${f.params.version}`))),u=await u,d(),u);if(y.value||((_=a.value)==null?void 0:_.byCountry)==null||a.value.byDate==null)throw R({statusCode:404});const h={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},m=S(!1),v=T(()=>{var s;if(!((s=a.value)!=null&&s.byCountry))return{labels:[],datasets:[]};const r=[...a.value.byDate].sort((t,o)=>t.date.localeCompare(o.date));return{labels:r.map(t=>t.date),datasets:[{backgroundColor:"#3B82F6",borderColor:"#3B82F6",fill:!1,data:m.value?r.reduce((t,o)=>{const p=t.length>0?t[t.length-1]+o.count:o.count;return t.push(p),t},[]):r.map(t=>t.count)}]}});return(r,s)=>{const t=x,o=D,p=A,b=$,C=B;return P(),F("div",null,[c("h2",null,"Version Statistics for "+E((r._.provides[N]||r.$route).params.version),1),e(C,null,{default:n(()=>[e(b,{header:"By date"},{default:n(()=>{var l;return[e(i(U),{type:"line",data:i(v),options:h,style:{height:"400px"}},null,8,["data"]),c("div",j,[e(t,{modelValue:i(m),"onUpdate:modelValue":s[0]||(s[0]=g=>q(m)?m.value=g:null),binary:"","input-id":"checkboxAccumulated"},null,8,["modelValue"]),z]),e(p,{value:(l=i(a))==null?void 0:l.byDate,"sort-field":"date","sort-order":-1,class:"p-datatable-sm font-mono"},{default:n(()=>[e(o,{field:"date",header:"Date",sortable:!0}),e(o,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])]}),_:1}),e(b,{header:"By country"},{default:n(()=>{var l;return[e(p,{value:(l=i(a))==null?void 0:l.byCountry,"sort-field":"count","sort-order":-1,class:"p-datatable-sm font-mono"},{default:n(()=>[e(o,{field:"country",header:"Country",sortable:!0}),e(o,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])]}),_:1})]),_:1})])}}});export{Ct as default};
