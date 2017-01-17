(function (angular) { 'use strict';

  angular.module('reddin')
    .component('userList', {
      templateUrl: 'user-list/user-list.html',
      controller: function UserListController($scope, $element, $attrs, GetUserDataCsv) {
        var ctrl = this;
        ctrl.users = GetUserDataCsv.parsed;

        ctrl.sortAlphaAsc = function (users) {
          ctrl.users = users.sort(function (a, b) {
            return a.localeCompare(b);
          });
        };

        ctrl.sortAlphaDesc = function (users) {
          ctrl.users = users.sort(function (a, b) {
            return a.localeCompare(b).reverse();
          });
        }
      }
    })
    .service('GetUserDataCsv', function ($http) {
      var service = this;
      service.parsed = [];

      $http.get('data/user-list.csv').then(function (response) {
        var raw = response.data;
        service.raw = raw;

        var rows = raw.split('\n');

        // take out the column titles
        rows.shift();

        rows.forEach(function (n) {

          // catch new line at the end of the file
          if (!n) {
            return false;
          }

          var cols = n.split(',');

          service.parsed.push({
            first_name: cols[0],
            last_name: cols[1],
            email: cols[2],
          });
        });
      });
    });
})(window.angular);
