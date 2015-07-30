(function() {
  'use strict';

  describe('Controller: MainController', function(){

    beforeEach(module('musicCatalog'));
    var  lastChatter, httpBackend, http, scope, mainCtrl;
    beforeEach(inject(function (_lastChatter_, $httpBackend, $http, $rootScope, $controller) {

      lastChatter = _lastChatter_;
      http = $http;
      httpBackend = $httpBackend;

      mainCtrl = $controller('MainController', {
        $scope: scope
      });
    }));

    it('should initialize a variable artist to empty string and attach it to the scope', function(){
      expect(scope.artist).toBe('');

    });
    it('should initialize a variable artist to empty string and attach it to the scope', function(){

      expect(scope.artist).toBe('');
    });
    it('should initialize a variable artistCorrect to empty string and attach it to the scope', function(){
      expect(scope.artistCorrect).toBe('');

    });
    it('should initialize a variable topTracks to empty string and attach it to the scope', function(){
      expect(scope.topTracks).toBe('');

    });
    it('should initialize a variable physicalSellers to empty string and attach it to the scope', function(){

      expect(scope.physicalSellers).toBe('');
    });
    it('should initialize a variable downloadSellers to empty string and attach it to the scope', function(){

      expect(scope.downloadSellers).toBe('');
    });

    /*

    Functions


     */

  });
})();
