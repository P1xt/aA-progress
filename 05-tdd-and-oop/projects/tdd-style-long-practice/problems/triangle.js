/* A triangle has three sides, a perimeter, and can be validated. */
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  /**
   * It returns the perimeter of the triangle.
   * 
   * Returns:
   *   The perimeter of the triangle.
   */
  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  /**
   * If the sum of any two sides is greater than the third side, then the triangle is valid.
   * 
   * Returns:
   *   a boolean value.
   */
  hasValidSideLengths() {
    if (this.side1 + this.side2 > this.side3) return true;
    if (this.side1 + this.side3 > this.side2) return true;
    if (this.side2 + this.side3 > this.side1) return true;
    return false;
  }

  /**
   * The function validate() is called when the user clicks the button. It calls the function
   * hasValidSideLengths() and assigns the result to the variable isValid.
   */
  validate() {
    this.isValid = this.hasValidSideLengths();
  }

  /**
   * It takes an array of triangles and returns an array of triangles that have valid side lengths
   * 
   * Args:
   *   triangles: An array of Triangle objects.
   * 
   * Returns:
   *   An array of triangles that have valid side lengths.
   */
  static getValidTriangles(triangles) {
    return triangles.filter(triangle => triangle.hasValidSideLengths());
  }
}

/* The Triangle class is the parent class of the Scalene and Isosceles classes. The Scalene and
Isosceles classes inherit the properties and methods of the Triangle class. */
class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }

  /**
   * If the sides are not equal, then it is scalene.
   * 
   * Returns:
   *   The boolean value of the expression.
   */
  isScalene() {
    if (this.side1 === this.side2) return false;
    if (this.side1 === this.side3) return false;
    if (this.side2 === this.side3) return false;
    return true;
  }

  /**
   * The function isValidScalene is set to the value of the function isScalene.
   */
  validate() {
    this.isValidScalene = this.isScalene();
  }
}

/* The Isosceles class is a subclass of the Triangle class. It has a constructor that takes three
arguments, and it has a method called validate that checks to see if the triangle is an isosceles
triangle */
class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }

  /**
   * If any of the sides are not equal, return false. Otherwise, return true.
   * @returns The boolean value of the expression.
   */
  isIsosceles() {
    if (this.side1 !== this.side2) return false;
    if (this.side1 !== this.side3) return false;
    if (this.side2 !== this.side3) return false;
    return true;
  }

  /**
   * The function isValidIsosceles is a boolean that returns true if the triangle is an isosceles
   * triangle.
   */
  validate() {
    this.isValidIsosceles = this.isIsosceles();
  }
}

module.exports = { Triangle, Scalene, Isosceles };