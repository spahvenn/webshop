'use strict';

angular.module('shoppingCart').component('shoppingCart', {
  templateUrl: 'shopping-cart/shopping-cart.template.html',
  controller: ['$cookies', 'Phone', '$q', '$http', '$scope', 'ShoppingCartItems',
    function ShoppingCartController($cookies, Phone, $q, $http, $scope, ShoppingCartItems) {

      var ctrl = this;

      ctrl.$onInit = function () {

        ctrl.shoppingCartItems = $cookies.getObject('shoppingCartItems');
        var itemIds = _.pluck(this.shoppingCartItems, 'id');

        var promises = [];
        _.each(itemIds, function (itemId) {
          promises.push($http({
            url: 'phones-data/' + itemId + '.json',
            method: 'GET'
          }));
        });

        $q.all(promises)
          .then(function (responses) {
            var phones = [];
            _.each(responses, function (response) {
              phones.push(response.data);
            });
            _.filter(ctrl.shoppingCartItems, function (shoppingCartItem) {
              return _.find(phones, function (phone) {
                if (phone.id === shoppingCartItem.id) {
                  phone.amount = shoppingCartItem.amount;
                }
              });
            });
            ctrl.phones = phones;
          });

        // Update ctrl.phones contents (items and amounts)
        $scope.$watch(function () {
          return ShoppingCartItems.getItems();
        }, function (newShoppingCartItems) {
          var newPhones = [];
          _.find(ctrl.phones, function(phone) {
            _.find(newShoppingCartItems, function(shoppingCartItem) {
              if (phone.id === shoppingCartItem.id) {
                phone.amount = shoppingCartItem.amount;
                newPhones.push(phone);
              }
            });
          });
          ctrl.phones = newPhones;
        }, true);

      }


    }
  ]
});
