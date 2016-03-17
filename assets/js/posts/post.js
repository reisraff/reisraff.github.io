var angularapp = angular.module('myApp', ['ng-showdown', 'ngSanitize']);

angularapp.controller('MainCtrl', function ($location, $http, $showdown) {
  var _self = this;

  _self.post = {};

  var page = $location.search().page;
  var id = $location.search().id;

  function getPage(page) {
    return $http.get('../../../posts/pagination/' + page + '.json').success(function(response) {
      return response;
    });
  }

  function getPost(filename) {
    return $http.get('../../../posts/post/' + filename).success(function(response) {
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
});
