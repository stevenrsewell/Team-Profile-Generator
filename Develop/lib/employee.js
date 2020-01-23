class employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.role;
    }
}