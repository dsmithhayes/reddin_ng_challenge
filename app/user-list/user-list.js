(function (angular) { 'use strict';

  angular.module('reddin')
    .component('userList', {
      templateUrl: 'user-list/user-list.html',
      controller: function UserListController($scope, $element, $attrs, csvService) {
        var ctrl = this;

        if (csvService.data.length <= 0) {
          csvService.getData();
        }

        ctrl.users = csvService.data;

        ctrl.sortAlphaAsc = function (users) {
          ctrl.users = users.sort(function (a, b) {
            return a.email.localeCompare(b.email);
          });
        };

        ctrl.sortAlphaDesc = function (users) {
          ctrl.users = users.sort(function (a, b) {
            return a.email.localeCompare(b.email);
          }).reverse();
        };
      }
    })
})(window.angular);
