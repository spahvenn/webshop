'use strict';

angular.module('core.shoppingCartItems')
  .factory('ShoppingCartItems', ['$cookies', function ($cookies) {

    var service = {};
    service.items = [];

    // Initialize
    service.items = $cookies.getObject('shoppingCartItems');

    service.setItems = function(items) {
      service.items = items;
    };
    
    service.getItems = function() {
      return service.items;
    }

    return service;
}]);
