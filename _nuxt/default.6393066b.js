import{h as d,D as A,r as y,l as b,E as x,m as i,q as u,s as c,t as h,K as p,F as k,G as g,x as s,z as L,u as m,i as T,_ as w,W as V,X as R,c as C,y as $,V as N,R as F}from"./entry.42582225.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";const q=""+globalThis.__publicAssetsURL("favicon-192.png"),v=n=>(V("data-v-b8641204"),n=n(),R(),n),D={class:"layout-topbar"},G=v(()=>s("img",{class:"mx-2 h-4rem",src:q,to:"/",alt:"Logo"},null,-1)),W=v(()=>s("span",{class:"text-2xl font-medium align-self-center text-color"}," Portfolio Report ",-1)),z=v(()=>s("i",{class:"i-carbon-overflow-menu-vertical"},null,-1)),E={key:1,class:"layout-topbar-menu hidden lg:flex origin-top"},O=["onSubmit"],U={class:"p-inputgroup"},j=d({__name:"AppTopBar",setup(n){const a=A(),t=y("");function l(){const o=t.value;t.value="",a.push({path:"/search",query:{q:o}})}return(o,e)=>{const r=w,_=b("Button"),I=b("InputText"),B=x("styleclass");return i(),u("div",D,[c(r,{to:"/",class:"layout-topbar-logo"},{default:h(()=>[G,W]),_:1}),o.$route.path.startsWith("/search")?g("",!0):p((i(),k(_,{key:0,class:"p-link layout-topbar-menu-button layout-topbar-button"},{default:h(()=>[z]),_:1})),[[B,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),o.$route.path.startsWith("/search")?g("",!0):(i(),u("ul",E,[s("li",null,[s("form",{onSubmit:L(l,["prevent"])},[s("div",U,[c(I,{modelValue:m(t),"onUpdate:modelValue":e[0]||(e[0]=S=>T(t)?t.value=S:null),placeholder:"Search"},null,8,["modelValue"]),c(_,{type:"submit",icon:"i-carbon-search i-lg",class:"p-button-secondary"})])],40,O)])]))])}}});const K=f(j,[["__scopeId","data-v-b8641204"]]),M=d({__name:"IconLink",props:{color:{},to:{},href:{},target:{},icon:{},small:{type:Boolean},type:{}},emits:["click"],setup(n,{emit:a}){const t=n,l=C(()=>t.icon&&!t.small?`${t.icon} i-lg`:t.icon);return(o,e)=>{const r=w;return i(),k(r,{to:o.to,href:o.to?void 0:o.href||"#",target:o.target,onClick:e[0]||(e[0]=_=>a("click",_))},{default:h(()=>[s("i",{class:$(["ii",m(l)])},null,2)]),_:1},8,["to","href","target"])}}});const P=f(M,[["__scopeId","data-v-584a99b0"]]),X={class:"flex justify-content-center"},H=d({__name:"AppFooter",setup(n){const a=N(),t=C(()=>a.public.gitSha?`https://github.com/portfolio-report/pr-www/tree/${a.public.gitSha}`:"https://www.github.com/portfolio-report/pr-www");return(l,o)=>{const e=P,r=x("tooltip");return i(),u("footer",X,[p(c(e,{href:"https://forum.portfolio-performance.info/",icon:"i-carbon-forum"},null,512),[[r,"Get help and discuss",void 0,{top:!0}]]),p(c(e,{to:"/contact",icon:"i-carbon-email"},null,512),[[r,"Get in contact",void 0,{top:!0}]]),p(c(e,{href:m(t),target:"_blank",icon:"i-carbon-logo-github"},null,8,["href"]),[[r,"Source code",void 0,{top:!0}]])])}}});const J=f(H,[["__scopeId","data-v-fe2bc057"]]),Q={class:"layout-main-container"},Y={class:"layout-main"},Z=d({__name:"default",setup(n){const a=y(["layout-wrapper","layout-overlay"]);return(t,l)=>{const o=K,e=J;return i(),u("div",{class:$(m(a))},[c(o),s("div",Q,[s("div",Y,[F(t.$slots,"default",{},void 0,!0)]),c(e)])],2)}}});const et=f(Z,[["__scopeId","data-v-fa9fc3a4"]]);export{et as default};
