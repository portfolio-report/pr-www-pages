import{_ as te}from"./CsCB5ImJ.js";import{u as ae}from"./KR7i51cn.js";import{h as E,r as P,l as w,t as o,m as u,P as oe,v as c,x as d,q as l,s as n,u as e,Q as se,c as S,y as le,R as ne,J as s,i as J,F as re,S as K,T as Z,j as ce,G as ie,K as z,L as j,M as $,H as b,I as r,U as ue,_ as de,N as pe,O as me}from"./BZQDUFb1.js";import{u as F}from"./Ct5OasH8.js";import{u as L}from"./3W3hMwcY.js";import{_ as fe}from"./DlAUqK2U.js";import"./Bp9Ue7t3.js";const _e=E({__name:"CopyClipboard",props:{text:{}},setup(g){const i=g,{copy:f}=ae(),m=P(null);async function h(v){var t,k;f(i.text),(t=m.value)==null||t.show(v),await new Promise(_=>setTimeout(_,1500)),(k=m.value)==null||k.hide()}return(v,t)=>{const k=w("InlineMessage");return o(),u("span",null,[oe(v.$slots,"default"),c(),d("a",{class:"ii i-carbon-copy cursor-pointer hover:text-primary-500",onClick:t[0]||(t[0]=_=>h(_))}),l(e(se),{ref_key:"overlay",ref:m,dismissable:!1,"close-on-escape":!1,pt:{content:{class:"p-0"}}},{default:n(()=>[l(k,{severity:"success"},{default:n(()=>[c("Copied to clipboard")]),_:1})]),_:1},512)])}}}),ye=E({__name:"CountryFlag",props:{country:{}},setup(g){const i=g,f=S(()=>({AE:"i-flagpack-ae",AR:"i-flagpack-ar",AT:"i-flagpack-at",AU:"i-flagpack-au",BE:"i-flagpack-be",BG:"i-flagpack-bg",BR:"i-flagpack-br",CA:"i-flagpack-ca",CH:"i-flagpack-ch",CN:"i-flagpack-cn",CZ:"i-flagpack-cz",DE:"i-flagpack-de",DK:"i-flagpack-dk",ES:"i-flagpack-es",EU:"i-flag-eu-4x3",FI:"i-flagpack-fi",FR:"i-flagpack-fr",GB:"i-flagpack-gb-ukm",GR:"i-flagpack-gr",HK:"i-flagpack-hk",HR:"i-flagpack-hr",HU:"i-flagpack-hu",ID:"i-flagpack-id",IL:"i-flagpack-il",IR:"i-flagpack-ie",IN:"i-flagpack-in",IS:"i-flagpack-is",IT:"i-flagpack-it",JP:"i-flagpack-jp",KR:"i-flagpack-kr",LI:"i-flagpack-li",LU:"i-flagpack-lu",MX:"i-flagpack-mx",MY:"i-flagpack-my",NL:"i-flagpack-nl",NO:"i-flagpack-no",NZ:"i-flagpack-nz",PH:"i-flagpack-ph",PL:"i-flagpack-pl",PT:"i-flagpack-pt",RO:"i-flagpack-ro",RU:"i-flagpack-ru",SE:"i-flagpack-se",SG:"i-flagpack-sg",TH:"i-flagpack-th",TR:"i-flagpack-tr",TW:"i-flagpack-tw",US:"i-flagpack-us",VN:"i-flagpack-vn",ZA:"i-flagpack-za"})[i.country]);return(m,h)=>(o(),u("i",{class:le(["ii",e(f)])},null,2))}}),ge=E({__name:"PricesTable",props:{prices:{}},setup(g){const i=g,f=S(()=>i.prices.map(h=>({dateStr:h.date,date:new Date(h.date),close:h.close}))),m=P({date:{operator:ne.AND,constraints:[{value:null,matchMode:"dateIs"}]}});return(h,v)=>{const t=w("Calendar"),k=w("Column"),_=w("DataTable");return o(),u("div",null,[l(_,{filters:e(m),"onUpdate:filters":v[0]||(v[0]=y=>J(m)?m.value=y:null),value:e(f),class:"p-datatable-sm",paginator:!0,rows:10,"sort-field":"date","sort-order":-1,"rows-per-page-options":[10,30,100,300],"filter-display":"menu"},{default:n(()=>[l(k,{field:"date",header:"Date",sortable:"","data-type":"date"},{body:n(({data:y})=>[c(s(y.dateStr),1)]),filter:n(({filterModel:y})=>[l(t,{modelValue:y.value,"onUpdate:modelValue":I=>y.value=I,"date-format":"yy-mm-dd",placeholder:"yyyy-mm-dd"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(k,{field:"close",header:"Close"},{body:n(({data:y})=>[c(s(y.close.toLocaleString(void 0,{minimumFractionDigits:2})),1)]),_:1})]),_:1},8,["filters","value"])])}}}),he=g=>(pe("data-v-86f7a743"),g=g(),me(),g),ke={class:"flex justify-content-center"},be={style:{width:"800px"}},ve={class:"flex flex-wrap"},xe={class:"flex-grow-1"},Ce={class:"separator-container"},we=he(()=>d("span",{class:"mt-2 cursor-move w-20rem p-button p-component"},[d("span",{class:"i-carbon-move i-lg p-button-icon p-button-icon-left"}),d("span",{class:"p-button-label"},"Add to Portfolio Performance")],-1)),Te=["src"],De={class:"mt-4"},Ne={key:0},Re={key:2},Se={key:3},Ie={key:4},Ae={key:5},Pe={key:6},Ue={key:8},$e={key:9},Ee={key:10},Be={key:12},He=E({__name:"[uuid]",async setup(g){let i,f;const m=re(),{data:h,error:v}=([i,f]=K(()=>F(`security:${m.params.uuid}`,()=>L(`/securities/uuid/${m.params.uuid}`))),i=await i,f(),i);if(v.value||!h.value)throw Z({statusCode:404,message:"This page could not be found",fatal:!0});const t=P(h.value),k=[{code:"EUR"},{code:"USD"},{code:"AED"},{code:"AUD"},{code:"BGN"},{code:"BRL"},{code:"CAD"},{code:"CHF"},{code:"CNY"},{code:"CZK"},{code:"DKK"},{code:"GBP"},{code:"GBX"},{code:"HKD"},{code:"HRK"},{code:"HUF"},{code:"IDR"},{code:"ILS"},{code:"INR"},{code:"ISK"},{code:"JPY"},{code:"KRW"},{code:"MXN"},{code:"MYR"},{code:"NOK"},{code:"NZD"},{code:"PHP"},{code:"PLN"},{code:"RON"},{code:"RUB"},{code:"SEK"},{code:"SGD"},{code:"THB"},{code:"TRY"},{code:"ZAR"}],_=P(k[0]),{data:y}=([i,f]=K(()=>F(`security:${m.params.uuid}:prices:${_.value.code}`,()=>L(`/securities/uuid/${m.params.uuid}/prices/${_.value.code}`,{params:{from:"2000-01-01"}}),{watch:[_]})),i=await i,f(),i),I=S(()=>{var p,T;return(T=(p=t.value)==null?void 0:p.markets)==null?void 0:T.map(D=>{let N;return D.marketCode==="XETR"?N="XETRA (Frankfurt)":D.marketCode==="XFRA"?N="Frankfurt":D.marketCode==="XNAS"?N="NASDAQ":D.marketCode==="XNYS"&&(N="NYSE"),{...D,name:N}})}),{data:V}=([i,f]=K(()=>F("taxonomies",()=>L("/taxonomies/"))),i=await i,f(),i);if(!V.value)throw Z({statusCode:404,message:"This page could not be found",fatal:!0});const W=P(V.value),G=S(()=>t.value.securityTaxonomies.map(p=>({...p,weight:Number(p.weight),taxonomy:W.value.find(T=>T.uuid===p.taxonomyUuid)}))),x=S(()=>G.value.filter(p=>p.rootTaxonomyUuid==="5b0d5647-a4e6-4db8-807b-c3a6d11697a7")),R=S(()=>G.value.filter(p=>p.rootTaxonomyUuid==="072bba7b-ed7a-4cb4-aab3-91520d00fb00"));return ce(()=>{var p;return{title:`${(p=t.value)==null?void 0:p.name} - Portfolio Report`,link:[{rel:"canonical",href:`https://www.portfolio-report.net/securities/${t.value.uuid}`}]}}),(p,T)=>{var M,X,Y,O;const D=w("Tag"),N=te,B=_e,Q=de,A=ye,q=w("Dropdown"),ee=ge,C=w("Column"),H=w("DataTable"),U=ie("tooltip");return o(),u("div",ke,[d("div",be,[d("div",ve,[d("div",xe,[d("h2",null,[c(s(e(t).name)+" ",1),l(D,{class:"mx-1 bg-teal-500 vertical-align-top"},{default:n(()=>[c(s(e(t).securityType),1)]),_:1}),(o(!0),u(z,null,j(e(t).tags,a=>(o(),b(N,{key:a,class:"vertical-align-top",name:a},null,8,["name"]))),128))]),d("div",Ce,[e(t).isin?$((o(),b(B,{key:0,text:e(t).isin},{default:n(()=>[c(s(e(t).isin),1)]),_:1},8,["text"])),[[U,"ISIN",void 0,{top:!0}]]):r("",!0),e(t).wkn?$((o(),b(B,{key:1,text:e(t).wkn},{default:n(()=>[c(s(e(t).wkn),1)]),_:1},8,["text"])),[[U,"WKN",void 0,{top:!0}]]):r("",!0),e(t).code?$((o(),b(B,{key:2,text:e(t).code},{default:n(()=>[c(s(e(t).code),1)]),_:1},8,["text"])),[[U,"Code",void 0,{top:!0}]]):r("",!0)]),$((o(),b(Q,{to:(p._.provides[ue]||p.$route).path},{default:n(()=>[we]),_:1},8,["to"])),[[U,{escape:!1,value:"<h4>Drag and drop!</h4> To add this security in Portfolio Performance, drag and drop it to securities list or statement of assets."},void 0,{right:!0}]])]),d("div",null,[e(t).logoUrl?(o(),u("img",{key:0,src:e(t).logoUrl,style:{"max-width":"100px","max-height":"100px","mix-blend-mode":"multiply"}},null,8,Te)):r("",!0)])]),d("div",De,[e(t).pricesAvailable?(o(),u("h3",Ne,[c(" Prices "),e(t).pricesAvailable?(o(),b(q,{key:0,modelValue:e(_),"onUpdate:modelValue":T[0]||(T[0]=a=>J(_)?_.value=a:null),options:k,"option-label":"code"},{value:n(({value:a})=>[l(A,{country:a.code.substring(0,2),class:"mr-1"},null,8,["country"]),c(" "+s(a.code),1)]),option:n(({option:a})=>[l(A,{country:a.code.substring(0,2),class:"mr-1"},null,8,["country"]),c(" "+s(a.code),1)]),_:1},8,["modelValue"])):r("",!0)])):r("",!0),e(y)?(o(),b(ee,{key:1,prices:e(y)},null,8,["prices"])):r("",!0),e(I).length>0?(o(),u("h5",Re," Markets ")):r("",!0),e(I).length>0?(o(),u("ul",Se,[(o(!0),u(z,null,j(e(I),a=>(o(),u("li",{key:a.marketCode},[d("b",null,s(a.name),1),d("ul",null,[d("li",null,[c(" Currency: "),l(A,{country:a.currencyCode.substring(0,2),class:"mr-1"},null,8,["country"]),d("b",null,s(a.currencyCode||"-"),1)]),d("li",null,[c(" Symbol: "),d("b",null,s(a.symbol),1)])])]))),128))])):r("",!0),e(x).length===1?(o(),u("h5",Ie," Country ")):r("",!0),e(x).length===1?(o(),u("span",Ae,[l(A,{country:((M=e(x)[0].taxonomy)==null?void 0:M.code)??"",class:"mr-1"},null,8,["country"]),c(" "+s((X=e(x)[0].taxonomy)==null?void 0:X.name)+" ("+s((Y=e(x)[0].taxonomy)==null?void 0:Y.code)+") ",1)])):r("",!0),e(x).length>1?(o(),u("h5",Pe," Countries ")):r("",!0),e(x).length>1?(o(),b(H,{key:7,value:e(x),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm mb-2"},{default:n(()=>[l(C,{field:"weight",header:"Percentage",sortable:!0},{body:n(({data:a})=>[c(s(a.weight)+"% ",1)]),_:1}),l(C,{field:"taxonomy.name",header:"Country",sortable:!0},{body:n(({data:a})=>[l(A,{country:a.taxonomy.code,class:"mr-1"},null,8,["country"]),c(" "+s(a.taxonomy.name),1)]),_:1}),l(C,{field:"taxonomy.code",header:"Code",sortable:!0})]),_:1},8,["value"])):r("",!0),e(R).length===1?(o(),u("h5",Ue," Industry ")):r("",!0),e(R).length===1?(o(),u("span",$e,s((O=e(R)[0].taxonomy)==null?void 0:O.name),1)):r("",!0),e(R).length>1?(o(),u("h5",Ee," Industries ")):r("",!0),e(R).length>1?(o(),b(H,{key:11,value:e(R),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm"},{default:n(()=>[l(C,{field:"weight",header:"Percentage",sortable:!0},{body:n(({data:a})=>[c(s(a.weight)+"% ",1)]),_:1}),l(C,{field:"taxonomy.name",header:"Country",sortable:!0})]),_:1},8,["value"])):r("",!0),e(t).events.length>0?(o(),u("h5",Be," Events ")):r("",!0),e(t).events.length>0?(o(),b(H,{key:13,value:e(t).events},{default:n(()=>[l(C,{field:"date",header:"Date"}),l(C,{field:"type",header:"Type",style:{"text-transform":"capitalize"}}),l(C,{header:"..."},{body:n(({data:a})=>[c(s(a.type==="dividend"?`${a.amount} ${a.currencyCode}`:"")+" "+s(a.type==="split"?a.ratio:""),1)]),_:1})]),_:1},8,["value"])):r("",!0)])])])}}}),Ye=fe(He,[["__scopeId","data-v-86f7a743"]]);export{Ye as default};
