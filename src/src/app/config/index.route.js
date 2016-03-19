(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

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
              controllerAs: 'controller'
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
              controllerAs: 'controller'
            },
            'back-to-top': backToTop
          }
        }
      },
      {
        stateName: 'root.posts',
        stateData: {
          url: '/posts',
          views: {
            'content': {
              templateUrl: 'app/views/base/posts/list/list.html',
              controller: 'PostsListController',
              controllerAs: 'controller'
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

})();
