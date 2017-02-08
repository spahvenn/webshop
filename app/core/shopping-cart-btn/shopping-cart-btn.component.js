'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('core.shoppingCartBtn').
  component('shoppingCartBtn', {
    templateUrl: 'core/shopping-cart-btn/shopping-cart-btn.template.html',
    controller: ['$routeParams', '$cookies',
      function ShoppingCartBtnController($routeParams, $cookies) {

        var self = this;
        var phoneId = $routeParams.phoneId
        var cookie = $cookies.getObject(phoneId);

        if (!cookie) {
          this.itemAmount = 0;
        } else {
          this.itemAmount = cookie.amount;
        }

        this.addToCart = function() {
          self.itemAmount += 1;
          $cookies.putObject(phoneId, {phoneId: phoneId, amount: self.itemAmount});
        }

      }
    ]
  });
