class Employee {

	constructor(name, id, email) {
        this._name = name;
        this._id = id;
        this._email = email;
	}

    get name() {
        return this._name
    }

    get id() {
        return this._id
    }

    get email() {
        return this._email
    }

    get role() {
        return this._role;
    }

    set name(name) {
        this._name = name;
    }

    set id(employeeID) {
        this._id = employeeID;
    }

    set email(e) {
        this._email = e;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}

let e = new Employee();
console.log(typeof(e))

module.exports = Employee; 