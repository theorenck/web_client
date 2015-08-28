angular.module('ZetaWebClient',['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/ordensservico', {
        templateUrl : 'templates/pages/ordensservico/index.html',
        controller: ['$http', function($http) {
          this.ordensServico = [];
          var controller = this;
          $http.get('http://prod-01/api/v1/entities/zw15ser?sort=-codservico').success(function(data){
            controller.ordensServico = data;
          });
        }],
        controllerAs: 'osIdxCtrl'
      })
      .when('/notasfiscais', {
        templateUrl : 'templates/pages/notasfiscais/index.html'
      })
      .when('/notasfiscais/new', {
        templateUrl : 'templates/pages/notasfiscais/new.html'
      })
      .otherwise({
        redirectTo: '/notasfiscais'
      });
  })

  .controller('OrdensServicoController')