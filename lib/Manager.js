const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(officeNumber){
        super();
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return Manager;
    }
}



module.exports = Manager;