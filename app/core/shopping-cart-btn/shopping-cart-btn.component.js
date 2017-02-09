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
        this.shoppingCartItems = $cookies.getObject('shoppingCartItems');

        this.itemData = null;

        if (this.shoppingCartItems) {
          self.itemData = _.find(this.shoppingCartItems, function(item) {
            return item.id === self.phoneId;
          })
        }

        if (!this.itemData) {
          this.itemAmount = 0;
        } else {
          this.itemAmount = this.itemData.amount;
        }

        this.addToCart = function() {
          self.itemAmount += 1;
          if (!self.shoppingCartItems) {
            self.shoppingCartItems = [];
          }
          if (!self.itemData) {
            self.itemData = {};
          }

          if (_.isEmpty(self.itemData)) {
            self.itemData = {id: this.phoneId, amount: 1};
            self.shoppingCartItems.push(self.itemData);
          } else {
            self.itemData.amount += 1;
          }

          $cookies.putObject('shoppingCartItems', this.shoppingCartItems);
        }

      }
    ]
  });
