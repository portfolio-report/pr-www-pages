import B from"./Du690x8F.js";import T from"./hn3tARCs.js";import V from"./CxahRcJe.js";import k from"./DxJnftei.js";import w from"./CXvfQrf7.js";import N from"./eFVxIdEb.js";import P from"./B_F0H1qE.js";import R from"./BqaX5ByV.js";import{h as S,D as z,M as E,N as F,r as q,c as G,l as L,x as d,G as M,P as O,m as t,q as o,t as U,v as h,u as i,i as j}from"./C-DAi4iE.js";import{u as H}from"./xQifVdZG.js";import{u as I}from"./CnxCSkJ8.js";import{s as J}from"./BcDS696c.js";import"./CNl6Fhm2.js";import"./C8sftSVe.js";import"./Bf2PzmqE.js";import"./Z54PIhmM.js";import"./FC1tMGqU.js";import"./BbMGFCCg.js";import"./2-2MqEYE.js";import"./GTsObHz_.js";import"./DE0D7TOg.js";import"./BHBbgVXf.js";import"./Ds87hRWV.js";import"./UcpHpg-y.js";import"./xMY87BDV.js";import"./CigGDnp8.js";import"./CkIvP8yU.js";import"./9KR7Z2b5.js";import"./D0gb_MS-.js";import"./CJvQCPkl.js";import"./HWUeVG1l.js";import"./D_j1Qpqw.js";import"./E3tkmLOe.js";import"./sGFJxgu5.js";import"./DuCCLXZx.js";import"./CIlAfroq.js";import"./nJJ7mlYw.js";import"./CwQYZvff.js";const K={class:"flex items-center my-2"},Q=d("label",{for:"checkboxAccumulated",class:"ml-2"},"Accumulated numbers",-1),zt=S({__name:"[version]",async setup(W){var b;let u,f;const _=z(),{data:a,error:C}=([u,f]=E(()=>H(`stats:${_.params.version}`,()=>I(`/stats/updates/${_.params.version}`))),u=await u,f(),u);if(C.value||((b=a.value)==null?void 0:b.byCountry)==null||a.value.byDate==null)throw F({statusCode:404});const D={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},m=q(!1),x=G(()=>{var l;if(!((l=a.value)!=null&&l.byCountry))return{labels:[],datasets:[]};const r=[...a.value.byDate].sort((e,s)=>e.date.localeCompare(s.date));return{labels:r.map(e=>e.date),datasets:[{backgroundColor:"#3B82F6",borderColor:"#3B82F6",fill:!1,data:m.value?r.reduce((e,s)=>{const c=e.length>0?e[e.length-1]+s.count:s.count;return e.push(c),e},[]):r.map(e=>e.count)}]}});return(r,l)=>{const e=B,s=T,c=V,p=k,y=w,v=N,$=P,g=R;return U(),L("div",null,[d("h2",null,"Version Statistics for "+M((r._.provides[O]||r.$route).params.version),1),t(g,{value:"byDate"},{default:o(()=>[t(s,null,{default:o(()=>[t(e,{value:"byDate"},{default:o(()=>[h(" By date ")]),_:1}),t(e,{value:"byCountry"},{default:o(()=>[h(" By country ")]),_:1})]),_:1}),t($,null,{default:o(()=>[t(v,{value:"byDate"},{default:o(()=>{var n;return[t(i(J),{type:"line",data:i(x),options:D,style:{height:"400px"}},null,8,["data"]),d("div",K,[t(c,{modelValue:i(m),"onUpdate:modelValue":l[0]||(l[0]=A=>j(m)?m.value=A:null),binary:"","input-id":"checkboxAccumulated"},null,8,["modelValue"]),Q]),t(y,{value:(n=i(a))==null?void 0:n.byDate,"sort-field":"date","sort-order":-1,class:"font-mono",size:"small"},{default:o(()=>[t(p,{field:"date",header:"Date",sortable:!0}),t(p,{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])]}),_:1}),t(v,{value:"byCountry"},{default:o(()=>{var n;return[t(y,{value:(n=i(a))==null?void 0:n.byCountry,"sort-field":"count","sort-order":-1,class:"font-mono",size:"small"},{default:o(()=>[t(p,{field:"country",header:"Country",sortable:!0}),t(p,{field:"count",header:"Count",sortable:!0,class:"!text-right"})]),_:1},8,["value"])]}),_:1})]),_:1})]),_:1})])}}});export{zt as default};
