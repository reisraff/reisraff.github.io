const TRANSLATION = {
  'en': {
    'goToHome': 'Go To Homepage'
  },
  'es': {
    'goToHome': 'Ir para la pagina principal'
  },
  'pt': {
    'goToHome': 'Ir para página principal'
  }
}

export default {
  name: 'notFound',
  data: function () {
    return {
      lang: 'en',
      trans: TRANSLATION
    }
  },
  created: function () {
    this.$lang.init()
    this.lang = this.$localStorage.get('language', 'en')
  }
}
