(function () {
    'use strict';

  describe('Service: users', function () {
        beforeEach(module('usersOne'));
        var users;
        beforeEach(inject(function (_users_) {
            users = _users_;
        }));


      it('should have an array called userList with two obects in it', function () {
          expect(users.getUsers().length).toBe(2);
      });

      it('should have a variable called i initialized at 1', function () {
          expect(users.trackId()).toEqual(1);
      });

      //functions

    describe('functions', function () {
        beforeEach(function () {
            expect(users.getUsers().length).toBe(2);
            expect(users.trackId()).toEqual(1);
        });

        describe('Function: createUser(first, last, sex, age, title)', function () {
            it('should add user to the list of users', function () {
                users.createUser("gumbo", "gwenevine", "male", "24", "gumbowizard");
                expect(users.getUsers().length).toBe(3);

            });
        });

        describe('Function: updateUser(id, key, value)', function () {
            it('should update user information', function () {
                users.updateUser(0, "First", "broly");
                expect(users.getUsers()[0].First).toBe("broly");
            });

        });

        describe('Function: removeSong(index)', function () {
            it('should remove the indicated user from the list', function () {
                users.removeUser(1);
                expect(users.getUsers().length).toBe(1);
                expect(users.getUsers()[0].First).toBe('Sponge');

            });
        });

    });

  });

})();
