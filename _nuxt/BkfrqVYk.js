import{W as h,a6 as u,a8 as s,Y as p,t as f,l as m,x as c,Z as a,S as b}from"./C-DAi4iE.js";var v=function(e){var n=e.dt;return`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * `.concat(n("scrollpanel.bar.size"),`));
    width: calc(100% + calc(2 * `).concat(n("scrollpanel.bar.size"),`));
    padding: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),") calc(2 * ").concat(n("scrollpanel.bar.size"),`) 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: `).concat(n("scrollpanel.bar.border.radius"),`;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color `).concat(n("scrollpanel.transition.duration"),`;
    background: `).concat(n("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(n("scrollpanel.transition.duration"),", opacity ").concat(n("scrollpanel.transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: `).concat(n("scrollpanel.bar.focus.ring.shadow"),`;
    outline: `).concat(n("scrollpanel.barfocus.ring.width")," ").concat(n("scrollpanel.bar.focus.ring.style")," ").concat(n("scrollpanel.bar.focus.ring.color"),`;
    outline-offset: `).concat(n("scrollpanel.barfocus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: `).concat(n("scrollpanel.bar.size"),`;
    top: 0;
}

.p-scrollpanel-bar-x {
    height: `).concat(n("scrollpanel.bar.size"),`;
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)},g={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},y=h.extend({name:"scrollpanel",theme:v,classes:g}),B={name:"BaseScrollPanel",extends:p,props:{step:{type:Number,default:5}},style:y,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},M={name:"ScrollPanel",extends:B,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||u()}},mounted:function(){this.id=this.id||u(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),o=s.getHeight(this.$el)-parseInt(n.height,10);e["max-height"]!=="none"&&o===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,o=this.$refs.content.clientWidth,l=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=o/n;var r=this.$refs.content.scrollHeight,i=this.$refs.content.clientHeight,d=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=i/r,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&s.addClass(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&s.removeClass(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; left:"+e.$refs.content.scrollLeft/n*100+"%;bottom:"+l+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&s.addClass(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&s.removeClass(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/r*100+"% - "+e.$refs.xBar.clientHeight+"px);right:"+d+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&s.addClass(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&s.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.addClass(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,n){this.$refs.content[e]+=n,this.moveBar()},setTimer:function(e,n){var o=this;this.clearTimer(),this.timer=setTimeout(function(){o.repeat(e,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var n=this,o=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=o/n.scrollXRatio})},onMouseMoveForYBar:function(e){var n=this,o=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=o/n.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.removeClass(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.removeClass(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.removeClass(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var n=window.requestAnimationFrame||this.timeoutFrame;return n(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>n?n:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){e.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){e.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},L=["id"],w=["aria-controls","aria-valuenow"],D=["aria-controls","aria-valuenow"];function x(t,e,n,o,l,r){return f(),m("div",a({class:t.cx("root")},t.ptmi("root")),[c("div",a({class:t.cx("contentContainer")},t.ptm("contentContainer")),[c("div",a({ref:"content",id:r.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),onMouseenter:e[1]||(e[1]=function(){return r.moveBar&&r.moveBar.apply(r,arguments)})},t.ptm("content")),[b(t.$slots,"default")],16,L)],16),c("div",a({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":r.contentId,"aria-valuenow":l.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return r.onXBarMouseDown&&r.onXBarMouseDown.apply(r,arguments)}),onKeydown:e[3]||(e[3]=function(i){return r.onKeyDown(i)}),onKeyup:e[4]||(e[4]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[5]||(e[5]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[6]||(e[6]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,w),c("div",a({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":r.contentId,"aria-valuenow":l.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return r.onYBarMouseDown&&r.onYBarMouseDown.apply(r,arguments)}),onKeydown:e[8]||(e[8]=function(i){return r.onKeyDown(i)}),onKeyup:e[9]||(e[9]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[10]||(e[10]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,D)],16)}M.render=x;export{M as default};
