(function (angular) {

  angular.module('reddin')
    .component('userDetails', {
      templateUrl: 'user-details/user-details.html',
      controller: function UserDetailsController ($scope, $route, csvService) {
        var ctrl = this;
        var userId = $route.current.params.userId;

        // hydrate the service data if it does not exists already, should move
        // this into a page load event or something.
        if (csvService.data.length <= 0) {
          csvService.getData();
        }

        // parse the ID associated with the object out of the array, poor error
        // handling here as `ctrl.user` can go undefined.
        for (var i = 0; i < csvService.data.length; i++) {
          if (csvService.data[i].id == userId) {
            ctrl.user = csvService.data[i];
            break;
          }
        }

        ctrl.saveEmail = function (val) {
          ctrl.user.email = val;
        };

        ctrl.saveFirstName = function (val) {
          ctrl.user.first_name = val;
        }

        ctrl.saveLastName = function (val) {
          ctrl.user.last_name = val;
        }
      }
    });
})(window.angular);
