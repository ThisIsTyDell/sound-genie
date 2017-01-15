angular
  .module('myApp')
  .directive('navBar', function(){
    return { 
      templateUrl: 'views/nav.html',
      controller: 'NavCtrl'
    }
  })