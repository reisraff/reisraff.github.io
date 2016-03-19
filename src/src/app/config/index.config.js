(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').config(
    function config(ngProgressProvider, $disqusProvider, $locationProvider) {
      // ngProgress Configuration
      ngProgressProvider.setColor('#9C9C9C');
      ngProgressProvider.setHeight('4px');

      // ngDisqus Configuration
      $disqusProvider.setShortname('reisraff');

      // location configuration
      $locationProvider.hashPrefix('!');
    }
  );

})();
