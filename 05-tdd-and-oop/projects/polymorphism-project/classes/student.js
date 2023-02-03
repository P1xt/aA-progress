const Person = require('./person');

/* The Student class is a subclass of the Person class */
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  /**
   * The function introduce() returns a string that says "Hello. I am [firstName] [lastName], and I
   * study [major]."
   * 
   * Returns:
   *   a string that is a concatenation of the firstName, lastName, and major properties of the object.
   */
  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I study ${this.major}.`;
  }

  /**
   * It takes two student objects as parameters, compares their GPAs, and returns a string that tells
   * us which student has the higher GPA
   * 
   * Args:
   *   student1: The first student object to compare.
   *   student2: The second student object
   * 
   * Returns:
   *   a string that compares the two students' GPAs.
   */
  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student2.GPA > student1.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}