'use strict';

angular
.module('core.shoppingCartItemAmount')
.component('shoppingCartItemAmount', {
  bindings: {
    phoneId: '>'
  },
  template: '{ $scope.cartItemAmount }',
  controller: ['$scope', 'ShoppingCartItems',
    function ShoppingCartItemAmount($scope, ShoppingCartItems) {
      var self = this;
      var shoppingCartItems = ShoppingCartItems.getItems() ? ShoppingCartItems.getItems().length : 0;
      var itemData = ShoppingCartItemAmount.getItemById(self.phoneId);
      $scope.cartItemAmount = itemData;

      $scope.$watch(function() {
        return ShoppingCartItems.getItems();
      }, function(newShoppingCartItems) {
        itemData = ShoppingCartItemAmount.getItemById(self.phoneId);
        if (itemData) {
          $scope.itemAmount = itemData.amount;
        } else {
          $scope.itemAmount = 0;
        }
      }, true);
    }
  ]
});
