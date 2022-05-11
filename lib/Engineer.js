const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, engineerGithub) {
        super(name, id, email);
        this.engineerGithub = engineerGithub;
    }
    getGithub() {
        return this.engineerGithub;
    }
    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;