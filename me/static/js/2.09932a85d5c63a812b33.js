webpackJsonp([2,5],{17:function(n,e,o){o(26);var a=o(5)(o(21),o(34),null,null);n.exports=a.exports},21:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={en:{goToHome:"Go To Homepage"},es:{goToHome:"Ir para la pagina principal"},pt:{goToHome:"Ir para página principal"}};e.default={name:"notFound",data:function(){return{lang:"en",trans:a}},created:function(){this.$lang.init(),this.lang=this.$localStorage.get("language","en")}}},22:function(n,e,o){e=n.exports=o(13)(),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"notFound.css",sourceRoot:"webpack://"}])},26:function(n,e,o){var a=o(22);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);o(14)("0f81a2e9",a,!0)},34:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("router-link",{attrs:{to:{name:"home",params:{lang:n.lang}}}},[n._v(n._s(n.trans[n.lang].goToHome))])],1)},staticRenderFns:[]}}});