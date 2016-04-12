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
      $scope.background = 'svg-ic_open_menu';
      $scope.toggle = function() {
        $scope.isHidden = !$scope.isHidden;
        $scope.background = $scope.isHidden ? 'svg-ic_close_menu' : 'svg-ic_open_menu';
      };
    }
  };
}

angular
  .module('app')
  .run(function($templateCache) {
  $templateCache.put('navbar.template.html',
    '<header class="top-bar shadow">' +
      '<button class="menu-btn" ng-class="background" ng-click="toggle()"></button>'+
      '<h1 class="head-title">' +
        '{{title}}' +
      '</h1>' +
    '</header>'+
    '<nav ng-class="{\'hide\': !isHidden}" class="top-bar">' +
      '<ul>'+
        '<li ng-repeat="nav in navigation"><a href="{{nav.url}}" class="nav-link">{{nav.title}}</a></li>' +
      '</ul>' +
    '</nav>'+
    '<div class="darken-bg" ng-class="{\'hide\': !isHidden}"></div>');
});
