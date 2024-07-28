import{W as l,Y as s,t as d,l as p,x as o,S as t,Z as r}from"./2OpEOLBg.js";var c=function(n){var a=n.dt;return`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: `.concat(a("toolbar.padding"),`;
    background: `).concat(a("toolbar.background"),`;
    border: 1px solid `).concat(a("toolbar.border.color"),`;
    color: `).concat(a("toolbar.color"),`;
    border-radius: `).concat(a("toolbar.border.radius"),`;
    gap: `).concat(a("toolbar.gap"),`;
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`)},i={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},b=l.extend({name:"toolbar",theme:c,classes:i}),m={name:"BaseToolbar",extends:s,props:{ariaLabelledby:{type:String,default:null}},style:b,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},u={name:"Toolbar",extends:m,inheritAttrs:!1},v=["aria-labelledby"];function f(e,n,a,y,$,g){return d(),p("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[o("div",r({class:e.cx("start")},e.ptm("start")),[t(e.$slots,"start")],16),o("div",r({class:e.cx("center")},e.ptm("center")),[t(e.$slots,"center")],16),o("div",r({class:e.cx("end")},e.ptm("end")),[t(e.$slots,"end")],16)],16,v)}u.render=f;export{u as default};
