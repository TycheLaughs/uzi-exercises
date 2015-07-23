(function() {
  'use strict';

  describe('Controller: MainController', function(){

    beforeEach(module('reader'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length > 5).toBeTruthy();
    }));
  });
})();
