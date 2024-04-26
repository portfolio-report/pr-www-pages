import{h as $,l as h,t,m as i,q as _,x as l,r as f,B as J,p as W,C as X,D as Z,c as ee,j as te,w as oe,A as ne,E as ae,s as c,u as p,F as x,G as g,v as s,z as se,i as A,H as w,I as C,J as B,K as M,_ as le,L as re,M as ue}from"./Bslm0le2.js";import{_ as ce}from"./D0mMsYN9.js";import{u as ie}from"./Cx90whnQ.js";import{_ as pe}from"./DlAUqK2U.js";const de={class:"p-float-label"},me=l("label",null,"Security Type",-1),_e=$({__name:"SelectSecurityType",props:{modelValue:{}},emits:["update:modelValue"],setup(v,{emit:e}){const T=e,b=[{text:"*",value:""},{text:"share",value:"share"},{text:"fund",value:"fund"},{text:"crypto",value:"crypto"},{text:"bond",value:"bond"},{text:"index",value:"index"}];function o(n){T("update:modelValue",n)}return(n,y)=>{const d=h("Dropdown");return t(),i("span",de,[_(d,{class:"w-full","model-value":n.modelValue,options:b,"option-label":"text","option-value":"value","show-clear":!0,"onUpdate:modelValue":o},null,8,["model-value"]),me])}}}),fe=Symbol.for("nuxt:client-only"),ye=$({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(v,{slots:e,attrs:T}){const b=f(!1);return J(()=>{b.value=!0}),W(fe,!0),o=>{var m;if(b.value)return(m=e.default)==null?void 0:m.call(e);const n=e.fallback||e.placeholder;if(n)return n();const y=o.fallback||o.placeholder||"",d=o.fallbackTag||o.placeholderTag||"span";return i(d,T,y)}}}),N=v=>(re("data-v-5db420b9"),v=v(),ue(),v),he={class:"flex justify-content-center"},ve={style:{width:"800px"}},be={class:"p-float-label mt-2"},xe=N(()=>l("label",{for:"searchTermInput"},"ISIN/WKN/Symbol/Name",-1)),ge={key:0,class:"font-bold"},we=N(()=>l("br",null,null,-1)),Te={class:"text-lg font-medium flex align-items-center"},ke={key:0,class:"i-carbon-chart-line mr-1 text-primary"},Se={class:"text-600 separator-container"},qe={key:0},Ve={key:1},Ie=N(()=>l("ul",null,[l("li",null,[s(" Actively maintain and develop the "),l("a",{href:"https://www.github.com/portfolio-report"},"source code on Github"),s(". ")]),l("li",null,[s(" Become member of the "),l("a",{href:"https://forum.portfolio-performance.info"},"forum"),s(" and help other users. ")]),l("li",null,[s(" Cover monthly costs for server operation and licence fees. Become sponsor on "),l("a",{href:"https://github.com/sponsors/tfabritius"},"Github"),s(". ")])],-1)),Ce=$({__name:"search",setup(v){const e=X(),T=Z(),b=ee(()=>{let r="https://www.portfolio-report.net/search";return e.query&&e.query.q&&(r+=`?q=${e.query.q}`,e.query.securityType&&(r+=`&securityType=${e.query.securityType}`)),r});te({title:"Portfolio Report Search",link:[{rel:"canonical",href:b.value}]});const o=f(""),n=f(""),y=f([]),d=f(!1),m=f(!1),q=f(!1),P=f("");R(),V(),oe(()=>e.query.q,()=>{e.query.q&&(R(),V())});async function j(){G(),await V()}function R(){o.value=e.query.q,n.value=e.query.securityType||""}function G(){const r={q:o.value};n.value&&(r.securityType=n.value),T.push({path:e.path,query:r})}async function V(){if(o.value){m.value=!0,d.value=!1,q.value=!1;try{const r={};n.value&&(r.securityType=n.value);const u=await ie(`/securities/search/${encodeURIComponent(o.value.trim())}`,{params:r});m.value=!1,y.value=u,d.value=u.length===0,u.length===1&&await ne(`/securities/${u[0].uuid}`)}catch(r){m.value=!1,y.value=[],d.value=!1,q.value=!0,P.value=String(r)}}}function H(r){var u;return[...new Set((u=r.markets)==null?void 0:u.map(k=>k.symbol))].filter(k=>!!k)}return(r,u)=>{const k=h("InputText"),L=_e,O=h("ProgressSpinner"),Y=h("Button"),E=ye,D=h("Message"),I=h("Card"),F=le,K=h("Tag"),Q=ce,U=ae("tooltip");return t(),i("div",he,[l("div",ve,[_(I,null,{title:c(()=>[s(" Security Search ")]),content:c(()=>[l("form",{onSubmit:se(j,["prevent"])},[_(E,null,{default:c(()=>[l("div",be,[_(k,{id:"searchTermInput",modelValue:p(o),"onUpdate:modelValue":u[0]||(u[0]=a=>A(o)?o.value=a:null),type:"search",class:"w-full",autofocus:""},null,8,["modelValue"]),xe]),_(L,{modelValue:p(n),"onUpdate:modelValue":u[1]||(u[1]=a=>A(n)?n.value=a:null),class:"w-full mt-4"},null,8,["modelValue"]),_(Y,{type:"submit",disabled:!p(o)||p(m),class:"w-full flex justify-content-center mt-4"},{default:c(()=>[p(m)?(t(),x(O,{key:1,style:{height:"20px"}})):(t(),i("span",ge,"Search"))]),_:1},8,["disabled"])]),_:1}),p(d)?(t(),x(D,{key:0,severity:"info"},{default:c(()=>[s(" Sorry, no results were found. ")]),_:1})):g("",!0),p(q)?(t(),x(D,{key:1,severity:"error"},{default:c(()=>[s(" Sorry, there was an error:"),we,s(w(p(P)),1)]),_:1})):g("",!0)],32)]),_:1}),p(y).length>0?(t(),x(I,{key:0,class:"mt-4"},{title:c(()=>[s(" Results ")]),content:c(()=>[(t(!0),i(C,null,B(p(y),a=>(t(),i("div",{key:a.uuid,class:"mb-3"},[l("div",Te,[a.pricesAvailable?M((t(),i("i",ke,null,512)),[[U,"Prices available",void 0,{top:!0}]]):g("",!0),M((t(),x(F,{to:`/securities/${a.uuid}`},{default:c(()=>[s(w(a.name),1)]),_:2},1032,["to"])),[[U,"Drag and drop me to Portfolio Performance!",void 0,{top:!0}]]),_(K,{class:"mx-1 bg-teal-500"},{default:c(()=>[s(w(a.securityType),1)]),_:2},1024),(t(!0),i(C,null,B(a.tags,S=>(t(),x(Q,{key:S,name:S},null,8,["name"]))),128))]),l("div",Se,[a.isin?(t(),i("span",qe,w(a.isin),1)):g("",!0),a.wkn?(t(),i("span",Ve,w(a.wkn),1)):g("",!0),(t(!0),i(C,null,B(H(a),(S,z)=>(t(),i("span",{key:z},w(S),1))),128))])]))),128))]),_:1})):g("",!0),_(I,{class:"mt-4"},{title:c(()=>[s(" Your contribution is needed 💪 ")]),content:c(()=>[s(" Your help is needed to keep this website up and running. Have you thought about contributing? You could: "),Ie]),_:1})])])}}}),Re=pe(Ce,[["__scopeId","data-v-5db420b9"]]);export{Re as default};
