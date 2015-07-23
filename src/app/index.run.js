(function() {
  'use strict';

  angular
    .module('reader')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
