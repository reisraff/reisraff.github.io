webpackJsonp([6,7],[function(n,t,e){"use strict";t.a={install:function(n){n.prototype.$localStorage={set:function(n,t){window.localStorage[n]=t},get:function(n,t){return window.localStorage[n]||t}}}}},,function(n,t,e){"use strict";t.a={install:function(n){n.prototype.$lang=function(){var n={set:function(n,t){window.localStorage[n]=t},get:function(n,t){return window.localStorage[n]||t}};return n.init=function(){if(null===n.get("language",null)){var t=window.navigator.userLanguage||window.navigator.language||"en";t=t.substring(0,2),n.set("language",t)}},{init:n.init}}()}}},function(n,t,e){"use strict";var a=e(1),o=e.n(a),u=e(10),i=e.n(u),r=e(0);o.a.use(r.a);var l=function(){return e.e(3).then(e.bind(null,17))},s=function(){return e.e(2).then(e.bind(null,16))},c=function(){return e.e(0).then(e.bind(null,20))},p=function(){return e.e(1).then(e.bind(null,19))},g=function(){return e.e(4).then(e.bind(null,18))},f=[{path:"/",name:"index",component:l},{path:"/:lang/home",name:"home",component:s},{path:"/:lang/post/:postId",name:"post",component:p},{path:"/:lang/posts",name:"posts",component:c},{path:"*",name:"notFound",component:g}],d=new i.a({base:"/me/",mode:"history",routes:f,linkActiveClass:"is-active"});d.beforeEach(function(n,t,e){void 0!==n.params.lang&&o.a.prototype.$localStorage.set("language",n.params.lang),e()}),o.a.use(i.a),t.a=d},,function(n,t,e){e(8);var a=e(6)(e(7),e(9),null,null);n.exports=a.exports},,function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(n,t){},function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},,,,function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(1),o=e.n(a),u=e(3),i=e(5),r=e.n(i),l=e(4),s=e.n(l),c=e(0),p=e(2);o.a.use(c.a),o.a.use(p.a),o.a.use(s.a,{id:"UA-73718792-1",router:u.a}),new o.a({el:"#app",router:u.a,localStorage:c.a,lang:p.a,template:"<App/>",components:{App:r.a}})}],[13]);