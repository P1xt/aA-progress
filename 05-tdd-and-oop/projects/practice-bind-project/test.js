const Employee = require("./employee");

const john = new Employee("John Wick", "Dog Lover");

setTimeout(john.sayName.bind(john), 2000)
setTimeout(john.sayOccupation.bind(john), 3000)