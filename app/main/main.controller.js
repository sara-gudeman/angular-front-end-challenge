angular
    .module('app')
    .controller('MainController', MainController);

MainController.$inject = ['$scope', '$http' ,'dataService', 'data', 'bookService'];

function MainController ($scope, $http, dataService, data, bookService) {
  $scope.header = 'My books';

  $scope.addNewBook = true;
  $scope.bookForm = false;

  var books = data.books;
  var articles = data.articles;
  var dataArr = books.concat(articles);

  $scope.navOptions = dataArr.map(function (entry) {
    return {title: entry.title, url: entry.url};
  });

  $scope.books = books;
  $scope.articles = articles;

  $scope.welcome = {
    greeting: 'Welcome Back!',
    message: 'It\'s been awhile.',
    followup: 'Read any new books lately?',
    links: [{
      text: 'No',
      url: '#',
    },
    {
      text: 'Yes',
      url: '#'
    }]
  };
  
  $scope.newBook = {
    title: '',
    author: '',
    img: 'assets/images/sidebooks.png'
  }

  $scope.updateBooks = function (newBook) {
    var collection = $scope.books;
    bookService.addBook(newBook, collection);

    $scope.reset();
  };

  $scope.reset = function () {
    $scope.newBook.title = '';
    $scope.newBook.author = '';
  }


}