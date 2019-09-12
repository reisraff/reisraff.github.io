export default {
  install (Vue) {
    Vue.prototype.$head = (function () {
      var _self = {}

      _self.changeMetas = function (metas) {
        for (var key in metas) {
          const descEl = document.querySelector('head meta[name="' + key + '"]')

          descEl.setAttribute('content', metas[key])
        }
      }

      _self.changeMetasProperties = function (metas) {
        for (var key in metas) {
          const descEl = document.querySelector('head meta[property="' + key + '"]')

          descEl.setAttribute('content', metas[key])
        }
      }

      _self.changeTitle = function (title) {
        const titleEl = document.querySelector('head title')
        titleEl.textContent = 'Rafael Reis - ' + title
      }

      return {
        changeMetas: _self.changeMetas,
        changeMetasProperties: _self.changeMetasProperties,
        changeTitle: _self.changeTitle
      }
    })()
  }
}
