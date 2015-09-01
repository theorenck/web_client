angular.module('ZetaWebClient')
.filter('capitalize', function() {
  return function(input) {
    var out = input;
    if(input && input.length > 1){
      out = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    } else {
      out = input.charAt(0).toUpperCase();
    }
    return out;
  };
});