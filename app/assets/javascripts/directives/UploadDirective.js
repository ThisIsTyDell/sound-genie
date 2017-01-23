angular
  .module('myApp')
  .directive('upload', function(){
    return { 
      templateUrl: 'views/upload.html',
      controller: 'SongsCtrl'
    }
  })