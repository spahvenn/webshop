'use strict';

angular.module('webshop')
  .component('navigation', {
    templateUrl: 'navigation/navigation.template.html',
    controller: ['$scope',
      function NavigationController($scope) {
        $scope.isNavCollapsed = true;
      }
    ]
  });
