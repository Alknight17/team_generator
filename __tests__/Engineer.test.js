const Engineer = require('../lib/Engineer');

test('creates an Engineer Object', () => {
    // create new instance of engineer
    const engineer = new Engineer('');

    expect(engineer.getGithub()).toEqual(engineer.engineerGithub);
    expect(engineer.getID()).toEqual(engineer.engineerID);
    expect(engineer.getRole()).toBe(Engineer);
});