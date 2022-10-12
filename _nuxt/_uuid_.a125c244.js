import{d as U,r as p,o as r,c,a as s,w as u,h as w,D as J,L as $,M as B,n as T,j as O,u as W,b as e,t as a,G as h,_ as q,H as Z,K as ee,I as E,J as F,f as g,e as l,F as D}from"./entry.40680b8c.js";import{_ as te}from"./SecurityTag.39d30f66.js";import{u as R}from"./asyncData.13c41550.js";import{u as C}from"./useApi.b3b85a87.js";import"./_plugin-vue_export-helper.a1a6add7.js";const oe=U({__name:"PricesTable",props:{prices:null},setup(P){return(d,b)=>{const v=p("Column"),i=p("DataTable");return r(),c("div",null,[s(i,{value:P.prices,class:"p-datatable-sm",paginator:!0,rows:10,"sort-field":"date","sort-order":-1,"rows-per-page-options":[10,30,100,300]},{default:u(()=>[s(v,{field:"date",header:"Date",sortable:!0}),s(v,{field:"close",header:"Close"})]),_:1},8,["value"])])}}}),ae={class:"flex justify-content-center"},le={style:{width:"800px"}},se={class:"flex flex-wrap"},ne={class:"flex-grow-1"},re=["src"],ue=l(" ISIN: "),ie=l(" WKN: "),ce=l(" Market: "),de=l(" Currency: "),_e=l(" Symbol: "),me=l(" Prices available: "),pe=l(" - "),he={key:0},ve=l(" Symbol (Frankfurt): "),fe={key:1},ye=l(" Symbol (NASDAQ): "),be={key:2},xe=l(" Symbol (New York): "),we=l(" Type: "),ge={key:3},Ce=l(" Tags: "),ke={key:0},Te=l(" Symbol: "),De=l(" Currency: "),Pe=l(" Prices available: "),Ne=l(" - "),Se=e("h4",null,"Country",-1),Ee=U({__name:"[uuid]",async setup(P){let d,b;const v=w(""),i=w(null),k=J(),{data:N,error:I}=([d,b]=$(()=>R(`security:${k.params.uuid}`,()=>C(`/securities/uuid/${k.params.uuid}`))),d=await d,b(),d);if(I.value||!N.value)throw B({statusCode:404,message:"This page could not be found",fatal:!0});const t=w(N.value),S=T(()=>{var n,_;return(_=(n=t.value)==null?void 0:n.markets)==null?void 0:_.map(m=>{let f;return m.marketCode==="XETR"?f="XETRA (Frankfurt)":m.marketCode==="XFRA"?f="Frankfurt":m.marketCode==="XNAS"?f="NASDAQ":m.marketCode==="XNYS"&&(f="NYSE"),{...m,name:f}})}),{data:A}=([d,b]=$(()=>R("taxonomies",()=>C("/taxonomies/"))),d=await d,b(),d);if(!A.value)throw B({statusCode:404,message:"This page could not be found",fatal:!0});const M=w(A.value),L=T(()=>t.value.securityTaxonomies.map(n=>({...n,weight:Number(n.weight),taxonomy:M.value.find(_=>_.uuid===n.taxonomyUuid)}))),X=T(()=>L.value.filter(n=>n.rootTaxonomyUuid==="5b0d5647-a4e6-4db8-807b-c3a6d11697a7"));O(v,async n=>{i.value=await C(`/securities/uuid/${k.params.uuid}/markets/${n}`,{params:{from:"2000-01-01"}})});async function Y({date:n}){if(await C(`/securities/uuid/${t.value.uuid}/markets/${v.value}/prices/${n}`,{method:"delete"}),i.value){const _=i.value.prices.findIndex(m=>m.date===n);delete i.value.prices[_]}}return W(()=>{var n;return{title:((n=t.value)==null?void 0:n.name)+" - Portfolio Report"}}),(n,_)=>{const m=p("Button"),f=q,j=p("Chip"),H=te,x=p("TabPanel"),K=p("Dropdown"),Q=oe,y=p("Column"),V=p("DataTable"),z=p("TabView"),G=Z("tooltip");return r(),c("div",ae,[e("div",le,[e("div",se,[e("div",ne,[e("h2",null,a(t.value.name),1),s(f,{to:n.$route.path},{default:u(()=>[ee(s(m,{class:"mt-2 cursor-move w-20rem",icon:"i-carbon-move i-lg",label:"Add to Portfolio Performance"},null,512),[[G,{escape:!0,value:"<h4>Drag and drop!</h4> To add this security in Portfolio Performance, drag and drop it to securities list or statement of assets."},void 0,{right:!0}]])]),_:1},8,["to"])]),t.value.logoUrl?(r(),c("img",{key:0,src:t.value.logoUrl,style:{"max-width":"100px","max-height":"100px","mix-blend-mode":"multiply"}},null,8,re)):h("",!0)]),s(z,{class:"mt-2"},{default:u(()=>[s(x,{header:"Overview"},{default:u(()=>[e("ul",null,[e("li",null,[ue,e("b",null,a(t.value.isin),1)]),e("li",null,[ie,e("b",null,a(t.value.wkn),1)]),(r(!0),c(E,null,F(g(S),o=>(r(),c("li",{key:o.marketCode},[ce,e("b",null,a(o.name),1),e("ul",null,[e("li",null,[de,e("b",null,a(o.currencyCode||"-"),1)]),e("li",null,[_e,e("b",null,a(o.symbol),1)]),e("li",null,[me,e("b",null,a(o.firstPriceDate),1),pe,e("b",null,a(o.lastPriceDate),1)])])]))),128)),t.value.symbolXfra?(r(),c("li",he,[ve,e("b",null,a(t.value.symbolXfra),1)])):h("",!0),t.value.symbolXnas?(r(),c("li",fe,[ye,e("b",null,a(t.value.symbolXnas),1)])):h("",!0),t.value.symbolXnys?(r(),c("li",be,[xe,e("b",null,a(t.value.symbolXnys),1)])):h("",!0),e("li",null,[we,s(j,{class:"mx-1 text-sm bg-teal-500 text-white"},{default:u(()=>[l(a(t.value.securityType),1)]),_:1})]),t.value.tags&&t.value.tags.length>0?(r(),c("li",ge,[Ce,(r(!0),c(E,null,F(t.value.tags,o=>(r(),D(H,{key:o,name:o},null,8,["name"]))),128))])):h("",!0)])]),_:1}),s(x,{header:"Prices"},{default:u(()=>[s(K,{id:"market",modelValue:v.value,"onUpdate:modelValue":_[0]||(_[0]=o=>v.value=o),options:g(S),"option-label":"name","option-value":"marketCode",placeholder:"Please select market"},{option:u(({option:o})=>[l(a(o.name)+" - "+a(o.marketCode),1)]),_:1},8,["modelValue","options"]),i.value?(r(),c("div",ke,[e("ul",null,[e("li",null,[Te,e("b",null,a(i.value.symbol),1)]),e("li",null,[De,e("b",null,a(i.value.currencyCode||"-"),1)]),e("li",null,[Pe,e("b",null,a(i.value.firstPriceDate),1),Ne,e("b",null,a(i.value.lastPriceDate),1)])]),s(Q,{prices:i.value.prices,onDeletePrice:Y},null,8,["prices"])])):h("",!0)]),_:1}),g(X)?(r(),D(x,{key:0,header:"Categories"},{default:u(()=>[Se,s(V,{value:g(X),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm"},{default:u(()=>[s(y,{field:"weight",header:"Percentage",sortable:!0},{body:u(({data:o})=>[l(a(o.weight)+"%",1)]),_:1}),s(y,{field:"taxonomy.name",header:"Country",sortable:!0}),s(y,{field:"taxonomy.code",header:"Code",sortable:!0})]),_:1},8,["value"])]),_:1})):h("",!0),t.value.events&&t.value.events.length>0?(r(),D(x,{key:1,header:"Events"},{default:u(()=>[s(V,{value:t.value.events},{default:u(()=>[s(y,{field:"date",header:"Date"}),s(y,{field:"type",header:"Type",style:{"text-transform":"capitalize"}}),s(y,{header:"..."},{body:u(({data:o})=>[l(a(o.type==="dividend"?o.amount+" "+o.currencyCode:"")+" "+a(o.type==="split"?o.ratio:""),1)]),_:1})]),_:1},8,["value"])]),_:1})):h("",!0)]),_:1})])])}}});export{Ee as default};
