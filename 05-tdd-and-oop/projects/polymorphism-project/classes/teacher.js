const Person = require('./person');

/* Teacher is a class that extends Person and has a subject and yearsOfExperience. */
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  /**
   * The function is called introduce, and it returns a string that says "Hello. I am [firstName]
   * [lastName], and I have been teaching [subject] for [yearsOfExperience] years."
   * 
   * Returns:
   *   a string that is interpolating the values of the properties of the object.
   */
  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName}, and I have been teaching ${this.subject} for ${this.yearsOfExperience} years.`;
  }

  /**
   * It takes an array of teachers and returns the sum of their years of experience
   * 
   * Args:
   *   teachers: an array of Teacher objects
   * 
   * Returns:
   *   The total number of years of experience of all the teachers.
   */
  static combinedYearsOfExperience(teachers) {
    let count = 0;
    for (const teacher of teachers) {
      count += teacher.yearsOfExperience;
    }
    return count;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}