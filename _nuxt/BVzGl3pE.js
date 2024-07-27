import n from"./Birl-_gt.js";import{W as s,am as l,t as i,l as d,S as p,m as c,Z as r}from"./D6mipjrG.js";var m=function(t){var a=t.dt;return`
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
`)},v={root:"p-overlaybadge"},g=s.extend({name:"overlaybadge",theme:m,classes:v}),u={name:"OverlayBadge",extends:n,style:g,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},y={name:"OverlayBadge",extends:u,inheritAttrs:!1,components:{Badge:n}};function B(e,t,a,f,h,$){var o=l("Badge");return i(),d("div",r({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default"),c(o,r(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}y.render=B;export{y as default};
