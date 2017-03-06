'use strict';

angular.module('core.checkoutBtn')
  .component('checkoutBtn', {
    templateUrl: 'core/checkout-btn/checkout-btn.template.html',
    controller: ['$uibModal',
      function($uibModal) {
        var $ctrl = this;

        $ctrl.open = function() {
          var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'core/checkout-btn/checkout-btn-modal.template.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl'
          });
        }

      }
    ]
  });

angular.module('core.checkoutBtn').controller('ModalInstanceCtrl', function($uibModalInstance) {
  var $ctrl = this;

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

});