(function() {
  'use strict';

  angular
    .module('app')
    .controller('PostsListController', PostsListController);

  /** @ngInject */
  function PostsListController(PostsResolve) {
    var _self = this;

    _self.posts = PostsResolve;
  }
})();
