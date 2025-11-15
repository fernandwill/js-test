// POST Request
// async function createTodo() {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        // method: "POST",
        // headers: {
            // "Content-Type": "application/json"
        // },
        // body: JSON.stringify({
            // title: "Learn REST API",
            // completed: false
        // })
    // });

    // const data = await response.json();
    // console.log("Created: ", data);
// }

async function postTest() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": "Hello Wick",
                "body": "I am John Wick",
                "userId": 77
            })
        });

        const data = await response.json();
        console.log("Post created: ", data.title);
    } catch (err) {
        console.log("Error: ", err);
    }
}

postTest();


// PUT Request
async function updatePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Wick",
                age: 50,
                city: "Miyazaki"
            })
        });

        const data = await response.json();
        console.log("User updated: ", data.name);
    } catch (err) {
        console.log("Error: ", err)
    }
}

updatePost();


// GET Request
async function getStuff() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
        const stuff = await response.json();
    
        console.log("Stuff title: ", stuff.title);
    } catch (err) {
        console.log("Error: ", err);
    }
}

getStuff();


// DELETE Request
async function delStuff() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/3", {
            method: "DELETE"
        });

        console.log("User deleted: 3");
    } catch (err) {
        console.log("Error: ", err);
    }
}

delStuff();
