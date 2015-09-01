angular.module('ZetaWebClient')
.filter('humanize', function(capitalizeFilter) {
  return function(input, symbol, size) {
    var out = "";
    var tokens = input.split(' ');
    for (var i = 0; i < tokens.length; i++) {
      if(i > 0 && tokens[i].length <= 2) {
        tokens[i] = tokens[i].toLowerCase();
      } else {
        tokens[i] = capitalizeFilter(tokens[i]);;
      }
    }
    out = tokens.join(' ');
    return out;
  };
});
