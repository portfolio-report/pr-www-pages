import{h as i,c as p,l as m,t as d,F as u,s as b,L as f,u as y,y as B}from"./BTS62n4b.js";import{_}from"./DlAUqK2U.js";const k=i({__name:"TextBtn",props:{color:{},icon:{},label:{},small:{type:Boolean},solid:{type:Boolean},type:{},form:{},disabled:{type:Boolean}},emits:["click"],setup(t,{emit:n}){const e=t,l=n,a=p(()=>e.icon&&!e.small?`${e.icon} i-lg`:e.icon);return(o,s)=>{const r=m("Button");return d(),u(r,{type:o.type,icon:y(a),class:B({"p-button-text":!o.solid,"p-button-rounded":!o.label,"x-button-small":o.small,"p-button-secondary":o.color==="secondary","p-button-success":o.color==="success"}),label:o.label,form:o.form,disabled:o.disabled,onClick:s[0]||(s[0]=c=>l("click",c))},{default:b(()=>[f(o.$slots,"default",{},void 0,!0)]),_:3},8,["type","icon","class","label","form","disabled"])}}}),$=_(k,[["__scopeId","data-v-389fb952"]]);export{$ as _};
