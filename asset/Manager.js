const Employee = require('./Employee');

class Manager extends Employee {

	constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this._officeNumber = officeNumber;
        this._role = 'Office Number:'
	}

    get officeNumber() {
        return this._officeNumber;
    }

    set officeNumber(num) {
        this._officeNumber = num;
    }

    getDiffRole() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager 