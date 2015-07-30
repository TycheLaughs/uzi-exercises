/**
 * Created by susansouza on 7/30/2015.
 */
(function() {
  'use strict';

  angular
    .module('musicCatalog')
    .service('lastChatter', function($resource){
        var apiKey = 'f3e6bff38901e60e008579851e02440a';
        var chatter = $resource('http://ws.audioscrobbler.com/2.0/');
        return {

          getTopTracks: function (artist) {
            return chatter.get({
              method: "artist.getTopTracks",
              artist: artist,
              autocorrect: "1",
              api_key: apiKey,
              format: "json"
            }).$promise;

          },

          getBuyLinks: function (artist, song, country) {
          return chatter.get({
              method: "track.getBuyLinks",
              artist: artist,
              track: song,
              autocorrect: "1",
              country: country,
              api_key: apiKey,
              format: "json"
            }).$promise;

          }
        };
    });
}());
