import mainMenu from 'component/mainMenu/mainMenu.vue'
const postscribe = require('postscribe');

export default {
  name: 'home',
  data: function () {
    return {
      showAdvanced: false
    }
  },
  components: {
    mainMenu
  },
  mounted : function () {
    var el = document.getElementById('badge');

    postscribe(el, '<\script src="https://www.hackthebox.eu/badge/79586"></\script>', {
      error : function (e) {
        console.error(e);
      }
    });
  },
  methods: {
    reload: function () {
      window.location.reload();
    }
  }
}
