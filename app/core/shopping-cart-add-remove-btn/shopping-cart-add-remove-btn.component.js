'use strict';

angular
.module('core.shoppingCartAddRemoveBtn')
.component('shoppingCartAddRemoveBtn', {
  templateUrl: 'core/shopping-cart-add-remove-btn/shopping-cart-add-remove-btn.template.html',
  bindings: {
    btnType: '@',
    phoneId: '@',
    text: '@'
  },
  controller: ['$cookies', 'ShoppingCartItems',
  function ShoppingCartAddRemoveBtnController($cookies, ShoppingCartItems) {

    var ctrl = this;

    // Functions

    ctrl.changeItemCartAmount = function() {
      if (ctrl.btnType === 'remove') {
        ShoppingCartItems.reduceFromCart(ctrl.phoneId);
      } else if (ctrl.btnType === 'add') {
        ShoppingCartItems.addToCart(ctrl.phoneId);
      }
    };

  }
]
});