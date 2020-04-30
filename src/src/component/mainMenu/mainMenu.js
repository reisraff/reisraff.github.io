const TRANSLATIONS = {
  'en' : {
    'home': 'Home',
    'madeByMe': 'Made by me',
    'posts': 'Posts',
    'myDiscord': 'My Discord',
  },
  'es' : {
    'home': 'Inicio',
    'madeByMe': 'Hecho por mi',
    'posts': 'Articulos',
    'myDiscord': 'Mio Discord',
  },
  'pt' : {
    'home': 'Início',
    'madeByMe': 'Feito por mim',
    'posts': 'Artigos',
    'myDiscord': 'Meu Discord',
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
