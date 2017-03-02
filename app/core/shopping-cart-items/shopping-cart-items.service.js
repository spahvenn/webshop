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

    return self;
}]);
