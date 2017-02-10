'use strict';

angular.
  module('shoppingCart').
  component('shoppingCart', {
    templateUrl: 'shopping-cart/shopping-cart.template.html',
    controller: ['$cookies', 'Phone', '$q', '$http',
      function ShoppingCartController($cookies, Phone, $q, $http) {
        var self = this;
        this.shoppingCartItems = $cookies.getObject('shoppingCartItems');
        var itemIds = _.pluck(this.shoppingCartItems, 'id');

        var promises = [];
        _.each(itemIds, function(itemId) {
          promises.push($http({
            url: 'phones-data/' + itemId + '.json',
            method: 'GET',
          }));
        });

        if (promises.length === 0) {
          this.showEmptyCartMsg = true;
        }

        $q.all(promises)
        .then(function(responses) {
          var phones = [];
          _.each(responses, function(response) {
            phones.push(response.data);
          });
          _.filter(self.shoppingCartItems, function(shoppingCartItem) {
            return _.find(phones, function(phone) {
              if (phone.id === shoppingCartItem.id) {
                phone.amount = shoppingCartItem.amount;
              }
            });
          });
          self.phones = phones;
        });
      }
    ]
  });
