'use strict';

angular.
  module('webshop').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.when('/home', {
          template: '<home></home>'
      })
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .otherwise({redirectTo: '/home'});
    }
  ]);
