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

      this.$router.replace('/')
      this.$router.replace({name: this.$route.name, params: {lang: newLang}})
      this.$router.go()
    }
  }
}
