(function() {
  'use strict';
  angular
    .module('reader')
    .directive('blandNavbar', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        replace:true
      };
    });
})();
