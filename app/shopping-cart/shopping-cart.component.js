'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('shoppingCart').
  component('shoppingCart', {
    templateUrl: 'shopping-cart/shopping-cart.template.html',
    controller: ['$cookies',
      function ShoppingCartController($cookies) {
        $cookies.getObject('shoppingCart');
        var shoppingCartObject = $cookies.get('shoppingCart');
        // TODO: listataan tuotteet kuten tutorialissa, poistonapilla lisättynä
        // TODO: tuotteet cookien kautta
        // TODO: pois sorttaustoiminto
      }
    ]
  });
