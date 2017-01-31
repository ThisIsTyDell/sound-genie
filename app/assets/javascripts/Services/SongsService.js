function SongsService($http) {
  this.getSongs = function() {
    return $http.get('songs');
  }

  this.getSong = function(id) {
    return $http.get('songs/' + id)
  }

  this.createSong = function(ctrl) {
    return $http.post('songs', { data: ctrl });
  }
}

angular
  .module('myApp')
  .service('SongsService', SongsService);