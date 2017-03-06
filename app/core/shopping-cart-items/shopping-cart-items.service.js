'use strict';

angular.module('core.shoppingCartItems')
  .factory('ShoppingCartItems', ['$cookies', function ($cookies) {

    var self = {};
    self.items = [];

    // Initialize
    self.items = $cookies.getObject('shoppingCartItems');

    self.setItems = function(items) {
      self.items = items;
    };
    
    self.getItems = function() {
      return self.items;
    };

    self.getItemById = function(itemId) {
      var item = _.find(self.items, function(item) {
        return item.id === itemId;
      });
      return item;
    };

    self.addToCart = function(itemId) {
      // TODO: katso miten items pyöritellään, tuleeko turhia päivityksiä
      self.shoppingCartItems = self.items;

      if (self.shoppingCartItems) {
        self.itemData = _.find(self.shoppingCartItems, function(item) {
          return item.id === itemId;
        })
      }

      if (!self.shoppingCartItems) {
        self.shoppingCartItems = [];
      }

      if (!self.itemData) {
        self.itemData = {};
      }

      if (_.isEmpty(self.itemData)) {
        self.itemData = {id: itemId, amount: 1};
        self.shoppingCartItems.push(self.itemData);
      } else {
        self.itemData.amount += 1;
      }

      $cookies.putObject('shoppingCartItems', self.shoppingCartItems);
      self.setItems(this.shoppingCartItems);
    };

    self.reduceFromCart = function(itemId) {
      var itemData = _.find(self.items, function(item) {
        return item.id === itemId;
      });

      var newItems;
      if (itemData.amount === 1) {
        newItems = _.filter(self.items, function(item) {
          return item.id !== itemId;
        });
      } else {
        itemData.amount -= 1;
        newItems = self.items;
      }

      self.items = newItems;
      $cookies.putObject('shoppingCartItems', newItems);
    }

    return self;
}]);
