'use strict';

angular.module('webshop')
  .component('navigation', {
    templateUrl: 'navigation/navigation.template.html',
    controller: ['$scope', '$cookies', 'ShoppingCartItems',
      function NavigationController($scope, $cookies, ShoppingCartItems) {

        $scope.isNavCollapsed = true;
        $scope.cartItemAmount = ShoppingCartItems.getItems().length;

        $scope.$watch(function() {
          return ShoppingCartItems.getItems();
        }, function(newShoppingCartItems) {
          var itemAmount = 0;
          _.each(newShoppingCartItems, function(newShoppingCartItem) {
            itemAmount += newShoppingCartItem.amount;
          });
          $scope.cartItemAmount = itemAmount;
        });

      }
    ]
  });
