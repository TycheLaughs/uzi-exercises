/**
 * Created by susansouza on 7/24/2015.
 */
angular
  .module('reader')
  .filter('trustUrl', function( $sce){
    return function(text){
      var unsafeHtml = text;

      unsafeHtml = $sce.trustAsResourceUrl(unsafeHtml);
      return unsafeHtml;
    };
  });
