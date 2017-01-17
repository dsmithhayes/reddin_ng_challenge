(function (angular) {

  angular.module('reddin')
    .component('userDetails', {
      templateUrl: 'user-details/user-details.html',
      controller: function UserDetailsController ($scope, csvFactory) {
        var ctrl = this;
        ctrl.users = csvFactory.parse();
      }
    });
})(window.angular);
