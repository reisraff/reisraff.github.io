export default {
  install (Vue) {
    Vue.prototype.$lang = (function () {
      var _self = {
        set: function (key, value) {
          window.localStorage[key] = value
        },
        get: function (key, defaultValue) {
          return window.localStorage[key] || defaultValue
        }
      }

      _self.init = function () {
        if (_self.get('language', null) === null) {
          var language = window.navigator.userLanguage || window.navigator.language || 'en'
          language = language.substring(0, 2)
          _self.set('language', language)
        }
      }

      return {
        init: _self.init
      }
    })()
  }
}
