const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    // create new instance of Intern
    const intern = new Intern();

    
    expect(intern.getSchool()).toEqual(intern.internSchool);
    expect(intern.getRole()).toBe(Intern);
    expect(intern.getID()).toEqual(intern.internID);
    
});