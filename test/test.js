const fb = require("../lib/index");
const should = require("chai").should();

describe("Fizz Buzz", function() {
  it("should return 100 elements when no param given", function() {
    fb().length.should.equal(100);
  });

  it("should return 10 elements when given 10", function() {
    fb(10).length.should.equal(10);
  });

  it('should return "Fizz" on the 3rd element', function() {
    fb()[2].should.equal("Fizz");
  });

  it('should return "Buzz" on the 5th element', function() {
    fb()[4].should.equal("Buzz");
  });

  it('should return "Bang" on the 7th element', function() {
    fb()[6].should.equal("Bang");
  });

  it('should return "Pop" on the 11th element', function() {
    fb()[10].should.equal("Pop");
  });
});
