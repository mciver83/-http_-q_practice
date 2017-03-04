angular
  .module('app')
  .controller('mainCtrl', function($scope, mainService, diffService) {
    $scope.getPeople = function() {
      mainService.getData().then(response => {
        $scope.people = response.people;
        $scope.homeworld = response.homeworld;
      });
    }

    $scope.getPlanets = function() {
      diffService.getData().then(response => {
        $scope.planets = response;
      })
    }
  })
