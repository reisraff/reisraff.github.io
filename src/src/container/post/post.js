import mainMenu from 'component/mainMenu/mainMenu.vue'
import mainFooter from 'component/mainFooter/mainFooter.vue'
import showdown from 'showdown'

const axios = require('axios');

const TRANSLATIONS = {
  'en': {
  },
  'es': {
  },
  'pt': {
  },
}

const URL_APPEND = process.ENV === 'development' ? '' : '/me'

export default {
  name: 'post',
  data: function () {
    return {
      lang: this.$route.params.lang,
      trans: TRANSLATIONS,
      post: {
        title: '',
        body: '',
        timestamp: ''
      },
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

    axios.get(URL_APPEND + '/static/posts/' + this.lang + '/' + postId + '.md').then(function (response) {
      var lines = response.data.split('\n')

      vm.post.title = lines[0].split('# ')[1]
      lines.shift()
      vm.post.body = converter.makeHtml(lines.join('\n'))
      vm.post.body = vm.post.body.replace(/post-assets/g, '../../static/post-assets')
      vm.post.timestamp = postId
    })
    .catch(function (error) {
      console.error(error);

      if (/404/.test(error)) {
        vm.$router.replace({name: vm.$route.name, params: {lang:'pt', postId: vm.$route.params.postId}})
        vm.$router.go()
      }
    })
  },
}
