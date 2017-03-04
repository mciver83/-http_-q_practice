angular
  .module('app')
  .service('mainService', function($http, $q) {
    var baseUri = 'http://swapi.co/api/';

    this.getData = function() {
      let defer = $q.defer();
      let people;
      let homeworld;
      $http({
        method: 'GET',
        url: baseUri + 'people/'
      }).then(response => {
        people = response.data.results;
        let person = people[0];
        return person;
      }, error => {
        console.error(error);
        defer.reject(error);
      }).then(response => {
        $http({
          method: 'GET',
          url: response.homeworld
        }).then(response => {
          homeworld = response.data
          let responseObj = {
            people: people,
            homeworld: homeworld
          }
          defer.resolve(responseObj);
        })
      });

      return defer.promise;
    }
  })
