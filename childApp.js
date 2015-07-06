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

    .state('child.anotherChild', {
      url: 'anotherChild',
      template: 'this is another child!',
      controller: function($scope) {
        console.log('AnotherChildAppCtrl loaded');
      }
    })
});