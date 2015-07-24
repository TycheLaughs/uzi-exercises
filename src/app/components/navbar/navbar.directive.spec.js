/**
 * Created by susansouza on 7/24/2015.
 */
(function () {
  'use strict';


  describe('Directive: blandNavbar', function () {

    // load the directive's module
    beforeEach(module('reader'));
    var element, scope;
    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<bland-navbar></bland-navbar>');
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it('should render on the page', inject(function () {
      expect(element.text().trim()).toBe('News Reader');
    }));
  });

}());
