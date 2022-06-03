const Intern = require("../lib/Intern");

let nameExample = "Intern Dude";
let idExample = "132";
let emailExample = "intern@dude.com";
let schoolExample = "School for People";
const internExample = new Intern(nameExample, idExample, emailExample, schoolExample);

describe("Intern", () => {
    it("should be an object with values name, id, email, school", () => {
        expect(internExample.name).toEqual("Intern Dude");
        expect(internExample.id).toEqual("132");
        expect(internExample.email).toEqual("intern@dude.com");
        expect(internExample.school).toEqual("School for People");
    });
});

describe("getSchool", () => {
    it("should return the name of the school the intern goes to", () => {
        expect(internExample.getSchool()).toEqual("School for People");
    });
});

describe("getRole", () => {
    it("should return the role 'Intern'", () => {
        expect(internExample.getRole()).toEqual('Intern');
    });
});