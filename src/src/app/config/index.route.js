(function() {
  'use strict';

  /** @ngInject */
  angular.module('app').config(
    function routerConfig($stateProvider, $urlRouterProvider) {

      /** @ngInject */
      var PageResolve = function (PaginationService) {
        return PaginationService.latestPage().then(function (data) {
          return data;
        });
      };

      /** @ngInject */
      var PostResolve = function ($stateParams, PostService) {
        return PostService.get($stateParams.page, $stateParams.id).then(function (data) {
          return data;
        });
      };

      /** @ngInject */
      var PostsResolve = function ($stateParams, PostService) {
        return PostService.list($stateParams.page).then(function (data) {
          return data;
        });
      };

      var backToTop = {
        templateUrl: 'app/views/base/backToTop/backToTop.html',
        controller: 'BackToTopController',
        controllerAs: 'controller'
      };

      var states = [
        {
          stateName: 'root',
          stateData: {
            abstract: true,
            templateUrl: 'app/views/base/base.html'
          }
        },
        {
          stateName: 'root.home',
          stateData: {
            url: '/home',
            views: {
              'content': {
                templateUrl: 'app/views/base/home/home.html',
                controller: 'HomeController',
                controllerAs: 'controller',
                resolve: {
                  'PageResolve': PageResolve
                }
              },
              'back-to-top': backToTop
            }
          }
        },
        {
          stateName: 'root.post',
          stateData: {
            url: '/posts/:page/:id',
            views: {
              'content': {
                templateUrl: 'app/views/base/posts/view/view.html',
                controller: 'PostsViewController',
                controllerAs: 'controller',
                resolve: {
                  'PostResolve': PostResolve
                }
              },
              'back-to-top': backToTop
            }
          }
        },
        {
          stateName: 'root.posts',
          stateData: {
            url: '/posts/:page',
            views: {
              'content': {
                templateUrl: 'app/views/base/posts/list/list.html',
                controller: 'PostsListController',
                controllerAs: 'controller',
                resolve: {
                  'PostsResolve': PostsResolve
                }
              },
              'back-to-top': backToTop
            }
          }
        }
      ];

      angular.forEach (states, function (state) {
        $stateProvider.state(state.stateName, state.stateData);
      });

      $urlRouterProvider.otherwise('/home');
    }
  );

})();
