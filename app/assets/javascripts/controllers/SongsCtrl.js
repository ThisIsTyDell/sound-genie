function SongsCtrl(SongsService) {
  var ctrl = this;

  ctrl.songs = [];

  SongsService
    .getSongs()
    .then(function(res) {
      ctrl.songs = res.data
    });

}

angular
  .module('myApp')
  .controller('SongsCtrl', SongsCtrl)