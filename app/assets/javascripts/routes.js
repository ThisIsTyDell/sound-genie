angular
  .module('myApp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'views/new_profile.html',
        controller: 'AccountCtrl'
      })
      .state('songs', {
        url: '/songs',
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'
      })
      //.state('songs.show', {
      //  url: '/:id',
      //  templateUrl: 'views/song.html',
      //  controller: 'SongsCtrl',
      //  resolve: { 
      //    song:  function ($stateParams, SongsService) {
      //      return SongsService.getSong($stateParams.id);
      //    }
      //  }
      //})
      .state('settings', {
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'AccountCtrl'
      })
      .state('settings.profile', {
        url: '/profile',
        templateUrl: 'views/settings/profile.html',
        controller: 'AccountCtrl'
      })
      .state('settings.deactivate', {
        url: '/deactivate',
        templateUrl: 'views/settings/deleteProfile.html',
        controller: 'AccountCtrl'
      })

    $urlRouterProvider.otherwise('/home')
  })