webpackJsonp([4,8],{202:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={en:{title:"You're almost there, just read and go",subtitle:"Attackers are always trying to steal your information (for example, passwords, messages or credit cards)! Welcome to my page <strong>https://reisraff.github.io/</strong>. NET::ERR_IT_IS_NOT_AN_ERROR",checkbox:"Automatically report details of possible security incidents to Everyone.",showLess:"SHOW LESS",advanced:"ADVANCED",reload:"RELOAD",proceed:"Do not let things fool you, click below to proceed to <strong>https://reisraff.github.io</strong>",go:"sudo go --to https://reisraff.github.io"},es:{title:"Está case alla, solamente leya y vá",subtitle:"Hackers estan siempre intentando robar sus informaciones (por ejemplo, contraseña, mesages o tarjeta de credito)! Bien venido a mi pagina <strong>https://reisraff.github.io/</strong>. NET::ERR_IT_IS_NOT_AN_ERROR",checkbox:"Automaticamente reportar detalles de posibles fallas de seguridad para todos.",showLess:"MOSTRAR MENOS",advanced:"AVANZADO",reload:"RECARGAR",proceed:"No deje las cosas enganarte, clique abajo para seguir para <strong>https://reisraff.github.io</strong>",go:"sudo go --to https://reisraff.github.io"},pt:{title:"Está quase lá, leia e vá",subtitle:"Hackers estão sempre tentando roubar suas informações (por exemplo, senhas, mensagens ou cartões de crédito)! Bem vindo a minha pagina <strong>https://reisraff.github.io/</strong>. NET::ERR_IT_IS_NOT_AN_ERROR",checkbox:"Automaticamente reportar detalhes de possiveis falhas de segurança para todos.",showLess:"MOSTRAR MENOS",advanced:"AVANÇADO",reload:"RECARREGAR",proceed:"Não deixe as coisas te enganarem, clique abaixo para ir para <strong>https://reisraff.github.io</strong>",go:"sudo go --to https://reisraff.github.io"}};t.default={name:"home",data:function(){return{showAdvanced:!1,trans:e,lang:"en",next:"/"}},created:function(){this.$lang.init(),this.lang=this.$localStorage.get("language","en");var s=this.$localStorage.get("next",null);s&&(s=JSON.parse(s),this.next=s.path),parseInt(this.$localStorage.get("firstOpen","1"))||this.$router.replace({name:"home",params:{lang:this.lang}})},methods:{reload:function(){window.location.reload()},goHome:function(){this.$localStorage.set("firstOpen","0"),this.$router.replace({name:"home",params:{lang:this.lang}})}}}},208:function(s,t,a){(s.exports=a(19)()).push([s.i,"\n.top {\n  margin-top: 40px;\n}\n.spacing {\n  margin: 18px 0 18px 0;\n}\n.less-container {\n  max-width: 950px;\n}\n","",{version:3,sources:["/./src/container/index/index.css"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB",file:"index.css",sourcesContent:["\n.top {\n  margin-top: 40px;\n}\n.spacing {\n  margin: 18px 0 18px 0;\n}\n.less-container {\n  max-width: 950px;\n}\n"],sourceRoot:"webpack://"}])},214:function(s,t,a){var e=a(208);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(20)("179e4133",e,!0)},219:function(s,t){s.exports="data:image/png;base64,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"},23:function(s,t,a){a(214);var e=a(8)(a(202),a(231),null,null);s.exports=e.exports},231:function(s,t,a){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container less-container"},[a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container top"},[s._m(0),s._v(" "),a("div",{staticClass:"spacing"},[a("h1",{staticClass:"title"},[s._v(s._s(s.trans[s.lang].title))])]),s._v(" "),a("div",{staticClass:"spacing"},[a("span",{staticClass:"subtitle",domProps:{innerHTML:s._s(s.trans[s.lang].subtitle)}})]),s._v(" "),a("div",{staticClass:"spacing"},[a("label",{staticClass:"checkbox"},[a("input",{attrs:{type:"checkbox"}}),s._v("\n            "+s._s(s.trans[s.lang].checkbox)+"\n          ")])]),s._v(" "),a("div",{staticClass:"spacing columns"},[a("div",{staticClass:"column is-paddingless"},[a("a",{attrs:{href:"javascript://"},on:{click:function(t){s.showAdvanced=!s.showAdvanced}}},[s._v("\n              "+s._s(s.showAdvanced?s.trans[s.lang].showLess:s.trans[s.lang].advanced)+"\n            ")])]),s._v(" "),a("div",{staticClass:"column is-paddingless"},[a("a",{staticClass:"button is-pulled-right has-background-blue",attrs:{href:"javascript://"},on:{click:function(t){s.reload()}}},[s._v(s._s(s.trans[s.lang].reload))])])])])])]),s._v(" "),s.showAdvanced?a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"spacing"},[a("span",{staticClass:"subtitle",domProps:{innerHTML:s._s(s.trans[s.lang].proceed)}}),a("span",{staticClass:"subtitle"},[a("strong",[s._v(s._s(s.next))])])]),s._v(" "),a("div",{staticClass:"spacing"},[a("a",{attrs:{href:"javascript://"},on:{click:function(t){s.goHome()}}},[s._v(s._s(s.trans[s.lang].go)+s._s(s.next))])])])]):s._e()])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"spacing"},[t("img",{attrs:{src:a(219)}})])}]}}});