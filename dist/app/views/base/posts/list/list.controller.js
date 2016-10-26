(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').controller(
    'PostsListController',
    function PostsListController(PostsResolve) {
      var _self = this;

      _self.posts = PostsResolve;
    }
  );

})();
