var mainApp = angular.module('mainApp', [
  'ui.router',
  'mainApp.childApp'
]);

mainApp.config(function($stateProvider, $urlRouterProvider) {

  // $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: '/home-content.html',
      controller: function($scope) {
        console.log('HomeCtrl loaded');
      }
    });
});


var childApp = angular.module('mainApp.childApp', []);

childApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('child', {
      url: 'child',
      templateUrl: 'child.html',
      controller: function($scope) {
        console.log('ChildAppCtrl loaded');
      }
    })
});