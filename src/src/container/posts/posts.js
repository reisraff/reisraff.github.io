import mainMenu from 'component/mainMenu/mainMenu.vue'
import mainFooter from 'component/mainFooter/mainFooter.vue'
import showdown from 'showdown'
import moment from 'moment'

const axios = require('axios');

const TRANSLATIONS = {
  'en': {
    'title': 'Posts',
    'metaDescription': 'Posts wrote by Rafael Reis',
    'more': 'More'
  },
  'es': {
    'title': 'Articulos',
    'metaDescription': 'Articulos escritos por Rafael Reis',
    'more': 'Mas'
  },
  'pt': {
    'title': 'Artigos',
    'metaDescription': 'Artigos escritos por Rafael Reis',
    'more': 'Mais'
  },
}

const URL_APPEND = process.env.NODE_ENV === 'development' ? '' : '/me'

export default {
  name: 'posts',
  data: function () {
    return {
      lang: this.$route.params.lang,
      trans: TRANSLATIONS,
      posts: [],
      page: 1,
      pages: 1,
    }
  },
  components: {
    mainMenu,
    mainFooter,
  },
  mounted: function () {
    var vm = this
    vm.paginate(1)

    axios.get(URL_APPEND + '/static/pagination/paginator.json').then(function (response) {
      vm.pages = response.data.lastPage
    })
    .catch(function (error) {
      console.error(error);
    })

  },
  methods: {
    paginate: function (page) {
      var vm = this
      var converter = new showdown.Converter()

      axios.get(URL_APPEND + '/static/pagination/page_' + page + '.json').then(function (response) {
        var posts = response.data

        posts.map(function (entry) {
          var lang = vm.lang
          if (typeof entry.title[vm.lang] === 'undefined') {
            lang = 'pt'
          }

          entry['lang'] = lang
          for (var key in entry.preview) {
            entry.preview[key] = converter.makeHtml(entry.preview[key])
            entry.preview[key] = entry.preview[key].replace(/post-assets/g, '../static/post-assets')
          }

          entry['datetime'] = moment.unix(entry['timestamp']).format("DD/MMM/YYYY HH:mm")

          return entry;
        })

        vm.posts = vm.posts.concat(posts)
        vm.page = page + 1
      })
      .catch(function (error) {
        console.error(error);
      })
    }
  },
  created: function () {
    this.$head.changeTitle(TRANSLATIONS[this.$route.params.lang].title)

    this.$head.changeMetas({
      'description': TRANSLATIONS[this.$route.params.lang].metaDescription
    })
    this.$head.changeMetasProperties({
      'og:title': 'Rafael Reis - ' + TRANSLATIONS[this.$route.params.lang].title,
      'og:description': TRANSLATIONS[this.$route.params.lang].metaDescription
    })
  }
}
