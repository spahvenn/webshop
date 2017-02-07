'use strict';

describe('webshop.version module', function() {
  beforeEach(module('webshop.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
