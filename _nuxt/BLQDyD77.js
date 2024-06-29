import{W as c,a5 as o,t as d,l as r,S as g,v as i,G as s,Z as b,Y as l}from"./U2uVmZ6V.js";var p=function(a){var n=a.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(n("badge.border.radius"),`;
    justify-content: center;
    padding: `).concat(n("badge.padding"),`;
    background: `).concat(n("badge.primary.background"),`;
    color: `).concat(n("badge.primary.color"),`;
    font-size: `).concat(n("badge.font.size"),`;
    font-weight: `).concat(n("badge.font.weight"),`;
    min-width: `).concat(n("badge.min.width"),`;
    height: `).concat(n("badge.height"),`;
    line-height: `).concat(n("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(n("badge.dot.size"),`;
    min-width: `).concat(n("badge.dot.size"),`;
    height: `).concat(n("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"),`;
    color: `).concat(n("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"),`;
    color: `).concat(n("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"),`;
    color: `).concat(n("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(n("badge.warn.background"),`;
    color: `).concat(n("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"),`;
    color: `).concat(n("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"),`;
    color: `).concat(n("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(n("badge.sm.font.size"),`;
    min-width: `).concat(n("badge.sm.min.width"),`;
    height: `).concat(n("badge.sm.height"),`;
    line-height: `).concat(n("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(n("badge.lg.font.size"),`;
    min-width: `).concat(n("badge.lg.min.width"),`;
    height: `).concat(n("badge.lg.height"),`;
    line-height: `).concat(n("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(n("badge.xl.font.size"),`;
    min-width: `).concat(n("badge.xl.min.width"),`;
    height: `).concat(n("badge.xl.height"),`;
    line-height: `).concat(n("badge.xl.height"),`;
}
`)},h={root:function(a){var n=a.props,t=a.instance;return["p-badge p-component",{"p-badge-circle":o.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":o.isEmpty(n.value)&&!t.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},u=c.extend({name:"badge",theme:p,classes:h}),m={name:"BaseBadge",extends:l,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:u,provide:function(){return{$pcBadge:this,$parentInstance:this}}},f={name:"Badge",extends:m,inheritAttrs:!1};function y(e,a,n,t,v,w){return d(),r("span",b({class:e.cx("root")},e.ptmi("root")),[g(e.$slots,"default",{},function(){return[i(s(e.value),1)]})],16)}f.render=y;export{f as default};
