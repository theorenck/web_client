angular.module('ZetaWebClient')
.filter('cdate', function() {
  return function(input) {
    return moment("2000-01-01").days(input - 72687);
  };
});
