angular
  .module('app')
  .service('diffService', function($http){
    let baseUri = 'http://swapi.co/api/';

    this.getData = () => {
      return $http({
        method: 'GET',
        url: `${baseUri}planets/`
      }).then(response => {
        console.log(response);
        return response.data.results;
      })
    }
  })
