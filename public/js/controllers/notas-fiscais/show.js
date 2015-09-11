angular.module('ZetaWebClient')
.controller('NotasFiscaisShowController',['NotasFiscaisService', '$routeParams', function(NotasFiscaisService,$routeParams) {
  this.item = null;
  var controller = this;
  NotasFiscaisService.get($routeParams.id, function(data){
    controller.item = data;
  });
}]);