var angularapp = angular.module('myApp', ['ng-showdown', 'ngSanitize']);

angularapp.controller('MainCtrl', function ($http, $showdown) {
  var _self = this;

  _self.posts = [];

  var lastPage = 1;

  function getPage(lastPage) {
    return $http.get('../../../posts/pagination/' + lastPage + '.json').success(function(response) {
      return response;
    });
  }

  function getPost(filename) {
    return $http.get('../../../posts/post/' + filename).success(function(response) {
      return response;
    });
  }

  getPage(lastPage).then(function (response) {
    angular.forEach(response.data, function(item) {
      getPost(item.filename).then(function (response) {
        _self.posts.push({
          page: lastPage,
          id: item.id,
          createdAt: new Date(item.filename.substring(0, 25)),
          content:$showdown.makeHtml(response.data)
        });
      })
    });
  });
});
