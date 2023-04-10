import{u as v}from"./asyncData.1f1e9164.js";import{d as D,D as g,M as w,N as B,n as x,c as T,b as V,t as A,a as e,w as r,r as n,o as k,f as c}from"./entry.e3cccbc3.js";import{u as N}from"./useApi.9161e839.js";const P=D({__name:"[version]",async setup(S){var m;let l,i;const p=g(),{data:a,error:b}=([l,i]=w(()=>v(`stats:${p.params.version}`,()=>N(`/stats/updates/${p.params.version}`))),l=await l,i(),l);if(b.value||((m=a.value)==null?void 0:m.byCountry)==null||a.value.byDate==null)throw B({statusCode:404});const y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}},h=x(()=>{var d;if(!((d=a.value)!=null&&d.byCountry))return{labels:[],datasets:[]};const u=[...a.value.byDate].sort((t,o)=>t.date.localeCompare(o.date));return{labels:u.map(t=>t.date),datasets:[{backgroundColor:"#3B82F6",borderColor:"#3B82F6",fill:!1,data:u.map(t=>t.count)}]}});return(u,d)=>{const t=n("Chart"),o=n("Column"),f=n("DataTable"),_=n("TabPanel"),C=n("TabView");return k(),T("div",null,[V("h2",null,"Version Statistics for "+A(u.$route.params.version),1),e(C,null,{default:r(()=>[e(_,{header:"By date"},{default:r(()=>{var s;return[e(t,{type:"line",data:c(h),options:y,style:{height:"400px"}},null,8,["data"]),e(f,{value:(s=c(a))==null?void 0:s.byDate,"sort-field":"date","sort-order":-1,class:"p-datatable-sm"},{default:r(()=>[e(o,{field:"date",header:"Date",sortable:!0}),e(o,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])]}),_:1}),e(_,{header:"By country"},{default:r(()=>{var s;return[e(f,{value:(s=c(a))==null?void 0:s.byCountry,"sort-field":"count","sort-order":-1,class:"p-datatable-sm"},{default:r(()=>[e(o,{field:"country",header:"Country",sortable:!0}),e(o,{field:"count",header:"Count",sortable:!0,class:"text-right"})]),_:1},8,["value"])]}),_:1})]),_:1})])}}});export{P as default};
