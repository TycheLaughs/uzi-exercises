/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('reader')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
