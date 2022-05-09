const Manager = require('../lib/Manager');

test('creates a Manager Object', () => {
    // create new instance of Manager
    const manager = new Manager();


    
    expect(manager.getOfficeNumber()).toEqual(manager.managerOffice);
    expect(manager.getID()).toEqual(manager.managerID);
    expect(manager.getRole()).toBe(Manager);

});