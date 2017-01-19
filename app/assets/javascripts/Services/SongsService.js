function SongsService($http) {
  this.getSongs = function() {
    return $http.get('/songs');
  }
}

angular
  .module('myApp')
  .service('SongsService', SongsService);