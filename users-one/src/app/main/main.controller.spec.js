(function () {
    'use strict';

    describe('Controller: MainController', function () {

        beforeEach(module('usersOne'));
        var mainController, scope, users;
        beforeEach(inject(function ($rootScope, $controller, _users_) {
            scope = $rootScope.$new();
            users = _users_;
            mainController = $controller('MainController', {
                $scope: scope
            });
        }));

        it('should get an array of users and attach to the scope', function () {
            expect(scope.users).toBeDefined();
        });

        it('should have a boolean called editToggle initialized to false', function () {
            expect(scope.editToggle).toBeFalsy();
        });

        it('should have a boolean called addToggle initialized to false', function () {
            expect(scope.addToggle).toBeFalsy();
        });

        describe("function: toggleAdd()", function () {
            beforeEach(function () {
                expect(scope.addToggle).toBeFalsy();
            });
            it('should toggle the boolean when the button is pressed', function () {
                scope.toggleAdd();
                expect(scope.addToggle).toBeTruthy();
            });
        });

        describe("function: toggleEdit()", function () {
            beforeEach(function () {
                expect(scope.editToggle).toBeFalsy();
            });
            it('should toggle the boolean when the button is pressed', function () {
                scope.toggleEdit();
                expect(scope.editToggle).toBeTruthy();
            });
        });


        describe("function: createUsers()", function () {
            beforeEach(function () {
                expect(users.getUsers().length).toBe(2);

            });

            it('should call the createUsers function when the button is pressed', function () {
                scope.first = 'zac';
                scope.last = 'slimebo';
                scope.sex = 'male';
                scope.age = '17';
                scope.title = 'slime';
                scope.createUsers();
                expect(users.getUsers().length).toBe(3);
                expect(users.getUsers()[2].First).toBe('zac');
                expect(users.getUsers()[2].Last).toBe('slimebo');
                expect(users.getUsers()[2].Sex).toBe('male');
                expect(users.getUsers()[2].Age).toBe('17');
                expect(users.getUsers()[2].Title).toBe('slime');
            });

        });

        describe("function: updateUser(id, key, value)", function () {
            beforeEach(function () {
                expect(users.getUsers().length).toBe(2);

            });

            it('should call the updateUser function when the button is pressed', function () {
                scope.updateUser(1, 'Title', 'Ras Al Ghul');
                expect(users.getUsers().length).toBe(2);
                expect(users.getUsers()[1].Title).toBe('Ras Al Ghul');
            });

        });

        describe("function: removeUser(index)", function () {
            beforeEach(function () {
                expect(users.getUsers().length).toBe(2);

            });

            it('should call the removeUser function when the X button is pressed', function () {
                scope.removeUser(0);
                expect(users.getUsers().length).toBe(1);
                expect(users.getUsers()[0].First).toBe("Oliver");
            });

        });
        
    });
})();