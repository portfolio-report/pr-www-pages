import{_ as l}from"./nuxt-link.7fefb07b.js";import{d as _,u,r as h,o as t,c as o,a,w as r,b as n,t as i,e as s}from"./entry.3b25f032.js";const m={class:"flex justify-content-center align-items-center h-screen"},f={class:"text-center"},p=n("i",{class:"ii i-carbon-warning-alt text-orange-500",style:{"font-size":"5rem"}},null,-1),x={class:"mt-0"},y={key:0},g={key:1},k={key:0,class:"text-center"},C={key:1},w=["innerHTML"],H=_({__name:"error",props:{error:{type:Object,required:!0}},setup(e){return u({title:"Portfolio Report"}),(v,N)=>{const c=l,d=h("Card");return t(),o("div",m,[a(d,{class:"shadow-2",style:{"min-width":"600px"}},{title:r(()=>[n("div",f,[p,n("h1",x,[e.error.statusCode==404?(t(),o("span",y,"Page not found 😟")):(t(),o("span",g,i(e.error.statusMessage)+" ("+i(e.error.statusCode)+") ",1))])])]),content:r(()=>[e.error.statusCode==404?(t(),o("div",k,[n("p",null,[s(" Sorry, this page does not exist. If you think, this is wrong, please "),a(c,{to:"/contact"},{default:r(()=>[s("let us know")]),_:1}),s(". ")]),a(c,{to:"/"},{default:r(()=>[s("Go to home page")]),_:1})])):(t(),o("div",C,[s(i(e.error.message)+" ",1),n("div",{innerHTML:e.error.description},null,8,w)]))]),_:1})])}}});export{H as default};
