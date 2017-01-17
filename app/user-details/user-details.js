(function (angular) {

  angular.module('reddin')
    .component('userDetails', {
      templateUrl: 'user-details/user-details.html',
      controller: function UserDetailsController ($scope, csvFactory) {
        var ctrl = this;

        if (!$scope.users) {
          ctrl.users = $scope.users = csvFactory.parse();
        } else {
          ctrl.user = $scope.users;
        }
      }
    });
})(window.angular);
