'use strict';

angular
.module('core.shoppingCartAddRemoveBtn')
.component('shoppingCartAddRemoveBtn', {
  templateUrl: 'core/shopping-cart-add-remove-btn/shopping-cart-add-remove-btn.template.html',
  bindings: {
    btnType: '@',
    phoneId: '@'
  },
  controller: ['$cookies', 'ShoppingCartItems',
  function ShoppingCartAddRemoveBtnController($cookies, ShoppingCartItems) {

    var self = this;

    // Functions

    this.changeItemCartAmount = function() {
      if (self.btnType === 'remove') {
        self.removeFromCart(this.phoneId);
      } else if (self.btnType === 'add') {
        self.addToCart(self.phoneId);
      }
    }

    this.addToCart = function() {
      self.shoppingCartItems = $cookies.getObject('shoppingCartItems');

      if (this.shoppingCartItems) {
        self.itemData = _.find(this.shoppingCartItems, function(item) {
          return item.id === self.phoneId;
        })
      }

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
      ShoppingCartItems.setItems(this.shoppingCartItems);
    }

    this.removeFromCart = function() {

    }

  }
]
});
