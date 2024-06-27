import o from"./D4fikVGP.js";import{W as s,ac as l,t as i,l as d,S as p,m as c,Z as r}from"./7TUxAo9i.js";var v=function(t){var a=t.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(a("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(a("overlaybadge.outline.color"),`;
}
`)},m={root:"p-overlaybadge"},g=s.extend({name:"overlaybadge",theme:v,classes:m}),u={name:"OverlayBadge",extends:o,style:g,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},y={name:"OverlayBadge",extends:u,inheritAttrs:!1};function f(e,t,a,h,B,$){var n=l("Badge");return i(),d("div",r({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default"),c(n,r(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}y.render=f;export{y as default};
