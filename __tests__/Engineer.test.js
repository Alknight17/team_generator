const Engineer = require('../lib/Engineer');

let nameExample = "Employee Person";
let idExample = "321";
let emailExample = "employee@person.com";
let githubExample = "fakeGithub";
const engineerExample = new Engineer(nameExample, idExample, emailExample, githubExample);

describe("engineer", () => {
    it("should be an object with values name, id, email and github", () => {
        expect(engineerExample.name).toEqual("Employee Person");
        expect(engineerExample.id).toEqual("321");
        expect(engineerExample.email).toEqual("employee@person.com");
        expect(engineerExample.github).toEqual("fakeGithub");
    });
});

describe("getGithub", () => {
    it("should return github username", () => {
        expect(engineerExample.getGithub()).toEqual("fakeGithub");
    });
});

describe("getRole", () => {
    it("should return the role 'Engineer'", () => {
        expect(engineerExample.getRole()).toEqual('Engineer');
    });
});