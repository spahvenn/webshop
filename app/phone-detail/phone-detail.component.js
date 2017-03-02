'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', '$scope', 'Phone', 'ShoppingCartItems',
      function PhoneDetailController($routeParams, $scope, Phone, ShoppingCartItems) {
        var self = this;
        self.phoneId = $routeParams.phoneId;

        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        var shoppingCartItems = ShoppingCartItems.getItems();
        self.itemAmount = shoppingCartItems ? shoppingCartItems.length : 0;

        $scope.$watch(function() {
          return ShoppingCartItems.getItems();
        }, function() {
          var itemData = ShoppingCartItems.getItemById(self.phoneId);
          if (itemData) {
            self.itemAmount = itemData.amount;
          } else {
            self.itemAmount = 0;
          }
        }, true);

      }
    ]
  });
