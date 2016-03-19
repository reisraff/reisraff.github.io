(function() {
  'use strict';

  angular
    .module('app')
    .run(run);

  /** @ngInject */
  function run($rootScope, ngProgress) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      ngProgress.start();
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      ngProgress.complete();
    });
  }

})();
