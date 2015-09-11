angular.module('ZetaWebClient')
.service('NotasFiscaisService', ['$http',function ($http) {
  var service = this;
  service.base = 'http://zetainfo.dyndns.info/api/v1/entities';
  service.cache = null;
  this.all = function (callback) {
    if(service.cache) {
      callback(service.cache);
    }
    $http.get(service.base + '/zw15smdl?filter[tiponotafiscal]=1&filter[situacao]=1&fields=codmodelo')
    .success(function(modelos) {
      var codmodelo = [];
      angular.forEach(modelos, function(modelo) {
          codmodelo.push(modelo.codmodelo);
      });
      $http.get(service.base + '/zw15snfs?filter[codmodelo]='+ codmodelo.join(',') +'&sort=-numeronf')
      .success(function(notasFiscais) {
        angular.forEach(notasFiscais, function(nf) {
          service.situacao(nf.nfesituacao,function(data){
            nf.nfesituacao = data;
          });
        });
        service.cache = notasFiscais;
        callback(notasFiscais);
      });
    });
  };
  this.get = function (id, callback) {
    $http.get(service.base + '/zw15snfs/' + id)
    .success(function(notaFiscal){
      service.situacao(notaFiscal.nfesituacao,function(data){
        notaFiscal.nfesituacao = data;
      });
      callback(notaFiscal);
    });
  };
  this.situacao = function(numero,callback) {
    var data = null;
    switch(numero) {
      case  0: data = {id: numero, descricao: "pendente",      style:"warning" }; break;
      case  1: data = {id: numero, descricao: "enviando",      style:"info"    }; break;
      case  2: data = {id: numero, descricao: "enviada",       style:"info"    }; break;
      case  3: data = {id: numero, descricao: "autorizada",    style:"success" }; break;
      case  4: data = {id: numero, descricao: "rejeitada",     style:"info"    }; break;
      case  5: data = {id: numero, descricao: "denegada",      style:"info"    }; break;
      case  6: data = {id: numero, descricao: "cancelar",      style:"info"    }; break;
      case  7: data = {id: numero, descricao: "cancelada",     style:"danger"  }; break;
      case  8: data = {id: numero, descricao: "inutilizar",    style:"info"    }; break;
      case  9: data = {id: numero, descricao: "inutilizada",   style:"info"    }; break;
      case 10: data = {id: numero, descricao: "cupom fiscal",  style:"info"    }; break;
      case 11: data = {id: numero, descricao: "cancelando",    style:"danger"  }; break;
      case 12: data = {id: numero, descricao: "inutilizando",  style:"info"    }; break;
      // case 13: data = {id: numero, descricao: "RPS rejeitado", style:"danger"  }; break;
      default: data = {id: numero, descricao: "indefinida",    style:"warning" };
    }
    callback(data);
  };
}]);