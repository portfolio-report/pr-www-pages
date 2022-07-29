(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(e,t,r){"use strict";var n=r(34),o=r(162);o.Chart.register.apply(o.Chart,Object(n.a)(o.registerables))},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));r(7);var n=r(17),o=Symbol("ShowConfirmDialogKey");function c(){var dialog=Object(n.d)(o);if(!dialog)throw new Error("Could not resolve provider");return dialog}},208:function(e,t,r){"use strict";r.d(t,"b",(function(){return m}));r(9),r(8),r(10),r(11);var n=r(22),o=r(1),c=(r(88),r(7),r(18),r(17)),l=r(55);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d=Symbol("CreateSecurityDialogKey");function m(){var dialog=Object(c.d)(d);if(!dialog)throw new Error("Could not resolve provider");return dialog}var f=Object(c.b)({name:"SecurityDialogProvider",setup:function(){var e=Object(c.l)().$axios,dialog=Object(c.h)(!1),t=Object(c.h)(null),r=Object(c.h)(),m=Object(c.h)({});function f(e){return/^[0-9a-f]{32}$/.test(e)?e.substr(0,8)+"-"+e.substr(8,4)+"-"+e.substr(12,4)+"-"+e.substr(16,4)+"-"+e.substr(20):e}function y(){return(y=Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!m.value.uuid){r.next=6;break}return r.next=3,e.$patch("/securities/".concat(f(m.value.uuid)),m.value);case 3:n=r.sent,r.next=9;break;case 6:return r.next=8,e.$post("/securities/",m.value);case 8:n=r.sent;case 9:dialog.value=!1,t.value&&t.value(n);case 11:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return Object(c.f)(d,(function(e){return m.value=e?function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e):{name:"",isin:"",wkn:"",securityType:"",symbolXfra:"",symbolXnas:"",symbolXnys:""},dialog.value=!0,new Promise((function(e,n){t.value=e,r.value=n}))})),{save:function(){return y.apply(this,arguments)},cancel:function(){dialog.value=!1,t.value&&t.value(null)},dialog:dialog,selectedSecurity:m,icons:l.a}}}),y=r(61),_=r(73),h=r.n(_),O=r(125),x=r(193),j=r(53),k=r(422),S=r(435),w=r(423),V=r(424),C=r(192),D=r(425),P=r(426),T=r(411),component=Object(y.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._t("default"),e._v(" "),r("v-dialog",{attrs:{width:"600"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("v-card",[e.selectedSecurity.uuid?r("v-card-title",[e._v("\n          Edit security "+e._s(e.selectedSecurity.uuid)+"\n        ")]):r("v-card-title",[e._v("Create security")]),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[e.selectedSecurity.uuid?r("v-text-field",{attrs:{label:"UUID",disabled:""},model:{value:e.selectedSecurity.uuid,callback:function(t){e.$set(e.selectedSecurity,"uuid",t)},expression:"selectedSecurity.uuid"}}):e._e()],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[r("v-text-field",{attrs:{label:"Name"},model:{value:e.selectedSecurity.name,callback:function(t){e.$set(e.selectedSecurity,"name",t)},expression:"selectedSecurity.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"ISIN"},model:{value:e.selectedSecurity.isin,callback:function(t){e.$set(e.selectedSecurity,"isin",t)},expression:"selectedSecurity.isin"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"WKN"},model:{value:e.selectedSecurity.wkn,callback:function(t){e.$set(e.selectedSecurity,"wkn",t)},expression:"selectedSecurity.wkn"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Symbol Frankfurt"},model:{value:e.selectedSecurity.symbolXfra,callback:function(t){e.$set(e.selectedSecurity,"symbolXfra",t)},expression:"selectedSecurity.symbolXfra"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Symbol NASDAQ"},model:{value:e.selectedSecurity.symbolXnas,callback:function(t){e.$set(e.selectedSecurity,"symbolXnas",t)},expression:"selectedSecurity.symbolXnas"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Symbol New York"},model:{value:e.selectedSecurity.symbolXnys,callback:function(t){e.$set(e.selectedSecurity,"symbolXnys",t)},expression:"selectedSecurity.symbolXnys"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Type"},model:{value:e.selectedSecurity.securityType,callback:function(t){e.$set(e.selectedSecurity,"securityType",t)},expression:"selectedSecurity.securityType"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:e.cancel}},[r("v-icon",[e._v(e._s(e.icons.mdiClose))]),e._v(" Cancel\n          ")],1),e._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",text:""}},[r("v-icon",[e._v(e._s(e.icons.mdiCheck))]),e._v(" Save\n          ")],1)],1)],1)],1)],1)],2)}),[],!1,null,null,null);t.a=component.exports;h()(component,{VBtn:O.a,VCard:x.a,VCardActions:j.a,VCardText:j.c,VCardTitle:j.d,VCol:k.a,VContainer:S.a,VDialog:w.a,VForm:V.a,VIcon:C.a,VRow:D.a,VSpacer:P.a,VTextField:T.a})},241:function(e,t,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("17159ef2",content,!0,{sourceMap:!1})},256:function(e,t,r){"use strict";r(237);var n=r(17),o=r(55),c=r(208),l=(r(9),r(7),r(8),r(10),r(11),r(1)),v=(r(18),r(205));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=Object(n.b)({setup:function(){var e=Object(n.g)({dialog:!1,resolve:function(e){},reject:function(e){},message:"",options:{title:"",width:300,color:"primary"}});return Object(n.f)(v.a,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.dialog=!0,e.message=t,e.options=Object.assign(e.options,r),new Promise((function(t,r){e.resolve=t,e.reject=r}))})),m(m({},Object(n.j)(e)),{},{yes:function(){e.resolve(!0),e.dialog=!1},no:function(){e.resolve(!1),e.dialog=!1},icons:o.a})}}),y=r(61),_=r(73),h=r.n(_),O=r(125),x=r(193),j=r(53),k=r(423),S=r(424),w=r(192),V=r(426),C=r(52),D=r(111),component=Object(y.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._t("default"),e._v(" "),r("v-dialog",{attrs:{"max-width":e.options.width,persistent:""},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.no(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.yes(t)}]},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.yes(t)}}},[r("v-card",[e.options.title?r("v-toolbar",{attrs:{dark:"",color:e.options.color,dense:"",flat:""}},[r("v-toolbar-title",{staticClass:"white--text"},[e._v("\n            "+e._s(e.options.title)+"\n          ")])],1):e._e(),e._v(" "),r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!e.message,expression:"!!message"}]},[e._v("\n          "+e._s(e.message)+"\n        ")]),e._v(" "),r("v-card-actions",{staticClass:"pt-0"},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",text:""},nativeOn:{click:function(t){return e.no(t)}}},[r("v-icon",[e._v(e._s(e.icons.mdiClose))]),e._v(" No\n          ")],1),e._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",text:""}},[r("v-icon",[e._v(e._s(e.icons.mdiCheck))]),e._v(" Yes\n          ")],1)],1)],1)],1)],1)],2)}),[],!1,null,null,null),P=component.exports;h()(component,{VBtn:O.a,VCard:x.a,VCardActions:j.a,VCardText:j.c,VDialog:k.a,VForm:S.a,VIcon:w.a,VSpacer:V.a,VToolbar:C.a,VToolbarTitle:D.a});var T=Object(n.b)({name:"DefaultLayout",components:{SecurityDialogProvider:c.a,ConfirmDialogProvider:P},setup:function(){var e=Object(n.l)().$auth,t=Object(n.p)(),r=Object(n.n)(),title=r.title,link=r.link;title.value="Portfolio Report",link.value=[{rel:"search",type:"application/opensearchdescription+xml",href:"/opensearch.xml"}];var c=Object(n.h)(!1),l=Object(n.h)("");return{leftDrawerOpen:c,menuItems:[{name:"Home",icon:o.a.mdiHome,to:"/"},{name:"Statistics",icon:o.a.mdiPoll,to:"/stats"},{name:"Securities",icon:o.a.mdiCurrencyUsd,to:"/admin/securities"},{name:"Taxonomies",icon:o.a.mdiFamilyTree,to:"/admin/taxonomies"},{name:"Statistics (admin)",icon:o.a.mdiPoll,to:"/admin/stats"}],authenticated:Object(n.a)((function(){var t;return e.loggedIn&&(null===(t=e.user)||void 0===t?void 0:t.isAdmin)})),username:Object(n.a)((function(){var t;return null===(t=e.user)||void 0===t?void 0:t.username})),githubLink:Object(n.a)((function(){return"https://github.com/portfolio-report/pr-www/commit/cd442e9a1cd59e867d381815d9b4e0738a6e9251"})),logout:function(){e.logout()},title:title,icons:o.a,search:function(){var q=l.value;l.value="",t.push({path:"/search",query:{q:q}})},searchTerm:l}},head:{}}),L=(r(361),r(427)),E=r(433),$=r(428),I=r(435),A=r(429),F=r(161),X=r(194),N=r(124),R=r(195),B=r(196),M=r(74),U=r(430),G=r(413),H=r(431),K=r(411),J=r(432),Y=Object(y.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.authenticated?r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[r("v-list",e._l(e.menuItems,(function(t){return r("v-list-item",{key:t.name,attrs:{router:"",to:t.to,exact:""}},[r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.name))])],1)],1)})),1)],1):e._e(),e._v(" "),r("v-app-bar",{attrs:{fixed:"",app:""}},[e.authenticated?r("v-app-bar-nav-icon",{on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}):e._e(),e._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("v-img",{staticClass:"mx-2",attrs:{src:"/favicon-192.png","max-height":"50","max-width":"50",contain:"",to:"/"}})],1),e._v(" "),r("nuxt-link",{staticClass:"title",attrs:{to:"/"}},[r("v-toolbar-title",[e._v(e._s(e.title))])],1),e._v(" "),r("v-spacer"),e._v(" "),"/search"!=e.$route.path?r("v-form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[r("v-text-field",{attrs:{outlined:"",dense:"","append-icon":e.icons.mdiMagnify,"single-line":"","hide-details":""},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}})],1):e._e(),e._v(" "),e.authenticated?e._e():r("v-btn",{attrs:{to:"/login",icon:""}},[r("v-icon",[e._v(e._s(e.icons.mdiLoginVariant))])],1),e._v(" "),e.authenticated?r("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{color:"primary",text:""}},n),[r("v-icon",[e._v(e._s(e.icons.mdiAccount))]),e._v("\n          "+e._s(e.username)+"\n        ")],1)]}}],null,!1,1230647742)},[e._v(" "),r("v-list",[r("v-list-item",{on:{click:e.logout}},[r("v-list-item-avatar",[r("v-icon",[e._v(e._s(e.icons.mdiLogoutVariant))])],1),e._v(" "),r("v-list-item-title",[e._v("Logout")])],1)],1)],1):e._e()],1),e._v(" "),r("v-main",[r("v-container",[r("ConfirmDialogProvider",[r("SecurityDialogProvider",[r("nuxt")],1)],1)],1)],1),e._v(" "),r("v-footer",[r("v-spacer"),e._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{href:"https://forum.portfolio-performance.info/",icon:""}},n),[r("v-icon",[e._v(e._s(e.icons.mdiForum))])],1)]}}])},[e._v(" "),r("span",[e._v("Get help and discuss")])]),e._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{to:"/contact",icon:""}},n),[r("v-icon",[e._v(e._s(e.icons.mdiEmail))])],1)]}}])},[e._v(" "),r("span",[e._v("Get in contact")])]),e._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({attrs:{href:e.githubLink,target:"_blank",icon:""}},n),[r("v-icon",[e._v(e._s(e.icons.mdiSourceRepository))])],1)]}}])},[e._v(" "),r("span",[e._v("Source code")])]),e._v(" "),r("v-spacer")],1)],1)}),[],!1,null,"6c14f26c",null);t.a=Y.exports;h()(Y,{VApp:L.a,VAppBar:E.a,VAppBarNavIcon:$.a,VBtn:O.a,VContainer:I.a,VFooter:A.a,VForm:S.a,VIcon:w.a,VImg:F.a,VList:X.a,VListItem:N.a,VListItemAction:R.a,VListItemAvatar:B.a,VListItemContent:M.a,VListItemTitle:M.b,VMain:U.a,VMenu:G.a,VNavigationDrawer:H.a,VSpacer:V.a,VTextField:K.a,VToolbarTitle:D.a,VTooltip:J.a})},265:function(e,t,r){r(266),e.exports=r(269)},361:function(e,t,r){"use strict";r(241)},362:function(e,t,r){var n=r(12)(!1);n.push([e.i,".title[data-v-6c14f26c]{color:inherit;text-decoration:inherit}",""]),e.exports=n},389:function(e,t,r){},390:function(e,t,r){"use strict";r.r(t)},55:function(e,t,r){"use strict";var n=r(23);t.a={mdiAccount:n.a,mdiChartLine:n.b,mdiCheck:n.c,mdiClose:n.d,mdiCurrencyUsd:n.e,mdiDelete:n.f,mdiDragVariant:n.g,mdiEarth:n.h,mdiEmail:n.i,mdiFamilyTree:n.j,mdiFilter:n.k,mdiFilterOutline:n.l,mdiForum:n.m,mdiHome:n.n,mdiLock:n.o,mdiLoginVariant:n.p,mdiLogoutVariant:n.q,mdiMagnify:n.r,mdiPencil:n.s,mdiPlus:n.t,mdiPoll:n.u,mdiSourceRepository:n.v,mdiTextBoxPlus:n.w}},86:function(e,t,r){"use strict";var n=r(17),o=Object(n.b)({name:"ErrorLayout",props:{error:{type:Object,required:!0}},head:function(){return{title:"Portfolio Report"}}}),c=r(61),l=r(73),v=r.n(l),d=r(434),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[404===e.error.statusCode?r("div",[r("h1",[e._v("Page not found 😟")]),e._v(" "),r("p",[e._v("\n      Sorry, this page does not exist. If you think, this is wrong, please\n      "),r("NuxtLink",{attrs:{to:"/contact"}},[e._v("let us know")]),e._v(".\n    ")],1),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v("Go to home page")])],1):r("v-alert",{attrs:{value:!0,type:"error",outlined:""}},[e._v("\n    "+e._s(e.error.message)+"\n  ")])],1)}),[],!1,null,null,null);t.a=component.exports;v()(component,{VAlert:d.a})}},[[265,16,4,17]]]);