function SongsCtrl(SongsService) {
  var ctrl = this;

  ctrl.songs = [];
  ctrl.toggle = function() {
    ctrl.toggleUpload = !ctrl.toggleUpload
  };

  SongsService
    .getSongs()
    .then(function(res) {
      ctrl.songs = res.data
    });

}

angular
  .module('myApp')
  .controller('SongsCtrl', SongsCtrl)