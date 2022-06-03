const Employee = require("../lib/Employee");

let nameExample = "Worker Man";
let idExample = "123";
let emailExample = "worker@man.com";
const employeeExample = new Employee(nameExample, idExample, emailExample);

describe("Employee", () => {
    it("should be an object with values name, id, and email", () => {

        expect(employeeExample.name).toEqual("Worker Man");
        expect(employeeExample.id).toEqual("123");
        expect(employeeExample.email).toEqual("worker@man.com");
    });
});

describe("getName", () => {
    it("should return the name of the employee", () => {
        expect(employeeExample.getName()).toEqual("Worker Man");
    });
});

describe("getId", () => {
    it("should return the id of the employee", () => {
        expect(employeeExample.getId()).toEqual("123");
    });
});

describe("getRole", () => {
    it("should return the role 'Employee'", () => {
        expect(employeeExample.getRole()).toEqual('Employee');
    });
});