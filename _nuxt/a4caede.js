(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{654:function(t,e,n){"use strict";n.r(e);n(35),n(18),n(24),n(7),n(40),n(36),n(33);var r=n(22),o=(n(47),n(88),n(17)),l=n(489),c=n(34),d=Object(o.b)({name:"StatsDate",components:{LineChart:l.LineChart},props:{dates:{type:Array,required:!0}},setup:function(t){return{headers:[{text:"Date",align:"left",sortable:!0,value:"date"},{text:"Count",align:"right",sortable:!0,value:"count"}],chartOptions:{responsive:!0,maintainAspectRatio:!1},chartData:Object(o.a)((function(){var e=Object(c.a)(t.dates).sort((function(a,b){return a.date.localeCompare(b.date)}));return{labels:e.map((function(t){return t.date})),datasets:[{label:"count",backgroundColor:"#006e90",fill:!1,data:e.map((function(t){return t.count}))}]}}))}}}),v=n(62),f=n(73),h=n.n(f),m=n(655),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LineChart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.dates,"hide-default-footer":!0,"sort-by":"date","items-per-page":-1},scopedSlots:t._u([{key:"item",fn:function(e){return[n("tr",[n("td",[t._v(t._s(e.item.date))]),t._v(" "),n("td",{staticClass:"text-right"},[t._v(t._s(e.item.count))])])]}}])})],1)}),[],!1,null,null,null),_=component.exports;h()(component,{VDataTable:m.a});var y=Object(o.b)({name:"StatsCountry",props:{countries:{type:Array,required:!0}},setup:function(){return{headers:[{text:"Country",align:"left",sortable:!0,value:"country"},{text:"Count",align:"right",sortable:!0,value:"count"}],pagination:{sortBy:["count"],sortDesc:[!0]}}}}),w=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{attrs:{headers:t.headers,items:t.countries,"hide-default-footer":!0,options:t.pagination,"items-per-page":-1},on:{"update:options":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return[n("tr",[n("td",[t._v(t._s(e.item.country))]),t._v(" "),n("td",{staticClass:"text-right"},[t._v(t._s(e.item.count))])])]}}])})],1)}),[],!1,null,null,null),C=w.exports;function O(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}h()(w,{VDataTable:m.a});var U=Object(o.b)({name:"StatsPage",components:{DateView:_,CountryView:C,BarChart:l.BarChart},setup:function(){var t=Object(o.l)().$axios,e=Object(o.h)(null),n=Object(o.h)([]),l=Object(o.h)([]),c=Object(o.k)(Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$get("/stats/updates");case 2:n=e.sent,r=O(n);try{for(r.s();!(o=r.n()).done;)(l=o.value).firstUpdate&&(l.firstUpdate=new Date(l.firstUpdate),l.firstUpdateInt=l.firstUpdate.getTime()),l.lastUpdate&&(l.lastUpdate=new Date(l.lastUpdate),l.lastUpdateInt=l.lastUpdate.getTime())}catch(t){r.e(t)}finally{r.f()}return e.abrupt("return",{lastUpdate:(new Date).toISOString(),versions:n});case 6:case"end":return e.stop()}}),e)}))),"lKp4JPRw6WQymRaLq8UqfA=="),d=Object(o.a)((function(){var t,e;return{labels:null===(t=c.value)||void 0===t?void 0:t.versions.map((function(t){return t.version})),datasets:[{label:"count",backgroundColor:"#006e90",data:null===(e=c.value)||void 0===e?void 0:e.versions.map((function(t){return t.count}))}]}}));function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function r(o){var c,d,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$get("/stats/updates/".concat(o));case 2:c=r.sent,d=c.byDate,v=c.byCountry,e.value=o,n.value=d,l.value=v;case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return{stats:c,selectedVersion:e,selectedVersionByDate:n,selectedVersionByCountry:l,headers:[{text:"Version",align:"left",sortable:!0,value:"version"},{text:"From",align:"left",sortable:!0,value:"firstUpdateInt"},{text:"To",align:"left",sortable:!0,value:"lastUpdateInt"},{text:"Count",align:"right",sortable:!0,value:"count"},{text:"Show details",value:""}],chartData:d,chartOptions:{responsive:!0,maintainAspectRatio:!1},selectVersion:function(t){return v.apply(this,arguments)}}},head:function(){return{title:"Portfolio Report"}}}),D=n(125),j=Object(v.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.stats?n("div",[n("h1",[t._v("Statistics")]),t._v("\n  Last update: "+t._s(t.stats.lastUpdate)+"\n  "),n("h2",[t._v("Client Updates")]),t._v(" "),n("BarChart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.stats.versions,"hide-default-footer":!0,"sort-by":"version","items-per-page":-1},scopedSlots:t._u([{key:"item",fn:function(e){return[n("tr",{on:{click:function(n){return t.selectVersion(e.item.version)}}},[n("td",[t._v(t._s(e.item.version))]),t._v(" "),n("td",[t._v("\n          "+t._s(e.item.firstUpdate.toLocaleString("de-DE"))+"\n        ")]),t._v(" "),n("td",[t._v("\n          "+t._s(e.item.lastUpdate.toLocaleString("de-DE"))+"\n        ")]),t._v(" "),n("td",{staticClass:"text-right"},[t._v(t._s(e.item.count))]),t._v(" "),n("td",[n("v-btn",[t._v("Details")])],1)])]}}],null,!1,3998253598)}),t._v(" "),null!==t.selectedVersion?n("div",[n("h3",[t._v("Version "+t._s(t.selectedVersion))]),t._v(" "),n("h4",[t._v("Updates by date")]),t._v(" "),n("date-view",{attrs:{dates:t.selectedVersionByDate}}),t._v(" "),n("h4",[t._v("Updates by country")]),t._v(" "),n("country-view",{attrs:{countries:t.selectedVersionByCountry}})],1):t._e()],1):t._e()}),[],!1,null,null,null);e.default=j.exports;h()(j,{VBtn:D.a,VDataTable:m.a})}}]);