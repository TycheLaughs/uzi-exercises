(function() {
  'use strict';

  describe('Controller: MainController', function(){

    beforeEach(module('reader'));

    it('should have four news results things', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length).toBe(4);
    }));
  });
})();
