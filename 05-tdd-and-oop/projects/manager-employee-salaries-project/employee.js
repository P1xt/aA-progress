/* The Employee class is a blueprint for creating objects that represent employees. It has four
properties: name, salary, title, and manager. It also has two methods: calculateBonus and
addEmployee. */
class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(this.manager) this.manager.addEmployee(this);
    }

    /**
     * This function takes a parameter called multiplier and returns the salary property of the object
     * multiplied by the multiplier parameter.
     * 
     * Args:
     *   multiplier: The number used to multiply the salary.
     * 
     * Returns:
     *   The salary of the employee multiplied by the multiplier.
     */
    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }
}

try {
    module.exports = Employee;
} catch {
    module.exports = null;
}