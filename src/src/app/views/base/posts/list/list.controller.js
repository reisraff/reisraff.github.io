(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').controller(
    'PostsListController',
    function PostsListController($stateParams, PostService, PostsResolve) {
      var _self = this;

      _self.posts = PostsResolve;
      _self.currentPage = parseInt($stateParams.page);

      _self.next = function () {
        _self.currentPage--;
        PostService.list(_self.currentPage).then(function (data) {
          for (var i = 0; i < data.length; i++) {
            _self.posts.push(data[i]);
          }
        });
      };

      if (_self.posts.length < 5) {
        _self.next();
      }
    }
  );

})();
