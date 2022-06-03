const Manager = require('../lib/Manager');

let nameExample = "Manager Lady";
let idExample = "1123";
let emailExample = "manager@lady.com";
let officeNumberExample = "52";
const managerExample = new Manager(nameExample, idExample, emailExample, officeNumberExample);

describe("Manager", () => {
    it("should be an object with values name, id, email, and office number", () => {
        expect(managerExample.name).toEqual("Manager Lady");
        expect(managerExample.id).toEqual("1123");
        expect(managerExample.email).toEqual("manager@lady.com");
        expect(managerExample.officeNumber).toEqual("52");
    });
});

describe("getRole", () => {
    it("should return the role 'Manager'", () => {
        expect(managerExample.getRole()).toEqual("Manager");
    });
});