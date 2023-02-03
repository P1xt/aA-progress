const Person = require('./person');

/* Teacher is a subclass of Person, and it has a constructor that takes in a subject and
yearsOfExperience, and it has a static method called combinedYearsOfExperience that takes in an
array of teachers and returns the sum of their yearsOfExperience. */
class Teacher extends Person {
  /**
   * The constructor function is a special function that is called when a new instance of the class is
   * created
   * 
   * Args:
   *   firstName: The first name of the teacher.
   *   lastName: The last name of the teacher.
   *   subject: The subject the teacher teaches.
   *   yearsOfExperience: number
   */
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  /**
   * We're using the reduce method to iterate over the teachers array and add the yearsOfExperience
   * property of each teacher to the total variable
   * 
   * Args:
   *   teachers: an array of teacher objects
   * 
   * Returns:
   *   The total number of years of experience of all the teachers.
   */
  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((total, next) => total + next.yearsOfExperience, 0);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}