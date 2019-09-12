import mainMenu from 'component/mainMenu/mainMenu.vue'
import mainFooter from 'component/mainFooter/mainFooter.vue'
import showdown from 'showdown'

const axios = require('axios');

const TRANSLATIONS = {
  'en': {
    'more': 'More'
  },
  'es': {
    'more': 'Mas'
  },
  'pt': {
    'more': 'Mais'
  },
}

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

    axios.get('/static/pagination/paginator.json').then(function (response) {
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

      axios.get('/static/pagination/page_' + page + '.json').then(function (response) {
        var posts = response.data

        posts.map(function (entry) {
          var lang = vm.lang
          if (typeof entry.title[vm.lang] === 'undefined') {
            lang = 'pt'
          }

          entry['lang'] = lang
          for (var key in entry.preview) {
            entry.preview[key] = converter.makeHtml(entry.preview[key])
          }

          return entry;
        })

        vm.posts = vm.posts.concat(posts)
        vm.page = page + 1
      })
      .catch(function (error) {
        console.error(error);
      })
    }
  }
}
