import{W as k,Y as b,t as l,l as o,H as f,I as h,Z as i,S as p,y as v,x as y,G as d,am as M,m as g,F as c}from"./0K7EgrWa.js";var O=function(t){var r=t.dt;return`
.p-metergroup {
    display: flex;
    gap: `.concat(r("metergroup.gap"),`;
}

.p-metergroup-meters {
    display: flex;
    background: `).concat(r("metergroup.meters.background"),`;
    border-radius: `).concat(r("metergroup.border.radius"),`;
}

.p-metergroup-label-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: `).concat(r("metergroup.label.gap"),`;
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: `).concat(r("metergroup.label.marker.size"),`;
    height: `).concat(r("metergroup.label.marker.size"),`;
    border-radius: 100%;
}

.p-metergroup-label-icon {
    font-size: `).concat(r("metergroup.label.icon.size"),`;
    width: `).concat(r("metergroup.label.icon.size"),`;
    height: `).concat(r("metergroup.label.icon.size"),`;
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-label-list-horizontal {
    gap: `).concat(r("metergroup.label.list.horizontal.gap"),`;
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: `).concat(r("metergroup.meters.size"),`;
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(r("metergroup.border.radius"),`;
    border-bottom-left-radius: `).concat(r("metergroup.border.radius"),`;
}

.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-top-right-radius: `).concat(r("metergroup.border.radius"),`;
    border-bottom-right-radius: `).concat(r("metergroup.border.radius"),`;
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-label-list-vertical {
    flex-direction: column;
    gap: `).concat(r("metergroup.label.list.vertical.gap"),`;
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: `).concat(r("metergroup.meters.size"),`;
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-label-list {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-top-left-radius: `).concat(r("metergroup.border.radius"),`;
    border-top-right-radius: `).concat(r("metergroup.border.radius"),`;
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-bottom-left-radius: `).concat(r("metergroup.border.radius"),`;
    border-bottom-right-radius: `).concat(r("metergroup.border.radius"),`;
}
`)},S={root:function(t){var r=t.props;return["p-metergroup p-component",{"p-metergroup-horizontal":r.orientation==="horizontal","p-metergroup-vertical":r.orientation==="vertical"}]},meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:function(t){var r=t.props;return["p-metergroup-label-list",{"p-metergroup-label-list-vertical":r.labelOrientation==="vertical","p-metergroup-label-list-horizontal":r.labelOrientation==="horizontal"}]},label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},G=k.extend({name:"metergroup",theme:O,classes:S}),w={name:"MeterGroup",extends:b,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:G,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}},P={name:"MeterGroupLabel",hostName:"MeterGroup",extends:b,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}}};function L(e,t,r,s,z,n){return l(),o("ol",i({class:e.cx("labelList")},e.ptm("labelList")),[(l(!0),o(f,null,h(r.value,function(a,u){return l(),o("li",i({key:u+"_label",class:e.cx("label"),ref_for:!0},e.ptm("label")),[p(e.$slots,"icon",{value:a,class:v(e.cx("labelIcon"))},function(){return[a.icon?(l(),o("i",i({key:0,class:[a.icon,e.cx("labelIcon")],style:{color:a.color},ref_for:!0},e.ptm("labelIcon")),null,16)):(l(),o("span",i({key:1,class:e.cx("labelMarker"),style:{backgroundColor:a.color},ref_for:!0},e.ptm("labelMarker")),null,16))]}),y("span",i({class:e.cx("labelText"),ref_for:!0},e.ptm("labelText")),d(a.label)+" ("+d(e.$parentInstance.percentValue(a.value))+")",17)],16)}),128))],16)}P.render=L;var V={name:"MeterGroup",extends:w,inheritAttrs:!1,methods:{getPTOptions:function(t,r,s){return this.ptm(t,{context:{value:r,index:s}})},percent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=(t-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,r)))},percentValue:function(t){return this.percent(t)+"%"},meterCalculatedStyles:function(t){return{backgroundColor:t.color,width:this.orientation==="horizontal"&&this.percentValue(t.value),height:this.orientation==="vertical"&&this.percentValue(t.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(t,r){return t+r.value},0))},percentages:function(){var t=0,r=[];return this.value.forEach(function(s){t+=s.value,r.push(t)}),r}},components:{MeterGroupLabel:P}},C=["aria-valuemin","aria-valuemax","aria-valuenow"];function I(e,t,r,s,z,n){var a=M("MeterGroupLabel");return l(),o("div",i({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":n.totalPercent},e.ptmi("root")),[e.labelPosition==="start"?p(e.$slots,"label",{key:0,value:e.value,totalPercent:n.totalPercent,percentages:n.percentages},function(){return[g(a,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):c("",!0),p(e.$slots,"start",{value:e.value,totalPercent:n.totalPercent,percentages:n.percentages}),y("div",i({class:e.cx("meters")},e.ptm("meters")),[(l(!0),o(f,null,h(e.value,function(u,m){return p(e.$slots,"meter",{key:m,value:u,index:m,class:v(e.cx("meter")),orientation:e.orientation,size:n.percentValue(u.value),totalPercent:n.totalPercent},function(){return[n.percent(u.value)?(l(),o("span",i({key:0,class:e.cx("meter"),style:n.meterCalculatedStyles(u),ref_for:!0},n.getPTOptions("meter",u,m)),null,16)):c("",!0)]})}),128))],16),p(e.$slots,"end",{value:e.value,totalPercent:n.totalPercent,percentages:n.percentages}),e.labelPosition==="end"?p(e.$slots,"label",{key:1,value:e.value,totalPercent:n.totalPercent,percentages:n.percentages},function(){return[g(a,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):c("",!0)],16,C)}V.render=I;export{V as default};
