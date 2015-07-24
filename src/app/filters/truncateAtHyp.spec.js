/**
 * Created by susansouza on 7/24/2015.
 */
'use strict';
describe('Filter: truncateAtHyp', function(){

  beforeEach(module('reader'));

  var truncateAtHyp;
  beforeEach(inject(function($filter){

    truncateAtHyp = $filter('truncateAtHyp');
  }));

  it('should return the input truncated at the first hyphen encountered, replacing the following text with an ellipsis', function(){
    var text = "some nonsense string here- more following nonsense";
    expect(truncateAtHyp(text)).toBe("some nonsense string here...")
  });

});
