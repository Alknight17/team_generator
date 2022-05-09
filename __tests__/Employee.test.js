const Employee = require('../lib/Employee');

test('creates an Employee Object', () => {
    // create new instance of employee
    const employee = new Employee('');

    expect(employee.employeeName).toBe('');
    expect(employee.getEmail()).toEqual(employee.employeeEmail)
});