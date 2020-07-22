const TRANSLATIONS = {
  'en' : {
    'home': 'Home',
    'madeByMe': 'Made by me',
    'posts': 'Posts',
    'byteOff': 'Byte Off',
  },
  'es' : {
    'home': 'Inicio',
    'madeByMe': 'Hecho por mi',
    'posts': 'Articulos',
    'byteOff': 'Byte Off',
  },
  'pt' : {
    'home': 'Início',
    'madeByMe': 'Feito por mim',
    'posts': 'Artigos',
    'byteOff': 'Byte Off',
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
  },
  methods: {
    changeLanguage: function (newLang) {
      this.$localStorage.set('language', newLang)

      var routeName = this.$route.name
      var params = this.$route.params
      params.lang = newLang

      this.$router.replace('/')
      this.$router.replace({name: routeName, params: params})
      this.$router.go()
    }
  }
}
