var path = require('path');
var assert = require('assert');
var dummy = require(path.join(__dirname, 'dummy'));

describe('indexify', function() {
  it('should require the other files and ignore index.js', function() {
    assert.equal(dummy.index, undefined);
    assert.equal(dummy.first, '1st');
    assert.equal(dummy.second, '2nd');
  })
})

