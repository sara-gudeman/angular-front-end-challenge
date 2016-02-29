angular
    .module('app', ['ngRoute', 'ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl:'app/main.template.html',
          controller:'MainController',
          resolve: {
            data: ['dataService', function (dataService) {
              return dataService.getData();
            }]
          }
        })
      }]);