const Employee = require("./employee");

/* The Manager class is a subclass of Employee. It has a constructor that takes in the same arguments
as the Employee class, plus an array of employees. It also has a method called addEmployee that
takes in an employee and adds it to the array of employees. It also has a method called
calculateBonus that takes in a multiplier and returns the bonus for the manager and all of the
employees under the manager. */
class Manager extends Employee {
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager)
    this.employees = employees;
  }

  /**
   * The addEmployee function takes an employee object as an argument and pushes it into the employees
   * array
   * 
   * Args:
   *   employee: The employee object to be added to the employees array.
   */
  addEmployee(employee) {
    this.employees.push(employee);
  }

  /**
   * If the employee is a manager, add the manager's salary to the sum and then add the sum of the
   * manager's subordinates' salaries to the sum. If the employee is not a manager, add the employee's
   * salary to the sum.
   * 
   * Returns:
   *   The total salary of all employees under the manager.
   */
  _totalSubSalary() {
    let sum = 0;
    for ( let employee of this.employees) {
        if (employee instanceof Manager) {
            sum += employee.salary;
            sum += employee._totalSubSalary();
        } else if (employee instanceof Employee) {
            sum += employee.salary;
        }
    }
    return sum;
  }

  /**
   * The calculateBonus function takes a multiplier as an argument and returns the result of
   * multiplying the multiplier by the sum of the salary and the total sub salary.
   * 
   * Args:
   *   multiplier: The bonus multiplier.
   * 
   * Returns:
   *   The return value is the result of the calculation of the multiplier times the sum of the salary
   * and the total sub salary.
   */
  calculateBonus(multiplier) {
    return multiplier * (this.salary + this._totalSubSalary());
  }
}

try {
  module.exports = Manager;
} catch {
  module.exports = null;
}