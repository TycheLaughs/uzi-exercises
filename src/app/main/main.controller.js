(function() {
  'use strict';

  angular
    .module('musicCatalog')
    .controller('MainController', function($scope, lastChatter) {
      $scope.artist = '';
      $scope.artistCorrect = '';
      $scope.topTracks = '';

      $scope.physicalSellers = '';
      $scope.downloadSellers = '';
      $scope.search = function(){

        $scope.topTracks = lastChatter.getTopTracks($scope.artist).then(function(response){
          $scope.topTracks = response.toptracks.track;
          //console.log(JSON.stringify($scope.topTracks));
          $scope.artistCorrect =  $scope.topTracks[0].artist.name;

        }, function(error){


        });
        $scope.artist = '';

      };

      $scope.searchPurchase= function(artist, song, country){
        if(!country){
          country = 'US';
        }
        lastChatter.getBuyLinks(artist, song,country).then(function(response){


          $scope.downloadSellers = response.affiliations.physicals.affiliation;
          console.log(JSON.stringify($scope.downloadSellers));
          $scope.physicalSellers = response.affiliations.downloads.affiliation;

        }, function(error){


        });

      };



  });
})();
