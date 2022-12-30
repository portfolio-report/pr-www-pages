import{d as F,r as _,o as a,c as f,a as h,b as n,u as Z,F as ee,G as te,h as y,j as oe,w as p,f as m,B as b,H as x,I as ne,e as o,A as se,k as L,t as g,J as N,K as P,L as O,z as re,_ as ae}from"./entry.0af0d57b.js";import{_ as le}from"./SecurityTag.d1d6ac75.js";import{u as ue}from"./useApi.0b135f46.js";import"./_plugin-vue_export-helper.a1a6add7.js";const ie={class:"p-float-label"},ce=n("label",{for:"dropdown"},"Security Type",-1),pe=F({__name:"SelectSecurityType",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const u=[{text:"*",value:""},{text:"share",value:"share"},{text:"fund",value:"fund"},{text:"bond",value:"bond"},{text:"index",value:"index"}];function i(c){t("update:modelValue",c)}return(c,d)=>{const v=_("Dropdown");return a(),f("span",ie,[h(v,{id:"dropdown",class:"w-full","model-value":e.modelValue,options:u,"option-label":"text","option-value":"value","show-clear":!0,"onUpdate:modelValue":i},null,8,["model-value"]),ce])}}});function V(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function T(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(u){return typeof u}:T=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},T(e)}function me(e){V(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||T(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function U(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function Y(e){V(1,arguments);var t=me(e);return t.setHours(0,0,0,0),t}var fe=864e5;function de(e,t){V(2,arguments);var u=Y(e),i=Y(t),c=u.getTime()-U(u),d=i.getTime()-U(i);return Math.round((c-d)/fe)}const ye={class:"flex justify-content-center"},_e={style:{width:"800px"}},he=["onSubmit"],ve={class:"p-float-label mt-2"},be=n("label",{for:"searchTermInput"},"ISIN/WKN/Symbol/Name",-1),ge={key:0,class:"font-bold"},we=n("br",null,null,-1),Se={class:"text-lg font-medium flex align-items-center"},xe={key:0},De=n("ul",null,[n("li",null,[o(" Actively maintain and develop the "),n("a",{href:"https://www.github.com/portfolio-report"},"source code on Github"),o(". ")]),n("li",null,[o(" Become member of the "),n("a",{href:"https://forum.portfolio-performance.info"},"forum"),o(" and help other users. ")]),n("li",null,[o(" Cover monthly costs for server operation and licence fees. Become sponsor on "),n("a",{href:"https://github.com/sponsors/tfabritius"},"Github"),o(". ")])],-1),Ne=F({__name:"search",setup(e){Z({title:"Portfolio Report Search"});const t=ee(),u=te(),i=y(""),c=y(""),d=y([]),v=y(!1),w=y(!1),k=y(!1),R=y("");q(),I(),oe(()=>t.query.q,()=>{t.query.q&&(q(),I())});async function j(){H(),await I()}function q(){i.value=t.query.q,c.value=t.query.securityType||""}function H(){const s={q:i.value};c.value&&(s.securityType=c.value),u.push({path:t.path,query:s})}async function I(){if(!!i.value){w.value=!0,v.value=!1,k.value=!1;try{const s={};c.value&&(s.securityType=c.value);const r=await ue(`/securities/search/${encodeURIComponent(i.value.trim())}`,{params:s});w.value=!1,d.value=r,v.value=r.length===0}catch(s){w.value=!1,d.value=[],v.value=!1,k.value=!0,R.value=String(s)}}}function E(s){return s.markets.some(r=>r.firstPriceDate&&r.lastPriceDate)}function G(s){return s.markets.some(r=>r.lastPriceDate&&de(new Date,new Date(r.lastPriceDate))<30)}function $(s){var r;return[...new Set([s.symbolXfra,s.symbolXnas,s.symbolXnys,...(r=s.markets)==null?void 0:r.map(S=>S.symbol)])].filter(S=>!!S)}return(s,r)=>{const S=_("InputText"),z=pe,K=_("ProgressSpinner"),X=_("Button"),A=_("Message"),C=_("Card"),Q=ae,W=_("Chip"),J=le,B=ne("tooltip");return a(),f("div",ye,[n("div",_e,[h(C,null,{title:p(()=>[o("Security Search")]),content:p(()=>[n("form",{onSubmit:se(j,["prevent"])},[n("div",ve,[h(S,{id:"searchTermInput",modelValue:m(i),"onUpdate:modelValue":r[0]||(r[0]=l=>L(i)?i.value=l:null),type:"search",class:"w-full",autofocus:""},null,8,["modelValue"]),be]),h(z,{modelValue:m(c),"onUpdate:modelValue":r[1]||(r[1]=l=>L(c)?c.value=l:null),class:"w-full mt-4"},null,8,["modelValue"]),h(X,{type:"submit",disabled:!m(i)||m(w),class:"w-full flex justify-content-center mt-4"},{default:p(()=>[m(w)?(a(),b(K,{key:1,style:{height:"20px"}})):(a(),f("span",ge,"Search"))]),_:1},8,["disabled"]),m(v)?(a(),b(A,{key:0,severity:"info"},{default:p(()=>[o(" Sorry, no results were found. ")]),_:1})):x("",!0),m(k)?(a(),b(A,{key:1,severity:"error"},{default:p(()=>[o(" Sorry, there was an error:"),we,o(g(m(R)),1)]),_:1})):x("",!0)],40,he)]),_:1}),m(d).length>0?(a(),b(C,{key:0,class:"mt-4"},{title:p(()=>[o("Results")]),content:p(()=>[(a(!0),f(N,null,P(m(d),l=>(a(),f("div",{key:l.uuid,class:"mb-3"},[n("div",Se,[E(l)?O((a(),f("i",{key:0,class:re(["i-carbon-chart-line","mr-1",{"text-primary":G(l)}])},null,2)),[[B,"Prices available",void 0,{top:!0}]]):x("",!0),O((a(),b(Q,{to:"/securities/"+l.uuid},{default:p(()=>[o(g(l.name),1)]),_:2},1032,["to"])),[[B,"Drag and drop me to Portfolio Performance!",void 0,{top:!0}]]),h(W,{class:"mx-1 text-sm bg-teal-500 text-white"},{default:p(()=>[o(g(l.securityType),1)]),_:2},1024),(a(!0),f(N,null,P(l.tags,D=>(a(),b(J,{key:D,name:D},null,8,["name"]))),128))]),o(" ISIN: "),n("b",null,g(l.isin),1),o(" | WKN: "),n("b",null,g(l.wkn),1),o(" | Symbol(s): "),(a(!0),f(N,null,P($(l),(D,M)=>(a(),f("span",{key:M},[M!=0?(a(),f("span",xe,", ")):x("",!0),n("span",null,[n("b",null,g(D),1)])]))),128))]))),128))]),_:1})):x("",!0),h(C,{class:"mt-4"},{title:p(()=>[o("Your contribution is needed \u{1F4AA}")]),content:p(()=>[o(" Your help is needed to keep this website up and running. Have you thought about contributing? You could: "),De]),_:1})])])}}});export{Ne as default};
