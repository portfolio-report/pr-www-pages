import{B as f,h as c,j as s,G as p,m as e,M as y,N as g,k as b,A as k,Q as l,s as v,q as h,c as $,y as i,x as _,u as d,z as w,_ as B}from"./JjumSdZF.js";import{_ as z}from"./DlAUqK2U.js";var T=function(t){var n=t.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("tag.primary.background"),`;
    color: `).concat(n("tag.primary.color"),`;
    font-size: `).concat(n("tag.font.size"),`;
    font-weight: `).concat(n("tag.font.weight"),`;
    padding: `).concat(n("tag.padding"),`;
    border-radius: `).concat(n("tag.border.radius"),`;
    gap: `).concat(n("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(n("tag.icon.size"),`;
    width: `).concat(n("tag.icon.size"),`;
    height:`).concat(n("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(n("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(n("tag.success.background"),`;
    color: `).concat(n("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(n("tag.info.background"),`;
    color: `).concat(n("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(n("tag.warn.background"),`;
    color: `).concat(n("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(n("tag.danger.background"),`;
    color: `).concat(n("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(n("tag.secondary.background"),`;
    color: `).concat(n("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(n("tag.contrast.background"),`;
    color: `).concat(n("tag.contrast.color"),`;
}
`)},N={root:function(t){var n=t.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},S=f.extend({name:"tag",theme:T,classes:N}),x={name:"BaseTag",extends:v,props:{value:null,severity:null,rounded:Boolean,icon:String},style:S,provide:function(){return{$pcTag:this,$parentInstance:this}}},u={name:"Tag",extends:x,inheritAttrs:!1};function C(a,t,n,o,m,r){return c(),s("span",e({class:a.cx("root")},a.ptmi("root")),[a.$slots.icon?(c(),p(y(a.$slots.icon),e({key:0,class:a.cx("icon")},a.ptm("icon")),null,16,["class"])):a.icon?(c(),s("span",e({key:1,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):g("",!0),a.value!=null||a.$slots.default?b(a.$slots,"default",{key:2},function(){return[k("span",e({class:a.cx("label")},a.ptm("label")),l(a.value),17)]}):g("",!0)],16)}u.render=C;const V=h({__name:"SecurityTag",props:{name:{}},setup(a){const t=a,n=$(()=>{let o=t.name;return o.includes(" ")&&(o=`"${o}"`),`/search?q=tag:${o}`});return(o,m)=>{const r=B;return c(),p(d(u),{class:"mx-1 p-1 !text-xs !bg-orange-300"},{default:i(()=>[_(r,{to:d(n)},{default:i(()=>[w(l(o.name),1)]),_:1},8,["to"])]),_:1})}}}),A=z(V,[["__scopeId","data-v-d83361ea"]]);export{A as _,u as s};
