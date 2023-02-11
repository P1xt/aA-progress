const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const { Triangle, Scalene, Isosceles } = require("../problems/triangle");

/* This is testing the Triangle class. */
describe("Triangle class", () => {
  const triangle = new Triangle(3, 4, 5);
  describe("Triangle constructor", () => {
    it("should set the side1 property", () => {
      expect(triangle).to.have.property("side1");
      expect(triangle.side1).to.eql(3);
    });

    it("should set the side2 property", () => {
      expect(triangle).to.have.property("side2");
      expect(triangle.side2).to.eql(4);
    });

    it("should set the side3 property", () => {
      expect(triangle).to.have.property("side3");
      expect(triangle.side3).to.eql(5);
    });
  });
  describe("getPerimeter", () => {
    it("should return the perimeter of the triangle", () => {
      const triangle = new Triangle(3, 4, 5);
      const perimeter = triangle.getPerimeter();
      const expected = 12;
      expect(perimeter).to.eql(expected);
    });
  });
  describe("hasValidSideLengths", () => {
    it("should return true if the triangle has valid side lengths", () => {
      const triangle = new Triangle(3, 4, 5);
      const result = triangle.hasValidSideLengths();
      const expected = true;
      expect(result).to.eql(expected);
    });
    it("should return false if the triangle does not have valid side lengths", () => {
      const triangle = new Triangle(0, 0, 0);
      const result = triangle.hasValidSideLengths();
      const expected = false;
      expect(result).to.eql(expected);
    });
  });
  describe("validate", () => {
    it("should return true if the triangle has valid side lengths", () => {
      const triangle = new Triangle(3, 4, 5);
      triangle.validate();
      const expected = true;
      expect(triangle.isValid).to.eql(expected);
    });
    it("should return false if the triangle does not have valid side lengths", () => {
      const triangle = new Triangle(0, 0, 0);
      triangle.validate();
      const expected = false;
      expect(triangle.isValid).to.eql(expected);
    });
  });
});

/* This is testing the Scalene class. */
describe("Scalene class", () => {
  const scalene = new Scalene(3, 4, 5);
  describe("Scalene constructor", () => {
    it("should set the side1 property", () => {
      expect(scalene).to.have.property("side1");
      expect(scalene.side1).to.eql(3);
    });

    it("should set the side2 property", () => {
      expect(scalene).to.have.property("side2");
      expect(scalene.side2).to.eql(4);
    });

    it("should set the side3 property", () => {
      expect(scalene).to.have.property("side3");
      expect(scalene.side3).to.eql(5);
    });
  });
  describe("getPerimeter", () => {
    it("should return the perimeter of the triangle", () => {
      const triangle = new Scalene(3, 4, 5);
      const perimeter = triangle.getPerimeter();
      const expected = 12;
      expect(perimeter).to.eql(expected);
    });
  });
  describe("hasValidSideLengths", () => {
    it("should return true if the triangle has valid side lengths", () => {
      const triangle = new Scalene(3, 4, 5);
      const result = triangle.hasValidSideLengths();
      const expected = true;
      expect(result).to.eql(expected);
    });
    it("should return false if the triangle does not have valid side lengths", () => {
      const triangle = new Scalene(0, 0, 0);
      const result = triangle.hasValidSideLengths();
      const expected = false;
      expect(result).to.eql(expected);
    });
  });
  describe("validate", () => {
    it("should set isValidScalene to true if the triangle is valid scalene", () => {
      const triangle = new Scalene(3, 4, 5);
      triangle.validate();
      const expected = true;
      console.log(triangle);
      expect(triangle.isValidScalene).to.eql(expected);
    });
    it("should set isValidScalene to false if the triangle is not valid scalene", () => {
      const triangle = new Scalene(0, 0, 0);
      triangle.validate();
      const expected = false;
      expect(triangle.isValidScalene).to.eql(expected);
    });
  });
});

/* This is testing the Isosceles class. */
describe("Isosceles class", () => {
  const isosceles = new Isosceles(3, 4, 5);
  describe("Isosceles constructor", () => {
    it("should set the side1 property", () => {
      expect(isosceles).to.have.property("side1");
      expect(isosceles.side1).to.eql(3);
    });

    it("should set the side2 property", () => {
      expect(isosceles).to.have.property("side2");
      expect(isosceles.side2).to.eql(4);
    });

    it("should set the side3 property", () => {
      expect(isosceles).to.have.property("side3");
      expect(isosceles.side3).to.eql(5);
    });
  });
  describe("getPerimeter", () => {
    it("should return the perimeter of the triangle", () => {
      const triangle = new Isosceles(3, 4, 5);
      const perimeter = triangle.getPerimeter();
      const expected = 12;
      expect(perimeter).to.eql(expected);
    });
  });
  describe("hasValidSideLengths", () => {
    it("should return true if the triangle has valid side lengths", () => {
      const triangle = new Isosceles(3, 4, 5);
      const result = triangle.hasValidSideLengths();
      const expected = true;
      expect(result).to.eql(expected);
    });
    it("should return false if the triangle does not have valid side lengths", () => {
      const triangle = new Isosceles(0, 0, 0);
      const result = triangle.hasValidSideLengths();
      const expected = false;
      expect(result).to.eql(expected);
    });
  });
  describe("validate", () => {
    it("should set isValidIsosceles to true if the triangle is isosceles", () => {
      const triangle = new Isosceles(4, 4, 4);
      triangle.validate();
      const expected = true;
      expect(triangle.isValidIsosceles).to.eql(expected);
    });
    it("should set isValidIsosceles to false if the triangle is not isosceles", () => {
      const triangle = new Isosceles(0, 1, 2);
      triangle.validate();
      const expected = false;
      expect(triangle.isValidIsosceles).to.eql(expected);
    });
  });
});