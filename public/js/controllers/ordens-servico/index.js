angular.module('ZetaWebClient')
.controller('OrdensServicoIndexController', ['OrdensServicoService', function(OrdensServicoService) {
  this.items = [];
  var controller = this;
  OrdensServicoService.all(function(data){
    controller.items = data;
  });
}]);