(function () {
    'use strict';

    angular
        .module('usersOne')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope) {

        $scope.users = [{
                "First": "Sponge",
                "Last": "Bob",
                "Sex": "Male",
                "Age": "24",
                "Title": "Frycook",
                "ID": "0"
            },

            {
                "First": "Oliver",
                "Last": "Queen",
                "Sex": "Male",
                "Age": "30",
                "Title": "Superhero",
                "ID": "1"
            }
        ];

        $scope.editToggle = false;
        $scope.addToggle = false;
        $scope.toggleAdd = function () {
            $scope.addToggle = !($scope.addToggle);
            if ($scope.editToggle) {
                $scope.editToggle = !($scope.editToggle);
            }
        };

        $scope.toggleEdit = function () {
            $scope.editToggle = !($scope.editToggle);
            if ($scope.addToggle) {
                $scope.addToggle = !($scope.addToggle);
            }
        };

        $scope.i = 1;

        $scope.createUsers = function() {
            $scope.i++;
            var obj = {
                "First": "",
                "Last": "",
                "Sex": "",
                "Age": "",
                "Title": "",
                "ID": $scope.i
            };
            obj.First = $scope.first;
            obj.Last = $scope.last;
            obj.Sex = $scope.sex;
            obj.Age = $scope.age;
            obj.Title = $scope.title;
            $scope.users.push(obj);
        }


        $scope.updateUser = function(id, key, value) {
            var j;
            for (j = 0; j < users.length; j++) {
                if ($scope.users[j].ID === id) {
                    if ($scope.users[j].hasOwnProperty(key)) {
                        Object.defineProperty($scope.users[j], key, {
                            value: value
                        });
                    }
                }
            }
        }

        $scope.removeUser = function(id) {
            var j;
            for (j = $scope.users.length - 1; j > 0; j--) {
                if ($scope.users[j].ID === id) {
                    $scope.users.splice(j, 1);
                }
            }
        }

       /* function readUsers(users) {

            var j;
            for (j = 0; j < users.length; j++) {
                console.log(users[j].First + ' ' + users[j].Last);
            }

        }*/
    }
}());