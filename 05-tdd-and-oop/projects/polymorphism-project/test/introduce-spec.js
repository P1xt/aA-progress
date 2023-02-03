const chai = require("chai");
const expect = chai.expect;

const spies = require("chai-spies");
chai.use(spies);

const Person = require("../classes/person");
const Student = require("../classes/student");
const Teacher = require("../classes/teacher");

describe("Person class", () => {

  describe("Person instance method introduce", () => {
    it("should still behave the same as before", () => {
      let person1 = new Person("kristen", "chauncey", 38);

      expect(person1.introduce()).to.equal(`Hi, I'm kristen chauncey, and I'm 38 years old.`);
    });
  });
});

describe("Student class", () => {

  describe("Student instance method introduce", () => {
      it("should call the unique introduce method for Student", () => {
        let student1 = new Student("billy", "johnson", "software-development", 3.2);

        expect(student1.introduce()).to.equal('Hello. I am billy johnson, and I study software-development.')
    });
  });
});

describe("Teacher class", () => {

  describe("Teacher instance method introduce", () => {
      it("should call the unique introduce method for Teacher", () => {
        let teacher1 = new Teacher("susan", "jones", "biology", 5);

        expect(teacher1.introduce()).to.equal('Hello. I am susan jones, and I have been teaching biology for 5 years.')
    });
  });
});
