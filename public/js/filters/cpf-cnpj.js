angular.module('ZetaWebClient')
.filter('cpfcnpj', function() {
  return function(input) {
    var out = input;
    if(input.length == 11) {
      out=out.replace(/\D/g,"");
      out=out.replace(/(\d{3})(\d)/,"$1.$2");
      out=out.replace(/(\d{3})(\d)/,"$1.$2");
      out=out.replace(/(\d{3})(\d)/,"$1-$2");
    } else if(input.length == 14) {
      out=out.replace(/\D/g,"");
      out=out.replace(/(\d{2})(\d)/,"$1.$2");
      out=out.replace(/(\d{3})(\d)/,"$1.$2");
      out=out.replace(/(\d{3})(\d)/,"$1/$2");
      out=out.replace(/(\d{4})(\d)/,"$1-$2");
    }
    return out;
  };
});
