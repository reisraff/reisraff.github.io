(function() {
  'use strict';

  angular
    .module('app')
    .controller('PostsViewController', PostsViewController);

  /** @ngInject */
  function PostsViewController($stateParams, $http, $showdown) {
    var _self = this;

    var page = $stateParams.page;
    var id = $stateParams.id;

    _self.post = {
      id: id
    };

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

    getPage(page).then(function (response) {
      angular.forEach(response.data, function(item) {
        if (item.id == id) {
          getPost(item.filename).then(function (response) {
            _self.post = {
              page: page,
              id: item.id,
              createdAt: new Date(item.filename.substring(0, 25)),
              content:$showdown.makeHtml(response.data)
            };
          })
        }
      });
    });
  }
})();
