angular.module('core.modal')
  .component('modal', {
    templateUrl: 'core/modal/modal.template.html',
    controller: ['uibModal',
      function ($uibModal) {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          //size: size,
          //appendTo: parentElem,
          resolve: {
            /*items: function () {
             return $ctrl.items;*/
          }

        });



      }
    ]
  })