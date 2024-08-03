import{W as n,Y as r,t as e,l as p,S as u,Z as s}from"./BMm1sgik.js";var a=function(o){return o.dt,`
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
`},i={root:"p-buttongroup p-component"},l=n.extend({name:"buttongroup",theme:a,classes:i}),d={name:"BaseButtonGroup",extends:r,style:l,provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},b={name:"ButtonGroup",extends:d,inheritAttrs:!1};function c(t,o,f,g,m,h){return e(),p("span",s({class:t.cx("root"),role:"group"},t.ptmi("root")),[u(t.$slots,"default")],16)}b.render=c;export{b as default};
