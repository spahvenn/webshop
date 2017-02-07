'use strict';

angular.module('webshop.version', [
  'webshop.version.interpolate-filter',
  'webshop.version.version-directive'
])

.value('version', '0.1');
