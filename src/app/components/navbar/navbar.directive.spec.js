/**
 * Created by susansouza on 7/24/2015.
 */
'use strict';

describe('Directive: blandNavbar', function () {

  // load the directive's module
  beforeEach(module('reader'));

  var element, scope;


  it('should render on the page', inject(function ($compile) {
    element = angular.element('<bland-navbar></bland-navbar>');
    element = $compile(element);
    expect(element).toBeDefined();
    //..need to test if this actually renders.  Don't think toBeDefined works for that
  }));
});
