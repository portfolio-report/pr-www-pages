import{a3 as L,h as d,a4 as N,r as w,l as g,G as x,t as i,m as _,q as r,s as v,U as y,M as p,H as C,I as k,x as s,z as R,u as m,i as T,_ as $,N as V,O as q,c as I,y as S,a2 as G,P as O}from"./DSeLnzYf.js";import{_ as f}from"./DlAUqK2U.js";const P=L("/favicon-192.png"),b=n=>(V("data-v-23886394"),n=n(),q(),n),U={class:"layout-topbar"},z=b(()=>s("img",{class:"mx-2 h-4rem",src:P,alt:"Logo"},null,-1)),D=b(()=>s("span",{class:"text-2xl font-medium align-self-center text-color"}," Portfolio Report ",-1)),F=b(()=>s("i",{class:"i-carbon-overflow-menu-vertical"},null,-1)),M={key:1,class:"layout-topbar-menu hidden lg:flex origin-top"},W={class:"p-inputgroup"},j=d({__name:"AppTopBar",setup(n){const a=N(),t=w("");function l(){const e=t.value;t.value="",a.push({path:"/search",query:{q:e}})}return(e,o)=>{const c=$,u=g("Button"),h=g("InputText"),B=x("styleclass");return i(),_("div",U,[r(c,{to:"/",class:"layout-topbar-logo"},{default:v(()=>[z,D]),_:1}),(e._.provides[y]||e.$route).path.startsWith("/search")?k("",!0):p((i(),C(u,{key:0,text:"",rounded:"",class:"p-button-icon-only layout-topbar-menu-button"},{default:v(()=>[F]),_:1})),[[B,{selector:"@next",enterClass:"hidden",enterActiveClass:"scalein",leaveToClass:"hidden",leaveActiveClass:"fadeout",hideOnOutsideClick:!0}]]),(e._.provides[y]||e.$route).path.startsWith("/search")?k("",!0):(i(),_("ul",M,[s("li",null,[s("form",{onSubmit:R(l,["prevent"])},[s("div",W,[r(h,{modelValue:m(t),"onUpdate:modelValue":o[0]||(o[0]=A=>T(t)?t.value=A:null),placeholder:"Search"},null,8,["modelValue"]),r(u,{type:"submit",icon:"i-carbon-search i-lg",class:"p-button-secondary"})])],32)])]))])}}}),E=f(j,[["__scopeId","data-v-23886394"]]),H=d({__name:"IconLink",props:{color:{},to:{},href:{},target:{},icon:{},small:{type:Boolean},type:{}},emits:["click"],setup(n,{emit:a}){const t=n,l=a,e=I(()=>t.icon&&!t.small?`${t.icon} i-lg`:t.icon);return(o,c)=>{const u=$;return i(),C(u,{to:o.to,href:o.to?void 0:o.href||"#",target:o.target,onClick:c[0]||(c[0]=h=>l("click",h))},{default:v(()=>[s("i",{class:S(["ii",m(e)])},null,2)]),_:1},8,["to","href","target"])}}}),J=f(H,[["__scopeId","data-v-584a99b0"]]),K={class:"flex justify-content-center"},Q=d({__name:"AppFooter",setup(n){const a=G(),t=I(()=>a.public.gitSha?`https://github.com/portfolio-report/pr-www/tree/${a.public.gitSha}`:"https://www.github.com/portfolio-report/pr-www");return(l,e)=>{const o=J,c=x("tooltip");return i(),_("footer",K,[p(r(o,{href:"https://forum.portfolio-performance.info/",icon:"i-carbon-forum"},null,512),[[c,"Get help and discuss",void 0,{top:!0}]]),p(r(o,{to:"/contact",icon:"i-carbon-email"},null,512),[[c,"Get in contact",void 0,{top:!0}]]),p(r(o,{href:m(t),target:"_blank",icon:"i-carbon-logo-github"},null,8,["href"]),[[c,"Source code",void 0,{top:!0}]])])}}}),X=f(Q,[["__scopeId","data-v-fe2bc057"]]),Y={class:"layout-main-container"},Z={class:"layout-main"},tt=d({__name:"default",setup(n){const a=w(["layout-wrapper","layout-overlay"]);return(t,l)=>{const e=E,o=X;return i(),_("div",{class:S(m(a))},[r(e),s("div",Y,[s("div",Z,[O(t.$slots,"default",{},void 0,!0)]),r(o)])],2)}}}),st=f(tt,[["__scopeId","data-v-fa9fc3a4"]]);export{st as default};
