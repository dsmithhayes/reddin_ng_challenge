'user strict';

describe('component: userList', function () {
  var $componentController;

  var mockUsers = [
    {
      id: 0,
      first_name: "Dave",
      last_name: "Smith-Hayes",
      email: "me@davesmithhayes.com"
    },
    {
      id: 1,
      first_name: "Peter",
      last_name: "Fakename",
      email: "anemail@email.com"
    }
  ];

  beforeEach(module('reddin'));

  beforeEach(function () {
    inject(function (_$componentController_) {
      $componentController = _$componentController_;
    });
  });

  it('Should order the list in ascending order by email', function () {
    var ctrl = $componentController('userList', null, {});

    expect(ctrl.sortAlphaAsc).toBeDefined();

    ctrl.sortAlphaAsc(mockUsers);

    expect(ctrl.users).toBeDefined();
    expect(ctrl.users[0].email).toBe('anemail@email.com');

    ctrl.sortAlphaDesc(ctrl.users);

    expect(ctrl.users[0].email).toBe('me@davesmithhayes.com');
  });
});
