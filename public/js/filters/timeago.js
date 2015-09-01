angular.module('ZetaWebClient')
.filter('timeago', function() {
  return function(input) {
    return input.fromNow();
  };
});