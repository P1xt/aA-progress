const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap", function () {
  it("should not mutate the input array", function () {
    const input = [1, 2, 3, 4];
    myMap(input, Math.sqrt);
    expect(input).to.eql([1, 2, 3, 4]);
  });
  it("should not call the built-in Array#map", function () {
    const mapSpy = chai.spy.on(Array.prototype, "map");
    myMap([100, 25, 81, 64], Math.sqrt);
    expect(mapSpy).to.have.not.been.called();
  });
  it("should mimic the built-in Array#map", function () {
    const result = myMap([100, 25, 81, 64], Math.sqrt);
    expect(result).to.eql([10, 5, 9, 8]);
  });
  it("call the passed callback once for each element in the passed-in array argument", function () {
    const sqrtSpy = chai.spy.on(Math, 'sqrt', () => { });
    myMap([100, 25, 81, 64], Math.sqrt);
    expect(sqrtSpy).to.have.been.called.exactly(4);
  })

});