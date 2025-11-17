const user = {
    name: "Wick",
    show() {
        const inner = () => {
        console.log(this.name);
    };
    inner();
    }
};

// user.showName();

// const fn = user.show.bind(user);
user.show();

