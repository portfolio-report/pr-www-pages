import{d,G as S,h as b,r as v,I as g,o as r,c as p,a,w as f,L as u,B as y,b as n,A as $,H as L,_ as x,U as T,V,n as k,z as w,f as C,D as N,C as R}from"./entry.a64c2451.js";import{_ as m}from"./_plugin-vue_export-helper.a1a6add7.js";const D=""+globalThis.__publicAssetsURL("favicon-192.png"),h=o=>(T("data-v-3fb828f6"),o=o(),V(),o),F={class:"layout-topbar"},G=h(()=>n("img",{class:"mx-2 h-4rem",src:D,to:"/",alt:"Logo"},null,-1)),U=h(()=>n("span",{class:"text-2xl font-medium align-self-center text-color"}," Portfolio Report ",-1)),q=h(()=>n("i",{class:"i-carbon-overflow-menu-vertical"},null,-1)),z={class:"layout-topbar-menu hidden lg:flex origin-top"},O=["onSubmit"],j={class:"p-inputgroup"},E=d({__name:"AppTopBar",setup(o){const s=S(),t=b("");function i(){const c=t.value;t.value="",s.push({path:"/search",query:{q:c}})}return(c,e)=>{const l=x,_=v("Button"),I=v("InputText"),B=g("styleclass");return r(),p("div",F,[a(l,{to:"/",class:"layout-topbar-logo"},{default:f(()=>[G,U]),_:1}),u((r(),y(_,{class:"p-link layout-topbar-menu-button layout-topbar-button"},{default:f(()=>[q]),_:1})),[[B,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),n("ul",z,[n("li",null,[c.$route.path.startsWith("/search")?L("",!0):(r(),p("form",{key:0,onSubmit:$(i,["prevent"])},[n("div",j,[a(I,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=A=>t.value=A),placeholder:"Search"},null,8,["modelValue"]),a(_,{type:"submit",icon:"i-carbon-search i-lg",class:"p-button-secondary"})])],40,O))])])])}}});const H=m(E,[["__scopeId","data-v-3fb828f6"]]),M=d({__name:"IconLink",props:{color:null,to:null,href:null,target:null,icon:null,small:{type:Boolean},type:null},emits:["click"],setup(o,{emit:s}){const t=o,i=k(()=>t.icon&&!t.small?t.icon+" i-lg":t.icon);return(c,e)=>{const l=x;return r(),y(l,{to:o.to,href:o.to?void 0:o.href||"#",target:o.target,onClick:e[0]||(e[0]=_=>s("click",_))},{default:f(()=>[n("i",{class:w(["ii",C(i)])},null,2)]),_:1},8,["to","href","target"])}}});const P=m(M,[["__scopeId","data-v-56d57d9c"]]),W={class:"flex justify-content-center"},J=d({__name:"AppFooter",setup(o){const s=N(),t=k(()=>s.public.gitSha?"https://github.com/portfolio-report/pr-www/tree/"+s.public.gitSha:"https://www.github.com/portfolio-report/pr-www");return(i,c)=>{const e=P,l=g("tooltip");return r(),p("footer",W,[u(a(e,{href:"https://forum.portfolio-performance.info/",icon:"i-carbon-forum"},null,512),[[l,"Get help and discuss",void 0,{top:!0}]]),u(a(e,{to:"/contact",icon:"i-carbon-email"},null,512),[[l,"Get in contact",void 0,{top:!0}]]),u(a(e,{href:C(t),target:"_blank",icon:"i-carbon-logo-github"},null,8,["href"]),[[l,"Source code",void 0,{top:!0}]])])}}});const K=m(J,[["__scopeId","data-v-df6a6681"]]),Q={class:"layout-main-container"},X={class:"layout-main"},Y=d({__name:"default",setup(o){const s=b(["layout-wrapper","layout-overlay"]);return(t,i)=>{const c=H,e=K;return r(),p("div",{class:w(s.value)},[a(c),n("div",Q,[n("div",X,[R(t.$slots,"default",{},void 0,!0)]),a(e)])],2)}}});const ot=m(Y,[["__scopeId","data-v-026e2a47"]]);export{ot as default};
