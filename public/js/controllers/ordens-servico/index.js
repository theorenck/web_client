angular.module('ZetaWebClient')
.controller('OrdensServicoIndexController', ['$http', function($http) {
  this.items = [];
  var controller = this;
  $http.get('http://prod-01/api/v1/entities/zw15ser?sort=-codservico').success(function(data){
    controller.items = data;
  });
}]);