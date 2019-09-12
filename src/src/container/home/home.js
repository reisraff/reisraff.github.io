import mainMenu from 'component/mainMenu/mainMenu.vue'
import mainFooter from 'component/mainFooter/mainFooter.vue'
const postscribe = require('postscribe');

const TRANSLATIONS = {
  'en': {
    'title': 'Home',
    'subtitle': 'Independent Security Researcher, Gamer, Developer, Musician'
  },
  'es': {
    'title': 'Inicio',
    'subtitle': 'Pesquisador de la seguridad de la Información, Gamer, Desarrollador, Musico'
  },
  'pt': {
    'title': 'Início',
    'subtitle': 'Pesquisador de Segurança da Informação, Gamer, Desenvolvedor, Músico'
  },
}

export default {
  name: 'home',
  data: function () {
    return {
      showAdvanced: false,
      lang: this.$route.params.lang,
      trans: TRANSLATIONS
    }
  },
  components: {
    mainMenu,
    mainFooter,
  },
  mounted: function () {
    var el = document.getElementById('badge');

    postscribe(el, '<\script src="https://www.hackthebox.eu/badge/79586"></\script>', {
      error : function (e) {
        console.error(e);
      }
    });
  },
  created: function () {
    this.$head.changeTitle(TRANSLATIONS[this.$route.params.lang].title)
  }
}
