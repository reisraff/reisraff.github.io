const TRANSLATIONS = {
  'en' : {
    'home': 'Home',
    'madeByMe': 'Made by me',
    'posts': 'Posts',
  },
  'es' : {
    'home': 'Inicio',
    'madeByMe': 'Hecho por mi',
    'posts': 'Articulos',
  },
  'pt' : {
    'home': 'Início',
    'madeByMe': 'Feito por mim',
    'posts': 'Artigos',
  }
}

export default {
  name: 'mainMenu',
  data: function () {
    return {
      menuOpened: false,
      lang: this.$route.params.lang,
      trans: TRANSLATIONS,
    }
  }
}
