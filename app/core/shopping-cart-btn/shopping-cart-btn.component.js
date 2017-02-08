'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('core.shoppingCartBtn').
  component('shoppingCartBtn', {
    templateUrl: 'core/shopping-cart-btn/shopping-cart-btn.template.html',
    controller: ['$routeParams', '$cookies',
      function ShoppingCartBtnController($routeParams, $cookies) {

        var self = this;
        this.phoneId = $routeParams.phoneId
        this.shoppingCartObject = $cookies.getObject('shoppingCart');

        var itemData = null;
        if (this.shoppingCartObject) {
          itemData = this.shoppingCartObject.hasOwnProperty(this.phoneId) ? this.shoppingCartObject[this.phoneId] : null;
        }

        if (!itemData) {
          this.itemAmount = 0;
        } else {
          this.itemAmount = itemData.amount;
        }

        this.addToCart = function() {
          self.itemAmount += 1;
          if (!self.shoppingCartObject) {
            self.shoppingCartObject = {};
          }
          if (!self.shoppingCartObject.hasOwnProperty(this.phoneId)) {
            self.shoppingCartObject[this.phoneId] = {};
          }
          self.shoppingCartObject[this.phoneId].phoneId = this.phoneId;
          self.shoppingCartObject[this.phoneId].amount = self.itemAmount;
          $cookies.putObject('shoppingCart', this.shoppingCartObject);
        }

      }
    ]
  });
