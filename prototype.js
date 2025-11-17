function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log("Hi " + this.name);
};

const u = new User("John Wick");
u.sayHi();