angular
	.module('app')
	.directive('bcCard', bcCard);

function bcCard () {
	return {
		restrict: 'E',
		templateUrl: 'card.template.html',
		transclude: true,
		scope: {
			title: '@',
			links: '='
		},
		controller: BcCardController
	};
}

BcCardController.$inject = ['$scope'];
function BcCardController ($scope) {}

angular
  .module('app')
  .run(function($templateCache) {
  $templateCache.put('card.template.html',
    '<div class="card shadow">' +
	  	'<div class="card-body">' +
	  	  '<h1 class="welcome">{{title}}</h1>' +
	  	  '<span class="welcome-body" ng-transclude></span>' +
	  	'</div>' +
	  	'<div class="card-footer">' +
	  		'<a href={{links[0].url}} class="left-text">{{links[0].text}}</a>' +
	  		'<a href={{links[1].url}} class="right-text">{{links[1].text}}</a>' +
	  	  '<p ng-click="addNewBook = false" class="left-text">No</p>' +
	  	  '<p ng-click="bookForm = true" class="right-text">Yes</p>' +
	  	'</div>' +
    '</div>');
});