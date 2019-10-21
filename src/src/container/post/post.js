import mainMenu from 'component/mainMenu/mainMenu.vue'
import mainFooter from 'component/mainFooter/mainFooter.vue'
import showdown from 'showdown'
import moment from 'moment'

const axios = require('axios');

const TRANSLATIONS = {
  'en': {
  },
  'es': {
  },
  'pt': {
  },
}

const URL_APPEND = process.env.NODE_ENV === 'development' ? '' : '/me'

export default {
  name: 'post',
  data: function () {
    return {
      lang: this.$route.params.lang,
      trans: TRANSLATIONS,
      post: {
        id: '',
        title: '',
        body: '',
        timestamp: ''
      },
      url: window.location.href
    }
  },
  components: {
    mainMenu,
    mainFooter,
  },
  mounted: function () {
    var vm = this
    var converter = new showdown.Converter()

    var postId = this.$route.params.postId.split('-')[0]
    vm.post.id = postId

    axios.get(URL_APPEND + '/static/posts/' + this.lang + '/' + postId + '.md').then(function (response) {
      var lines = response.data.split('\n')

      vm.post.title = lines[0].split('# ')[1]
      vm.$head.changeTitle(vm.post.title)

      lines.shift()
      vm.post.body = converter.makeHtml(lines.join('\n'))
      vm.post.body = vm.post.body.replace(/post-assets/g, '../../static/post-assets')
      vm.post.timestamp = postId
      vm.post.datetime = moment.unix(vm.post.timestamp).format("DD/MMM/YYYY HH:mm")

      lines = lines.filter(function (e) {
        return e !== ''
      })

      vm.$head.changeMetas({
        'description': lines[0] + '\n\n' + lines[1]
      })
      vm.$head.changeMetasProperties({
        'og:title': 'Rafael Reis - ' + vm.post.title,
        'og:description': lines[0] + '\n\n' + lines[1]
      })
    })
    .catch(function (error) {
      console.error(error);

      if (/404/.test(error)) {
        vm.$router.replace({name: vm.$route.name, params: {lang:'pt', postId: vm.$route.params.postId}})
        vm.$router.go()
      }
    })
  }
}
