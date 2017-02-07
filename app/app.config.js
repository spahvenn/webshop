'use strict';

angular.
  module('webshop').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.when('/home', {
          template: '<home></home>'
      })
      .when('/phones', {
        template: '<phones></phones>'
      })
      .otherwise({redirectTo: '/home'});
    }
  ]);
