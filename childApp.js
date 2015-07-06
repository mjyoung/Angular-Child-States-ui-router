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