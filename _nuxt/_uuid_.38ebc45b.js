import{_ as le}from"./SecurityTag.98351f97.js";import{_ as ne}from"./nuxt-link.7fefb07b.js";import{d as O,n as T,o as c,c as u,z as se,f as e,h as w,L as re,M as ie,r as _,a as l,w as i,e as n,t,k as Y,D as ce,N as M,O as z,j as ue,u as de,b as a,I as G,J as K,K as U,G as h,H as me,F as j}from"./entry.3b25f032.js";import{u as H}from"./asyncData.99736b61.js";import{u as I}from"./useApi.48978ccb.js";import"./_plugin-vue_export-helper.c27b6911.js";const pe=O({__name:"CountryFlag",props:{country:null},setup(P){const m=P,b=T(()=>({AR:"i-flagpack-ar",AT:"i-flagpack-at",AU:"i-flagpack-au",BE:"i-flagpack-be",BR:"i-flagpack-br",CA:"i-flagpack-ca",CH:"i-flagpack-ch",CN:"i-flagpack-cn",DE:"i-flagpack-de",DK:"i-flagpack-dk",ES:"i-flagpack-es",FI:"i-flagpack-fi",FR:"i-flagpack-fr",GB:"i-flagpack-gb-ukm",GR:"i-flagpack-gr",IR:"i-flagpack-ie",IN:"i-flagpack-in",IT:"i-flagpack-it",JP:"i-flagpack-jp",KR:"i-flagpack-kr",LI:"i-flagpack-li",LU:"i-flagpack-lu",NL:"i-flagpack-nl",NO:"i-flagpack-no",NZ:"i-flagpack-nz",PL:"i-flagpack-pl",PT:"i-flagpack-pt",RU:"i-flagpack-ru",SE:"i-flagpack-se",SG:"i-flagpack-sg",TR:"i-flagpack-tr",TW:"i-flagpack-tw",US:"i-flagpack-us",VN:"i-flagpack-vn",ZA:"i-flagpack-za"})[m.country]);return(p,d)=>(c(),u("i",{class:se(["ii",e(b)])},null,2))}}),fe=O({__name:"PricesTable",props:{prices:null},setup(P){const m=P,b=T(()=>m.prices.map(d=>({dateStr:d.date,date:new Date(d.date),close:d.close}))),p=w({date:{operator:re.AND,constraints:[{value:null,matchMode:ie.DATE_IS}]}});return(d,C)=>{const N=_("Calendar"),S=_("Column"),r=_("DataTable");return c(),u("div",null,[l(r,{filters:e(p),"onUpdate:filters":C[0]||(C[0]=f=>Y(p)?p.value=f:null),value:e(b),class:"p-datatable-sm",paginator:!0,rows:10,"sort-field":"date","sort-order":-1,"rows-per-page-options":[10,30,100,300],"filter-display":"menu"},{default:i(()=>[l(S,{field:"date",header:"Date",sortable:"","data-type":"date"},{body:i(({data:f})=>[n(t(f.dateStr),1)]),filter:i(({filterModel:f})=>[l(N,{modelValue:f.value,"onUpdate:modelValue":A=>f.value=A,"date-format":"yy-mm-dd",placeholder:"yyyy-mm-dd"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(S,{field:"close",header:"Close"},{body:i(({data:f})=>[n(t(f.close.toLocaleString(void 0,{minimumFractionDigits:2})),1)]),_:1})]),_:1},8,["filters","value"])])}}}),_e={class:"flex justify-content-center"},ye={style:{width:"800px"}},ge={class:"flex flex-wrap"},be={class:"flex-grow-1"},ke={class:"text-600"},he=["src"],ve={key:0},xe={key:1},we={key:2},Ce={key:3},Te={key:4},De={key:5},Pe={key:6},Ne={key:0},Ue=O({__name:"[uuid]",async setup(P){let m,b;const p=w(""),d=w(null),C=ce(),{data:N,error:S}=([m,b]=M(()=>H(`security:${C.params.uuid}`,()=>I(`/securities/uuid/${C.params.uuid}`))),m=await m,b(),m);if(S.value||!N.value)throw z({statusCode:404,message:"This page could not be found",fatal:!0});const r=w(N.value),f=T(()=>{var s,y;return(y=(s=r.value)==null?void 0:s.markets)==null?void 0:y.map(g=>{let x;return g.marketCode==="XETR"?x="XETRA (Frankfurt)":g.marketCode==="XFRA"?x="Frankfurt":g.marketCode==="XNAS"?x="NASDAQ":g.marketCode==="XNYS"&&(x="NYSE"),{...g,name:x}})}),{data:A}=([m,b]=M(()=>H("taxonomies",()=>I("/taxonomies/"))),m=await m,b(),m);if(!A.value)throw z({statusCode:404,message:"This page could not be found",fatal:!0});const J=w(A.value),E=T(()=>r.value.securityTaxonomies.map(s=>({...s,weight:Number(s.weight),taxonomy:J.value.find(y=>y.uuid===s.taxonomyUuid)}))),v=T(()=>E.value.filter(s=>s.rootTaxonomyUuid==="5b0d5647-a4e6-4db8-807b-c3a6d11697a7")),X=w(),Q=s=>{X.value.toggle(s)},D=T(()=>E.value.filter(s=>s.rootTaxonomyUuid==="072bba7b-ed7a-4cb4-aab3-91520d00fb00")),$=w(),W=s=>{$.value.toggle(s)};ue(p,async s=>{d.value=await I(`/securities/uuid/${C.params.uuid}/markets/${s}`,{params:{from:"2000-01-01"}})});async function Z({date:s}){if(await I(`/securities/uuid/${r.value.uuid}/markets/${p.value}/prices/${s}`,{method:"delete"}),d.value){const y=d.value.prices.findIndex(g=>g.date===s);delete d.value.prices[y]}}return de(()=>{var s;return{title:((s=r.value)==null?void 0:s.name)+" - Portfolio Report",link:[{rel:"canonical",href:"https://www.portfolio-report.net/securities/"+r.value.uuid}]}}),(s,y)=>{const g=_("Tag"),x=le,q=_("Button"),ee=ne,B=pe,k=_("Column"),R=_("DataTable"),L=_("OverlayPanel"),V=_("TabPanel"),ae=_("Dropdown"),te=fe,oe=_("TabView"),F=me("tooltip");return c(),u("div",_e,[a("div",ye,[a("div",ge,[a("div",be,[a("h2",null,[n(t(e(r).name)+" ",1),l(g,{class:"mx-1 bg-teal-500 vertical-align-top"},{default:i(()=>[n(t(e(r).securityType),1)]),_:1}),(c(!0),u(G,null,K(e(r).tags,o=>(c(),j(x,{key:o,class:"vertical-align-top",name:o},null,8,["name"]))),128))]),a("div",ke,[U((c(),u("span",null,[n(t(e(r).isin),1)])),[[F,"ISIN",void 0,{top:!0}]]),n(" · "),U((c(),u("span",null,[n(t(e(r).wkn),1)])),[[F,"WKN",void 0,{top:!0}]])]),l(ee,{to:s.$route.path},{default:i(()=>[U(l(q,{class:"mt-2 cursor-move w-20rem",icon:"i-carbon-move i-lg",label:"Add to Portfolio Performance"},null,512),[[F,{escape:!0,value:"<h4>Drag and drop!</h4> To add this security in Portfolio Performance, drag and drop it to securities list or statement of assets."},void 0,{right:!0}]])]),_:1},8,["to"])]),a("div",null,[e(r).logoUrl?(c(),u("img",{key:0,src:e(r).logoUrl,style:{"max-width":"100px","max-height":"100px","mix-blend-mode":"multiply"}},null,8,he)):h("",!0)])]),l(oe,{class:"mt-2"},{default:i(()=>[l(V,{header:"Overview"},{default:i(()=>[a("ul",null,[(c(!0),u(G,null,K(e(f),o=>(c(),u("li",{key:o.marketCode},[n(" Market: "),a("b",null,t(o.name),1),a("ul",null,[a("li",null,[n(" Currency: "),a("b",null,t(o.currencyCode||"-"),1)]),a("li",null,[n(" Symbol: "),a("b",null,t(o.symbol),1)]),a("li",null,[n(" Prices available: "),a("b",null,t(o.firstPriceDate),1),n(" - "),a("b",null,t(o.lastPriceDate),1)])])]))),128)),e(r).symbolXfra?(c(),u("li",ve,[n(" Symbol (Frankfurt): "),a("b",null,t(e(r).symbolXfra),1)])):h("",!0),e(r).symbolXnas?(c(),u("li",xe,[n(" Symbol (NASDAQ): "),a("b",null,t(e(r).symbolXnas),1)])):h("",!0),e(r).symbolXnys?(c(),u("li",we,[n(" Symbol (New York): "),a("b",null,t(e(r).symbolXnys),1)])):h("",!0),e(v).length===1&&e(v)[0].taxonomy?(c(),u("li",Ce,[n(" Country: "),l(B,{country:e(v)[0].taxonomy.code||""},null,8,["country"]),a("b",null,t(e(v)[0].taxonomy.name)+" ("+t(e(v)[0].taxonomy.code)+") ",1)])):e(v).length>1?(c(),u("li",Te,[a("a",{href:"#",onClick:Q},"Countries"),l(L,{ref_key:"countriesOverlay",ref:X,"show-close-icon":!0},{default:i(()=>[l(R,{value:e(v),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm mb-2"},{default:i(()=>[l(k,{field:"weight",header:"Percentage",sortable:!0},{body:i(({data:o})=>[n(t(o.weight)+"%",1)]),_:1}),l(k,{field:"taxonomy.name",header:"Country",sortable:!0},{body:i(({data:o})=>[l(B,{country:o.taxonomy.code},null,8,["country"]),n(" "+t(o.taxonomy.name),1)]),_:1}),l(k,{field:"taxonomy.code",header:"Code",sortable:!0})]),_:1},8,["value"])]),_:1},512)])):h("",!0),e(D).length==1&&e(D)[0].taxonomy?(c(),u("li",De,[n(" Industry: "),a("b",null,t(e(D)[0].taxonomy.name),1)])):e(D).length>1?(c(),u("li",Pe,[a("a",{href:"#",onClick:W},"Industries"),l(L,{ref_key:"industriesOverlay",ref:$,"show-close-icon":!0},{default:i(()=>[l(R,{value:e(D),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm"},{default:i(()=>[l(k,{field:"weight",header:"Percentage",sortable:!0},{body:i(({data:o})=>[n(t(o.weight)+"%",1)]),_:1}),l(k,{field:"taxonomy.name",header:"Country",sortable:!0})]),_:1},8,["value"])]),_:1},512)])):h("",!0)])]),_:1}),l(V,{header:"Prices"},{default:i(()=>[l(ae,{id:"market",modelValue:e(p),"onUpdate:modelValue":y[0]||(y[0]=o=>Y(p)?p.value=o:null),options:e(f),"option-label":"name","option-value":"marketCode",placeholder:"Please select market"},{option:i(({option:o})=>[n(t(o.name)+" - "+t(o.marketCode),1)]),_:1},8,["modelValue","options"]),e(d)?(c(),u("div",Ne,[a("ul",null,[a("li",null,[n(" Symbol: "),a("b",null,t(e(d).symbol),1)]),a("li",null,[n(" Currency: "),a("b",null,t(e(d).currencyCode||"-"),1)]),a("li",null,[n(" Prices available: "),a("b",null,t(e(d).firstPriceDate),1),n(" - "),a("b",null,t(e(d).lastPriceDate),1)])]),l(te,{prices:e(d).prices,onDeletePrice:Z},null,8,["prices"])])):h("",!0)]),_:1}),e(r).events&&e(r).events.length>0?(c(),j(V,{key:0,header:"Events"},{default:i(()=>[l(R,{value:e(r).events},{default:i(()=>[l(k,{field:"date",header:"Date"}),l(k,{field:"type",header:"Type",style:{"text-transform":"capitalize"}}),l(k,{header:"..."},{body:i(({data:o})=>[n(t(o.type==="dividend"?o.amount+" "+o.currencyCode:"")+" "+t(o.type==="split"?o.ratio:""),1)]),_:1})]),_:1},8,["value"])]),_:1})):h("",!0)]),_:1})])])}}});export{Ue as default};
