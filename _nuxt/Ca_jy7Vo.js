import{a as d}from"./BCn6HYWu.js";import{q as p,c as m,h as c,G as f,y as u,k as y,u as l}from"./DPUzvYJD.js";import{_ as b}from"./DlAUqK2U.js";const k=p({__name:"TextBtn",props:{color:{},icon:{},label:{},small:{type:Boolean},solid:{type:Boolean},type:{},form:{},disabled:{type:Boolean}},emits:["click"],setup(t,{emit:i}){const o=t,n=i,r=m(()=>o.icon&&!o.small?`${o.icon} i-lg`:o.icon);return(e,s)=>(c(),f(l(d),{type:e.type,icon:l(r),text:!e.solid,rounded:!e.label,size:e.small?"small":void 0,severity:e.color,label:e.label,form:e.form,disabled:e.disabled,onClick:s[0]||(s[0]=a=>n("click",a))},{default:u(()=>[y(e.$slots,"default",{},void 0,!0)]),_:3},8,["type","icon","text","rounded","size","severity","label","form","disabled"]))}}),C=b(k,[["__scopeId","data-v-342f6181"]]);export{C as _};
