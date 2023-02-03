const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

const Student = require("../classes/student");

describe("Student class", () => {
  let student1;

  beforeEach(() => {
    student1 = new Student("billy", "johnson", "software-development", 3.2);
  });

  describe("Student constructor", () => {
    it("should set the firstName property", () => {
      expect(student1).to.have.property("firstName");
      expect(student1.firstName).to.equal("billy");
    });

    it("should set the lastName property", () => {
      expect(student1).to.have.property("lastName");
      expect(student1.lastName).to.equal("johnson");
    });

    it("should set the major property", () => {
      expect(student1).to.have.property("major");
      expect(student1.major).to.equal("software-development");
    });

    it("should set the GPA property", () => {
      expect(student1).to.have.property("GPA");
      expect(student1.GPA).to.equal(3.2);
    });
  });


  describe("compareGPA static method", () => {
    it("should return the student with the highest GPA", () => {
      let student2 = new Student("sarah", "smith", "basket-weaving", 3.7);

      expect(Student.compareGPA(student1, student2)).to.equal(
        "sarah smith has the higher GPA."
      );
      
      let student3 = new Student("roger", "rabbit", "cartoon-director", 3.5);
      expect(Student.compareGPA(student2, student3)).to.eql(
        "sarah smith has the higher GPA."
      );
    });

    it("should return a message if the GPA's are the same", () => {
      let student2 = new Student("sarah", "smith", "bird-watching", 3.2);

      expect(Student.compareGPA(student1, student2)).to.equal(
        "Both students have the same GPA"
      );
    });

  });
});