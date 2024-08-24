import{_ as A}from"./Di6M3IAZ.js";import{q as R,t as V,aj as D,w as z,c as $,x as r,y as o,u as e,o as s,G as n,S as i,z as p,W as c,X as L,Y as W,A as C,P as x,Z as j,$ as q,_ as E}from"./BRJN9jhp.js";import{s as F,_ as G}from"./BSPYWazL.js";import{_ as H}from"./BGDbSDA0.js";import{u as K,a as N,b as Q}from"./CgSe5N8E.js";import{u as X}from"./DDzdE0Zh.js";import{T as Y}from"./CNOnH8V4.js";import{u as Z}from"./C0E1OaDl.js";import{_ as J}from"./DlAUqK2U.js";import"./cxMBJbHA.js";import"./Du8dWTfe.js";import"./C4zbuTsM.js";import"./DyTt1dCi.js";import"./C3Z7wtkX.js";const M=d=>(j("data-v-8620d926"),d=d(),q(),d),O=M(()=>C("h1",{class:"text-2xl font-bold mb-4"}," Securities ",-1)),U={class:"text-gray-500 separator-container font-mono mt-2"},S=20,tt=R({__name:"index",async setup(d){let l,g;const a=Z("page","1",{transform:Number});V({title:"Portfolio Report - Securities",link:[{rel:"canonical",href:`https://www.portfolio-report.net/securities?page=${a.value}`}]});const{data:u,status:P,refresh:T}=([l,g]=D(()=>K(`securities:page-${a.value}`,()=>X(`/v1/securities?page=${a.value}`))),l=await l,g(),l);async function I(w){a.value=w.page+1}return z(a,()=>{T()}),(w,v)=>{var k,y;const h=A,_=E,B=G,m=H,f=Y;return s(),$("div",null,[O,r(e(Q),{lazy:"",paginator:"",value:(k=e(u))==null?void 0:k.data,loading:e(P)==="pending","total-records":(y=e(u))==null?void 0:y.count,rows:S,first:(e(a)-1)*S,"paginator-template":"CurrentPageReport","current-page-report-template":"Showing {first} to {last} of {totalRecords} securities","striped-rows":"",onPage:v[0]||(v[0]=t=>I(t))},{paginatorstart:o(()=>[e(a)>1?(s(),n(_,{key:0,to:`/securities?page=${e(a)-1}`},{default:o(()=>[r(h,{solid:"",label:"Previous"})]),_:1},8,["to"])):i("",!0)]),paginatorend:o(()=>{var t;return[e(a)!==((t=e(u))==null?void 0:t.pages)?(s(),n(_,{key:0,to:`/securities?page=${e(a)+1}`},{default:o(()=>[r(h,{solid:"",label:"Next"})]),_:1},8,["to"])):i("",!0)]}),default:o(()=>[r(e(N),{field:"name",header:"Name"},{body:o(({data:t})=>[r(_,{to:`/securities/${t.uuid}`,class:"text-blue-500"},{default:o(()=>[p(c(t.name),1)]),_:2},1032,["to"]),(s(!0),$(L,null,W(t.tags,b=>(s(),n(B,{key:b,name:b},null,8,["name"]))),128)),C("div",U,[t.isin?x((s(),n(m,{key:0,text:t.isin},{default:o(()=>[p(c(t.isin),1)]),_:2},1032,["text"])),[[f,"ISIN",void 0,{top:!0}]]):i("",!0),t.wkn?x((s(),n(m,{key:1,text:t.wkn},{default:o(()=>[p(c(t.wkn),1)]),_:2},1032,["text"])),[[f,"WKN",void 0,{top:!0}]]):i("",!0),t.code?x((s(),n(m,{key:2,text:t.code},{default:o(()=>[p(c(t.code),1)]),_:2},1032,["text"])),[[f,"Code",void 0,{top:!0}]]):i("",!0)])]),_:1}),r(e(N),{field:"securityType",header:"Type"},{body:o(({data:t})=>[r(e(F),{class:"mx-1 p-1 !text-xs !bg-teal-500 !text-white"},{default:o(()=>[p(c(t.securityType),1)]),_:2},1024)]),_:1})]),_:1},8,["value","loading","total-records","first"])])}}}),ft=J(tt,[["__scopeId","data-v-8620d926"]]);export{ft as default};
