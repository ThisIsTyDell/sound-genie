angular
  .module('myApp')
  .directive('availableCredits', function(){
    return {
      templateUrl: 'views/credits.html',
      controller: 'AccountCtrl'
    }
  })