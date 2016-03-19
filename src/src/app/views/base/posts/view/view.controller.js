(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').controller(
    'PostsViewController',
    function PostsViewController($state, PaginationService, PostResolve) {
      var _self = this;

      _self.post = PostResolve;

      // @todo, when exists $state.previous go to there
      _self.backToPosts = function () {
        PaginationService.latestPage().then(function (data) {
          $state.go('root.posts', {page: data});
        });
      };
    }
  );

})();
