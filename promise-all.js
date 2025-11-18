function task(ms, value) {
    return new Promise(resolve => 
        setTimeout(() => resolve(value), ms)
    );
}

// async function run() {
    // const results = await Promise.all([
        // task(1000, "A"),
        // task(2000, "B"),
        // task(1500, "C")
    // ]);

    // console.log(results);
// }

// run();

async function getTodos() {
    try {
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/1",
            "https://jsonplaceholder.typicode.com/todos/2",
            "https://jsonplaceholder.typicode.com/todos/3"
        ];

        // 1) Kick off all fetches in parallel
        const responses = await Promise.all(
            urls.map(url => fetch(url))
        );

        // 2) Convert all responses to JSON in parallel
        const todos = await Promise.all(
            responses.map(res => res.json())
        );

        console.log(todos);
    } catch (err) {
        console.log("Error:", err);
    }
}

getTodos();
