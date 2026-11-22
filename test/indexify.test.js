var path = require('path');
var assert = require('assert');

describe('indexify', function() {
  describe('w/json', function() {
    var dummy = require(path.join(__dirname, 'dummy'));

    it('should require the other files and ignore index.js should also require the folder', function() {
      assert.equal(dummy.index, undefined);
    })

    it('should require the first.js', function() {
      assert.equal(dummy.first, '1st');
    })

    it('should require the other files', function() {
      assert.equal(dummy.second, '2nd');
    })

    it('should also require the folder', function() {
      assert.equal(dummy.third, '3rd');
    })

    it('should read json', function() {
      assert.equal(dummy.fourth.fourth, '4th')    
    })


  })
  describe('w/o json', function() {


    var another = require(path.join(__dirname, 'another'));

    it('should require the other files and ignore index.js should also require the folder', function() {
      assert.equal(another.index, undefined);
    })

    it('should require the first.js', function() {
      assert.equal(another.first, '1st');
    })

    it('should require the other files', function() {
      assert.equal(another.second, '2nd');
    })

    it('should also require the folder', function() {
      assert.equal(another.third, '3rd');
    })

    it('should not reed json', function() {
      assert.equal(another.fourth, undefined)    
    })

  })

})
