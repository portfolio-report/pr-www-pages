import{h as i,c as p,l as d,t as u,F as m,s as b,S as _,u as f,y}from"./entry.8516b0a3.js";import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";const k=i({__name:"TextBtn",props:{color:{},icon:{},label:{},small:{type:Boolean},solid:{type:Boolean},type:{},form:{},disabled:{type:Boolean}},emits:["click"],setup(t,{emit:n}){const e=t,l=n,a=p(()=>e.icon&&!e.small?`${e.icon} i-lg`:e.icon);return(o,s)=>{const r=d("Button");return u(),m(r,{type:o.type,icon:f(a),class:y({"p-button-text":!o.solid,"p-button-rounded":!o.label,"x-button-small":o.small,"p-button-secondary":o.color==="secondary","p-button-success":o.color==="success"}),label:o.label,form:o.form,disabled:o.disabled,onClick:s[0]||(s[0]=c=>l("click",c))},{default:b(()=>[_(o.$slots,"default",{},void 0,!0)]),_:3},8,["type","icon","class","label","form","disabled"])}}});const g=B(k,[["__scopeId","data-v-389fb952"]]);export{g as _};
