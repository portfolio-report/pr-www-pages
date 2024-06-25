import Q from"./Bg4WFF5-.js";import W from"./DAuxm1mA.js";import{h as B,t as e,l as r,m as _,x as a,r as y,B as G,p as X,C as Z,c as ee,j as te,A as oe,D as ne,q as c,u as p,E as k,F as b,s as ae,v as n,z as se,i as P,G as x,H as $,I,J as U,_ as re,K as le,L as ue}from"./D399HoNm.js";import ce from"./BiQtZ5ll.js";import ie from"./ByuJDA-7.js";import pe from"./DKgxs8Xg.js";import me from"./DSEFSccP.js";import{_ as de}from"./B89llpii.js";import{u as fe}from"./C4YF6AvA.js";import{u as j}from"./53eAhNHo.js";import{_ as _e}from"./DlAUqK2U.js";import"./BSKXPRUV.js";import"./D4-_RxJf.js";import"./PeV9nOVC.js";import"./B95e2ZJl.js";import"./C2zPWAAQ.js";import"./CO9KQ_fV.js";import"./DeFYIBVm.js";const ye={class:"p-float-label"},he=a("label",null,"Security Type",-1),ve=B({__name:"SelectSecurityType",props:{modelValue:{}},emits:["update:modelValue"],setup(g,{emit:l}){const h=l,i=[{text:"*",value:""},{text:"share",value:"share"},{text:"fund",value:"fund"},{text:"crypto",value:"crypto"},{text:"bond",value:"bond"},{text:"index",value:"index"}];function m(s){h("update:modelValue",s)}return(s,d)=>{const f=W;return e(),r("span",ye,[_(f,{class:"w-full","model-value":s.modelValue,options:i,"option-label":"text","option-value":"value","show-clear":!0,"onUpdate:modelValue":m},null,8,["model-value"]),he])}}}),be=Symbol.for("nuxt:client-only"),xe=B({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(g,{slots:l,attrs:h}){const i=y(!1);return G(()=>{i.value=!0}),X(be,!0),m=>{var v;if(i.value)return(v=l.default)==null?void 0:v.call(l);const s=l.fallback||l.placeholder;if(s)return s();const d=m.fallback||m.placeholder||"",f=m.fallbackTag||m.placeholderTag||"span";return r(f,h,d)}}}),C=g=>(le("data-v-d95303d9"),g=g(),ue(),g),ge={class:"flex justify-content-center"},ke={style:{width:"800px"}},Se={class:"p-float-label mt-2"},Te=C(()=>a("label",{for:"searchTermInput"},"ISIN/WKN/Symbol/Name",-1)),we={key:0,class:"font-bold"},Ve=C(()=>a("br",null,null,-1)),qe={class:"text-lg font-medium flex align-items-center"},$e={key:0,class:"i-carbon-chart-line mr-1 text-primary"},Ie={class:"text-600 separator-container font-mono"},Be={key:0},Ce={key:1},Ne={key:2},Re=C(()=>a("ul",null,[a("li",null,[n(" Actively maintain and develop the "),a("a",{href:"https://www.github.com/portfolio-report"},"source code on Github"),n(". ")]),a("li",null,[n(" Become member of the "),a("a",{href:"https://forum.portfolio-performance.info"},"forum"),n(" and help other users. ")]),a("li",null,[n(" Cover monthly costs for server operation and licence fees. Become sponsor on "),a("a",{href:"https://github.com/sponsors/tfabritius"},"Github"),n(". ")])],-1)),De=B({__name:"search",setup(g){const l=j("q","",{transform:o=>o||""}),h=j("securityType","",{transform:o=>o||""}),i=Z(),m=ee(()=>{let o="https://www.portfolio-report.net/search";return i.query&&i.query.q&&(o+=`?q=${i.query.q}`,i.query.securityType&&(o+=`&securityType=${i.query.securityType}`)),o});te({title:"Portfolio Report Search",link:[{rel:"canonical",href:m.value}]});const s=y(l.value),d=y(h.value),f=y([]),v=y(!1),S=y(!1),V=y(!1),N=y("");async function H(){s.value=s.value.trim(),l.value=s.value,h.value=d.value,R()}G(()=>{R()});async function R(){if(l.value){S.value=!0,v.value=!1,V.value=!1;try{const o={q:l.value};d.value&&(o.securityType=h.value);const u=await fe("/v1/securities/search",{params:o});S.value=!1,f.value=u,v.value=u.length===0,u.length===1&&await oe(`/securities/${u[0].uuid}`)}catch(o){S.value=!1,f.value=[],v.value=!1,V.value=!0,N.value=String(o)}}}function L(o){var u;return[...new Set((u=o.markets)==null?void 0:u.map(T=>T.symbol))].filter(T=>!!T)}return(o,u)=>{const T=Q,M=ve,O=ce,Y=ie,E=xe,D=pe,q=ae,F=re,K=me,z=de,A=ne("tooltip");return e(),r("div",ge,[a("div",ke,[_(q,null,{title:c(()=>[n(" Security Search ")]),content:c(()=>[a("form",{onSubmit:se(H,["prevent"])},[_(E,null,{default:c(()=>[a("div",Se,[_(T,{id:"searchTermInput",modelValue:p(s),"onUpdate:modelValue":u[0]||(u[0]=t=>P(s)?s.value=t:null),type:"search",class:"w-full",autofocus:""},null,8,["modelValue"]),Te]),_(M,{modelValue:p(d),"onUpdate:modelValue":u[1]||(u[1]=t=>P(d)?d.value=t:null),class:"w-full mt-4"},null,8,["modelValue"]),_(Y,{type:"submit",disabled:!p(s)||p(S),class:"w-full flex justify-content-center mt-4"},{default:c(()=>[p(S)?(e(),k(O,{key:1,style:{height:"20px"}})):(e(),r("span",we,"Search"))]),_:1},8,["disabled"])]),_:1}),p(v)?(e(),k(D,{key:0,severity:"info"},{default:c(()=>[n(" Sorry, no results were found. ")]),_:1})):b("",!0),p(V)?(e(),k(D,{key:1,severity:"error"},{default:c(()=>[n(" Sorry, there was an error:"),Ve,n(x(p(N)),1)]),_:1})):b("",!0)],32)]),_:1}),p(f).length>0?(e(),k(q,{key:0,class:"mt-4"},{title:c(()=>[n(" Results ")]),content:c(()=>[(e(!0),r($,null,I(p(f),t=>(e(),r("div",{key:t.uuid,class:"mb-3"},[a("div",qe,[t.pricesAvailable?U((e(),r("i",$e,null,512)),[[A,"Prices available",void 0,{top:!0}]]):b("",!0),U((e(),k(F,{to:`/securities/${t.uuid}`},{default:c(()=>[n(x(t.name),1)]),_:2},1032,["to"])),[[A,"Drag and drop me to Portfolio Performance!",void 0,{top:!0}]]),_(K,{class:"mx-1 bg-teal-500"},{default:c(()=>[n(x(t.securityType),1)]),_:2},1024),(e(!0),r($,null,I(t.tags,w=>(e(),k(z,{key:w,name:w},null,8,["name"]))),128))]),a("div",Ie,[t.isin?(e(),r("span",Be,x(t.isin),1)):b("",!0),t.wkn?(e(),r("span",Ce,x(t.wkn),1)):b("",!0),(e(!0),r($,null,I(L(t),(w,J)=>(e(),r("span",{key:J},x(w),1))),128)),t.code?(e(),r("span",Ne,x(t.code),1)):b("",!0)])]))),128))]),_:1})):b("",!0),_(q,{class:"mt-4"},{title:c(()=>[n(" Your contribution is needed 💪 ")]),content:c(()=>[n(" Your help is needed to keep this website up and running. Have you thought about contributing? You could: "),Re]),_:1})])])}}}),Ze=_e(De,[["__scopeId","data-v-d95303d9"]]);export{Ze as default};
