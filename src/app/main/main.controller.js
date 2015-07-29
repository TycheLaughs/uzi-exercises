(function() {
  'use strict';

  angular
    .module('usersOne')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1438186125603;
    vm.showToastr = showToastr;

    activate();

    function activate() {


      var users = [{
        "First":"Sponge",
        "Last":"Bob",
        "Sex":"Male",
        "Age":"24",
        "Title":"Frycook",
        "ID":"0"},

        {
          "First":"Oliver",
          "Last":"Queen",
          "Sex":"Male",
          "Age":"30",
          "Title":"Superhero",
          "ID":"1"}
      ];

      var i = 1;
      function createUsers(first, last, sex, age, title){
        i++;
        var obj = {
          "First":"",
          "Last":"",
          "Sex":"",
          "Age":"",
          "Title":"",
          "ID": i
        };
        obj.First = first;
        obj.Last = last;
        obj.Sex = sex;
        obj.Age = age;
        obj.Title = title;
        users.push(obj);
      }


      function updateUser(id, key, value){
        var j;





        for(j = 0; j < users.length; j++){



          console.log('=============');
          console.log(users[j]);
          console.log('=============');


          if(users[j].ID === id){
            if(users[j].hasOwnProperty(key)){
              Object.defineProperty(users[j], key, {value: value});
            }
          }
        }
      }
      function removeUser(id){
        var j;
        for(j = users.length-1; j >0; j--){
          if(users[j].ID === id){
            users.splice(j, 1);
          }
        }
      }
      function readUsers(users){

        var j;
        for(j = 0; j < users.length; j++){
          console.log(users[j].First + ' ' + users[j].Last);
        }

      }

      createUsers("Doug");
      updateUser(2, "Last", "samper");
      updateUser(2, "Age", "30");
      readUsers(users);
      removeUser(2);
      readUsers(users);
  }
})();
