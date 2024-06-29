import{W as v,a5 as p,Y as b,ac as P,t as n,l as u,Z as c,S as o,F as s,B as w,ag as y,q as f,y as h,x as k,H as S,v as T,G as $}from"./U2uVmZ6V.js";import R from"./C6mlyDJT.js";import"./CmxcQqLN.js";import"./BdJEZZ-c.js";import"./DQXYKBI3.js";import"./AeN5ZyRB.js";import"./JAOI8j_U.js";import"./CJUNB2VD.js";import"./B28Kdvma.js";import"./BXKOq1JQ.js";import"./CYJ7T2Fq.js";import"./BLgYJk_n.js";import"./DtZRiIqY.js";import"./CzgldjDt.js";import"./CQGzKoIv.js";import"./C0V5b0Q8.js";import"./9-mfvp76.js";var A=function(r){var e=r.dt;return`
.p-dataview {
    border-color: `.concat(e("dataview.border.color"),`;
    border-width: `).concat(e("dataview.border.width"),`;
    border-style: solid;
    border-radius: `).concat(e("dataview.border.radius"),`;
    padding: `).concat(e("dataview.padding"),`;
}

.p-dataview-header {
    background: `).concat(e("dataview.header.background"),`;
    color: `).concat(e("dataview.header.color"),`;
    border-color: `).concat(e("dataview.header.border.color"),`;
    border-width: `).concat(e("dataview.header.border.width"),`;
    border-style: solid;
    padding: `).concat(e("dataview.header.padding"),`;
    border-radius: `).concat(e("dataview.header.border.radius"),`;
}

.p-dataview-content {
    background: `).concat(e("dataview.content.background"),`;
    border-color: `).concat(e("dataview.content.border.color"),`;
    border-width: `).concat(e("dataview.content.border.width"),`;
    border-style: solid;
    color: `).concat(e("dataview.content.color"),`;
    padding: `).concat(e("dataview.content.padding"),`;
    border-radius: `).concat(e("dataview.content.border.radius"),`;
}

.p-dataview-footer {
    background: `).concat(e("dataview.footer.background"),`;
    color: `).concat(e("dataview.footer.color"),`;
    border-color: `).concat(e("dataview.footer.border.color"),`;
    border-width: `).concat(e("dataview.footer.border.width"),`;
    border-style: solid;
    padding: `).concat(e("dataview.footer.padding"),`;
    border-radius: `).concat(e("dataview.footer.border.radius"),`;
}

.p-dataview-paginator-top {
    border-width: `).concat(e("dataview.paginator.top.border.width"),`;
    border-color: `).concat(e("dataview.paginator.top.border.color"),`;
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: `).concat(e("dataview.paginator.bottom.border.width"),`;
    border-color: `).concat(e("dataview.paginator.bottom.border.color"),`;
    border-style: solid;
}
`)},L={root:function(r){var e=r.props;return["p-dataview p-component",{"p-dataview-list":e.layout==="list","p-dataview-grid":e.layout==="grid"}]},header:"p-dataview-header",pcPaginator:function(r){var e=r.position;return"p-dataview-paginator-"+e},content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},B=v.extend({name:"dataview",theme:A,classes:L}),F={name:"BaseDataView",extends:b,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},style:B,provide:function(){return{$pcDataView:this,$parentInstance:this}}};function O(t){return N(t)||V(t)||z(t)||D()}function D(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(t,r){if(t){if(typeof t=="string")return m(t,r);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,r):void 0}}function V(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function N(t){if(Array.isArray(t))return m(t)}function m(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,d=Array(r);e<r;e++)d[e]=t[e];return d}var M={name:"DataView",extends:F,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(r){this.d_first=r},rows:function(r){this.d_rows=r},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(r,e){return this.dataKey?p.resolveFieldData(r,this.dataKey):e},onPage:function(r){this.d_first=r.first,this.d_rows=r.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",r)},sort:function(){var r=this;if(this.value){var e=O(this.value),d=p.localeComparator();return e.sort(function(i,a){var g=p.resolveFieldData(i,r.sortField),l=p.resolveFieldData(a,r.sortField);return p.sort(g,l,r.sortOrder,d)}),e}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var r;return((r=this.$primevue.config)===null||r===void 0||(r=r.locale)===null||r===void 0?void 0:r.emptyMessage)||""},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var r=this.value;if(r&&r.length&&this.sortField&&(r=this.sort()),this.paginator){var e=this.lazy?0:this.d_first;return r.slice(e,e+this.d_rows)}else return r}else return null}},components:{DVPaginator:R}};function C(t,r,e,d,i,a){var g=P("DVPaginator");return n(),u("div",c({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(n(),u("div",c({key:0,class:t.cx("header")},t.ptm("header")),[o(t.$slots,"header")],16)):s("",!0),a.paginatorTop?(n(),w(g,{key:1,rows:i.d_rows,first:i.d_first,totalRecords:a.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:h(t.cx("pcPaginator",{position:"top"})),alwaysShow:t.alwaysShowPaginator,onPage:r[0]||(r[0]=function(l){return a.onPage(l)}),unstyled:t.unstyled,pt:t.ptm("pcPaginator")},y({_:2},[t.$slots.paginatorstart?{name:"start",fn:f(function(){return[o(t.$slots,"paginatorstart")]}),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:f(function(){return[o(t.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):s("",!0),k("div",c({class:t.cx("content")},t.ptm("content")),[a.empty?(n(),u("div",c({key:1,class:t.cx("emptyMessage")},t.ptm("emptyMessage")),[o(t.$slots,"empty",{layout:t.layout},function(){return[T($(a.emptyMessageText),1)]})],16)):(n(),u(S,{key:0},[t.$slots.list&&t.layout==="list"?o(t.$slots,"list",{key:0,items:a.items}):s("",!0),t.$slots.grid&&t.layout==="grid"?o(t.$slots,"grid",{key:1,items:a.items}):s("",!0)],64))],16),a.paginatorBottom?(n(),w(g,{key:2,rows:i.d_rows,first:i.d_first,totalRecords:a.getTotalRecords,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:h(t.cx("pcPaginator",{position:"bottom"})),alwaysShow:t.alwaysShowPaginator,onPage:r[1]||(r[1]=function(l){return a.onPage(l)}),unstyled:t.unstyled,pt:t.ptm("pcPaginator")},y({_:2},[t.$slots.paginatorstart?{name:"start",fn:f(function(){return[o(t.$slots,"paginatorstart")]}),key:"0"}:void 0,t.$slots.paginatorend?{name:"end",fn:f(function(){return[o(t.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):s("",!0),t.$slots.footer?(n(),u("div",c({key:3,class:t.cx("footer")},t.ptm("footer")),[o(t.$slots,"footer")],16)):s("",!0)],16)}M.render=C;export{M as default};
