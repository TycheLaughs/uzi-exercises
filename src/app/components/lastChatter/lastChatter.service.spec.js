/**
 * Created by susansouza on 7/30/2015.
 */
(function () {
    'use strict';

    describe('Service: lastChatter', function () {

        beforeEach(module('musicCatalog'));
        var lastChatter, httpBackend, http;
        beforeEach(inject(function (_lastChatter_, $httpBackend, $http) {

            lastChatter = _lastChatter_;
            http = $http;
            httpBackend = $httpBackend;



        }));
      afterEach(function(){
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();

      });

        /*

        Functions


         */

        describe('Function: getTopTracks(artist)', function () {
          beforeEach(function(){
            httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&format=json&method=artist.getTopTracks").respond({
              "result": [{
                "artist": "Cher"
              }]
            });
            httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=&autocorrect=1&format=json&method=artist.getTopTracks").respond({
              "result": "error"
            });
          });

          it('should get songs by artist from last.fm that returns a promise', function () {

            var res;
            httpBackend.expectGET("http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&format=json&method=artist.getTopTracks");
            lastChatter.getTopTracks("Cher").then(function (resp) {
              res = resp.result;
            }, function (err) {
              res = err.result;
            });
            httpBackend.flush();
            expect(res.length).toBe(1);
          });

          it('should trigger an error callback function when incorrect arguments are passed', function(){
            var res;
            httpBackend.expectGET("http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=&autocorrect=1&format=json&method=artist.getTopTracks");
                lastChatter.getTopTracks("").then(function (resp) {
                    res = resp.result;
                }, function (err) {
                    res = err.result;
                });
                httpBackend.flush();
                expect(res).toBe("error");

            });
        });

        describe('Function: getbuyLinks(artist, song, country)', function () {
          beforeEach(function(){
            httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=Believe").respond(
              {"result":[{"artist":"Cher"}]
              });
            httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=").respond(
              {"result":"error"
              });
          });
            it('should get links to where to buy the selected track  from last.fm that returns a promise', function () {

              var res;

              httpBackend.expectGET("http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=Believe");
              lastChatter.getBuyLinks("Cher", "Believe", "US").then(function (resp) {
                res = resp.result;
              }, function (err) {
                res = err.result;
              });
              httpBackend.flush();
              expect(res.length).toBe(1);
            });
          it('should trigger an error callback function when incorrect arguments are passed', function(){
            var res;
            httpBackend.expectGET("http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=");
              lastChatter.getBuyLinks("Cher", "", "US").then(function (resp) {
                res = resp.result;
              }, function (err) {
                res = err.result;
              });
              httpBackend.flush();
              expect(res).toBe("error");
            });
        });
    });

}());
