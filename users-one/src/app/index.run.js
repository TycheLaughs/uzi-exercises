(function() {
  'use strict';

  angular
    .module('usersOne')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
