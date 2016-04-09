angular
    .module('app')
    .directive('bcNavbar', bcNavbar);

function bcNavbar () {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      navigation: '='
    },
    templateUrl: 'navbar.template.html',
    controller: function($scope) {
      $scope.isHidden = false;
      $scope.toggle = function() {
        $scope.isHidden = !$scope.isHidden;
      };
    }
  };
}

angular
  .module('app')
  .run(function($templateCache) {
  $templateCache.put('navbar.template.html',
    '<header class="top-bar shadow">' +
      '<svg ng-class="{\'hide\': !isHidden}" ng-click="toggle()" class="menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
        '<path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/>' +
        '<path d="M0 0h24v24h-24z" fill="none"/>' +
      '</svg>'+
      '<svg ng-class="{\'hide\': isHidden}" ng-click="toggle()" class="menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">'+ 
        '<path d="M0 0h24v24h-24z" fill="none"/>'+
        '<path d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"/>'+
      '</svg>'+
      '<h2 class="head-title">' +
        '{{title}}' +
      '</h2>' +
    '</header>'+
    '<nav ng-class="{\'hide\': !isHidden}" class="top-bar">' +
      '<ul>'+
        '<li ng-repeat="nav in navigation">{{nav}}</li>' +
      '</ul>' +
    '</nav>'+
    '<div class="darken-bg" ng-class="{\'hide\': !isHidden}"></div>');
});