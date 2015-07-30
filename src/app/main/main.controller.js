(function() {
  'use strict';

  angular
    .module('musicCatalog')
    .controller('MainController', function($scope, lastChatter) {
      $scope.artist = '';
      $scope.artistCorrect = '';
      $scope.topTracks = '';
      $scope.showBuy = '';
      $scope.physicalSellers = '';
      $scope.downloadSellers = '';

      $scope.search = function(){

        $scope.topTracks = lastChatter.getTopTracks($scope.artist).then(function(response){
          $scope.topTracks = response.toptracks.track;
          //console.log(JSON.stringify($scope.topTracks));
          $scope.artistCorrect =  $scope.topTracks[0].artist.name;

        }, function(error){
            $scope.artistCorrect = "No artist found by the name of "+ $scope.artist;
           console.log('Server at Last.fm sent the response: '+ error.statusText + ' Status code: '+ error.status);

        });
        $scope.artist = '';

      };

      $scope.searchPurchase= function(index, artist){
          var song = $scope.topTracks[index].name;
          var country = 'US';
          $scope.showBuy = index;
        lastChatter.getBuyLinks(artist, song,country).then(function(response){


          $scope.downloadSellers = response.affiliations.physicals.affiliation;
          //console.log(JSON.stringify($scope.downloadSellers));
          $scope.physicalSellers = response.affiliations.downloads.affiliation;

        }, function(error){
          $scope.physicalSellers = "Couldn't find sellers for "+ song;
          console.log('Server at Last.fm sent the response: '+ error.statusText + ' Status code: '+ error.status);

        });

      };



  });
})();
