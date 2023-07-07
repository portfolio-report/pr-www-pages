import{_ as oe}from"./SecurityTag.c2b96d5e.js";import{h as F,c as C,m as c,q as d,y as le,u as e,r as x,L as ne,l as _,s as l,t as r,v as s,H as o,i as J,C as se,M as G,N as K,w as re,j as ie,E as ce,x as a,I as M,J as j,K as U,F as E,G as P,_ as ue}from"./entry.21df9480.js";import{u as H}from"./asyncData.0aa6a1a4.js";import{u as I}from"./useApi.e4d0872e.js";import"./_plugin-vue_export-helper.c27b6911.js";const de=F({__name:"CountryFlag",props:{country:{}},setup(D){const p=D,v=C(()=>({AR:"i-flagpack-ar",AT:"i-flagpack-at",AU:"i-flagpack-au",BE:"i-flagpack-be",BR:"i-flagpack-br",CA:"i-flagpack-ca",CH:"i-flagpack-ch",CN:"i-flagpack-cn",DE:"i-flagpack-de",DK:"i-flagpack-dk",ES:"i-flagpack-es",FI:"i-flagpack-fi",FR:"i-flagpack-fr",GB:"i-flagpack-gb-ukm",GR:"i-flagpack-gr",IR:"i-flagpack-ie",IN:"i-flagpack-in",IT:"i-flagpack-it",JP:"i-flagpack-jp",KR:"i-flagpack-kr",LI:"i-flagpack-li",LU:"i-flagpack-lu",NL:"i-flagpack-nl",NO:"i-flagpack-no",NZ:"i-flagpack-nz",PL:"i-flagpack-pl",PT:"i-flagpack-pt",RU:"i-flagpack-ru",SE:"i-flagpack-se",SG:"i-flagpack-sg",TR:"i-flagpack-tr",TW:"i-flagpack-tw",US:"i-flagpack-us",VN:"i-flagpack-vn",ZA:"i-flagpack-za"})[p.country]);return(m,u)=>(c(),d("i",{class:le(["ii",e(v)])},null,2))}}),pe=F({__name:"PricesTable",props:{prices:{}},setup(D){const p=D,v=C(()=>p.prices.map(u=>({dateStr:u.date,date:new Date(u.date),close:u.close}))),m=x({date:{operator:ne.AND,constraints:[{value:null,matchMode:"dateIs"}]}});return(u,w)=>{const N=_("Calendar"),S=_("Column"),i=_("DataTable");return c(),d("div",null,[l(i,{filters:e(m),"onUpdate:filters":w[0]||(w[0]=f=>J(m)?m.value=f:null),value:e(v),class:"p-datatable-sm",paginator:!0,rows:10,"sort-field":"date","sort-order":-1,"rows-per-page-options":[10,30,100,300],"filter-display":"menu"},{default:r(()=>[l(S,{field:"date",header:"Date",sortable:"","data-type":"date"},{body:r(({data:f})=>[s(o(f.dateStr),1)]),filter:r(({filterModel:f})=>[l(N,{modelValue:f.value,"onUpdate:modelValue":A=>f.value=A,"date-format":"yy-mm-dd",placeholder:"yyyy-mm-dd"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(S,{field:"close",header:"Close"},{body:r(({data:f})=>[s(o(f.close.toLocaleString(void 0,{minimumFractionDigits:2})),1)]),_:1})]),_:1},8,["filters","value"])])}}}),me={class:"flex justify-content-center"},fe={style:{width:"800px"}},_e={class:"flex flex-wrap"},ye={class:"flex-grow-1"},ge={class:"text-600"},ve=a("span",{class:"mt-2 cursor-move w-20rem p-button p-component"},[a("span",{class:"i-carbon-move i-lg p-button-icon p-button-icon-left"}),a("span",{class:"p-button-label"},"Add to Portfolio Performance")],-1),be=["src"],he={key:0},ke={key:1},xe={key:2},we={key:3},Ce={key:0},Ae=F({__name:"[uuid]",async setup(D){let p,v;const m=x(""),u=x(null),w=se(),{data:N,error:S}=([p,v]=G(()=>H(`security:${w.params.uuid}`,()=>I(`/securities/uuid/${w.params.uuid}`))),p=await p,v(),p);if(S.value||!N.value)throw K({statusCode:404,message:"This page could not be found",fatal:!0});const i=x(N.value),f=C(()=>{var n,y;return(y=(n=i.value)==null?void 0:n.markets)==null?void 0:y.map(g=>{let k;return g.marketCode==="XETR"?k="XETRA (Frankfurt)":g.marketCode==="XFRA"?k="Frankfurt":g.marketCode==="XNAS"?k="NASDAQ":g.marketCode==="XNYS"&&(k="NYSE"),{...g,name:k}})}),{data:A}=([p,v]=G(()=>H("taxonomies",()=>I("/taxonomies/"))),p=await p,v(),p);if(!A.value)throw K({statusCode:404,message:"This page could not be found",fatal:!0});const W=x(A.value),O=C(()=>i.value.securityTaxonomies.map(n=>({...n,weight:Number(n.weight),taxonomy:W.value.find(y=>y.uuid===n.taxonomyUuid)}))),h=C(()=>O.value.filter(n=>n.rootTaxonomyUuid==="5b0d5647-a4e6-4db8-807b-c3a6d11697a7")),L=x();function Y(n){L.value.toggle(n)}const T=C(()=>O.value.filter(n=>n.rootTaxonomyUuid==="072bba7b-ed7a-4cb4-aab3-91520d00fb00")),B=x();function Z(n){B.value.toggle(n)}re(m,async n=>{u.value=await I(`/securities/uuid/${w.params.uuid}/markets/${n}`,{params:{from:"2000-01-01"}})});async function q({date:n}){if(await I(`/securities/uuid/${i.value.uuid}/markets/${m.value}/prices/${n}`,{method:"delete"}),u.value){const y=u.value.prices.findIndex(g=>g.date===n);delete u.value.prices[y]}}return ie(()=>{var n;return{title:`${(n=i.value)==null?void 0:n.name} - Portfolio Report`,link:[{rel:"canonical",href:`https://www.portfolio-report.net/securities/${i.value.uuid}`}]}}),(n,y)=>{const g=_("Tag"),k=oe,Q=ue,X=de,b=_("Column"),$=_("DataTable"),z=_("OverlayPanel"),R=_("TabPanel"),ee=_("Dropdown"),ae=pe,te=_("TabView"),V=ce("tooltip");return c(),d("div",me,[a("div",fe,[a("div",_e,[a("div",ye,[a("h2",null,[s(o(e(i).name)+" ",1),l(g,{class:"mx-1 bg-teal-500 vertical-align-top"},{default:r(()=>[s(o(e(i).securityType),1)]),_:1}),(c(!0),d(M,null,j(e(i).tags,t=>(c(),E(k,{key:t,class:"vertical-align-top",name:t},null,8,["name"]))),128))]),a("div",ge,[U((c(),d("span",null,[s(o(e(i).isin),1)])),[[V,"ISIN",void 0,{top:!0}]]),s(" · "),U((c(),d("span",null,[s(o(e(i).wkn),1)])),[[V,"WKN",void 0,{top:!0}]])]),U((c(),E(Q,{to:n.$route.path},{default:r(()=>[ve]),_:1},8,["to"])),[[V,{escape:!0,value:"<h4>Drag and drop!</h4> To add this security in Portfolio Performance, drag and drop it to securities list or statement of assets."},void 0,{right:!0}]])]),a("div",null,[e(i).logoUrl?(c(),d("img",{key:0,src:e(i).logoUrl,style:{"max-width":"100px","max-height":"100px","mix-blend-mode":"multiply"}},null,8,be)):P("",!0)])]),l(te,{class:"mt-2"},{default:r(()=>[l(R,{header:"Overview"},{default:r(()=>[a("ul",null,[(c(!0),d(M,null,j(e(f),t=>(c(),d("li",{key:t.marketCode},[s(" Market: "),a("b",null,o(t.name),1),a("ul",null,[a("li",null,[s(" Currency: "),a("b",null,o(t.currencyCode||"-"),1)]),a("li",null,[s(" Symbol: "),a("b",null,o(t.symbol),1)]),a("li",null,[s(" Prices available: "),a("b",null,o(t.firstPriceDate),1),s(" - "),a("b",null,o(t.lastPriceDate),1)])])]))),128)),e(h).length===1&&e(h)[0].taxonomy?(c(),d("li",he,[s(" Country: "),l(X,{country:e(h)[0].taxonomy.code||""},null,8,["country"]),a("b",null,o(e(h)[0].taxonomy.name)+" ("+o(e(h)[0].taxonomy.code)+") ",1)])):e(h).length>1?(c(),d("li",ke,[a("a",{href:"#",onClick:Y},"Countries"),l(z,{ref_key:"countriesOverlay",ref:L,"show-close-icon":!0},{default:r(()=>[l($,{value:e(h),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm mb-2"},{default:r(()=>[l(b,{field:"weight",header:"Percentage",sortable:!0},{body:r(({data:t})=>[s(o(t.weight)+"% ",1)]),_:1}),l(b,{field:"taxonomy.name",header:"Country",sortable:!0},{body:r(({data:t})=>[l(X,{country:t.taxonomy.code},null,8,["country"]),s(" "+o(t.taxonomy.name),1)]),_:1}),l(b,{field:"taxonomy.code",header:"Code",sortable:!0})]),_:1},8,["value"])]),_:1},512)])):P("",!0),e(T).length===1&&e(T)[0].taxonomy?(c(),d("li",xe,[s(" Industry: "),a("b",null,o(e(T)[0].taxonomy.name),1)])):e(T).length>1?(c(),d("li",we,[a("a",{href:"#",onClick:Z},"Industries"),l(z,{ref_key:"industriesOverlay",ref:B,"show-close-icon":!0},{default:r(()=>[l($,{value:e(T),"sort-field":"weight","sort-order":-1,class:"p-datatable-sm"},{default:r(()=>[l(b,{field:"weight",header:"Percentage",sortable:!0},{body:r(({data:t})=>[s(o(t.weight)+"% ",1)]),_:1}),l(b,{field:"taxonomy.name",header:"Country",sortable:!0})]),_:1},8,["value"])]),_:1},512)])):P("",!0)])]),_:1}),l(R,{header:"Prices"},{default:r(()=>[l(ee,{id:"market",modelValue:e(m),"onUpdate:modelValue":y[0]||(y[0]=t=>J(m)?m.value=t:null),options:e(f),"option-label":"name","option-value":"marketCode",placeholder:"Please select market"},{option:r(({option:t})=>[s(o(t.name)+" - "+o(t.marketCode),1)]),_:1},8,["modelValue","options"]),e(u)?(c(),d("div",Ce,[a("ul",null,[a("li",null,[s(" Symbol: "),a("b",null,o(e(u).symbol),1)]),a("li",null,[s(" Currency: "),a("b",null,o(e(u).currencyCode||"-"),1)]),a("li",null,[s(" Prices available: "),a("b",null,o(e(u).firstPriceDate),1),s(" - "),a("b",null,o(e(u).lastPriceDate),1)])]),l(ae,{prices:e(u).prices,onDeletePrice:q},null,8,["prices"])])):P("",!0)]),_:1}),e(i).events&&e(i).events.length>0?(c(),E(R,{key:0,header:"Events"},{default:r(()=>[l($,{value:e(i).events},{default:r(()=>[l(b,{field:"date",header:"Date"}),l(b,{field:"type",header:"Type",style:{"text-transform":"capitalize"}}),l(b,{header:"..."},{body:r(({data:t})=>[s(o(t.type==="dividend"?`${t.amount} ${t.currencyCode}`:"")+" "+o(t.type==="split"?t.ratio:""),1)]),_:1})]),_:1},8,["value"])]),_:1})):P("",!0)]),_:1})])])}}});export{Ae as default};
