import{d,E as S,h as b,r as v,H as g,o as r,c as p,a,w as f,K as u,F as y,b as n,A as $,G as T,_ as x,T as L,U as V,n as k,z as w,f as C,B as N,V as F}from"./entry.85781658.js";import{_ as m}from"./_plugin-vue_export-helper.a1a6add7.js";const R=""+globalThis.__publicAssetsURL("favicon-192.png"),h=o=>(L("data-v-3fb828f6"),o=o(),V(),o),G={class:"layout-topbar"},U=h(()=>n("img",{class:"mx-2 h-4rem",src:R,to:"/",alt:"Logo"},null,-1)),q=h(()=>n("span",{class:"text-2xl font-medium align-self-center text-color"}," Portfolio Report ",-1)),z=h(()=>n("i",{class:"i-carbon-overflow-menu-vertical"},null,-1)),D={class:"layout-topbar-menu hidden lg:flex origin-top"},E=["onSubmit"],O={class:"p-inputgroup"},j=d({__name:"AppTopBar",setup(o){const s=S(),t=b("");function i(){const c=t.value;t.value="",s.push({path:"/search",query:{q:c}})}return(c,e)=>{const l=x,_=v("Button"),I=v("InputText"),B=g("styleclass");return r(),p("div",G,[a(l,{to:"/",class:"layout-topbar-logo"},{default:f(()=>[U,q]),_:1}),u((r(),y(_,{class:"p-link layout-topbar-menu-button layout-topbar-button"},{default:f(()=>[z]),_:1})),[[B,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),n("ul",D,[n("li",null,[c.$route.path.startsWith("/search")?T("",!0):(r(),p("form",{key:0,onSubmit:$(i,["prevent"])},[n("div",O,[a(I,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=A=>t.value=A),placeholder:"Search"},null,8,["modelValue"]),a(_,{type:"submit",icon:"i-carbon-search i-lg",class:"p-button-secondary"})])],40,E))])])])}}});const H=m(j,[["__scopeId","data-v-3fb828f6"]]),K=d({__name:"IconLink",props:{color:null,to:null,href:null,target:null,icon:null,small:{type:Boolean},type:null},emits:["click"],setup(o,{emit:s}){const t=o,i=k(()=>t.icon&&!t.small?t.icon+" i-lg":t.icon);return(c,e)=>{const l=x;return r(),y(l,{to:o.to,href:o.to?void 0:o.href||"#",target:o.target,onClick:e[0]||(e[0]=_=>s("click",_))},{default:f(()=>[n("i",{class:w(["ii",C(i)])},null,2)]),_:1},8,["to","href","target"])}}});const M=m(K,[["__scopeId","data-v-56d57d9c"]]),P={class:"flex justify-content-center"},W=d({__name:"AppFooter",setup(o){const s=N(),t=k(()=>s.public.gitSha?"https://github.com/portfolio-report/pr-www/tree/"+s.public.gitSha:"https://www.github.com/portfolio-report/pr-www");return(i,c)=>{const e=M,l=g("tooltip");return r(),p("footer",P,[u(a(e,{href:"https://forum.portfolio-performance.info/",icon:"i-carbon-forum"},null,512),[[l,"Get help and discuss",void 0,{top:!0}]]),u(a(e,{to:"/contact",icon:"i-carbon-email"},null,512),[[l,"Get in contact",void 0,{top:!0}]]),u(a(e,{href:C(t),target:"_blank",icon:"i-carbon-logo-github"},null,8,["href"]),[[l,"Source code",void 0,{top:!0}]])])}}});const J=m(W,[["__scopeId","data-v-df6a6681"]]),Q={class:"layout-main-container"},X={class:"layout-main"},Y=d({__name:"default",setup(o){const s=b(["layout-wrapper","layout-overlay"]);return(t,i)=>{const c=H,e=J;return r(),p("div",{class:w(s.value)},[a(c),n("div",Q,[n("div",X,[F(t.$slots,"default",{},void 0,!0)]),a(e)])],2)}}});const ot=m(Y,[["__scopeId","data-v-026e2a47"]]);export{ot as default};
