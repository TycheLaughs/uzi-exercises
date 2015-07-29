/**
 * Created by susansouza on 7/29/2015.
 */
(function() {
  'use strict';

  angular
    .module('usersOne')
    .service('users', function users() {

      var userList = [{
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
      var i = 1;

      return {
      getUsers: function(){
        return userList;
      },

      createUser: function (first, last, sex, age, title) {
        i++;
        var obj = {
          "First": "",
          "Last": "",
          "Sex": "",
          "Age": "",
          "Title": "",
          "ID":  i
        };
        obj.First = first;
        obj.Last = last;
        obj.Sex = sex;
        obj.Age = age;
        obj.Title = title;
        userList.push(obj);


      },


      updateUser : function (id, key, value) {
        var j;
        if (key === 'First Name') {
          key = 'First';
        }
        if (key === 'Last Name') {
          key = 'Last';
        }

        for (j = 0; j < userList.length; j++) {
          console.log(userList[j].ID);
          if (Number(userList[j].ID) === Number(id)) {
            console.log('HOLY CRAP MATCHED ID');
            if (userList[j].hasOwnProperty(key)) {
              Object.defineProperty(userList[j], key, {
                value: value
              });
            }
          }
        }

      },

       removeUser : function (index) {
         userList.splice(index, 1);

        }
      };
    }
  );
}());
