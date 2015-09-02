angular.module('ZetaWebClient')
.controller('OrdensServicoShowController',['OrdensServicoService', '$routeParams', function(OrdensServicoService,$routeParams) {
  this.os = null;
  var controller = this;
  OrdensServicoService.get($routeParams.id, function(data){
    controller.os = data;
  });
}]);