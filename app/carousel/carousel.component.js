angular.module('webshop')
  .component('carousel', {
    templateUrl: 'carousel/carousel.template.html',
    controller: ['$scope',
      function CarouselController($scope) {
        $scope.interval = 4000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.slides = [];

        $scope.slides.push({
          image: 'img/phones/droid-2-global-by-motorola.0.jpg',
          id: 0,
          text: '',
          url: '#!/phones/droid-2-global-by-motorola'
        });

        $scope.slides.push({
          image: 'img/phones/motorola-atrix-4g.0.jpg',
          id: 1,
          text: '',
          url: '#!/phones/motorola-atrix-4g'
        });

        $scope.slides.push({
          image: 'img/phones/nexus-s.0.jpg',
          id: 2,
          text: '',
          url: '#!/phones/nexus-s'
        });

      }
    ]
  })
