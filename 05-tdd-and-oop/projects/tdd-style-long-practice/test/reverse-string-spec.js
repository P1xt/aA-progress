const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString(string)", () => {
  it("should return true if the is reversed, otherwise false", () => {
    const input = "fun"
    expect(reverseString(input)).to.equal('nuf');
  });
  it("should throw a type error if not passed a string", () => {
    const number = 55;
    const object = { i: "am", an: "object" };
    const array = ["i", "am", "an", "array"];
    expect(() => reverseString(number)).to.throw(TypeError);
    expect(() => reverseString(object)).to.throw(TypeError);
    expect(() => reverseString(array)).to.throw(TypeError);
  });
});