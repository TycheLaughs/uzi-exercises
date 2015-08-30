(function () {
    'use strict';

    angular
        .module('usersOne')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, users) {

        $scope.users = users.getUsers();

        $scope.editToggle = false;
        $scope.addToggle = false;
        $scope.toggleAdd = function () {
        $scope.addToggle = !($scope.addToggle);
        if ($scope.editToggle) {
          $scope.editToggle = !($scope.editToggle);
        }
      };

        $scope.toggleEdit = function () {
          if ($scope.users.length > 0) {
            $scope.editToggle = !($scope.editToggle);
            if ($scope.addToggle) {
              $scope.addToggle = !($scope.addToggle);
            }
          }
        };


        $scope.createUsers = function() {
            users.createUser($scope.first, $scope.last, $scope.sex, $scope.age, $scope.title);
            $scope.first = '';
            $scope.last='';
            $scope.sex='';
            $scope.age='';
            $scope.title='';
            $scope.toggleAdd();

        };


        $scope.updateUser = function(id, key, value) {
          users.updateUser(id, key, value);
          $scope.IDForEdit = '';
          $scope.keyForEdit = '';
          $scope.valueForEdit = '';
          $scope.toggleEdit();
        };

        $scope.removeUser = function(index) {
          users.removeUser(index);
        };


    }
}());
