function saveName(name) {
    localStorage.setItem("username", name);
}

function getName() {
    const storedName = localStorage.getItem("username");
    console.log("Stored name: ", storedName);
}

function delName() {
    localStorage.removeItem("username");
}

saveName("Wick");
getName();
delName();