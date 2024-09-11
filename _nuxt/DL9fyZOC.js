import{u as y}from"./CPL8UACw.js";import{B as v,I as w,J as x,K as k,L as $,s as C,h as r,j as t,k as l,G as B,m as c,Q as I,S,q as z,r as T,z as d,A as M,x as g,y as u,u as f}from"./Cr4_TxLO.js";import{s as N}from"./Cof3B_N6.js";var V=function(s){var n=s.dt;return`
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
`)},j={root:function(s){var n=s.props,i=s.instance;return["p-inlinemessage p-component p-inlinemessage-"+n.severity,{"p-inlinemessage-icon-only":!i.$slots.default}]},icon:function(s){var n=s.props;return["p-inlinemessage-icon",n.icon]},text:"p-inlinemessage-text"},A=v.extend({name:"inlinemessage",theme:V,classes:j}),P={name:"BaseInlineMessage",extends:C,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:A,provide:function(){return{$pcInlineMessage:this,$parentInstance:this}}},b={name:"InlineMessage",extends:P,inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.sticky||setTimeout(function(){s.visible=!1},this.life)},computed:{iconComponent:function(){return{info:w,success:x,warn:k,error:$}[this.severity]}}};function q(e,s,n,i,m,a){return r(),t("div",c({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptmi("root")),[l(e.$slots,"icon",{},function(){return[(r(),B(I(e.icon?"span":a.iconComponent),c({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),e.$slots.default?(r(),t("div",c({key:0,class:e.cx("text")},e.ptm("text")),[l(e.$slots,"default")],16)):S("",!0)],16)}b.render=q;const J=z({__name:"CopyClipboard",props:{text:{}},setup(e){const s=e,{copy:n}=y(),i=T(null);async function m(a){var o,p;n(s.text),(o=i.value)==null||o.show(a),await new Promise(h=>setTimeout(h,1500)),(p=i.value)==null||p.hide()}return(a,o)=>(r(),t("span",null,[l(a.$slots,"default"),o[1]||(o[1]=d()),M("a",{class:"ii i-carbon-copy cursor-pointer hover:text-primary-500",onClick:m}),g(f(N),{ref_key:"overlay",ref:i,dismissable:!1,"close-on-escape":!1,pt:{content:{class:"p-0"}}},{default:u(()=>[g(f(b),{severity:"success"},{default:u(()=>o[0]||(o[0]=[d("Copied to clipboard")])),_:1})]),_:1},512)]))}});export{J as _};
