(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').controller(
    'BackToTopController',
    function BackToTopController(scroll) {
      var _self = this;

      _self.backToTop = function () {
        scroll.scrollTo(0, 0.2);
      };
    }
  );

})();
