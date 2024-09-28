import{B as r,s as a,h as i,j as s,k as d,m as p}from"./Ct_f5JLT.js";var c=function(e){return e.dt,`
.p-buttongroup .p-button {
    margin: 0;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttongroup .p-button:focus {
    position: relative;
    z-index: 1;
}
`},h={root:"p-buttongroup p-component"},f=r.extend({name:"buttongroup",theme:c,classes:h}),m={name:"BaseButtonGroup",extends:a,style:f,provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},b={name:"ButtonGroup",extends:m,inheritAttrs:!1};function g(t,e,n,u,l,o){return i(),s("span",p({class:t.cx("root"),role:"group"},t.ptmi("root")),[d(t.$slots,"default")],16)}b.render=g;var y=function(e){var n=e.dt;return`
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
`)},k={root:{position:"relative"}},v={root:function(e){var n=e.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},$=r.extend({name:"skeleton",theme:y,classes:v,inlineStyles:k}),S={name:"BaseSkeleton",extends:a,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:$,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},B={name:"Skeleton",extends:S,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function x(t,e,n,u,l,o){return i(),s("div",p({class:t.cx("root"),style:[t.sx("root"),o.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}B.render=x;export{B as a,b as s};
