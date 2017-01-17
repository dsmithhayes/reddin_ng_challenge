(function (angular) {

  angular.module('reddin')
    .component('userDetailsField', {
      templateUrl: 'user-details/user-details-field.html',
      controller: function UserDetailsFieldController () {
        var ctrl = this;
        ctrl.editMode = false;

        ctrl.update = function (prop, value) {
          ctrl.onUpdate({ user: ctrl.user, prop: prop, value: value});
        }

      },
      bindings: {
        fieldModel: '<',
        fieldValue: '<',
        onUpdate: '&'
      }
    });
})(window.angular);
