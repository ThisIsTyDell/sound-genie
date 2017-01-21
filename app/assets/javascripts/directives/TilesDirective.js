angular
  .module('myApp')
  .directive('infoTiles', function(){
    return {
      templateUrl: 'views/tiles.html',
      controller: 'AccountCtrl'
    }
  })