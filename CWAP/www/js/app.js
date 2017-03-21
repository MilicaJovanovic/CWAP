var myApp = angular.module('starter', ['ionic', 'ngStorage'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('homepage', {
    url: '/homepage',
    templateUrl: 'templates/homepage.html',
    controller: 'HomepageController'
  });

  $urlRouterProvider.otherwise('/homepage');
});