(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config(ngProgressProvider) {
    // ngProgress Configuration
    ngProgressProvider.setColor('#9C9C9C');
    ngProgressProvider.setHeight('4px');
  }

})();
