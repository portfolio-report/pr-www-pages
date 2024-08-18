import{B as y,I as v,J as w,K as x,L as k,s as $,o as c,c as l,r as m,G as C,m as t,Q as B,S as I,q as S,a as z,z as d,A as T,x as g,y as u,u as f}from"./CWFJTIHY.js";import{s as M}from"./BdNTBesa.js";import{u as N}from"./DhVSJKvr.js";var V=function(s){var n=s.dt;return`
.p-inlinemessage {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: `.concat(n("inlinemessage.padding"),`;
    border-radius: `).concat(n("inlinemessage.border.radius"),`;
    gap: `).concat(n("inlinemessage.gap"),`;
}

.p-inlinemessage-text {
    font-weight: `).concat(n("inlinemessage.text.font.weight"),`;
}

.p-inlinemessage-icon {
    flex-shrink: 0;
    font-size: `).concat(n("inlinemessage.icon.size"),`;
    width: `).concat(n("inlinemessage.icon.size"),`;
    height: `).concat(n("inlinemessage.icon.size"),`;
}

.p-inlinemessage-icon-only .p-inlinemessage-text {
    visibility: hidden;
    width: 0;
}

.p-inlinemessage-info {
    background: `).concat(n("inlinemessage.info.background"),`;
    border: 1px solid `).concat(n("inlinemessage.info.border.color"),`;
    color: `).concat(n("inlinemessage.info.color"),`;
    box-shadow: `).concat(n("inlinemessage.info.shadow"),`;
}

.p-inlinemessage-info .p-inlinemessage-icon {
    color: `).concat(n("inlinemessage.info.color"),`;
}

.p-inlinemessage-success {
    background: `).concat(n("inlinemessage.success.background"),`;
    border: 1px solid `).concat(n("inlinemessage.success.border.color"),`;
    color: `).concat(n("inlinemessage.success.color"),`;
    box-shadow: `).concat(n("inlinemessage.success.shadow"),`;
}

.p-inlinemessage-success .p-inlinemessage-icon {
    color: `).concat(n("inlinemessage.success.color"),`;
}

.p-inlinemessage-warn {
    background: `).concat(n("inlinemessage.warn.background"),`;
    border: 1px solid `).concat(n("inlinemessage.warn.border.color"),`;
    color: `).concat(n("inlinemessage.warn.color"),`;
    box-shadow: `).concat(n("inlinemessage.warn.shadow"),`;
}

.p-inlinemessage-warn .p-inlinemessage-icon {
    color: `).concat(n("inlinemessage.warn.color"),`;
}

.p-inlinemessage-error {
    background: `).concat(n("inlinemessage.error.background"),`;
    border: 1px solid `).concat(n("inlinemessage.error.border.color"),`;
    color: `).concat(n("inlinemessage.error.color"),`;
    box-shadow: `).concat(n("inlinemessage.error.shadow"),`;
}

.p-inlinemessage-error .p-inlinemessage-icon {
    color: `).concat(n("inlinemessage.error.color"),`;
}

.p-inlinemessage-secondary {
    background: `).concat(n("inlinemessage.secondary.background"),`;
    border: 1px solid `).concat(n("inlinemessage.secondary.border.color"),`;
    color: `).concat(n("inlinemessage.secondary.color"),`;
    box-shadow: `).concat(n("inlinemessage.secondary.shadow"),`;
}

.p-inlinemessage-secondary .p-inlinemessage-icon {
    color: `).concat(n("inlinemessage.secondary.color"),`;
}

.p-inlinemessage-contrast {
    background: `).concat(n("inlinemessage.contrast.background"),`;
    border: 1px solid `).concat(n("inlinemessage.contrast.border.color"),`;
    color: `).concat(n("inlinemessage.contrast.color"),`;
    box-shadow: `).concat(n("inlinemessage.contrast.shadow"),`;
}

.p-inlinemessage-contrast .p-inlinemessage-icon {
    color: `).concat(n("inlinemessage.contrast.color"),`;
}
`)},A={root:function(s){var n=s.props,o=s.instance;return["p-inlinemessage p-component p-inlinemessage-"+n.severity,{"p-inlinemessage-icon-only":!o.$slots.default}]},icon:function(s){var n=s.props;return["p-inlinemessage-icon",n.icon]},text:"p-inlinemessage-text"},P=y.extend({name:"inlinemessage",theme:V,classes:A}),j={name:"BaseInlineMessage",extends:$,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:P,provide:function(){return{$pcInlineMessage:this,$parentInstance:this}}},b={name:"InlineMessage",extends:j,inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.sticky||setTimeout(function(){s.visible=!1},this.life)},computed:{iconComponent:function(){return{info:v,success:w,warn:x,error:k}[this.severity]}}};function q(e,s,n,o,p,i){return c(),l("div",t({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptmi("root")),[m(e.$slots,"icon",{},function(){return[(c(),C(B(e.icon?"span":i.iconComponent),t({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),e.$slots.default?(c(),l("div",t({key:0,class:e.cx("text")},e.ptm("text")),[m(e.$slots,"default")],16)):I("",!0)],16)}b.render=q;const J=S({__name:"CopyClipboard",props:{text:{}},setup(e){const s=e,{copy:n}=N(),o=z(null);async function p(i){var a,r;n(s.text),(a=o.value)==null||a.show(i),await new Promise(h=>setTimeout(h,1500)),(r=o.value)==null||r.hide()}return(i,a)=>(c(),l("span",null,[m(i.$slots,"default"),d(),T("a",{class:"ii i-carbon-copy cursor-pointer hover:text-primary-500",onClick:a[0]||(a[0]=r=>p(r))}),g(f(M),{ref_key:"overlay",ref:o,dismissable:!1,"close-on-escape":!1,pt:{content:{class:"p-0"}}},{default:u(()=>[g(f(b),{severity:"success"},{default:u(()=>[d("Copied to clipboard")]),_:1})]),_:1},512)]))}});export{J as _};
