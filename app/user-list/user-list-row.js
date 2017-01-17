(function (angular) { 'use strict';

  angular.module('reddin').component('userListRow', {
    templateUrl: 'user-list/user-list-row.html',
    controller: function UserListRowController() {
      var ctrl = this;

      ctrl.delete = function () {
        ctrl.onDelete({ user: ctrl.user });
      };

    },
    bindings: {
      user: '<',
      onDelete: '&'
    }
  });
})(window.angular);
