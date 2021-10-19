(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0af9fd":"de6f50fe","chunk-2d2086b7":"57b33ffc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("edf9")},"56d7":function(e,t,n){"use strict";n.r(t);n("dccd"),n("2746"),n("7757"),n("b545");var r=n("0da6"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/protect"}},[e._v("Protect")]),e._v("| "),e.isLoading?n("a",{attrs:{href:""}},[e._v("Loading......")]):e.data?[n("span",[e._v(e._s(e.data.loginId))]),n("button",{on:{click:e.loginOut}},[e._v("注销")])]:n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],2),n("router-view")],1)},a=[],i=n("955c"),u={computed:Object(i["b"])("loginUser",["data","isLoading"]),methods:{loginOut:function(){this.$store.dispatch("loginUser/loginOut"),this.$router.push("/login")}}},c=u,s=(n("034f"),n("2d26")),l=Object(s["a"])(c,o,a,!1,null,null,null),f=l.exports,p=(n("424c"),n("8226"),n("7a95"),n("aaf3")),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("这是首页所有人都能访问")])])}],m={},g=m,v=Object(s["a"])(g,d,h,!1,null,null,null),b=v.exports,w=n("f09d"),y=(n("f9b2"),n("bc3a")),_=n.n(y),k=function(){var e=localStorage.getItem("token"),t=_.a;return e&&(t=_.a.create({headers:{authorization:"bearer "+e}})),t.interceptors.response.use((function(e){return e.headers.authorization&&localStorage.setItem("token",e.headers.authorization),e}),(function(e){return 403===e.response.status&&localStorage.removeItem("token"),Promise.reject(e)})),t};function O(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}function j(e,t){return x.apply(this,arguments)}function x(){return x=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O(2e3);case 2:return e.next=4,k().post("/api/admin/login",{loginId:t,loginPwd:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function P(){localStorage.removeItem("token")}function L(){return S.apply(this,arguments)}function S(){return S=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O(2e3);case 2:return e.next=4,k().get("/api/admin/whoami");case 4:return t=e.sent,e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var I={namespaced:!0,state:{data:null,isLoading:!1},mutations:{setData:function(e,t){e.data=t},setisLoading:function(e,t){e.isLoading=t}},actions:{login:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,o,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t.loginId,a=t.loginPwd,r("setisLoading",!0),n.next=5,j(o,a);case 5:return i=n.sent,r("setData",i.data),r("setisLoading",!1),n.abrupt("return",i.data);case 9:case"end":return n.stop()}}),n)})))()},loginOut:function(e){var t=e.commit;t("setData",null),P()},whoAmI:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("setisLoading",!0),t.prev=2,t.next=5,L();case 5:r=t.sent,n("setData",r.data),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),n("setData",null);case 12:n("setisLoading",!1);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()}}};r["a"].use(i["a"]);var R=new i["a"].Store({modules:{loginUser:I}});r["a"].use(p["a"]);var E=[{path:"/",component:b},{path:"/protect",component:function(){return n.e("chunk-2d0af9fd").then(n.bind(null,"0eb4"))},beforeEnter:function(e,t,n){R.state.loginUser.data?n():n("/login")}},{path:"/login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}}],T=new p["a"]({mode:"history",base:"/",routes:E}),$=T;r["a"].config.productionTip=!1,new r["a"]({router:$,store:R,render:function(e){return e(f)}}).$mount("#app")},edf9:function(e,t,n){}});
//# sourceMappingURL=app.6c4dfc36.js.map