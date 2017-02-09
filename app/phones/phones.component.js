'use strict';

angular.
  module('webshop').
  component('phones', {
    templateUrl: 'phones/phones.template.html',
    controller: ['Phone',
      function PhonesController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
