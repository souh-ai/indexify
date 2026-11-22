var path = require('path');
var dummy = require(path.join(__dirname, 'dummy'));

describe('indexify', function() {
  it('should require the other files.', function() {
    assert.equal(dummy.first, '1st');
    assert.equal(dummy.second, '2nd');
  })
})

