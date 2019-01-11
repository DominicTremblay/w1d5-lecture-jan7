var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var math = require('./math');

// with assert
describe('testing the math module', function() {
  describe('squared()', function() {
    it('should return 16 when 4 is given', function() {
      assert.equal(16, math.squared(4));
    });

    it('should not return 5 when 2 is given', function() {
      assert.notEqual(5, math.squared(2));
    });
  });

  // with expect
  describe('sum()', function() {
    it('should return 15 when 1,2,3,4,5 is given', function() {
      var total = math.sum([1, 2, 3, 4, 5]);
      expect(total).to.equal(15);
    });
  });

  describe('triangleArea()', function() {
    it('should return 24.00 when (6,8) is given', function() {
      var area = math.triangleArea(6, 8);
      area.should.equal(24.0);
    });
  });

  describe('average()', function() {
    it('should return 2 when 1,2,3 is given', function() {
      var avg = math.average([1, 2, 3]);
      avg.should.equal(2);
    });

    it('should return 0 when nothing is given', function() {
      var avg = math.average();
      avg.should.equal(0);
    });
  });
});
