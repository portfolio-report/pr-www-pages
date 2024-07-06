import{W as a,t as i,l as o,Z as s,Y as l}from"./DEDGitBy.js";var d=function(t){var n=t.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(n("skeleton.background"),`;
    border-radius: `).concat(n("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(n("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)},p={root:{position:"relative"}},c={root:function(t){var n=t.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},u=a.extend({name:"skeleton",theme:d,classes:c,inlineStyles:p}),h={name:"BaseSkeleton",extends:l,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:u,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},m={name:"Skeleton",extends:h,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function f(e,t,n,k,g,r){return i(),o("div",s({class:e.cx("root"),style:[e.sx("root"),r.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}m.render=f;export{m as default};
