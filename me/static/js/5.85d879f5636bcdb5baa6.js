webpackJsonp([5,8],{203:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={en:{goToHome:"Go To Homepage"},es:{goToHome:"Ir para la pagina principal"},pt:{goToHome:"Ir para página principal"}};e.default={name:"notFound",data:function(){return{lang:"en",trans:o}},created:function(){this.$lang.init(),this.lang=this.$localStorage.get("language","en")}}},206:function(n,e,t){(n.exports=t(19)()).push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"notFound.css",sourceRoot:"webpack://"}])},212:function(n,e,t){var o=t(206);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(20)("0f81a2e9",o,!0)},229:function(n,e){n.exports={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("router-link",{attrs:{to:{name:"home",params:{lang:this.lang}}}},[this._v(this._s(this.trans[this.lang].goToHome))])],1)},staticRenderFns:[]}},24:function(n,e,t){t(212);var o=t(8)(t(203),t(229),null,null);n.exports=o.exports}});