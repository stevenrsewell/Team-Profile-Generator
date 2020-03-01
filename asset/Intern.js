const Employee = require('./Employee');

class Intern extends Employee {

	constructor(name, id, email, school) {
        super(name, id, email);
        this._school = school;
        this._role = "School:"
	}

    get school() {
        return this._school;
    }

    set school(school) {
        this._school = school;
    }

    getDiffRole() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern 
