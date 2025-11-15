async function displayUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(user => {
        const p = document.createElement("p");
        p.textContent = user.name;
        document.body.appendChild(p);
    });
}

displayUsers();

async function displayTodo() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const todo = await res.json();

    const p = document.createElement("p");
    p.textContent = `Title: ${todo.title}`;
    document.body.appendChild(p);
}

displayTodo();

// if running from Nodejs
// async function displayTodo() {
    // try {
        // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        // const data = await res.json();
        // console.log("Title: ", data.title)
    // } catch (err) {
        // console.log("Error: ", err);
    // }
// }

// displayTodo();