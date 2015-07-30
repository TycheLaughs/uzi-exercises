/**
 * Created by susansouza on 7/30/2015.
 */
(function() {
  'use strict';

  describe('Service: lastChatter', function(){

    beforeEach(module('musicCatalog'));
    var  lastChatter, httpBackend, http;
    beforeEach(inject(function (_lastChatter_, $httpBackend, $http) {

      lastChatter = _lastChatter_;
      http = $http;
      httpBackend = $httpBackend;
      httpBackend.when("GET", "").respond(
        {});
  }));

    /*

    Functions


     */

    describe('Function: getTopTracks(artist)', function(){
      it('should have a function to get songs by artist from last.fm that returns a promise', function(){


      });
    });

    describe('Function: getbuyLinks(artist, song, country)', function(){
      it('should have a function to get links to where to buy the selected track  from last.fm that returns a promise', function(){


      });
    });
});

}());
