(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fbde10e2"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e9c":function(t,e,a){},"15a1":function(t,e,a){"use strict";a("0e9c")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#42b883",dark:""}},[a("v-app-bar-title",[t._v(" Knowledge CyberSecurity ")]),a("v-spacer"),a("div",{staticClass:"links"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)],1),a("v-main",[a("router-view")],1)],1)},r=[],o=(a("15a1"),a("2877")),s=a("6544"),c=a.n(s),l=a("7496"),d=a("40dc"),u=a("bb78"),v=a("f6c4"),m=a("2fa4"),f={},p=Object(o["a"])(f,i,r,!1,null,"2391ed3b",null),h=p.exports;c()(p,{VApp:l["a"],VAppBar:d["a"],VAppBarTitle:u["a"],VMain:v["a"],VSpacer:m["a"]});a("5363");var _=a("f309");n["a"].use(_["a"]);var b=new _["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#00AAFF",secondary:"#35495e",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"}}),w=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bgimg"},[a("br"),a("br"),a("br"),t._m(0),a("div",[a("v-container",{staticClass:"pl-2"},[a("h3",[t._v("La taxonomía se compone de lo siguiente:")]),a("br"),a("ul",[a("li",[t._v("Knowledge Area (KA) y New Trends")]),a("li",[t._v("Knowledge Units (KU)")]),a("li",[t._v("Congresses")]),a("li",[t._v("Certifications")]),a("li",[t._v("Research by sector (Keyword and Knowledge Objetive)")]),a("li",[t._v("Work Roles (Knowledge, Skills and Abilities)")])]),a("br"),a("br"),a("div",[a("h3",[t._v(" Te presentamos la guía de taxonomía "),a("router-link",{attrs:{to:"/taxonomyChart"}},[t._v("Aquí")])],1)])]),a("div",{staticClass:"relleno"})],1),a("div",{staticClass:"text-center mt-7"},[a("v-btn",{staticClass:"mx-auto",attrs:{elevation:"5",color:t.active?"primary":"secondary",dark:t.active,rounded:"xl"},on:{click:t.onCLickGetIn}},[t._v(t._s(t.active?"Ingresando . . .":"Ingresar"))])],1)])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ml-6"},[a("h1",[t._v("TAXONOMÍA DE CIBERSEGURIDAD")]),a("h1",[t._v("BASADA EN ACM")]),a("div",{staticClass:"mt-2 subhdr ml-6"},[a("p",[a("i",[t._v("Una taxonomía basada en las áreas de conocimientos")])]),a("p",[a("i",[t._v("del ACM para cubrir líneas de investigación.")])])])])}],y={name:"Home",data:function(){return{active:!1}},methods:{onCLickGetIn:function(){var t=this;this.active=!0,setTimeout((function(){t.$router.push("/karea")}),800)}}},x=y,K=(a("c59d"),a("8336")),C=a("a523"),V=Object(o["a"])(x,k,g,!1,null,"1a033ae4",null),I=V.exports;c()(V,{VBtn:K["a"],VContainer:C["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center"}},[a("br"),a("h1",[t._v("Knowledge Areas and New Trends")]),a("br"),a("div",[a("v-list",t._l(t.areas,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"60vw",color:"green lighten-4"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-toolbar",t._g({attrs:{color:"indigo",dark:""}},i),[a("v-toolbar-title",[a("v-icon",[t._v("mdi-shield-lock")]),t._v(" "+t._s(e.name)+" ")],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.onClickArrow(e)}}},[e.arrowed?a("v-icon",[t._v("mdi-arrow-up")]):a("v-icon",[t._v("mdi-arrow-down")])],1)],1)]}}],null,!0)},[e.arrowed?t._e():a("span",[a("ul",t._l(t.kunitsByKA(e.id),(function(e){return a("li",{key:e.id},[t._v(t._s(e.name))])})),0)])]),e.arrowed?a("v-card-text",[a("p",[t._v(t._s(e.definition))]),a("hr"),a("br"),a("v-header",{staticClass:"title-bold"},[t._v("Unidades de Conocimiento")]),t._l(t.kunitsByKA(e.id),(function(n){return a("v-list-item",{key:n.id},[a("v-list-item-content",[a("v-card",{staticClass:"mx-auto",on:{click:function(a){return t.onClickKunit(e,n)}}},[a("v-card-text",[t._v(" "+t._s(n.name)+" ")])],1)],1)],1)}))],2):t._e()],1)],1)],1)})),1)],1)])},U=[],T=(a("d81d"),a("a4d3"),a("e01a"),a("b0c0"),a("4de4"),a("bc3a")),O=a.n(T),j="http://26.38.36.67:4899",S={name:"KArea",data:function(){return{areas:[],kunits:[]}},methods:{getKAreas:function(){var t=this;O.a.get(j+"/knowledge-areas").then((function(e){var a=e.data;t.areas=a.map((function(t){var e=Object.assign({},t);return e.arrowed=!1,e}))}))},getKUnits:function(){var t=this;O.a.get(j+"/knowledge-units").then((function(e){t.kunits=e.data}))},onClickArrow:function(t){t.arrowed=!t.arrowed},onClickKunit:function(t,e){localStorage.setItem("KU_Description",e.description),this.$router.push({name:"KUnit",params:{idKA:t.name,KUName:e.name,idKU:e.id}})},kunitsByKA:function(t){return this.kunits.filter((function(e){return e.knowledgeArea==t}))}},mounted:function(){this.getKAreas(),this.getKUnits()}},B=S,$=(a("a7df"),a("b0af")),N=a("99d9"),L=a("132d"),M=a("8860"),D=a("da13"),F=a("5d23"),E=a("71d9"),R=a("2a7f"),P=a("3a2f"),Y=Object(o["a"])(B,A,U,!1,null,"219f2990",null),W=Y.exports;c()(Y,{VBtn:K["a"],VCard:$["a"],VCardText:N["a"],VIcon:L["a"],VList:M["a"],VListItem:D["a"],VListItemContent:F["a"],VSpacer:m["a"],VToolbar:E["a"],VToolbarTitle:R["a"],VTooltip:P["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-img",{attrs:{src:a("7e88")}}),n("br"),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{color:"secondary",elevation:"5","x-large":""},on:{click:t.onClickGoBack}},[t._v(" Volver ")])],1)],1)},H=[],q={methods:{onClickGoBack:function(){this.$router.push("/")}}},J=q,z=a("adda"),X=Object(o["a"])(J,G,H,!1,null,null,null),Q=X.exports;c()(X,{VBtn:K["a"],VImg:z["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("div",[a("div",{staticClass:"d-inline-flex"},[a("v-btn",{attrs:{icon:"",color:"blue accent-3"},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-subdirectory-arrow-left")])],1)],1),t._m(0)]),a("div",{staticClass:"text-center mx-auto"},[a("v-header",[t._v(t._s(t.KU))]),a("v-subheader",[t._v(t._s(t.KU_description))])],1),a("v-container",{model:{value:t.unidades,callback:function(e){t.unidades=e},expression:"unidades"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-card",{attrs:{color:"green lighten-4"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.unidades[0].title))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.unidades[0].arrow=!t.unidades[0].arrow}}},[t.unidades[0].arrow?a("v-icon",[t._v("mdi-arrow-up")]):a("v-icon",[t._v("mdi-arrow-down")])],1)],1),t.unidades[0].arrow?a("v-card-text",t._l(t.unidades[0].items,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",[a("v-card",{staticClass:"pa-3"},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])])],1)],1)})),1):t._e()],1)],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-card",{attrs:{color:"green lighten-4"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.unidades[1].title))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.unidades[1].arrow=!t.unidades[1].arrow}}},[t.unidades[1].arrow?a("v-icon",[t._v("mdi-arrow-up")]):a("v-icon",[t._v("mdi-arrow-down")])],1)],1),t.unidades[1].arrow?a("v-card-text",t._l(t.unidades[1].items,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",[a("v-card",{staticClass:"pa-3"},[a("p",[t._v(" "+t._s(e.name)+" ["+t._s(e.date)+"] ")])])],1)],1)})),1):t._e()],1)],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-card",{attrs:{color:"green lighten-4"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.unidades[2].title))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.unidades[2].arrow=!t.unidades[2].arrow}}},[t.unidades[2].arrow?a("v-icon",[t._v("mdi-arrow-up")]):a("v-icon",[t._v("mdi-arrow-down")])],1)],1),t.unidades[2].arrow?a("v-card-text",t._l(t.unidades[2].items,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",[a("v-card",{staticClass:"pa-3"},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])])],1)],1)})),1):t._e()],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-card",{attrs:{color:"green lighten-4"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.unidades[3].title))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.unidades[3].arrow=!t.unidades[3].arrow}}},[t.unidades[3].arrow?a("v-icon",[t._v("mdi-arrow-up")]):a("v-icon",[t._v("mdi-arrow-down")])],1)],1),t.unidades[3].arrow?a("v-card-text",t._l(t.unidades[3].items,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",[a("v-card",{staticClass:"pa-3"},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Research",params:{idKA:t.KA,idKU:t.idKU,researchName:e.name,sectorId:e.id}}}},[t._v(" "+t._s(e.name)+" ")])],1)],1)],1)})),1):t._e()],1)],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-card",{attrs:{color:"green lighten-4"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.unidades[4].title))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.unidades[4].arrow=!t.unidades[4].arrow}}},[t.unidades[4].arrow?a("v-icon",[t._v("mdi-arrow-up")]):a("v-icon",[t._v("mdi-arrow-down")])],1)],1),t.unidades[4].arrow?a("v-card-text",t._l(t.unidades[4].items,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",[a("v-card",{staticClass:"pa-3"},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"WorkRoles",params:{wrName:e.name,wrId:e.id}}}},[t._v(" "+t._s(e.name)+" ")])],1)],1)],1)})),1):t._e()],1)],1)],1)],1)],1)],1)],1)],1)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-inline-flex"},[a("h2",[t._v("Atrás")])])}],et={props:{},data:function(){return{KA:this.$route.params.idKA,KU:this.$route.params.KUName,idKU:this.$route.params.idKU,KU_description:localStorage.getItem("KU_Description"),unidades:[{title:"Certifications",arrow:!1,items:[]},{title:"Congreses",arrow:!1,items:[]},{title:"Tools",arrow:!1,items:[]},{title:"Research",arrow:!1,items:[]},{title:"Work Roles",arrow:!1,items:[]}]}},methods:{certificatesByKU:function(){var t=this;O.a.get(j+"/".concat(this.idKU,"/certificates")).then((function(e){t.unidades[0].items=e.data}))},congresesByKU:function(){var t=this;O.a.get(j+"/".concat(this.idKU,"/congresses")).then((function(e){t.unidades[1].items=e.data}))},toolsByKU:function(){var t=this;O.a.get(j+"/".concat(this.idKU,"/tools")).then((function(e){t.unidades[2].items=e.data}))},sectorsByKU:function(){var t=this;O.a.get(j+"/knowledge-units/".concat(this.idKU,"/sectors")).then((function(e){t.unidades[3].items=e.data}))},workRolesByKU:function(){var t=this;O.a.get(j+"/knowledge-units/".concat(this.idKU,"/work-roles")).then((function(e){t.unidades[4].items=e.data}))}},mounted:function(){this.certificatesByKU(),this.congresesByKU(),this.toolsByKU(),this.sectorsByKU(),this.workRolesByKU(),localStorage.setItem("KUName",this.KU)}},at=et,nt=a("62ad"),it=a("0fd9"),rt=a("e0c7"),ot=Object(o["a"])(at,Z,tt,!1,null,null,null),st=ot.exports;c()(ot,{VBtn:K["a"],VCard:$["a"],VCardText:N["a"],VCol:nt["a"],VContainer:C["a"],VIcon:L["a"],VList:M["a"],VListItem:D["a"],VListItemContent:F["a"],VRow:it["a"],VSpacer:m["a"],VSubheader:rt["a"],VToolbar:E["a"],VToolbarTitle:R["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",[a("div",{staticClass:"d-inline-flex"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:"",color:"blue accent-3"},on:{click:function(e){return t.$router.go(-1)}}},n),[a("v-icon",[t._v("mdi-subdirectory-arrow-left")])],1)]}}])},[a("span",[t._v("Atrás")])])],1),a("div",{staticClass:"d-inline-flex"},[a("h2",[t._v(" /"+t._s(t.kUName)+"/"+t._s(this.$route.params.researchName)+" ")])]),a("div",{staticClass:"d-flex justify-end switch-big"},[a("v-switch",{staticClass:"big-label",attrs:{label:t.filterMode?"By Knowledge Objectives":"By keywords"},model:{value:t.filterMode,callback:function(e){t.filterMode=e},expression:"filterMode"}})],1)]),t.filterMode?t._e():a("div",[a("v-text-field",{staticClass:"search-text-field",attrs:{label:"Keyword","append-icon":"mdi-plus-circle-outline","single-line":"","hide-details":""},on:{"click:append":function(e){return t.addFilterItems(t.newKeyword)}},model:{value:t.newKeyword,callback:function(e){t.newKeyword=e},expression:"newKeyword"}}),a("div",{staticClass:"d-flex justify-start mt-5"},[a("span",{staticClass:"mvp-kw-text"},[t._v("Most used keywords: ")]),t._l(t.bestKeywords,(function(e){return a("v-card",{key:e.name,staticClass:"mx-1 pa-1 red lighten-2",attrs:{height:"100%",dark:""},on:{click:function(a){return t.addFilterItems(e.name)}}},[a("span",[t._v(t._s(e.name))])])}))],2)],1),a("br"),t.filterMode?a("div",[a("h3",[t._v("Knowledge Objectives")]),a("br")]):t._e(),a("v-card",{attrs:{elevation:"5","min-height":"90px"}},[0!==t.filterItems.length||t.filterMode?t._e():a("v-card-text",[t._v("No keywords added yet")]),a("v-container",{attrs:{fluid:""}},[t.filterMode?a("v-row",t._l(t.koItems,(function(e){return a("v-col",{key:e.name},[a("v-tooltip",{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-card",t._g({class:e.clicked?"green accent-2":"grey accent-1",attrs:{"min-width":"100%",height:"80px"},on:{click:function(a){return t.checkKO(e)}}},i),[a("v-card-text",{staticClass:"text-center"},[a("b",[t._v(t._s(e.name))])])],1)]}}],null,!0)},[a("span",[t._v("Cant. Papers: "+t._s(null==e.paper_amount?0:e.paper_amount))])])],1)})),1):a("v-row",t._l(t.filterItems,(function(e){return a("v-col",{key:e},[a("v-card",{attrs:{color:"#42b883",dark:""}},[a("v-card-text",{staticClass:"text-center"},[t._v(" "+t._s(e)+" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",{on:{click:function(a){return t.removeFilterItems(e)}}},[t._v("mdi-minus-circle-outline")])],1)],1)],1)],1)})),1)],1)],1),a("div",{staticClass:"d-flex justify-end my-3"},[a("v-btn",{attrs:{depressed:"",color:"white"},on:{click:function(e){t.expand=!t.expand}}},[a("span",[t._v("Advanced Filter")]),a("v-icon",[t._v("mdi-cog-outline")])],1)],1),a("div",[a("v-expand-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],staticClass:"mx-auto",attrs:{width:"50vw"}},[a("v-list",t._l(t.advancedItems,(function(e){return a("v-list-item",{key:e},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),"Year"!=e.label?a("v-list-item-content",[a("v-text-field",{attrs:{label:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"adItem.value"}})],1):a("v-list-item-content",[a("div",{staticClass:"d-flex justify-space-around"},[a("v-text-field",{attrs:{label:"Min Year"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"adItem.value"}}),a("v-icon",{staticClass:"mx-4"},[t._v("mdi-arrow-expand-horizontal")]),a("v-text-field",{attrs:{label:"Max Year"},model:{value:t.endYear,callback:function(e){t.endYear=e},expression:"endYear"}})],1)])],1)})),1)],1)],1)],1),a("br"),a("div",{staticClass:"mx-auto text-center"},[a("v-btn",{attrs:{color:"black accent-2",dark:""},on:{click:t.onClickFilter}},[t._v(" Search ")])],1),a("br"),a("v-divider"),a("br"),a("v-card",[a("v-card-title",[t._v(" Search Results ")]),a("v-data-table",{attrs:{headers:t.headers,items:t.papers,search:t.search,loading:t.loadingData,"loading-text":"Cargando Papers..."},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.items;return[a("tbody",t._l(n,(function(e){return a("tr",{key:e.title},[a("td",[a("span",{staticClass:"text-hover",on:{click:function(a){return t.goToLink(e)}}},[t._v(t._s(e.title))])]),a("td",[t._v(t._s(e.year))]),a("td",[t._v(t._s(e.doi))]),a("td",[t._v(t._s(e.authors))]),a("td",[t._v(t._s(e.documentType))])])})),0)]}}])})],1),a("br"),t.filterActive?t._e():a("v-header",{staticClass:"d-flex justify-center"},[t._v(" No papers have been filtered yet ")])],1)},lt=[],dt=(a("498a"),a("a434"),a("a15b"),a("99af"),a("9911"),{data:function(){return{idKU:this.$route.params.idKU,sectorID:this.$route.params.sectorId,kUName:localStorage.getItem("KUName"),expand:!1,filterMode:!1,newKeyword:"",filterActive:!1,filterItems:[],loadingData:!1,bestKeywords:[],endYear:"",koItems:[],advancedItems:[{label:"Title",icon:"mdi-subtitles-outline",value:""},{label:"Year",icon:"mdi-calendar-range",value:""},{label:"DOI",icon:"mdi-counter",value:""},{label:"Author",icon:"mdi-account",value:""}],search:"",checkedKO:{id:-1,name:""},headers:[{text:"Paper Name",align:"start",filterable:!0,value:"title"},{text:"Año",value:"year"},{text:"DOI",value:"doi"},{text:"Autor",value:"authors"},{text:"Doc. Type",value:"documentType"}],papers:[]}},methods:{addFilterItems:function(t){""!==t?(t=t.trim(),this.filterItems.push(t),this.newKeyword=""):alert("Por favor ingrese algún keyword")},removeFilterItems:function(t){var e=this.filterItems.indexOf(t);this.filterItems.splice(e,1)},onClickFilter:function(){var t=this;if(this.filterMode&&-1==this.checkedKO.id)alert("Escoja al menos 1 Knowledge Objective");else{this.loadingData=!0;var e=this.advancedItems[1].value,a=this.endYear,n=this.advancedItems[0].value,i=this.advancedItems[2].value,r=this.advancedItems[3].value,o=this.filterItems.join(";"),s=this.checkedKO.id;this.filterMode?o="":s="",O.a.get(j+"/knowledge-units/".concat(this.idKU,"/sectors/").concat(this.sectorID,"/papers?keywords=").concat(o,"&startYear=").concat(e,"&endYear=").concat(a,"&title=").concat(n,"&doi=").concat(i,"&author=").concat(r,"&koId=").concat(s)).then((function(e){t.papers=e.data,t.filterActive=!0,t.loadingData=!1}))}},getKOs:function(){var t=this;O.a.get(j+"/knowledge-units/".concat(this.idKU,"/sectors/").concat(this.sectorID,"/knowledge-objectives")).then((function(e){var a=e.data;t.koItems=a.map((function(t){var e=Object.assign({},t);return e.clicked=!1,e}))}))},getBestKW:function(){var t=this;O.a.get(j+"/knowledge-units/".concat(this.idKU,"/sectors/").concat(this.sectorID,"/keywords")).then((function(e){t.bestKeywords=e.data}))},checkKO:function(t){this.koItems.every((function(t){return!t.clicked}))?(t.clicked=!0,this.checkedKO=t):(t.clicked=!1,t.name==this.checkedKO.name&&(this.checkedKO={id:-1,name:""}))},goToLink:function(t){window.open(t.link,"_blank")}},mounted:function(){this.getKOs(),this.getBestKW()}}),ut=dt,vt=(a("b99a"),a("8fea")),mt=a("ce7e"),ft=a("0789"),pt=a("34c3"),ht=a("b73d"),_t=a("8654"),bt=Object(o["a"])(ut,ct,lt,!1,null,"cbfcfbea",null),wt=bt.exports;c()(bt,{VBtn:K["a"],VCard:$["a"],VCardText:N["a"],VCardTitle:N["b"],VCol:nt["a"],VContainer:C["a"],VDataTable:vt["a"],VDivider:mt["a"],VExpandTransition:ft["a"],VIcon:L["a"],VList:M["a"],VListItem:D["a"],VListItemContent:F["a"],VListItemIcon:pt["a"],VRow:it["a"],VSwitch:ht["a"],VTextField:_t["a"],VTooltip:P["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("div",[a("div",{staticClass:"d-inline-flex"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:"",color:"blue accent-3"},on:{click:function(e){return t.$router.go(-1)}}},n),[a("v-icon",[t._v("mdi-subdirectory-arrow-left")])],1)]}}])},[a("span",[t._v("Back")])])],1),a("div",{staticClass:"d-inline-flex"},[a("h2",[t._v("/"+t._s(t.wrName))])])]),a("v-container",[a("v-row",{attrs:{"no-gutters":""}},t._l(2,(function(e){return a("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"6"}},[a("v-list",t._l(t.unidadesLorR(e),(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-content",[a("v-card",{attrs:{color:"green lighten-4"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v(t._s(e.title))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.arrow=!e.arrow}}},[e.arrow?a("v-icon",[t._v("mdi-arrow-up")]):a("v-icon",[t._v("mdi-arrow-down")])],1)],1),e.arrow?a("v-card-text",t._l(e.items,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-content",[a("v-card",{staticClass:"pa-3"},[a("p",[t._v(" "+t._s(e.description)+" ")])])],1)],1)})),1):t._e()],1)],1)],1)})),1)],1)})),1)],1)],1)},gt=[],yt={props:{},data:function(){return{wrId:this.$route.params.wrId,wrName:this.$route.params.wrName,ksats:[],unidades:[{title:"Task",arrow:!1,items:[]},{title:"Knowledge",arrow:!1,items:[]},{title:"Skills",arrow:!1,items:[]},{title:"Abilities",arrow:!1,items:[]}]}},methods:{unidadesLorR:function(t){return 1==t?[this.unidades[0],this.unidades[1]]:[this.unidades[2],this.unidades[3]]},getAllKsats:function(){var t=this;O.a.get(j+"/work-roles/".concat(this.wrId,"/ksat")).then((function(e){t.ksats=e.data,t.unidades[0].items=t.ksats.filter((function(t){return"Task"==t.type})),t.unidades[1].items=t.ksats.filter((function(t){return"Knowledge"==t.type})),t.unidades[2].items=t.ksats.filter((function(t){return"Skills"==t.type})),t.unidades[3].items=t.ksats.filter((function(t){return"Abilities"==t.type}))}))}},mounted:function(){this.getAllKsats()}},xt=yt,Kt=Object(o["a"])(xt,kt,gt,!1,null,null,null),Ct=Kt.exports;c()(Kt,{VBtn:K["a"],VCard:$["a"],VCardText:N["a"],VCol:nt["a"],VContainer:C["a"],VIcon:L["a"],VList:M["a"],VListItem:D["a"],VListItemContent:F["a"],VRow:it["a"],VSpacer:m["a"],VToolbar:E["a"],VToolbarTitle:R["a"],VTooltip:P["a"]}),n["a"].use(w["a"]);var Vt=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/karea",name:"KArea",component:W},{path:"/:idKA/:idKU-:KUName",name:"KUnit",component:st},{path:"/:idKA/:idKU/:researchName-:sectorId",name:"Research",component:wt},{path:"/:wrId-:wrName",name:"WorkRoles",component:Ct},{path:"/taxonomyChart",name:"Taxonomia",component:Q}],It=new w["a"]({routes:Vt,mode:"history"}),At=It;n["a"].config.productionTip=!1,new n["a"]({vuetify:b,router:At,render:function(t){return t(h)}}).$mount("#app")},"5b6b":function(t,e,a){},"69a1":function(t,e,a){},"7e88":function(t,e,a){t.exports=a.p+"img/TaxonomyChart.297cede7.png"},a7df:function(t,e,a){"use strict";a("5b6b")},b99a:function(t,e,a){"use strict";a("69a1")},c59d:function(t,e,a){"use strict";a("e1fe")},e1fe:function(t,e,a){}});
//# sourceMappingURL=app.e643fcb2.js.map