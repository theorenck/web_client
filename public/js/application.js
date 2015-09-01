moment.locale('pt-BR');

angular.module('ZetaWebClient',['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/ordens-servico', {
    templateUrl : 'templates/pages/ordens-servico/index.html',
    controller: 'OrdensServicoIndexController',
    controllerAs: 'ctrl'
  })
  .when('/notas-fiscais', {
    templateUrl : 'templates/pages/notas-fiscais/index.html'
  })
  .when('/notas-fiscais/new', {
    templateUrl : 'templates/pages/notas-fiscais/new.html'
  })
  .otherwise({
    redirectTo: '/notas-fiscais'
  });
});