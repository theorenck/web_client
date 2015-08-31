angular.module('ZetaWebClient')
.controller('OrdensServicoIndexController', ['$http', function($http) {
  this.items = [];
  var controller = this;
  $http.get('http://zetainfo.dyndns.info/api/v1/entities/zw15ser?sort=-codservico').success(function(data){
    controller.items = data;
  });
}]);