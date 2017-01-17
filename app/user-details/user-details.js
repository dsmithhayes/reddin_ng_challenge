(function (angular) {

  angular.module('reddin')
    .component('userDetails', {
      templateUrl: 'user-details/user-details.html',
      controller: function UserDetailsController ($scope, $route, csvService) {
        var ctrl = this;
        var userId = $route.current.params.userId;

        if (csvService.data.length <= 0) {
          csvService.getData();
        }

        for (var i = 0; i < csvService.data.length; i++) {
          if (csvService.data[i].id == userId) {
            ctrl.user = csvService.data[i];
            break;
          }
        }
      }
    });
})(window.angular);
