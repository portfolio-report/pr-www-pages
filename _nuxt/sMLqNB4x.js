import{_ as V}from"./DjajGpnH.js";import{h as A,j as L,M as E,w as F,E as H,l as C,m as i,q as e,u as r,t as a,B as s,F as p,v as n,G as m,H as K,I as j,x as $,J as x,K as q,L as z,_ as G}from"./BeTAzwAv.js";import{_ as J}from"./Coa-UXUK.js";import{_ as M}from"./DDCkeLuD.js";import Q from"./Bor6U50d.js";import W from"./BmDirCA3.js";import O from"./JLHcNFJA.js";import{u as U}from"./DTIfUcLX.js";import{u as X}from"./D4Fiw7j-.js";import{u as Y}from"./gmgnma9J.js";import{_ as Z}from"./DlAUqK2U.js";import"./CZhFSx6c.js";import"./C3mLP0lt.js";import"./D9c5O5eY.js";import"./Folm-EQ-.js";import"./B6jGzkBm.js";import"./DKoil16r.js";import"./lAQCNr8J.js";import"./3BFghbVf.js";import"./BRzx1G--.js";import"./BXksNWDu.js";import"./f4fcV7kE.js";import"./CffZ1U4I.js";import"./CotlX5ub.js";import"./D3b-rPgq.js";import"./Dw3iRmf_.js";import"./NI3ATyxi.js";import"./DI2xaR4V.js";import"./B7-i7-Ch.js";import"./DTQnk4CU.js";import"./B5swX5Og.js";import"./BtOYg4C_.js";import"./BMhGZG8K.js";import"./Dr3deYh8.js";import"./D0rmquXk.js";import"./CuLwHhsd.js";import"./DGJxJ-Iu.js";import"./CSLGR3Mf.js";import"./BYtPwx8j.js";import"./DUcOCb5I.js";import"./BlX3XweD.js";const tt=c=>(q("data-v-669b6d05"),c=c(),z(),c),et=tt(()=>$("h1",{class:"text-2xl font-bold mb-4"}," Securities ",-1)),ot={class:"text-gray-500 separator-container font-mono mt-2"},S=20,rt=A({__name:"index",async setup(c){let l,g;const o=Y("page","1",{transform:Number});L({title:"Portfolio Report - Securities",link:[{rel:"canonical",href:`https://www.portfolio-report.net/securities?page=${o.value}`}]});const{data:_,status:T,refresh:I}=([l,g]=E(()=>U(`securities:page-${o.value}`,()=>X(`/v1/securities?page=${o.value}`))),l=await l,g(),l);async function P(v){o.value=v.page+1}return F(o,()=>{I()}),(v,w)=>{var b,y;const h=V,d=G,B=J,u=M,k=Q,D=W,R=O,f=H("tooltip");return a(),C("div",null,[et,i(R,{lazy:"",paginator:"",value:(b=r(_))==null?void 0:b.data,loading:r(T)==="pending","total-records":(y=r(_))==null?void 0:y.count,rows:S,first:(r(o)-1)*S,"paginator-template":"CurrentPageReport","current-page-report-template":"Showing {first} to {last} of {totalRecords} securities","striped-rows":"",onPage:w[0]||(w[0]=t=>P(t))},{paginatorstart:e(()=>[r(o)>1?(a(),s(d,{key:0,to:`/securities?page=${r(o)-1}`},{default:e(()=>[i(h,{solid:"",label:"Previous"})]),_:1},8,["to"])):p("",!0)]),paginatorend:e(()=>{var t;return[r(o)!==((t=r(_))==null?void 0:t.pages)?(a(),s(d,{key:0,to:`/securities?page=${r(o)+1}`},{default:e(()=>[i(h,{solid:"",label:"Next"})]),_:1},8,["to"])):p("",!0)]}),default:e(()=>[i(k,{field:"name",header:"Name"},{body:e(({data:t})=>[i(d,{to:`/securities/${t.uuid}`,class:"text-blue-500"},{default:e(()=>[n(m(t.name),1)]),_:2},1032,["to"]),(a(!0),C(K,null,j(t.tags,N=>(a(),s(B,{key:N,name:N},null,8,["name"]))),128)),$("div",ot,[t.isin?x((a(),s(u,{key:0,text:t.isin},{default:e(()=>[n(m(t.isin),1)]),_:2},1032,["text"])),[[f,"ISIN",void 0,{top:!0}]]):p("",!0),t.wkn?x((a(),s(u,{key:1,text:t.wkn},{default:e(()=>[n(m(t.wkn),1)]),_:2},1032,["text"])),[[f,"WKN",void 0,{top:!0}]]):p("",!0),t.code?x((a(),s(u,{key:2,text:t.code},{default:e(()=>[n(m(t.code),1)]),_:2},1032,["text"])),[[f,"Code",void 0,{top:!0}]]):p("",!0)])]),_:1}),i(k,{field:"securityType",header:"Type"},{body:e(({data:t})=>[i(D,{class:"mx-1 p-1 !text-xs !bg-teal-500 !text-white"},{default:e(()=>[n(m(t.securityType),1)]),_:2},1024)]),_:1})]),_:1},8,["value","loading","total-records","first"])])}}}),Jt=Z(rt,[["__scopeId","data-v-669b6d05"]]);export{Jt as default};
