(function() {
  'use strict';

  describe('Controller: MainController', function() {

    beforeEach(module('musicCatalog'));
    var lastChatter, httpBackend, http, scope, mainCtrl;
    beforeEach(inject(function (_lastChatter_, $httpBackend, $http, $rootScope, $controller) {
      scope = $rootScope.$new();
      lastChatter = _lastChatter_;
      http = $http;
      httpBackend = $httpBackend;

      mainCtrl = $controller('MainController', {
        $scope: scope
      });
    }));

    it('should initialize a variable artist to empty string and attach it to the scope', function () {
      expect(scope.artist).toEqual('');

    });
    it('should initialize a variable artist to empty string and attach it to the scope', function () {

      expect(scope.artist).toEqual('');
    });
    it('should initialize a variable artistCorrect to empty string and attach it to the scope', function () {
      expect(scope.artistCorrect).toEqual('');

    });
    it('should initialize a variable topTracks to empty string and attach it to the scope', function () {
      expect(scope.topTracks).toEqual('');

    });
    it('should initialize a variable physicalSellers to empty string and attach it to the scope', function () {

      expect(scope.physicalSellers).toEqual('');
    });
    it('should initialize a variable downloadSellers to empty string and attach it to the scope', function () {

      expect(scope.downloadSellers).toEqual('');
    });

    /*

     Functions

     */

    describe('Function: search()', function () {
      beforeEach(function () {
        httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&format=json&method=artist.getTopTracks").respond(
          {
            "affiliations":{
            "physicals":{
              "affiliation": "Cher"
              },
              "downloads":{
                "affiliation": "Cher"
              }
            }
          });
        httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=&autocorrect=1&format=json&method=artist.getTopTracks").respond(function() {
          return [400, {
            "affiliations": {
              "physicals": {
                "affiliation": "error"
              },
              "downloads": {
                "affiliation": "error"
              }
            }
          }];
        });

      });
      afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();

      });

      it('should call the getTopTracks function from the lastChatter service to populate the topTracks object on the scope', function () {


      });

      it('should display and error when getTopTracks from lastChatter is given incorrect arguments', function () {


      });

    });

    describe('Function: searchPurchase(index artist)', function () {
      beforeEach(function () {
        scope.topTracks = [];
        scope.topTracks[0] = {};
        httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=Believe").respond(
          {
            "affiliations":{
              "physicals":{
                "affiliation": "Cher"
              },
              "downloads":{
                "affiliation": "Cher"
              }
            }
          });
        httpBackend.when("GET", "http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=").respond(function(){
          return [ 400, {
              "affiliations":
              {
                "physicals":
                {
                  "affiliation": "error"
                },
                "downloads":
                {
                  "affiliation": "error"
                }
              }
            }
          ];
          });

      });
      afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
      });

      it('should call the getBuyLinks function from the lastChatter service to populate the physicalSellers and downloadSellers objects on the scope', function () {
        httpBackend.expectGET("http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=Believe");

        scope.topTracks[0].name = "Believe";
        scope.searchPurchase(0, "Cher");
        httpBackend.flush();
        expect(scope.downloadSellers).toBe("Cher");
        expect(scope.physicalSellers).toBe("Cher");


      });

      it('should display and error when getBuyLinks from lastChatter is given incorrect arguments', function () {
        httpBackend.expectGET("http://ws.audioscrobbler.com/2.0?api_key=f3e6bff38901e60e008579851e02440a&artist=Cher&autocorrect=1&country=US&format=json&method=track.getBuyLinks&track=");
        scope.topTracks[0].name = "";
        scope.searchPurchase(0,"Cher");
        httpBackend.flush();
        expect(scope.downloadSellers).toBe("");
        expect(scope.physicalSellers).toBe("Couldn't find sellers for ");

      });

    });
  });
}());
