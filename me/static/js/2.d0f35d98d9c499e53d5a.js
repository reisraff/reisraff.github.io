webpackJsonp([2,8],{191:function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],d=!1,l=-1;function p(){d&&c&&(d=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!d){var e=s(p);d=!0;for(var n=u.length;n;){for(c=u,u=[];++l<n;)c&&c[l].run();l=-1,n=u.length}c=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function h(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new m(e,n)),1!==u.length||d||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},197:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(44),o=t.n(r),i=t(43),a=t.n(i),s=t(47),c={en:{title:"My Discord",subtitle:"This server there is the purpose of to share our knowledge with others, be welcome.",discordSubtitle:"One bit to get it right",online:"Online",join:"Join"},es:{title:"Mio Discord",subtitle:"Este servidor tiene el proposito de compartir nuestros conocimientos con otras personas, bien venido.",discordSubtitle:"Uno bit para hacerlo bien",online:"Online",join:"Entrar"},pt:{title:"Meu Discord",subtitle:"Esse server tem como proposito compartilhar nosso conhecimento com outras pessoas, seja bem vindo.",discordSubtitle:"Um bit para compreender",online:"Online",join:"Entrar"}};n.default={name:"my-discord",data:function(){return{lang:this.$route.params.lang,trans:c,discord:{avatar:"https://cdn.discordapp.com/icons/639468436027867176/1c60fad6430a4e1ca40500d22879a728.png?size=128",title:"Bit Off",online:0}}},components:{mainMenu:o.a,mainFooter:a.a},created:function(){var e=this;this.$head.changeTitle(c[this.$route.params.lang].title);s.get("https://discordapp.com/api/guilds/639468436027867176/widget.json").then(function(n){var t=n.data;e.discord.online=t.presence_count})}}},20:function(e,n,t){t(209);var r=t(8)(t(197),t(227),null,null);e.exports=r.exports},203:function(e,n,t){(e.exports=t(16)()).push([e.i,"\n.margin-top {\n  margin-top: 10em;\n}\n.discord {\n  color: white;\n\n  text-align: left;\n\n  background: #2F3136;\n  padding: 20px;\n  display: inline-block;\n  border-radius: 5px;\n}\n.discord-image {\n  border-radius: 40px;\n}\n.discord-container {\n  margin-top: 15px;\n  display: -ms-flexbox;\n  display: flex;\n}\n.discord-content {\n  padding-top: 32px;\n  margin-left: 25px;\n  display: inline-block;\n  width: 150px;\n}\n.dot {\n  height: 15px;\n  width: 15px;\n  background-color: #418c6c;\n  border-radius: 50%;\n  display: inline-block;\n}\n.align-center {\n  text-align-last: center;\n}\n.discord-button {\n  text-align-last: center;\n  background-color: #4EA375;\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  padding-top: 11px;\n}\n.discord-content a {\n  vertical-align: middle;\n  color: white;\n}\n@media only screen and (max-width: 600px) {\n.discord-container {\n    display: block;\n    text-align: center;\n}\n.discord-content {\n    margin-left: 0px;\n}\n}\n","",{version:3,sources:["/./src/container/my-discord/my-discord.css"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;;EAEb,iBAAiB;;EAEjB,oBAAoB;EACpB,cAAc;EACd,sBAAsB;EACtB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;CACd;AACD;EACE,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,aAAa;EACb,aAAa;EACb,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,aAAa;CACd;AACD;AACA;IACI,eAAe;IACf,mBAAmB;CACtB;AACD;IACI,iBAAiB;CACpB;CACA",file:"my-discord.css",sourcesContent:["\n.margin-top {\n  margin-top: 10em;\n}\n.discord {\n  color: white;\n\n  text-align: left;\n\n  background: #2F3136;\n  padding: 20px;\n  display: inline-block;\n  border-radius: 5px;\n}\n.discord-image {\n  border-radius: 40px;\n}\n.discord-container {\n  margin-top: 15px;\n  display: -ms-flexbox;\n  display: flex;\n}\n.discord-content {\n  padding-top: 32px;\n  margin-left: 25px;\n  display: inline-block;\n  width: 150px;\n}\n.dot {\n  height: 15px;\n  width: 15px;\n  background-color: #418c6c;\n  border-radius: 50%;\n  display: inline-block;\n}\n.align-center {\n  text-align-last: center;\n}\n.discord-button {\n  text-align-last: center;\n  background-color: #4EA375;\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  padding-top: 11px;\n}\n.discord-content a {\n  vertical-align: middle;\n  color: white;\n}\n@media only screen and (max-width: 600px) {\n.discord-container {\n    display: block;\n    text-align: center;\n}\n.discord-content {\n    margin-left: 0px;\n}\n}\n"],sourceRoot:"webpack://"}])},209:function(e,n,t){var r=t(203);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(17)("0cf8baa6",r,!0)},227:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"has-background-grey-dark hero is-fullheight site"},[t("div",{staticClass:"hero-body is-normal-alignment"},[t("div",{staticClass:"container"},[t("mainMenu"),e._v(" "),t("div",{staticClass:"section has-text-centered"},[t("span",{staticClass:"subtitle has-text-white"},[e._v("\n            "+e._s(e.trans[e.lang].subtitle)+"\n          ")]),e._v(" "),t("div",{staticClass:"container margin-top"},[t("div",{staticClass:"discord"},[t("div",{staticClass:"discord-title"},[t("span",[e._v(e._s(e.trans[e.lang].discordSubtitle))])]),e._v(" "),t("div",{staticClass:"discord-container"},[t("img",{staticClass:"discord-image",attrs:{src:e.discord.avatar}}),e._v(" "),t("div",{staticClass:"discord-content"},[t("span",[e._v(e._s(e.discord.title)+" ")]),e._v(" "),t("br"),e._v(" "),t("span",{staticClass:"dot"}),t("span",[e._v(" "+e._s(e.trans[e.lang].online)+" "+e._s(e.discord.online))])]),e._v(" "),t("div",{staticClass:"discord-content align-end"},[t("a",{attrs:{href:"https://discord.gg/tezahWc",target:"_blank"}},[t("div",{staticClass:"discord-button"},[e._v("\n                        "+e._s(e.trans[e.lang].join)+"\n                    ")])])])])])])])],1)]),e._v(" "),t("div",{staticClass:"hero-footer"},[t("div",{staticClass:"container"},[t("mainFooter")],1)])])},staticRenderFns:[]}},25:function(e,n,t){"use strict";var r=t(32),o=t(63),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,n){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),a(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var n={};function t(t,r){"object"==typeof n[r]&&"object"==typeof t?n[r]=e(n[r],t):n[r]=t}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],t);return n},deepMerge:function e(){var n={};function t(t,r){"object"==typeof n[r]&&"object"==typeof t?n[r]=e(n[r],t):n[r]="object"==typeof t?e({},t):t}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],t);return n},extend:function(e,n,t){return u(n,function(n,o){e[o]=t&&"function"==typeof n?r(n,t):n}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},26:function(e,n,t){"use strict";var r=t(25),o=t(54),i=t(33),a=t(61),s=t(59),c=t(29);e.exports=function(e){return new Promise(function(n,u){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+btoa(f+":"+m)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:t,config:e,request:p};o(n,u,r),p=null}},p.onabort=function(){p&&(u(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var h=t(57),A=(e.withCredentials||s(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;A&&(l[e.xsrfHeaderName]=A)}if("setRequestHeader"in p&&r.forEach(l,function(e,n){void 0===d&&"content-type"===n.toLowerCase()?delete l[n]:p.setRequestHeader(n,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(n){if("json"!==e.responseType)throw n}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),u(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},27:function(e,n,t){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},28:function(e,n,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},29:function(e,n,t){"use strict";var r=t(53);e.exports=function(e,n,t,o,i){var a=new Error(e);return r(a,n,t,o,i)}},30:function(e,n,t){"use strict";var r=t(25);e.exports=function(e,n){n=n||{};var t={};return r.forEach(["url","method","params","data"],function(e){void 0!==n[e]&&(t[e]=n[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(n[o])?t[o]=r.deepMerge(e[o],n[o]):void 0!==n[o]?t[o]=n[o]:r.isObject(e[o])?t[o]=r.deepMerge(e[o]):void 0!==e[o]&&(t[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==n[r]?t[r]=n[r]:void 0!==e[r]&&(t[r]=e[r])}),t}},31:function(e,n,t){"use strict";(function(n){var r=t(25),o=t(60),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,n){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var s,c={adapter:(void 0!==n&&"[object process]"===Object.prototype.toString.call(n)?s=t(26):"undefined"!=typeof XMLHttpRequest&&(s=t(26)),s),transformRequest:[function(e,n){return o(n,"Accept"),o(n,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(i)}),e.exports=c}).call(n,t(191))},32:function(e,n,t){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return e.apply(n,t)}}},33:function(e,n,t){"use strict";var r=t(25);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,t){if(!n)return e;var i;if(t)i=t(n);else if(r.isURLSearchParams(n))i=n.toString();else{var a=[];r.forEach(n,function(e,n){null!==e&&void 0!==e&&(r.isArray(e)?n+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(n)+"="+o(e))}))}),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},34:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={en:{},es:{},pt:{}};n.default={name:"mainFooter",data:function(){return{lang:this.$route.params.lang,trans:r}},methods:{changeLanguage:function(e){this.$localStorage.set("language",e);var n=this.$route.name,t=this.$route.params;t.lang=e,this.$router.replace("/"),this.$router.replace({name:n,params:t}),this.$router.go()}}}},35:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={en:{home:"Home",madeByMe:"Made by me",posts:"Posts",myDiscord:"My Discord"},es:{home:"Inicio",madeByMe:"Hecho por mi",posts:"Articulos",myDiscord:"Mio Discord"},pt:{home:"Início",madeByMe:"Feito por mim",posts:"Artigos",myDiscord:"Meu Discord"}};n.default={name:"mainMenu",data:function(){return{menuOpened:!1,lang:this.$route.params.lang,trans:r}}}},36:function(e,n,t){(e.exports=t(16)()).push([e.i,"\n.padding-20 {\n  padding: 20px;\n}\n","",{version:3,sources:["/./src/component/mainFooter/mainFooter.css"],names:[],mappings:";AACA;EACE,cAAc;CACf",file:"mainFooter.css",sourcesContent:["\n.padding-20 {\n  padding: 20px;\n}\n"],sourceRoot:"webpack://"}])},37:function(e,n,t){(e.exports=t(16)()).push([e.i,"\n.main-menu-separator {\n  margin: 0;\n  padding: 0;\n}\n.main-menu-item {\n  font-weight: bold;\n  color: hsl(0, 0%, 96%);\n}\n.main-menu-item:hover, .main-menu-item:focus, .main-menu-item:focus-within, .main-menu-item.is-active {\n  color: hsl(0, 0%, 86%) !important;\n  background: hsl(0, 0%, 29%) !important;\n}\n.main-menu {\n  background: #4a4a4a;\n}\n","",{version:3,sources:["/./src/component/mainMenu/mainMenu.css"],names:[],mappings:";AACA;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,kCAAkC;EAClC,uCAAuC;CACxC;AACD;EACE,oBAAoB;CACrB",file:"mainMenu.css",sourcesContent:["\n.main-menu-separator {\n  margin: 0;\n  padding: 0;\n}\n.main-menu-item {\n  font-weight: bold;\n  color: hsl(0, 0%, 96%);\n}\n.main-menu-item:hover, .main-menu-item:focus, .main-menu-item:focus-within, .main-menu-item.is-active {\n  color: hsl(0, 0%, 86%) !important;\n  background: hsl(0, 0%, 29%) !important;\n}\n.main-menu {\n  background: #4a4a4a;\n}\n"],sourceRoot:"webpack://"}])},38:function(e,n,t){var r=t(36);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(17)("27ad5488",r,!0)},39:function(e,n,t){var r=t(37);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(17)("128793b1",r,!0)},40:function(e,n){e.exports="data:image/png;base64,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"},41:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD5UlEQVRYw+2WzW4cRRSFv1PdPTMem4TYIQlJFvxIISiIZVjyHFnyAGxZsUHiBXgK3gGxZAEbdoQgkBdEENskkmOPPTNd3feyqOqetj1hg5RNUlLN9NR01zn33Fv3NLwer8erPoRUfju5EavLl4jPj14KaIf1YLFXlcDEgftff0l7Os+s0kcxGhOqklBVab0okEQoiryV93EAWNvi7njbpt8xYrGhrZfgq7uL6QY/fP4FwKQESgeO/9il3n+K8nYhiKC0cZAQQgJlMGkFDI57f4V7+ra8aO6YOZ4pj65f7ciUJYCPKmy+wJuYswKYcISkdHMm49Cv6ZwOngF9eO0Z1gfE5gt8VMECyu6B5miGxYaQN3cJcuRD8EH4/ThPYPWHZ0XyzGo0R7P+mRLg3jd7vPPRPrJTQhBFECGkNAhQEAopYkk9YsdjiOtdpM4K1BwzaC2nIkzxT/fgs0ygbQFv8gRceWa5FTialwBcnrYEtwTuqxL0lQyIs4RyTvJMWLlOMwEDrAavkeeC8xR5bAoe/Thmfizcnc1LBR/ej4zHLbRr83BmTQ7KpNSRsDJhDgksFkuwOUUIFIUIJTzfFwbEGNl9UlBtbvDeTsPBPzMKwZVtehJncZPkoIRnjjm0rdOaQSguEsCXBBqEE7ICy/I688OSg1+eUp5e4da9B1TXlhz6d0w4YtsP1ncah4APuoQTAMt7my/PEjAD0YDXBATuBA/Ue5uc/Dni4PiQZ5MJmzNjun2d5d/bhEmLrsSB9GtY5JwHROuWwR2pygoNFJBH5HXOW2pHzayl2oncuvaMg2c7/P7b97w1O2L05oTmxPv71xLoCy5ddvmXAz46l4IW5DWiTkWDkIny7SWMHf9ryQfzXUaLwPzxEVt3PyZUhmx5UX3PDcrVF0ba0/tixOs1p4AmRyQwQYCn9QlxseDO3cju8bvotOT9rZ/ZbZ4TTNxRBPuPFOC45b5h+Yi642rWFKHVOQ2JuVrxyc1f0/GpxG1+QnIU4GZ8mJ5uOwPQubPf9+N8/DpwJRW8phkq8PCrq2zc3sFmE4JEAYQsZWdI0gpEvLD4L3iBdd1QSQRzJ7yxxcPHJ8CTRCDi1E2Dx0iFCJ0XAKZhdGft54IZoZUjDoh47wvQ4jQxEvNTiUBVssAJZUGhAArZglk7V56kCybkL5jmjvKRiIK6LAY1sDFhsTFmvLVJqEaMQ6BUyP6fq7hLRXahtDY4cVpF2ZuSBjaQlbYmUi+X1BtjOMwEqumURxYZV2KzMCaFCNh51/1fwz11wrkZx0RG02n/TrgF3AC2XvL76AzYE1IJTLp0vMTRAAtej1d+/AvTGl9eW3KtnAAAAABJRU5ErkJggg=="},42:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEfElEQVRYw+1XS2gUSRj+amYSMxoJIngw7EWIMxNnsoeIXnwQEEFED5KDwReJRuMDFbzubUGRBI0aHzGJUTx5CR4E2YuoJ91kYswkGePBRVjZZTWHPIzOo7v2/6urJ9WdkUVYNofNwM9X1d1V31f/q3tCWOBfaFHAooCFFyBECPKnXEXFEkxOZr57gzR+/u41gYoK2JOTiAlRwh4oAySePm3Ckye/Y8uW1Xj+/A9s3boaL1/+hc2bK5FMfsSGDasIPykcHPyE9etXYWDgI6KI0WrnJy0LUtKMUM1zOdhkMpNR193nxLJl+K2lhYdlIScMEvfvj6GurhLt7a/Q0FBFOIR9+yJobU1i//4ILl4cxIEDEVy4MEjztTh/Pqk2a+htoOXSIVaszpjNtu0CumM2IQTsTZuARCKkcqC0VGD79h9w584YkUZJzFsii+LevTc4dCiGu3cd7O1ljNJ8nDBC98dBapxTKW4552cm0tcYhSuM761cCbunx0xC9sA49u6t0qRRRdbYGENPTxpNTdUaY+juHsPhw9UKHdrcPNJiImB6aGoKtrcKJOrr1yiSxkYme6NIurrSOHKkGrdvj6K5eR06O0dx9GhcIc+7ukhE34PC5h4ybXxyQe5nU7nhhuXcOaC21hVgKw8cPBhRmzY3xwtkt26N4tixOG7cGEFLyzrCFKEzV79duxzib3jBzI2CF5YuhfXokdcDnHg3b47S5gnCERw/nsD16yM4cSKBa9eGcepUDa5eTREmCIcVdnSkaG3WW2NmHmivCCMP1H1KPcsbApvc/JoSby2uXEkqEZcvDyjyS5f6CeNUDb8qEW1t/Th5MkHzfrXyyy8PvSfVY856c8xmUQgsXaLWu3cAVUJBAJdWRwef2Dnp6dM1VIopnDlTQ2JSOHv2R8LXHmxvH4aoqyvebMy6p3GAWRi5BMNhWC9eeEPQ2TmGbNYmDwyT6gCdnFHQSYdU3ba1DaknW1tfaRzSLs4Vb3dGzJnUIg8ocg5HSYm3Ch4/3ol4PK6IgsGgskAgoIyvmVaIbWFcPz/2vkqQRhUIDgFds0YoibdtcwRYO3ZAxGIQMzNOsriEbhLx2Cg1E+cd3L3HAo01wi1JvlBeDiudnvOASot8HiKbdRaaJ9Wt0z3xPwnwe0Eae7l9QRKXpwqsvj7QWwaCXC/I7WDXu2NXUJEw+MvNfBf4G5Fyvw4FW56TcPduR0B+zx6gshJyehryWyfSxLKIF6QPi/UDz63ly5H/8GHOA9xKsvTaDJKV+jb2n7jQUIqFgZ6V8yKhK0Hvx67PUQiyZgi+dnfj88aN9FYshaAaDZaVIUDdyg2B8FUDjEQ13S58FaCyXyPPbSK26dsgMzuL2WfPQG83R0CGXgzTK1YgTKQhsjCXoK6CgFEJamOjOlAsFDpp4TYfsqBGfs4iEZ8p2WcnJuY8EKQvlCSRLiHycmoSYe4Fmujf+in3k6gvtO8UiQgRJ0gEC8g3vX9fxdX5H3+PzjA3C/hK9ucCfCHnmZu+iGVeq1n8Y/L/FPA3/7tunQ7qxrgAAAAASUVORK5CYII="},43:function(e,n,t){t(38);var r=t(8)(t(34),t(45),null,null);e.exports=r.exports},44:function(e,n,t){t(39);var r=t(8)(t(35),t(46),null,null);e.exports=r.exports},45:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"is-pulled-right padding-20"},[r("a",{attrs:{href:"javascript://"},on:{click:function(n){e.changeLanguage("pt")}}},[r("img",{attrs:{src:t(40)}})]),e._v(" "),r("a",{attrs:{href:"javascript://"},on:{click:function(n){e.changeLanguage("es")}}},[r("img",{attrs:{src:t(41)}})]),e._v(" "),r("a",{attrs:{href:"javascript://"},on:{click:function(n){e.changeLanguage("en")}}},[r("img",{attrs:{src:t(42)}})])])},staticRenderFns:[]}},46:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"navbar is-fixed-top container",attrs:{role:"navigation","aria-label":"main navigation"}},[t("div",{staticClass:"navbar-brand main-menu"},[t("a",{staticClass:"navbar-burger burger has-text-white",class:{"is-active":e.menuOpened},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(n){e.menuOpened=!e.menuOpened}}},[t("span",{attrs:{"aria-hidden":"true"}}),e._v(" "),t("span",{attrs:{"aria-hidden":"true"}}),e._v(" "),t("span",{attrs:{"aria-hidden":"true"}})])]),e._v(" "),t("div",{staticClass:"navbar-menu has-background-grey-dark",class:{"is-active":e.menuOpened}},[t("div",{staticClass:"navbar-end"},[t("router-link",{staticClass:"navbar-item main-menu-item has-text-white",attrs:{to:{name:"home",params:{lang:e.lang}}}},[e._v(e._s(e.trans[e.lang].home))]),e._v(" "),e.menuOpened?e._e():t("span",{staticClass:"navbar-item main-menu-separator has-text-white"},[e._v("|")]),e._v(" "),t("router-link",{staticClass:"navbar-item main-menu-item has-text-white",attrs:{to:{name:"posts",params:{lang:e.lang}}}},[e._v(e._s(e.trans[e.lang].posts))]),e._v(" "),e.menuOpened?e._e():t("span",{staticClass:"navbar-item main-menu-separator has-text-white"},[e._v("|")]),e._v(" "),t("router-link",{staticClass:"navbar-item main-menu-item has-text-white",attrs:{to:{name:"my-discord",params:{lang:e.lang}}}},[e._v(e._s(e.trans[e.lang].myDiscord))])],1)])])},staticRenderFns:[]}},47:function(e,n,t){e.exports=t(48)},48:function(e,n,t){"use strict";var r=t(25),o=t(32),i=t(50),a=t(30);function s(e){var n=new i(e),t=o(i.prototype.request,n);return r.extend(t,i.prototype,n),r.extend(t,n),t}var c=s(t(31));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=t(27),c.CancelToken=t(49),c.isCancel=t(28),c.all=function(e){return Promise.all(e)},c.spread=t(62),e.exports=c,e.exports.default=c},49:function(e,n,t){"use strict";var r=t(27);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(e){n=e});var t=this;e(function(e){t.reason||(t.reason=new r(e),n(t.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(n){e=n}),cancel:e}},e.exports=o},50:function(e,n,t){"use strict";var r=t(25),o=t(33),i=t(51),a=t(52),s=t(30);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var n=[a,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){n.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){n.push(e.fulfilled,e.rejected)});n.length;)t=t.then(n.shift(),n.shift());return t},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(n,t){return this.request(r.merge(t||{},{method:e,url:n}))}}),r.forEach(["post","put","patch"],function(e){c.prototype[e]=function(n,t,o){return this.request(r.merge(o||{},{method:e,url:n,data:t}))}}),e.exports=c},51:function(e,n,t){"use strict";var r=t(25);function o(){this.handlers=[]}o.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(n){null!==n&&e(n)})},e.exports=o},52:function(e,n,t){"use strict";var r=t(25),o=t(55),i=t(28),a=t(31),s=t(58),c=t(56);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]}),(e.adapter||a.adapter)(e).then(function(n){return u(e),n.data=o(n.data,n.headers,e.transformResponse),n},function(n){return i(n)||(u(e),n&&n.response&&(n.response.data=o(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})}},53:function(e,n,t){"use strict";e.exports=function(e,n,t,r,o){return e.config=n,t&&(e.code=t),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},54:function(e,n,t){"use strict";var r=t(29);e.exports=function(e,n,t){var o=t.config.validateStatus;!o||o(t.status)?e(t):n(r("Request failed with status code "+t.status,t.config,null,t.request,t))}},55:function(e,n,t){"use strict";var r=t(25);e.exports=function(e,n,t){return r.forEach(t,function(t){e=t(e,n)}),e}},56:function(e,n,t){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},57:function(e,n,t){"use strict";var r=t(25);e.exports=r.isStandardBrowserEnv()?{write:function(e,n,t,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(n)),r.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},58:function(e,n,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},59:function(e,n,t){"use strict";var r=t(25);e.exports=r.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(e){var r=e;return n&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=o(window.location.href),function(n){var t=r.isString(n)?o(n):n;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},60:function(e,n,t){"use strict";var r=t(25);e.exports=function(e,n){r.forEach(e,function(t,r){r!==n&&r.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[r])})}},61:function(e,n,t){"use strict";var r=t(25),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),n=r.trim(e.substr(0,i)).toLowerCase(),t=r.trim(e.substr(i+1)),n){if(a[n]&&o.indexOf(n)>=0)return;a[n]="set-cookie"===n?(a[n]?a[n]:[]).concat([t]):a[n]?a[n]+", "+t:t}}),a):a}},62:function(e,n,t){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},63:function(e,n){function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}}});