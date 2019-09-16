const TRANSLATIONS = {
  'en' : {
  },
  'es' : {
  },
  'pt' : {
  }
}

export default {
  name: 'mainFooter',
  data: function () {
    return {
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
