(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').service(
    'PostService',
    function PostService($q, $http, $showdown) {
      var _self = this;

      _self.list = function (page) {
        function getPage(page) {
          return $http.get('assets/posts/pagination/' + page + '.json');
        }

        function getPost(id, filename) {
          return $http.get('assets/posts/post/' + filename).then(function (response) {
            return {
              id: id,
              filename: filename,
              content: response.data
            };
          });
        }

        return getPage(page).then(function (response) {
          var promises = [], item;

          function returnPost(response) {
            return {
              page: page,
              id: response.id,
              createdAt: new Date(response.filename.substring(0, 25)),
              content: $showdown.makeHtml(response.content)
            };
          }

          for (var i = 0, c = response.data.length; i < c; i++) {
            item = response.data[i];

            promises.push(
              getPost(item.id, item.filename).then(returnPost)
            );
          }

          return $q.all(promises);
        });
      };

      _self.get = function (page, id) {
        var defarred = $q.defer();

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
            if (parseInt(item.id) === parseInt(id)) {
              getPost(item.filename).then(function (response) {
                defarred.resolve({
                  page: page,
                  id: item.id,
                  createdAt: new Date(item.filename.substring(0, 25)),
                  content:$showdown.makeHtml(response.data)
                });
              });
            }
          });
        });

        return defarred.promise;
      };
    }
  );


})();
