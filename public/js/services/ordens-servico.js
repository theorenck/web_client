angular.module('ZetaWebClient')
.service('OrdensServicoService', ['$http',function ($http) {
  var service = this;
  service.base = 'http://zetainfo.dyndns.info/api/v1/entities';
  service.cache = null;
  this.all = function (callback) {
    if(service.cache) {
      callback(service.cache);
    }
    $http.get(service.base + '/zw15zdes')
    .success(function(situacoes){
      $http.get(service.base + '/zw15ser?fields=codservico,aberto,cliente,cgc,total,dataentrada,usuarioinclusao,situacao1&sort=-codservico')
      .success(function(ordensServico) {
        angular.forEach(ordensServico, function(os) {
          angular.forEach(situacoes, function(situacao) {
            if(os.situacao1 == situacao.coddescgen) {
              os.situacao1 = situacao.descricao;
            }
          });
        });
        service.cache = ordensServico;
        callback(ordensServico);
      });
    });
  };
  this.get = function (numero, callback) {
    if(service.cache) {
      callback(service.cache);
    }
    $http.get(service.base + '/zw15ser/' + numero)
    .success(function(ordemServico){
      $http.get(service.base + '/zw15its?codservico=' + numero +'&sort=codseqservico&limit=0')
      .success(function(itens) {
        ordemServico.itens = itens;
        $http.get(service.base + '/zw15ecli/' + ordemServico.codcliente)
        .success(function(cliente) {
          ordemServico.itens = itens;
          ordemServico.cliente = cliente;
          callback(ordemServico);
        });
      });
    });
  };
}]);