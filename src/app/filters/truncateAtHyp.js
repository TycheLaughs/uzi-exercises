/**
 * Created by susansouza on 7/24/2015.
 */
'use strict';
angular
  .module('reader')
  .filter('truncateAtHyp', function(){
    return function(text){
      var ind = text.indexOf('-');
      if(ind > 60){
        ind= 60;
      }
      var trunc = text.substr(0,ind);
      trunc += '...';
      return trunc;
    };
  });
