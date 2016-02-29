angular
  .module('app')
  .service('bookService', bookService);

function bookService () {

  this.addBook = function(book, collection) {
    var newBookCopy = angular.copy(book);
    if (!bookInCollection(newBookCopy, collection)) {
      collection.push(newBookCopy);
    }
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