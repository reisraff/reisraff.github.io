const TRANSLATION = {
  'en': {
    'title': 'You\'re almost there, just read and go',
    'subtitle': 'Attackers are always trying to steal your information (for example, passwords, messages or credit cards)! Welcome to my page <strong>https://reisraff.github.io/</strong>. NET::ERR_IT_IS_NOT_AN_ERROR',
    'checkbox': 'Automatically report details of possible security incidents to Everyone.',
    'showLess': 'SHOW LESS',
    'advanced': 'ADVANCED',
    'reload': 'RELOAD',
    'proceed': 'Do not let things fool you, click below to proceed to <strong>https://reisraff.github.io</strong>;',
    'go': 'sudo go --to https://reisraff.github.io/'
  },
  'es': {
    'title': 'Está case alla, solamente leya y vá',
    'subtitle': 'Hackers estan siempre intentando robar sus informaciones (por ejemplo, contraseña, mesages o tarjeta de credito)! Bien venido a mi pagina <strong>https://reisraff.github.io/</strong>. NET::ERR_IT_IS_NOT_AN_ERROR',
    'checkbox': 'Automaticamente reportar detalles de posibles fallas de seguridad para todos.',
    'showLess': 'MOSTRAR MENOS',
    'advanced': 'AVANZADO',
    'reload': 'RECARGAR',
    'proceed': 'No deje las cosas enganarte, clique abajo para seguir para <strong>https://reisraff.github.io</strong>;',
    'go': 'sudo go --to https://reisraff.github.io/'
  },
  'pt': {
    'title': 'Está quase lá, leia e vá',
    'subtitle': 'Hackers estão sempre tentando roubar suas informações (por exemplo, senhas, mensagens ou cartões de crédito)! Bem vindo a minha pagina <strong>https://reisraff.github.io/</strong>. NET::ERR_IT_IS_NOT_AN_ERROR',
    'checkbox': 'Automaticamente reportar detalhes de possiveis falhas de segurança para todos.',
    'showLess': 'MOSTRAR MENOS',
    'advanced': 'AVANÇADO',
    'reload': 'RECARREGAR',
    'proceed': 'Não deixe as coisas te enganarem, clique abaixo para ir para <strong>https://reisraff.github.io</strong>;',
    'go': 'sudo go --to https://reisraff.github.io/'
  },
}

export default {
  name: 'home',
  data: function () {
    return {
      showAdvanced: false,
      trans: TRANSLATION,
      lang: 'en',
    }
  },
  created: function () {
    this.$lang.init()
    this.lang = this.$localStorage.get('language', 'en')

    let firstOpen = parseInt(this.$localStorage.get('firstOpen', '1'))

    if (!firstOpen) {
      this.$router.replace({ name: 'home', params: { 'lang': this.lang }});
    }
  },
  methods: {
    reload: function () {
      window.location.reload();
    },
    goHome: function () {
      this.$localStorage.set('firstOpen', '0')
      this.$router.replace({ name: 'home', params: { 'lang': this.lang }});
    }
  }
}
