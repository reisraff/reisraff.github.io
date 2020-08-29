export default {
  install (Vue) {
    Vue.prototype.$localStorage = {
      set: function (key, value) {
        window.localStorage[key] = value
      },
      get: function (key, defaultValue) {
        return window.localStorage[key] || defaultValue
      },
      remove: function (key) {
        window.localStorage.removeItem(key)
      }
    }
  }
}
