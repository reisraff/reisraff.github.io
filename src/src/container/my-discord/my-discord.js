import mainMenu from 'component/mainMenu/mainMenu.vue'
import mainFooter from 'component/mainFooter/mainFooter.vue'
const axios = require('axios');

const TRANSLATIONS = {
  'en': {
    'title': 'My Discord',
    'subtitle': 'This server there is the purpose of to share our knowledge with others, be welcome.',
    'discordSubtitle': 'A single byte that make all difference',
    'online': 'Online',
    'join': 'Join',
  },
  'es': {
    'title': 'Mio Discord',
    'subtitle': 'Este servidor tiene el proposito de compartir nuestros conocimientos con otras personas, bien venido.',
    'discordSubtitle': 'Un unico byte que hace la diferencia',
    'online': 'Online',
    'join': 'Entrar',
  },
  'pt': {
    'title': 'Meu Discord',
    'subtitle': 'Esse server tem como proposito compartilhar nosso conhecimento com outras pessoas, seja bem vindo.',
    'discordSubtitle': 'Um unico byte que faz toda a diferença',
    'online': 'Online',
    'join': 'Entrar',
  },
}

export default {
  name: 'my-discord',
  data: function () {
    return {
      lang: this.$route.params.lang,
      trans: TRANSLATIONS,
      discord: {
        avatar: 'https://cdn.discordapp.com/icons/639468436027867176/1c60fad6430a4e1ca40500d22879a728.png?size=128',
        title: 'Byte Off',
        online: 0
      }
    }
  },
  components: {
    mainMenu,
    mainFooter,
  },
  created: function () {
    const self = this;
    this.$head.changeTitle(TRANSLATIONS[this.$route.params.lang].title)
    let discordApi = 'https://discordapp.com/api/guilds/639468436027867176/widget.json';

    axios.get(discordApi).then(function (response) {
      let data = response.data;

      self.discord.online = data.presence_count;
    });

  }
}
