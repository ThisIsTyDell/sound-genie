function SongsCtrl(SongsService) {
  var ctrl = this;

  ctrl.songs = [];
  //ctrl.song = [];

  ctrl.toggle = function() {
    ctrl.toggleUpload = !ctrl.toggleUpload
  };

  SongsService
    .getSongs()
    .then(function(res) {
      ctrl.songs = res.data
    });

  ctrl.submit = function() {
    SongsService
      .createSong(ctrl)
  }

}

angular
  .module('myApp')
  .controller('SongsCtrl', SongsCtrl)