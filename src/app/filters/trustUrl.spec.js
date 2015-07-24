/**
 * Created by susansouza on 7/24/2015.
 */
describe('Filter: trustUrl', function(){

  beforeEach(module('reader'));

  var trustUrl;
  beforeEach(inject(function($filter){

    trustUrl = $filter('trustUrl');
  }));

  it('should return the input as a usable url', function(){
    var text = "http%3A%2F%2Fwww.cnn.com%2F2015%2F07%2F22%2Fpolitics%2Fobama-family-kenya-brooke-baldwin%2F";
    expect(trustUrl(text).$$unwrapTrustedValue()).toBe("http%3A%2F%2Fwww.cnn.com%2F2015%2F07%2F22%2Fpolitics%2Fobama-family-kenya-brooke-baldwin%2F")
  });

});
