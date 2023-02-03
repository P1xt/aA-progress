const Person = require('./person');

/* The Student class is a subclass of the Person class */
class Student extends Person {
  /**
   * The constructor function is a special function that is called when a new object is created
   * 
   * Args:
   *   firstName: The first name of the student.
   *   lastName: The last name of the student.
   *   major: The student's major
   *   GPA: The student's GPA.
   */
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  /**
   * It takes two student objects as parameters and compares their GPAs
   * 
   * Args:
   *   student1: The first student object.
   *   student2: The second student object.
   * 
   * Returns:
   *   a string that compares the GPA of two students.
   */
  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    }
    if (student2.GPA > student1.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    }
    return `Both students have the same GPA`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}