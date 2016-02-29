angular
    .module('app')
    .controller('MainController', MainController);

MainController.$inject = ['$scope', '$http' ,'dataService', 'data'];

function MainController ($scope, $http, dataService, data) {
  $scope.header = 'My books';

  $scope.newBook = false;
  $scope.bookForm = false;

  var books = data.books;
  var articles = data.articles;
  var dataArr = books.concat(articles);

  $scope.navOptions = dataArr.map(function (entry) {
    return entry.title;
  });

  $scope.books = books;
  $scope.articles = articles;

  $scope.welcome = {
    greeting: 'Welcome Back!',
    message: 'It\'s been awhile.',
    followup: 'Read any new books lately?'
  };


  $scope.newBook = {
    title: '',
    author: '',
    img: 'assets/images/sidebooks.png'
  }

  $scope.reset = function () {
    $scope.newBook.title = '';
    $scope.newBook.author = '';
  }


  $scope.addBook = function(book) {
    var newBookCopy = angular.copy(book);
    if (!bookInCollection(newBookCopy, $scope.books)) {
      $scope.books.push(newBookCopy);
    }
    $scope.reset();
  };

  function bookInCollection (book, collection) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].title === book.title) {
        return true;
      }
    }

    return false;
  };

}