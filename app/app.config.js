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
      .when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .when('/shopping-cart', {
        template: '<shopping-cart></shopping-cart>'
      })
      .otherwise({redirectTo: '/home'});
    }
  ]);
