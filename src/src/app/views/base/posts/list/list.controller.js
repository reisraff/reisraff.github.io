(function() {
  'use strict';

  angular
    .module('app')
    .controller('PostsListController', PostsListController);

  /** @ngInject */
  function PostsListController($http, $showdown) {
    var _self = this;

    _self.page = 1;
    _self.posts = [];

    function getPage(page) {
      return $http.get('assets/posts/pagination/' + page + '.json').success(function(response) {
        return response;
      });
    }

    function getPost(filename) {
      return $http.get('assets/posts/post/' + filename).success(function(response) {
        return response;
      });
    }

    getPage(_self.page).then(function (response) {
      angular.forEach(response.data, function(item) {
        getPost(item.filename).then(function (response) {
          _self.posts.push({
            page: _self.page,
            id: item.id,
            createdAt: new Date(item.filename.substring(0, 25)),
            content: $showdown.makeHtml(response.data)
          });
        })
      });
    });
  }
})();
