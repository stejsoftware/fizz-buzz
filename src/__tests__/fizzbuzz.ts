import { fizzbuzz } from "../fizzbuzz";

describe("Fizz Buzz", function () {
  it("should return 100 elements when no param given", function () {
    expect(fizzbuzz().length).toBe(100);
  });

  it("should return 10 elements when given 10", function () {
    expect(fizzbuzz(10).length).toBe(10);
  });

  it('should return "Fizz" on the 3rd element', function () {
    expect(fizzbuzz()[2]).toBe("Fizz");
  });

  it('should return "Buzz" on the 5th element', function () {
    expect(fizzbuzz()[4]).toBe("Buzz");
  });

  it('should return "Bang" on the 7th element', function () {
    expect(fizzbuzz()[6]).toBe("Bang");
  });

  it('should return "Pop" on the 11th element', function () {
    expect(fizzbuzz()[10]).toBe("Pop");
  });
});
