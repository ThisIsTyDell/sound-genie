angular
  .module('myApp')
  .directive('navBar', function(){
    templateUrl: 'views/nav.html',
    controller: 'NavCtrl'
  })