webpackJsonp([2,8],{194:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,c=[],M=!1,A=-1;function l(){M&&u&&(M=!1,u.length?c=u.concat(c):A=-1,c.length&&f())}function f(){if(!M){var t=a(l);M=!0;for(var e=c.length;e;){for(u=c,c=[];++A<e;)u&&u[A].run();A=-1,e=c.length}u=null,M=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||M||a(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},197:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiMwMDAiIGlkPSJlbGxpcHNlIiByPSIyNTYiLz48cGF0aCBkPSJNMzcyLjQsMTY4LjdjMCwwLTMzLjMtMjYuMS03Mi43LTI5LjFsLTMuNSw3LjFjMzUuNiw4LjcsNTEuOSwyMS4yLDY5LDM2LjUgIGMtMjkuNC0xNS01OC41LTI5LjEtMTA5LjEtMjkuMXMtNzkuNywxNC4xLTEwOS4xLDI5LjFjMTcuMS0xNS4zLDM2LjUtMjkuMiw2OS0zNi41bC0zLjUtNy4xYy00MS4zLDMuOS03Mi43LDI5LjEtNzIuNywyOS4xICBzLTM3LjIsNTQtNDMuNiwxNjBjMzcuNSw0My4zLDk0LjUsNDMuNiw5NC41LDQzLjZsMTEuOS0xNS45Yy0yMC4yLTctNDMuMS0xOS42LTYyLjgtNDIuM2MyMy41LDE3LjgsNTkuMSwzNi40LDExNi40LDM2LjQgIHM5Mi44LTE4LjUsMTE2LjQtMzYuNGMtMTkuNywyMi43LTQyLjYsMzUuMy02Mi44LDQyLjNsMTEuOSwxNS45YzAsMCw1Ny0wLjMsOTQuNS00My42QzQwOS42LDIyMi43LDM3Mi40LDE2OC43LDM3Mi40LDE2OC43eiAgIE0yMDguNywyOTkuNmMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFjMTQuMSwwLDI1LjUsMTMsMjUuNSwyOS4xUzIyMi44LDI5OS42LDIwOC43LDI5OS42eiBNMzAzLjMsMjk5LjYgIGMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFzMjUuNSwxMywyNS41LDI5LjFTMzE3LjMsMjk5LjYsMzAzLjMsMjk5LjZ6IiBmaWxsPSIjNEE0QTRBIiBpZD0ibG9nbyIvPjwvc3ZnPgo="},198:function(t,e,n){t.exports=n.p+"static/img/telegram.a045277.png"},200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(47),i=n.n(r),o=n(46),s=n.n(o),a=n(50),u={en:{title:"Byte Off",subtitle:"This server there is the purpose of to share our knowledge with others, be welcome.",discordSubtitle:"A single byte that make all difference",online:"Online",join:"Join"},es:{title:"Byte Off",subtitle:"Este servidor tiene el proposito de compartir nuestros conocimientos con otras personas, bien venido.",discordSubtitle:"Un unico byte que hace la diferencia",online:"Online",join:"Entrar"},pt:{title:"Byte Off",subtitle:"Esse server tem como proposito compartilhar nosso conhecimento com outras pessoas, seja bem vindo.",discordSubtitle:"Um unico byte que faz toda a diferença",online:"Online",join:"Entrar"}};e.default={name:"my-discord",data:function(){return{lang:this.$route.params.lang,trans:u,discord:{avatar:"https://cdn.discordapp.com/icons/639468436027867176/1c60fad6430a4e1ca40500d22879a728.png?size=128",title:"Byte Off",online:0}}},components:{mainMenu:i.a,mainFooter:s.a},created:function(){var t=this;this.$head.changeTitle(u[this.$route.params.lang].title);a.get("https://discordapp.com/api/guilds/639468436027867176/widget.json").then(function(e){var n=e.data;t.discord.online=n.presence_count})}}},21:function(t,e,n){n(217);var r=n(8)(n(200),n(234),null,null);t.exports=r.exports},211:function(t,e,n){(t.exports=n(19)()).push([t.i,"\n.margin-top {\n  margin-top: 6em;\n}\n.discord {\n  color: white;\n\n  text-align: left;\n\n  background: #2F3136;\n  padding: 20px;\n  display: inline-block;\n  border-radius: 5px;\n}\n.network-image {\n  border-radius: 40px;\n}\n.network-container {\n  margin-top: 15px;\n  display: -ms-flexbox;\n  display: flex;\n}\n.network-content {\n  padding-top: 32px;\n  margin-left: 25px;\n  display: inline-block;\n  width: 150px;\n}\n.dot {\n  height: 15px;\n  width: 15px;\n  background-color: #418c6c;\n  border-radius: 50%;\n  display: inline-block;\n}\n.align-center {\n  text-align-last: center;\n}\n.network-button {\n  text-align-last: center;\n  background-color: #4EA375;\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  padding-top: 11px;\n}\n.network-content a {\n  vertical-align: middle;\n  color: white;\n}\n@media only screen and (max-width: 600px) {\n.network-container {\n    display: block;\n    text-align: center;\n}\n.network-content {\n    margin-left: 0px;\n}\n}\n","",{version:3,sources:["/./src/container/byte-off/byte-off.css"],names:[],mappings:";AACA;EACE,gBAAgB;CACjB;AACD;EACE,aAAa;;EAEb,iBAAiB;;EAEjB,oBAAoB;EACpB,cAAc;EACd,sBAAsB;EACtB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;CACd;AACD;EACE,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,aAAa;EACb,aAAa;EACb,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,aAAa;CACd;AACD;AACA;IACI,eAAe;IACf,mBAAmB;CACtB;AACD;IACI,iBAAiB;CACpB;CACA",file:"byte-off.css",sourcesContent:["\n.margin-top {\n  margin-top: 6em;\n}\n.discord {\n  color: white;\n\n  text-align: left;\n\n  background: #2F3136;\n  padding: 20px;\n  display: inline-block;\n  border-radius: 5px;\n}\n.network-image {\n  border-radius: 40px;\n}\n.network-container {\n  margin-top: 15px;\n  display: -ms-flexbox;\n  display: flex;\n}\n.network-content {\n  padding-top: 32px;\n  margin-left: 25px;\n  display: inline-block;\n  width: 150px;\n}\n.dot {\n  height: 15px;\n  width: 15px;\n  background-color: #418c6c;\n  border-radius: 50%;\n  display: inline-block;\n}\n.align-center {\n  text-align-last: center;\n}\n.network-button {\n  text-align-last: center;\n  background-color: #4EA375;\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  padding-top: 11px;\n}\n.network-content a {\n  vertical-align: middle;\n  color: white;\n}\n@media only screen and (max-width: 600px) {\n.network-container {\n    display: block;\n    text-align: center;\n}\n.network-content {\n    margin-left: 0px;\n}\n}\n"],sourceRoot:"webpack://"}])},217:function(t,e,n){var r=n(211);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(20)("73639dde",r,!0)},228:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTcuODMzLDMxLjg1MyAxOS42MTYsMzEuODUzIDE5LjYxNiw0MC43MSAyMS4zMzksNDAuNzEgMjEuMzM5LDMxLjg1MyAyMy4xMiwzMS44NTMgMjMuMTIsMzAuMzQ1IDE3LjgzMywzMC4zNDUgICAgICIvPjxwYXRoIGQ9Ik0yOC40MTMsMjQuNDkzYzAuMjM0LDAsMC40Mi0wLjA2MiwwLjU1Ny0wLjE4OWMwLjEzNy0wLjEzMSwwLjIwNy0wLjMwOSwwLjIwNy0wLjUzM3YtNC41OWMwLTAuMTg0LTAuMDctMC4zMzQtMC4yMTEtMC40NDUgICBjLTAuMTQxLTAuMTE1LTAuMzI0LTAuMTcyLTAuNTUzLTAuMTcyYy0wLjIwOSwwLTAuMzc5LDAuMDU3LTAuNTEyLDAuMTcyYy0wLjEzMSwwLjExMS0wLjE5NSwwLjI2Mi0wLjE5NSwwLjQ0NXY0LjU5ICAgYzAsMC4yMywwLjA2MSwwLjQwOCwwLjE4NCwwLjUzM0MyOC4wMTEsMjQuNDMxLDI4LjE4NywyNC40OTMsMjguNDEzLDI0LjQ5M3oiLz48cGF0aCBkPSJNMzIuMjEyLDMyLjk3Yy0wLjIzOCwwLTAuNDczLDAuMDYxLTAuNzA1LDAuMTgyYy0wLjIyOSwwLjEyMS0wLjQ0OSwwLjMwMS0wLjY1NCwwLjUzM3YtMy4zNGgtMS41NDVWNDAuNzFoMS41NDV2LTAuNTg2ICAgYzAuMTk5LDAuMjM2LDAuNDE4LDAuNDA4LDAuNjUyLDAuNTJjMC4yMzIsMC4xMTEsMC41LDAuMTY2LDAuODAxLDAuMTY2YzAuNDUxLDAsMC44MDEtMC4xNDMsMS4wMzctMC40MzIgICBjMC4yNC0wLjI5MSwwLjM2MS0wLjcwNSwwLjM2MS0xLjI0NnYtNC4yNDRjMC0wLjYyNy0wLjEyNy0xLjEwNC0wLjM4NS0xLjQyOEMzMy4wNjUsMzMuMTM0LDMyLjY5NiwzMi45NywzMi4yMTIsMzIuOTd6ICAgIE0zMi4xMjgsMzguOTIxYzAsMC4yNDYtMC4wNDUsMC40Mi0wLjEzMywwLjUyN2MtMC4wODgsMC4xMDktMC4yMjUsMC4xNjItMC40MTIsMC4xNjJjLTAuMTI5LDAtMC4yNS0wLjAyOS0wLjM2OS0wLjA4MiAgIGMtMC4xMTctMC4wNTMtMC4yNC0wLjE0Ni0wLjM2MS0wLjI3di00Ljc2NGMwLjEwNC0wLjEwNywwLjIwOS0wLjE4NiwwLjMxNC0wLjIzNGMwLjEwNS0wLjA1MywwLjIxNS0wLjA3NiwwLjMyNC0wLjA3NiAgIGMwLjIwNSwwLDAuMzY1LDAuMDY2LDAuNDc3LDAuMTk3YzAuMTA3LDAuMTM1LDAuMTYsMC4zMywwLjE2LDAuNTlWMzguOTIxeiIvPjxwYXRoIGQ9Ik0yNi42MjgsMzguODc0Yy0wLjE0MywwLjE2NC0wLjMwMSwwLjI5OS0wLjQ3MywwLjQwOGMtMC4xNzIsMC4xMDctMC4zMTYsMC4xNi0wLjQyNiwwLjE2ICAgYy0wLjE0NSwwLTAuMjQ4LTAuMDM5LTAuMzE0LTAuMTIxYy0wLjA2Mi0wLjA4LTAuMDk2LTAuMjExLTAuMDk2LTAuMzkxdi01Ljg2N2gtMS41Mjd2Ni4zOTVjMCwwLjQ1NywwLjA5LDAuNzkzLDAuMjY4LDEuMDI1ICAgYzAuMTgyLDAuMjI3LDAuNDQ1LDAuMzQsMC43OTksMC4zNGMwLjI4NywwLDAuNTg0LTAuMDc4LDAuODg5LTAuMjQyYzAuMzA1LTAuMTY2LDAuNTk4LTAuNCwwLjg4MS0wLjcwOXYwLjgzOGgxLjUyOXYtNy42NDZoLTEuNTI5ICAgVjM4Ljg3NHoiLz48cGF0aCBkPSJNMjguMzQ3LDUuMTU1Yy0xMy42LDAtMjQuNjI1LDExLjAyNS0yNC42MjUsMjQuNjI1YzAsMTMuNjAyLDExLjAyNSwyNC42MjUsMjQuNjI1LDI0LjYyNSAgIGMxMy42LDAsMjQuNjI1LTExLjAyMywyNC42MjUtMjQuNjI1QzUyLjk3MiwxNi4xOCw0MS45NDYsNS4xNTUsMjguMzQ3LDUuMTU1eiBNMzIuMzI1LDE3LjMxN2gxLjcxOXY2LjQ1OSAgIGMwLDAuMjAxLDAuMDM5LDAuMzQ0LDAuMTExLDAuNDMyYzAuMDcsMC4wOSwwLjE4OCwwLjEzNywwLjM1LDAuMTM3YzAuMTI1LDAsMC4yODUtMC4wNjEsMC40OC0wLjE3OCAgIGMwLjE5MS0wLjEyMSwwLjM2OS0wLjI3MSwwLjUyOS0wLjQ1N3YtNi4zOTNoMS43MjN2OC40MjRoLTEuNzIzdi0wLjkzYy0wLjMxNCwwLjM0Mi0wLjY0NSwwLjYwNS0wLjk5LDAuNzgzICAgYy0wLjM0MiwwLjE3OC0wLjY3NCwwLjI3LTAuOTk4LDAuMjdjLTAuMzk4LDAtMC42OTctMC4xMjctMC45LTAuMzc5Yy0wLjE5OS0wLjI0OC0wLjMwMS0wLjYyMy0wLjMwMS0xLjEyOVYxNy4zMTd6IE0yNS45MzUsMTkuMjQzICAgYzAtMC42NSwwLjIzLTEuMTcsMC42OTMtMS41NjFjMC40NjUtMC4zODMsMS4wODgtMC41NzgsMS44NjktMC41NzhjMC43MTMsMCwxLjI5NSwwLjIwNSwxLjc1MiwwLjYxMSAgIGMwLjQ1MywwLjQwNiwwLjY4LDAuOTM0LDAuNjgsMS41Nzh2NC4zNWMwLDAuNzIzLTAuMjIzLDEuMjg3LTAuNjY2LDEuNjk1Yy0wLjQ0OSwwLjQwOC0xLjA2MiwwLjYxMy0xLjg0NCwwLjYxMyAgIGMtMC43NTIsMC0xLjM1NS0wLjIxMS0xLjgwNy0wLjYzMWMtMC40NTEtMC40MjYtMC42NzgtMC45OTYtMC42NzgtMS43MTFWMTkuMjQzeiBNMjEuMjQ3LDE0LjMyM2wxLjI1OCw0LjU2MmgwLjEyM2wxLjE5Ny00LjU2MiAgIGgxLjk2OWwtMi4yNTQsNi42ODJ2NC43MzdoLTEuOTM4di00LjUyNmwtMi4zMDctNi44OTNIMjEuMjQ3eiBNNDMuNzg2LDM4LjM1NmMwLDMuMDQ3LTIuNDcxLDUuNTItNS41MTgsNS41MkgxOS4wOTIgICBjLTMuMDQ5LDAtNS41Mi0yLjQ3My01LjUyLTUuNTJ2LTQuNDM4YzAtMy4wNDksMi40NzEtNS41Miw1LjUyLTUuNTJoMTkuMTc2YzMuMDQ3LDAsNS41MTgsMi40NzEsNS41MTgsNS41MlYzOC4zNTZ6Ii8+PHBhdGggZD0iTTM2LjgyNywzMi44NzRjLTAuNjg2LDAtMS4yNCwwLjIwNy0xLjY3NCwwLjYyN2MtMC40MzIsMC40MTYtMC42NSwwLjk1OS0wLjY1LDEuNjE3djMuNDM4ICAgYzAsMC43MzgsMC4xOTksMS4zMTYsMC41OTIsMS43MzRjMC4zOTMsMC40MiwwLjkzMiwwLjYzMSwxLjYxNywwLjYzMWMwLjc2MiwwLDEuMzM0LTAuMTk3LDEuNzE1LTAuNTkyICAgYzAuMzg3LTAuMzk4LDAuNTc2LTAuOTg4LDAuNTc2LTEuNzczdi0wLjM5M2gtMS41NzJ2MC4zNDhjMCwwLjQ1MS0wLjA1MywwLjc0Mi0wLjE1MiwwLjg3M3MtMC4yNzcsMC4xOTctMC41MzEsMC4xOTcgICBjLTAuMjQ0LDAtMC40MTYtMC4wNzYtMC41MTgtMC4yM2MtMC4xLTAuMTU4LTAuMTQ4LTAuNDM2LTAuMTQ4LTAuODR2LTEuNDM5aDIuOTIydi0xLjk1M2MwLTAuNzIzLTAuMTg2LTEuMjc3LTAuNTYyLTEuNjY2ICAgQzM4LjA2NSwzMy4wNjcsMzcuNTI2LDMyLjg3NCwzNi44MjcsMzIuODc0eiBNMzcuNDMxLDM1Ljg4MmgtMS4zNXYtMC43NzNjMC0wLjMyLDAuMDQ5LTAuNTUzLDAuMTU2LTAuNjg2ICAgYzAuMTA3LTAuMTQzLDAuMjgxLTAuMjExLDAuNTI1LTAuMjExYzAuMjMsMCwwLjQwNCwwLjA2OCwwLjUwOCwwLjIxMWMwLjEwNSwwLjEzMywwLjE2LDAuMzY1LDAuMTYsMC42ODZWMzUuODgyeiIvPjwvZz48L3N2Zz4="},234:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"has-background-grey-dark hero is-fullheight site"},[r("div",{staticClass:"hero-body is-normal-alignment"},[r("div",{staticClass:"container"},[r("mainMenu"),t._v(" "),r("div",{staticClass:"section has-text-centered"},[r("span",{staticClass:"subtitle has-text-white"},[t._v("\n            "+t._s(t.trans[t.lang].subtitle)+"\n          ")]),t._v(" "),r("div",{staticClass:"container margin-top"},[r("div",{staticClass:"discord"},[r("div",{staticClass:"network-title"},[r("span",[t._v(t._s(t.trans[t.lang].discordSubtitle))]),t._v(" "),r("img",{staticStyle:{float:"right"},attrs:{src:n(197),width:"32px"}})]),t._v(" "),r("div",{staticClass:"network-container"},[r("img",{staticClass:"network-image",attrs:{src:t.discord.avatar}}),t._v(" "),r("div",{staticClass:"network-content"},[r("span",[t._v(t._s(t.discord.title)+" ")]),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"dot"}),r("span",[t._v(" "+t._s(t.trans[t.lang].online)+" "+t._s(t.discord.online))])]),t._v(" "),r("div",{staticClass:"network-content align-end"},[r("a",{attrs:{href:"https://discord.gg/tezahWc",target:"_blank"}},[r("div",{staticClass:"network-button"},[t._v("\n                        "+t._s(t.trans[t.lang].join)+"\n                    ")])])])])])]),t._v(" "),t._m(0)])],1)]),t._v(" "),r("div",{staticClass:"hero-footer"},[r("div",{staticClass:"container"},[r("mainFooter")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-top"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-fifths"}),this._v(" "),e("div",{staticClass:"column has-text-centered"},[e("a",{attrs:{href:"https://t.me/joinchat/A95nmRQiZP1GT-LzYTJC4w",target:"_blank"}},[e("img",{staticStyle:{margin:"8px"},attrs:{src:n(198),width:"96px"}})])]),this._v(" "),e("div",{staticClass:"column has-text-centered"},[e("a",{attrs:{href:"https://www.youtube.com/channel/UCp1bUD2ttm1sLw84N2d-fKw",target:"_blank"}},[e("img",{attrs:{src:n(228),width:"128px"}})])]),this._v(" "),e("div",{staticClass:"column is-two-fifths"})])])}]}},28:function(t,e,n){"use strict";var r=n(35),i=n(66),o=Object.prototype.toString;function s(t){return"[object Array]"===o.call(t)}function a(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===o.call(t)}function c(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:u,isStream:function(t){return a(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,i=arguments.length;r<i;r++)c(arguments[r],n);return e},deepMerge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]="object"==typeof n?t({},n):n}for(var r=0,i=arguments.length;r<i;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},29:function(t,e,n){"use strict";var r=n(28),i=n(57),o=n(36),s=n(64),a=n(62),u=n(32);t.exports=function(t){return new Promise(function(e,c){var M=t.data,A=t.headers;r.isFormData(M)&&delete A["Content-Type"];var l=new XMLHttpRequest;if(t.auth){var f=t.auth.username||"",d=t.auth.password||"";A.Authorization="Basic "+btoa(f+":"+d)}if(l.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:t,request:l};i(e,c,r),l=null}},l.onabort=function(){l&&(c(u("Request aborted",t,"ECONNABORTED",l)),l=null)},l.onerror=function(){c(u("Network Error",t,null,l)),l=null},l.ontimeout=function(){c(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var p=n(60),L=(t.withCredentials||a(t.url))&&t.xsrfCookieName?p.read(t.xsrfCookieName):void 0;L&&(A[t.xsrfHeaderName]=L)}if("setRequestHeader"in l&&r.forEach(A,function(t,e){void 0===M&&"content-type"===e.toLowerCase()?delete A[e]:l.setRequestHeader(e,t)}),t.withCredentials&&(l.withCredentials=!0),t.responseType)try{l.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){l&&(l.abort(),c(t),l=null)}),void 0===M&&(M=null),l.send(M)})}},30:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},31:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},32:function(t,e,n){"use strict";var r=n(56);t.exports=function(t,e,n,i,o){var s=new Error(t);return r(s,e,n,i,o)}},33:function(t,e,n){"use strict";var r=n(28);t.exports=function(t,e){e=e||{};var n={};return r.forEach(["url","method","params","data"],function(t){void 0!==e[t]&&(n[t]=e[t])}),r.forEach(["headers","auth","proxy"],function(i){r.isObject(e[i])?n[i]=r.deepMerge(t[i],e[i]):void 0!==e[i]?n[i]=e[i]:r.isObject(t[i])?n[i]=r.deepMerge(t[i]):void 0!==t[i]&&(n[i]=t[i])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])}),n}},34:function(t,e,n){"use strict";(function(e){var r=n(28),i=n(63),o={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,u={adapter:(void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?a=n(29):"undefined"!=typeof XMLHttpRequest&&(a=n(29)),a),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(o)}),t.exports=u}).call(e,n(194))},35:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},36:function(t,e,n){"use strict";var r=n(28);function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(i(e)+"="+i(t))}))}),o=s.join("&")}if(o){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"mainFooter",data:function(){return{}},methods:{}}},38:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={en:{home:"Home",madeByMe:"Made by me",posts:"Posts",byteOff:"Byte Off"},es:{home:"Inicio",madeByMe:"Hecho por mi",posts:"Articulos",byteOff:"Byte Off"},pt:{home:"Início",madeByMe:"Feito por mim",posts:"Artigos",byteOff:"Byte Off"}};e.default={name:"mainMenu",data:function(){return{menuOpened:!1,lang:this.$route.params.lang,trans:r}},methods:{changeLanguage:function(t){this.$localStorage.set("language",t);var e=this.$route.name,n=this.$route.params;n.lang=t,this.$router.replace("/"),this.$router.replace({name:e,params:n}),this.$router.go()}}}},39:function(t,e,n){(t.exports=n(19)()).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"mainFooter.css",sourceRoot:"webpack://"}])},40:function(t,e,n){(t.exports=n(19)()).push([t.i,"\n.main-menu-separator {\n  margin: 0;\n  padding: 0;\n}\n.main-menu-item {\n  font-weight: bold;\n  color: hsl(0, 0%, 96%);\n}\n.main-menu-item:hover, .main-menu-item:focus, .main-menu-item:focus-within, .main-menu-item.is-active {\n  color: hsl(0, 0%, 86%) !important;\n  background: hsl(0, 0%, 29%) !important;\n}\n.main-menu {\n  background: #4a4a4a;\n}\n.padding-20 {\n  padding: 20px;\n}\n","",{version:3,sources:["/./src/component/mainMenu/mainMenu.css"],names:[],mappings:";AACA;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,kCAAkC;EAClC,uCAAuC;CACxC;AACD;EACE,oBAAoB;CACrB;AACD;EACE,cAAc;CACf",file:"mainMenu.css",sourcesContent:["\n.main-menu-separator {\n  margin: 0;\n  padding: 0;\n}\n.main-menu-item {\n  font-weight: bold;\n  color: hsl(0, 0%, 96%);\n}\n.main-menu-item:hover, .main-menu-item:focus, .main-menu-item:focus-within, .main-menu-item.is-active {\n  color: hsl(0, 0%, 86%) !important;\n  background: hsl(0, 0%, 29%) !important;\n}\n.main-menu {\n  background: #4a4a4a;\n}\n.padding-20 {\n  padding: 20px;\n}\n"],sourceRoot:"webpack://"}])},41:function(t,e,n){var r=n(39);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(20)("27ad5488",r,!0)},42:function(t,e,n){var r=n(40);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(20)("128793b1",r,!0)},43:function(t,e){t.exports="data:image/png;base64,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"},44:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD5UlEQVRYw+2WzW4cRRSFv1PdPTMem4TYIQlJFvxIISiIZVjyHFnyAGxZsUHiBXgK3gGxZAEbdoQgkBdEENskkmOPPTNd3feyqOqetj1hg5RNUlLN9NR01zn33Fv3NLwer8erPoRUfju5EavLl4jPj14KaIf1YLFXlcDEgftff0l7Os+s0kcxGhOqklBVab0okEQoiryV93EAWNvi7njbpt8xYrGhrZfgq7uL6QY/fP4FwKQESgeO/9il3n+K8nYhiKC0cZAQQgJlMGkFDI57f4V7+ra8aO6YOZ4pj65f7ciUJYCPKmy+wJuYswKYcISkdHMm49Cv6ZwOngF9eO0Z1gfE5gt8VMECyu6B5miGxYaQN3cJcuRD8EH4/ThPYPWHZ0XyzGo0R7P+mRLg3jd7vPPRPrJTQhBFECGkNAhQEAopYkk9YsdjiOtdpM4K1BwzaC2nIkzxT/fgs0ygbQFv8gRceWa5FTialwBcnrYEtwTuqxL0lQyIs4RyTvJMWLlOMwEDrAavkeeC8xR5bAoe/Thmfizcnc1LBR/ej4zHLbRr83BmTQ7KpNSRsDJhDgksFkuwOUUIFIUIJTzfFwbEGNl9UlBtbvDeTsPBPzMKwZVtehJncZPkoIRnjjm0rdOaQSguEsCXBBqEE7ICy/I688OSg1+eUp5e4da9B1TXlhz6d0w4YtsP1ncah4APuoQTAMt7my/PEjAD0YDXBATuBA/Ue5uc/Dni4PiQZ5MJmzNjun2d5d/bhEmLrsSB9GtY5JwHROuWwR2pygoNFJBH5HXOW2pHzayl2oncuvaMg2c7/P7b97w1O2L05oTmxPv71xLoCy5ddvmXAz46l4IW5DWiTkWDkIny7SWMHf9ryQfzXUaLwPzxEVt3PyZUhmx5UX3PDcrVF0ba0/tixOs1p4AmRyQwQYCn9QlxseDO3cju8bvotOT9rZ/ZbZ4TTNxRBPuPFOC45b5h+Yi642rWFKHVOQ2JuVrxyc1f0/GpxG1+QnIU4GZ8mJ5uOwPQubPf9+N8/DpwJRW8phkq8PCrq2zc3sFmE4JEAYQsZWdI0gpEvLD4L3iBdd1QSQRzJ7yxxcPHJ8CTRCDi1E2Dx0iFCJ0XAKZhdGft54IZoZUjDoh47wvQ4jQxEvNTiUBVssAJZUGhAArZglk7V56kCybkL5jmjvKRiIK6LAY1sDFhsTFmvLVJqEaMQ6BUyP6fq7hLRXahtDY4cVpF2ZuSBjaQlbYmUi+X1BtjOMwEqumURxYZV2KzMCaFCNh51/1fwz11wrkZx0RG02n/TrgF3AC2XvL76AzYE1IJTLp0vMTRAAtej1d+/AvTGl9eW3KtnAAAAABJRU5ErkJggg=="},45:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEfElEQVRYw+1XS2gUSRj+amYSMxoJIngw7EWIMxNnsoeIXnwQEEFED5KDwReJRuMDFbzubUGRBI0aHzGJUTx5CR4E2YuoJ91kYswkGePBRVjZZTWHPIzOo7v2/6urJ9WdkUVYNofNwM9X1d1V31f/q3tCWOBfaFHAooCFFyBECPKnXEXFEkxOZr57gzR+/u41gYoK2JOTiAlRwh4oAySePm3Ckye/Y8uW1Xj+/A9s3boaL1/+hc2bK5FMfsSGDasIPykcHPyE9etXYWDgI6KI0WrnJy0LUtKMUM1zOdhkMpNR193nxLJl+K2lhYdlIScMEvfvj6GurhLt7a/Q0FBFOIR9+yJobU1i//4ILl4cxIEDEVy4MEjztTh/Pqk2a+htoOXSIVaszpjNtu0CumM2IQTsTZuARCKkcqC0VGD79h9w584YkUZJzFsii+LevTc4dCiGu3cd7O1ljNJ8nDBC98dBapxTKW4552cm0tcYhSuM761cCbunx0xC9sA49u6t0qRRRdbYGENPTxpNTdUaY+juHsPhw9UKHdrcPNJiImB6aGoKtrcKJOrr1yiSxkYme6NIurrSOHKkGrdvj6K5eR06O0dx9GhcIc+7ukhE34PC5h4ybXxyQe5nU7nhhuXcOaC21hVgKw8cPBhRmzY3xwtkt26N4tixOG7cGEFLyzrCFKEzV79duxzib3jBzI2CF5YuhfXokdcDnHg3b47S5gnCERw/nsD16yM4cSKBa9eGcepUDa5eTREmCIcVdnSkaG3WW2NmHmivCCMP1H1KPcsbApvc/JoSby2uXEkqEZcvDyjyS5f6CeNUDb8qEW1t/Th5MkHzfrXyyy8PvSfVY856c8xmUQgsXaLWu3cAVUJBAJdWRwef2Dnp6dM1VIopnDlTQ2JSOHv2R8LXHmxvH4aoqyvebMy6p3GAWRi5BMNhWC9eeEPQ2TmGbNYmDwyT6gCdnFHQSYdU3ba1DaknW1tfaRzSLs4Vb3dGzJnUIg8ocg5HSYm3Ch4/3ol4PK6IgsGgskAgoIyvmVaIbWFcPz/2vkqQRhUIDgFds0YoibdtcwRYO3ZAxGIQMzNOsriEbhLx2Cg1E+cd3L3HAo01wi1JvlBeDiudnvOASot8HiKbdRaaJ9Wt0z3xPwnwe0Eae7l9QRKXpwqsvj7QWwaCXC/I7WDXu2NXUJEw+MvNfBf4G5Fyvw4FW56TcPduR0B+zx6gshJyehryWyfSxLKIF6QPi/UDz63ly5H/8GHOA9xKsvTaDJKV+jb2n7jQUIqFgZ6V8yKhK0Hvx67PUQiyZgi+dnfj88aN9FYshaAaDZaVIUDdyg2B8FUDjEQ13S58FaCyXyPPbSK26dsgMzuL2WfPQG83R0CGXgzTK1YgTKQhsjCXoK6CgFEJamOjOlAsFDpp4TYfsqBGfs4iEZ8p2WcnJuY8EKQvlCSRLiHycmoSYe4Fmujf+in3k6gvtO8UiQgRJ0gEC8g3vX9fxdX5H3+PzjA3C/hK9ucCfCHnmZu+iGVeq1n8Y/L/FPA3/7tunQ7qxrgAAAAASUVORK5CYII="},46:function(t,e,n){n(41);var r=n(8)(n(37),n(48),null,null);t.exports=r.exports},47:function(t,e,n){n(42);var r=n(8)(n(38),n(49),null,null);t.exports=r.exports},48:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]}},49:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar is-fixed-top container",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand main-menu"},[r("a",{staticClass:"navbar-burger burger has-text-white",class:{"is-active":t.menuOpened},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){t.menuOpened=!t.menuOpened}}},[r("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("div",{staticClass:"navbar-menu has-background-grey-dark",class:{"is-active":t.menuOpened}},[r("div",{staticClass:"navbar-end"},[r("router-link",{staticClass:"navbar-item main-menu-item has-text-white",attrs:{to:{name:"home",params:{lang:t.lang}}}},[t._v(t._s(t.trans[t.lang].home))]),t._v(" "),t.menuOpened?t._e():r("span",{staticClass:"navbar-item main-menu-separator has-text-white"},[t._v("|")]),t._v(" "),r("router-link",{staticClass:"navbar-item main-menu-item has-text-white",attrs:{to:{name:"posts",params:{lang:t.lang}}}},[t._v(t._s(t.trans[t.lang].posts))]),t._v(" "),t.menuOpened?t._e():r("span",{staticClass:"navbar-item main-menu-separator has-text-white"},[t._v("|")]),t._v(" "),r("router-link",{staticClass:"navbar-item main-menu-item has-text-white",attrs:{to:{name:"byte-off",params:{lang:t.lang}}}},[t._v(t._s(t.trans[t.lang].byteOff))]),t._v(" "),t.menuOpened?t._e():r("span",{staticClass:"navbar-item main-menu-separator has-text-white"},[t._v("-")]),t._v(" "),r("div",{staticClass:"is-pulled-right padding-20"},["pt"!=t.lang?r("a",{attrs:{href:"javascript://"},on:{click:function(e){t.changeLanguage("pt")}}},[r("img",{attrs:{src:n(43)}})]):t._e(),t._v(" "),"es"!=t.lang?r("a",{attrs:{href:"javascript://"},on:{click:function(e){t.changeLanguage("es")}}},[r("img",{attrs:{src:n(44)}})]):t._e(),t._v(" "),"en"!=t.lang?r("a",{attrs:{href:"javascript://"},on:{click:function(e){t.changeLanguage("en")}}},[r("img",{attrs:{src:n(45)}})]):t._e()])],1)])])},staticRenderFns:[]}},50:function(t,e,n){t.exports=n(51)},51:function(t,e,n){"use strict";var r=n(28),i=n(35),o=n(53),s=n(33);function a(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var u=a(n(34));u.Axios=o,u.create=function(t){return a(s(u.defaults,t))},u.Cancel=n(30),u.CancelToken=n(52),u.isCancel=n(31),u.all=function(t){return Promise.all(t)},u.spread=n(65),t.exports=u,t.exports.default=u},52:function(t,e,n){"use strict";var r=n(30);function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},53:function(t,e,n){"use strict";var r=n(28),i=n(36),o=n(54),s=n(55),a=n(33);function u(t){this.defaults=t,this.interceptors={request:new o,response:new o}}u.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},u.prototype.getUri=function(t){return t=a(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(t){u.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){u.prototype[t]=function(e,n,i){return this.request(r.merge(i||{},{method:t,url:e,data:n}))}}),t.exports=u},54:function(t,e,n){"use strict";var r=n(28);function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},55:function(t,e,n){"use strict";var r=n(28),i=n(58),o=n(31),s=n(34),a=n(61),u=n(59);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!a(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return c(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(c(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},56:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},57:function(t,e,n){"use strict";var r=n(32);t.exports=function(t,e,n){var i=n.config.validateStatus;!i||i(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},58:function(t,e,n){"use strict";var r=n(28);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},59:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},60:function(t,e,n){"use strict";var r=n(28);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},61:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},62:function(t,e,n){"use strict";var r=n(28);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},63:function(t,e,n){"use strict";var r=n(28);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},64:function(t,e,n){"use strict";var r=n(28),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,s={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(s[e]&&i.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},65:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},66:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}}});