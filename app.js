var mainApp = angular.module('mainApp', [
  'ui.router',
  'mainApp.childApp'
]);

mainApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: '/main-content.html',
      controller: function($scope) {
        console.log('MainCtrl loaded');
      }
    });
});