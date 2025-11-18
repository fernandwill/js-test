const p1 = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));

Promise.race([p1, p2]).then(result => {
    console.log(result);
});

function timeout(ms) {
    return new Promise((_, reject) => 
    setTimeout(() => reject("Timeout exceeded"), ms));
}

async function fetchWithTimeout(url, ms) {
    return Promise.race([
        fetch(url),
        timeout(ms)
    ]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1000)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("Error:", err));

const a = new Promise(resolve => setTimeout(() => resolve("A wins"), 1000));  // 1 second
const b = new Promise(resolve => setTimeout(() => resolve("B wins"), 3000));  // 3 second

Promise.race([a, b]).then(result => console.log(result));

