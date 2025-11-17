class Human {
    constructor(name) {
        this.name = name;
    }

    intro() {
        console.log("Human: " + this.name);
    }
}

class Developer extends Human {
    constructor(name, language) {
        super(name);
        this.language = language;
    }

    code() {
        console.log(this.name + " codes in " + this.language);
    }
}

const dev = new Developer("John Wick", "JavaScript");

dev.intro();
dev.code();