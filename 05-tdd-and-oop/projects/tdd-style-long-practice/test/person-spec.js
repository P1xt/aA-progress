const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const Person = require("../problems/person");

describe("Person class", () => {
  let person;
  let consoleSpy;
  beforeEach(() => {
    person = new Person("Mai", 38);
    person2 = new Person("Erin", 42);
    consoleSpy = chai.spy.on(console, 'log');
  });

  afterEach(() => {
    chai.spy.restore(console);
  });

  describe("Person constructor", () => {
    it("should set the name property", () => {
      expect(person).to.have.property("name");
      expect(person.name).to.eql("Mai");
    });

    it("should set the age property", () => {
      expect(person).to.have.property("age");
      expect(person.age).to.eql(38);
    });
  });

  describe("sayHello instance method", () => {
    it("should call the sayHello method", () => {
      person.sayHello();
      let expected = `Hi, I'm Mai`;
      expect(consoleSpy).to.have.been.called.once.with(expected)
    });
  });

  describe("visit instance method", () => {
    it("should return an appropriate string when visit() is invoked", () => {
      expect(person.visit(person2)).to.eql("Mai visited Erin");
    });
  });

  describe("switchVisit instance method", () => {
    it("should return an appropriate string when switchVisit() is invoked", () => {
      expect(person.switchVisit(person2)).to.eql("Erin visited Mai");
    });
  });

  describe("update instance method", () => {
    it("should throw a TypeError if the object doesn't have name and age", () => {
      expect(() => person.update('Mike')).to.throw(TypeError);
      expect(() => person.update({ name: 'Mike' })).to.throw(TypeError);
      expect(() => person.update({ age: 12 })).to.throw(TypeError);
    });
    it("should update the Person if an appropriate object is passed", () => {
      person.update({ name: "Mike", age: 23 });
      expect(person.name).to.eql("Mike");
      expect(person.age).to.eql(23);
    });
  });
  describe("tryUpdate instance method", () => {
    it("should return false if invalid input is passed", () => {
      expect(person.tryUpdate({ name: "Mike" })).to.be.false;
      expect(person.tryUpdate({ age: 23 })).to.be.false;
      expect(person.tryUpdate(null)).to.be.false;
    });
    it("should update the Person if an appropriate object is passed", () => {
      expect(person.tryUpdate({ name: "Mike", age: 23 })).to.be.true;
    });
  });
  describe("greetAll static method", () => {
    it("should invoke sayHello for each person passed", () => {
      let first = `Hi, I'm Mai`;
      let second = `Hi, I'm Erin`;
      const personSpy = chai.spy.on(person, 'sayHello');
      const person2Spy = chai.spy.on(person2, 'sayHello');
      const result = Person.greetAll([person, person2]);
      expect(personSpy).to.have.been.called.once;
      expect(person2Spy).to.have.been.called.once;
    });
    it("should return an array of responses", () => {
      let expected = [`Hi, I'm Mai`, `Hi, I'm Erin`];
      const result = Person.greetAll([person, person2]);
      expect(result).to.eql(expected);
    });
  });
});