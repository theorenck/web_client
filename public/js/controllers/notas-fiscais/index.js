angular.module('ZetaWebClient')
.controller('NotasFiscaisIndexController', ['NotasFiscaisService', function(NotasFiscaisService) {
  this.items = [];
  var controller = this;
  NotasFiscaisService.all(function(data){
    controller.items = data;
  });
}]);