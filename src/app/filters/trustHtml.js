/**
 * Created by susansouza on 7/24/2015.
 */
  'use strict';

  angular
    .module('reader')
    .filter('trustHtml', function( $sce){
        return function(text){
          var unsafeHtml = text.replace(/&#39;/g, "'");
          unsafeHtml = unsafeHtml.replace(/<b>/g, "");
          unsafeHtml = unsafeHtml.replace(/<\/b>/g, "");
          unsafeHtml = unsafeHtml.replace(/&nbsp;/g, "");
          unsafeHtml = $sce.trustAsHtml(unsafeHtml);
          return unsafeHtml;
        };
    });

