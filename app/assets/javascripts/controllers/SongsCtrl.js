function SongsCtrl($scope) {
  $scope.test = "yo this is a test"

}

angular
  .module('myApp')
  .controller('SongsCtrl', SongsCtrl)