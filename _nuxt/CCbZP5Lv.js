import oe from"./BAPNqg6W.js";import{_ as ae}from"./C8J61vKg.js";import se from"./a3TSCOZC.js";import{u as re}from"./3dVoIFgL.js";import ie from"./D-VfwORw.js";import{h as U,r as I,t as a,l,P as ce,v as n,x as u,m as i,q as c,u as e,c as S,y as le,Q as ne,J as r,i as j,F as de,R as H,S as Y,j as ue,G as pe,K as z,L as O,M as $,H as b,I as s,T as me,_ as fe,N as _e,O as ye}from"./BGiO7zQw.js";import ge from"./Ded2R-Za.js";import he from"./C8AMM_RG.js";import J from"./BcTmlemJ.js";import W from"./BfoI1gDv.js";import{u as Z,a as ke}from"./nk3lBDBD.js";import{u as K}from"./YRORligW.js";import{_ as be}from"./DlAUqK2U.js";import"./YIsGGZA_.js";import"./DSrISKJ_.js";import"./BmUiErYL.js";import"./D6Sc5A3y.js";import"./99ucK42n.js";import"./CEBooXCk.js";import"./DRsAggwH.js";import"./C_WQoFeu.js";import"./spmkHG97.js";import"./BNcXjh92.js";import"./CZOZUWQQ.js";import"./DgAL07md.js";import"./D3q9xhJO.js";import"./DIyoiqnI.js";import"./DvdOgAKu.js";import"./CugDv2gZ.js";import"./BZ9OIGSu.js";import"./ZB6oP4Aj.js";import"./_Eb_cAaY.js";import"./BfEFFRQZ.js";import"./Dwj_aWcc.js";import"./aghpzbe_.js";import"./CMKqPOxl.js";const ve=U({__name:"CopyClipboard",props:{text:{}},setup(g){const d=g,{copy:f}=re(),m=I(null);async function h(v){var t,k;f(d.text),(t=m.value)==null||t.show(v),await new Promise(_=>setTimeout(_,1500)),(k=m.value)==null||k.hide()}return(v,t)=>{const k=se;return a(),l("span",null,[ce(v.$slots,"default"),n(),u("a",{class:"ii i-carbon-copy cursor-pointer hover:text-primary-500",onClick:t[0]||(t[0]=_=>h(_))}),i(e(ie),{ref_key:"overlay",ref:m,dismissable:!1,"close-on-escape":!1,pt:{content:{class:"p-0"}}},{default:c(()=>[i(k,{severity:"success"},{default:c(()=>[n("Copied to clipboard")]),_:1})]),_:1},512)])}}}),xe=U({__name:"CountryFlag",props:{country:{}},setup(g){const d=g,f=S(()=>({AE:"i-flagpack-ae",AR:"i-flagpack-ar",AT:"i-flagpack-at",AU:"i-flagpack-au",BE:"i-flagpack-be",BG:"i-flagpack-bg",BR:"i-flagpack-br",CA:"i-flagpack-ca",CH:"i-flagpack-ch",CN:"i-flagpack-cn",CZ:"i-flagpack-cz",DE:"i-flagpack-de",DK:"i-flagpack-dk",ES:"i-flagpack-es",EU:"i-flag-eu-4x3",FI:"i-flagpack-fi",FR:"i-flagpack-fr",GB:"i-flagpack-gb-ukm",GR:"i-flagpack-gr",HK:"i-flagpack-hk",HR:"i-flagpack-hr",HU:"i-flagpack-hu",ID:"i-flagpack-id",IL:"i-flagpack-il",IR:"i-flagpack-ie",IN:"i-flagpack-in",IS:"i-flagpack-is",IT:"i-flagpack-it",JP:"i-flagpack-jp",KR:"i-flagpack-kr",LI:"i-flagpack-li",LU:"i-flagpack-lu",MX:"i-flagpack-mx",MY:"i-flagpack-my",NL:"i-flagpack-nl",NO:"i-flagpack-no",NZ:"i-flagpack-nz",PH:"i-flagpack-ph",PL:"i-flagpack-pl",PT:"i-flagpack-pt",RO:"i-flagpack-ro",RU:"i-flagpack-ru",SE:"i-flagpack-se",SG:"i-flagpack-sg",TH:"i-flagpack-th",TR:"i-flagpack-tr",TW:"i-flagpack-tw",US:"i-flagpack-us",VN:"i-flagpack-vn",ZA:"i-flagpack-za"})[d.country]);return(m,h)=>(a(),l("i",{class:le(["ii",e(f)])},null,2))}}),Ce=U({__name:"PricesTable",props:{prices:{}},setup(g){const d=g,f=S(()=>d.prices.map(h=>({dateStr:h.date,date:new Date(h.date),close:h.close}))),m=I({date:{operator:ne.AND,constraints:[{value:null,matchMode:"dateIs"}]}});return(h,v)=>{const t=he,k=J,_=W;return a(),l("div",null,[i(_,{filters:e(m),"onUpdate:filters":v[0]||(v[0]=y=>j(m)?m.value=y:null),value:e(f),class:"p-datatable-sm font-mono",paginator:!0,rows:10,"sort-field":"date","sort-order":-1,"rows-per-page-options":[10,30,100,300],"filter-display":"menu"},{default:c(()=>[i(k,{field:"date",header:"Date",sortable:"","data-type":"date"},{body:c(({data:y})=>[n(r(y.dateStr),1)]),filter:c(({filterModel:y})=>[i(t,{modelValue:y.value,"onUpdate:modelValue":A=>y.value=A,"date-format":"yy-mm-dd",placeholder:"yyyy-mm-dd"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(k,{field:"close",header:"Close"},{body:c(({data:y})=>[n(r(y.close.toLocaleString(void 0,{minimumFractionDigits:2})),1)]),_:1})]),_:1},8,["filters","value"])])}}}),we=g=>(_e("data-v-85c75589"),g=g(),ye(),g),Te={class:"flex justify-content-center"},Ne={style:{width:"800px"}},Re={class:"flex flex-wrap"},Se={class:"flex-grow-1"},Ae={class:"separator-container font-mono"},De=we(()=>u("span",{class:"mt-2 cursor-move w-20rem p-button p-component"},[u("span",{class:"i-carbon-move i-lg p-button-icon p-button-icon-left"}),u("span",{class:"p-button-label"},"Add to Portfolio Performance")],-1)),Ie=["src"],Pe={class:"mt-4"},$e={key:0},Ue={key:2},Ee={key:3},Be={key:4},He={class:"font-mono"},Ke={class:"font-mono"},Fe={key:5},Le={key:6,class:"font-mono"},Ve={key:7},Ge={key:9},Xe={key:10,class:"font-mono"},Me={key:11},Ye={key:13},ze=U({__name:"[uuid]",async setup(g){let d,f;const m=de(),{data:h,error:v}=([d,f]=H(()=>Z(`security:${m.params.uuid}`,()=>K(`/securities/uuid/${m.params.uuid}`))),d=await d,f(),d);if(v.value||!h.value)throw Y({statusCode:404,message:"This page could not be found",fatal:!0});const t=I(h.value),k=[{code:"EUR"},{code:"USD"},{code:"AED"},{code:"AUD"},{code:"BGN"},{code:"BRL"},{code:"CAD"},{code:"CHF"},{code:"CNY"},{code:"CZK"},{code:"DKK"},{code:"GBP"},{code:"GBX"},{code:"HKD"},{code:"HRK"},{code:"HUF"},{code:"IDR"},{code:"ILS"},{code:"INR"},{code:"ISK"},{code:"JPY"},{code:"KRW"},{code:"MXN"},{code:"MYR"},{code:"NOK"},{code:"NZD"},{code:"PHP"},{code:"PLN"},{code:"RON"},{code:"RUB"},{code:"SEK"},{code:"SGD"},{code:"THB"},{code:"TRY"},{code:"ZAR"}],_=I(k[0]),{data:y}=([d,f]=H(async()=>ke(`security:${m.params.uuid}:prices:${_.value.code}`,async()=>t.value.pricesAvailable?await K(`/securities/uuid/${m.params.uuid}/prices/${_.value.code}`,{params:{from:"2000-01-01"}}):[],{watch:[_]})),d=await d,f(),d),A=S(()=>{var p,w;return(w=(p=t.value)==null?void 0:p.markets)==null?void 0:w.map(T=>{let N;return T.marketCode==="XETR"?N="XETRA (Frankfurt)":T.marketCode==="XFRA"?N="Frankfurt":T.marketCode==="XNAS"?N="NASDAQ":T.marketCode==="XNYS"&&(N="NYSE"),{...T,name:N}})}),{data:F}=([d,f]=H(()=>Z("taxonomies",()=>K("/taxonomies/"))),d=await d,f(),d);if(!F.value)throw Y({statusCode:404,message:"This page could not be found",fatal:!0});const Q=I(F.value),L=S(()=>t.value.securityTaxonomies.map(p=>({...p,weight:Number(p.weight),taxonomy:Q.value.find(w=>w.uuid===p.taxonomyUuid)}))),x=S(()=>L.value.filter(p=>p.rootTaxonomyUuid==="5b0d5647-a4e6-4db8-807b-c3a6d11697a7")),R=S(()=>L.value.filter(p=>p.rootTaxonomyUuid==="072bba7b-ed7a-4cb4-aab3-91520d00fb00"));return ue(()=>{var p;return{title:`${(p=t.value)==null?void 0:p.name} - Portfolio Report`,link:[{rel:"canonical",href:`https://www.portfolio-report.net/securities/${t.value.uuid}`}]}}),(p,w)=>{var V,G,X,M;const T=oe,N=ae,E=ve,q=fe,D=xe,ee=ge,te=Ce,C=J,B=W,P=pe("tooltip");return a(),l("div",Te,[u("div",Ne,[u("div",Re,[u("div",Se,[u("h2",null,[n(r(e(t).name)+" ",1),i(T,{class:"mx-1 bg-teal-500 vertical-align-top"},{default:c(()=>[n(r(e(t).securityType),1)]),_:1}),(a(!0),l(z,null,O(e(t).tags,o=>(a(),b(N,{key:o,class:"vertical-align-top",name:o},null,8,["name"]))),128))]),u("div",Ae,[e(t).isin?$((a(),b(E,{key:0,text:e(t).isin},{default:c(()=>[n(r(e(t).isin),1)]),_:1},8,["text"])),[[P,"ISIN",void 0,{top:!0}]]):s("",!0),e(t).wkn?$((a(),b(E,{key:1,text:e(t).wkn},{default:c(()=>[n(r(e(t).wkn),1)]),_:1},8,["text"])),[[P,"WKN",void 0,{top:!0}]]):s("",!0),e(t).code?$((a(),b(E,{key:2,text:e(t).code},{default:c(()=>[n(r(e(t).code),1)]),_:1},8,["text"])),[[P,"Code",void 0,{top:!0}]]):s("",!0)]),$((a(),b(q,{to:(p._.provides[me]||p.$route).path},{default:c(()=>[De]),_:1},8,["to"])),[[P,{escape:!1,value:"<h4>Drag and drop!</h4> To add this security in Portfolio Performance, drag and drop it to securities list or statement of assets."},void 0,{right:!0}]])]),u("div",null,[e(t).logoUrl?(a(),l("img",{key:0,src:e(t).logoUrl,style:{"max-width":"100px","max-height":"100px","mix-blend-mode":"multiply"}},null,8,Ie)):s("",!0)])]),u("div",Pe,[e(t).pricesAvailable?(a(),l("h3",$e,[n(" Prices "),e(t).pricesAvailable?(a(),b(ee,{key:0,modelValue:e(_),"onUpdate:modelValue":w[0]||(w[0]=o=>j(_)?_.value=o:null),options:k,"option-label":"code"},{value:c(({value:o})=>[i(D,{country:o.code.substring(0,2),class:"mr-1"},null,8,["country"]),n(" "+r(o.code),1)]),option:c(({option:o})=>[i(D,{country:o.code.substring(0,2),class:"mr-1"},null,8,["country"]),n(" "+r(o.code),1)]),_:1},8,["modelValue"])):s("",!0)])):s("",!0),e(t).pricesAvailable&&e(y)?(a(),b(te,{key:1,prices:e(y)},null,8,["prices"])):s("",!0),e(t).pricesAvailable?s("",!0):(a(),l("span",Ue," No prices available ")),e(A).length>0?(a(),l("h5",Ee," Markets ")):s("",!0),e(A).length>0?(a(),l("ul",Be,[(a(!0),l(z,null,O(e(A),o=>(a(),l("li",{key:o.marketCode},[u("b",null,r(o.name),1),u("ul",null,[u("li",null,[n(" Currency: "),i(D,{country:o.currencyCode.substring(0,2),class:"mr-1"},null,8,["country"]),u("b",He,r(o.currencyCode||"-"),1)]),u("li",null,[n(" Symbol: "),u("b",Ke,r(o.symbol),1)])])]))),128))])):s("",!0),e(x).length===1?(a(),l("h5",Fe," Country ")):s("",!0),e(x).length===1?(a(),l("span",Le,[i(D,{country:((V=e(x)[0].taxonomy)==null?void 0:V.code)??"",class:"mr-1"},null,8,["country"]),n(" "+r((G=e(x)[0].taxonomy)==null?void 0:G.name)+" ("+r((X=e(x)[0].taxonomy)==null?void 0:X.code)+") ",1)])):s("",!0),e(x).length>1?(a(),l("h5",Ve," Countries ")):s("",!0),e(x).length>1?(a(),b(B,{key:8,value:e(x),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm mb-2"},{default:c(()=>[i(C,{field:"weight",header:"Percentage",sortable:!0},{body:c(({data:o})=>[n(r(o.weight)+"% ",1)]),_:1}),i(C,{field:"taxonomy.name",header:"Country",sortable:!0},{body:c(({data:o})=>[i(D,{country:o.taxonomy.code,class:"mr-1"},null,8,["country"]),n(" "+r(o.taxonomy.name),1)]),_:1}),i(C,{field:"taxonomy.code",header:"Code",sortable:!0})]),_:1},8,["value"])):s("",!0),e(R).length===1?(a(),l("h5",Ge," Industry ")):s("",!0),e(R).length===1?(a(),l("span",Xe,r((M=e(R)[0].taxonomy)==null?void 0:M.name),1)):s("",!0),e(R).length>1?(a(),l("h5",Me," Industries ")):s("",!0),e(R).length>1?(a(),b(B,{key:12,value:e(R),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm"},{default:c(()=>[i(C,{field:"weight",header:"Percentage",sortable:!0},{body:c(({data:o})=>[n(r(o.weight)+"% ",1)]),_:1}),i(C,{field:"taxonomy.name",header:"Country",sortable:!0})]),_:1},8,["value"])):s("",!0),e(t).events.length>0?(a(),l("h5",Ye," Events ")):s("",!0),e(t).events.length>0?(a(),b(B,{key:14,value:e(t).events,class:"p-datatable-sm font-mono"},{default:c(()=>[i(C,{field:"date",header:"Date"}),i(C,{field:"type",header:"Type",style:{"text-transform":"capitalize"}}),i(C,{header:"..."},{body:c(({data:o})=>[n(r(o.type==="dividend"?`${o.amount} ${o.currencyCode}`:"")+" "+r(o.type==="split"?o.ratio:""),1)]),_:1})]),_:1},8,["value"])):s("",!0)])])])}}}),At=be(ze,[["__scopeId","data-v-85c75589"]]);export{At as default};
