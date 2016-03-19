(function() {
  'use strict';

  angular
    .module('app')
    .controller('BackToTopController', BackToTopController);

  /** @ngInject */
  function BackToTopController(scroll) {
    var _self = this;

    _self.backToTop = function () {
      scroll.scrollTo(0, 0.2);
    };
  }
})();
