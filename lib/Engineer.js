const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(engineerGithub) {
        super();
        this.engineerGithub = engineerGithub;
    }
    getGithub() {
        return this.engineerGithub;
    }
    getRole() {
        return Engineer;
    }
}


module.exports = Engineer;