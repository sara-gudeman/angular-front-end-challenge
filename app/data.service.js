angular
    .module('app')
    .service('dataService', dataService);

dataService.$inject = ['$http'];

function dataService ($http) {
  var path = 'data.json';
  var data = $http.get(path).then(function(response) {
    return response.data;
  });

  this.getData = function () {
    return data;
  };
  
}
