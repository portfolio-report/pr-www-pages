import{W as t,t as o,l as c,S as a,Z as r,Y as d}from"./2OpEOLBg.js";var l=function(i){var n=i.dt;return`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (`.concat(n("icon.size"),` / 2));
    color: `).concat(n("iconfield.icon.color"),`;
}

.p-iconfield .p-inputicon:first-child {
    left: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputicon:last-child {
    right: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputtext:last-child {
    padding-left: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-iconfield .p-inputtext:first-child {
    padding-right: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}
`)},s={root:"p-iconfield"},p=t.extend({name:"iconfield",theme:l,classes:s}),f={name:"BaseIconField",extends:d,style:p,provide:function(){return{$pcIconField:this,$parentInstance:this}}},m={name:"IconField",extends:f,inheritAttrs:!1};function u(e,i,n,h,g,v){return o(),c("div",r({class:e.cx("root")},e.ptmi("root")),[a(e.$slots,"default")],16)}m.render=u;export{m as default};
