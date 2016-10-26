(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').service(
    'PaginationService',
    function PaginationService($q, $http) {
      var _self = this;

      _self.latestPage = function () {
        return $http.get('assets/posts/pagination/pages.json').then(function (response) {
          return response.data.latestPage;
        });
      };
    }
  );

})();
