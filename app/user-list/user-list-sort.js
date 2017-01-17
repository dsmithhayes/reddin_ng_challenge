(function (angular) { 'user strict';

  angular.module('reddin')
    .component('userListSort', {
      templateUrl: 'user-list/user-list-sort.html',
      controller: function UserListSortController($scope) {
        var ctrl = this;

        ctrl.deleteUser = function (user) {
          var index = ctrl.users.indexOf(user);

          if (index >= 0) {   // assert the User exists in the list
            ctrl.users.splice(index, 1);
          }
        };

        ctrl.alphaAsc = function () {
          ctrl.onAlphaAsc({ users: ctrl.users });
        };

        ctrl.alphaDesc = function () {
          ctrl.onAlphaDesc({ users: ctrl.users });
        };
      },
      bindings: {
        users: '=',
        onAlphaAsc: '&',
        onAlphaDesc: '&'
      }
    });

})(window.angular);
