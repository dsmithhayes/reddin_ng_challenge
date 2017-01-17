(function (angular) { 'use strict';
  angular.module('reddin', [
    'ngRoute'
  ]).config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        template: '<user-list></use-list>'
      });

      $routeProvider.when('/details/:userId', {
        template: '<user-details></user-details>'
      });
    }])
    .service('csvService', function ($http) {
      var csv = this;
      csv.data = [];

      csv.getData = function () {
        $http.get('data/user-list.csv').then(function (response) {
          var raw = response.data;

          var rows = raw.split('\n');
          var currentIndex = 0;

          // take out the column titles
          rows.shift();

          rows.forEach(function (n) {
            // catch new line at the end of the file
            if (!n) {
              return false;
            }

            var cols = n.split(',');

            csv.data.push({
              id: currentIndex++,
              first_name: cols[0],
              last_name: cols[1],
              email: cols[2],
            });
          });
        });
      };
    });
})(window.angular);
