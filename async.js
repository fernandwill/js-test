// timeout, the simplest async function
// console.log("A");

// setTimeout(() => {
    // console.log("B");
// }, 2000);

// console.log("C");

// callback
// function fetchData(callback) {
    // setTimeout(() => {
        // console.log("Data loaded");
    // }, 2000);
// }

// fetchData(result => {
    // console.log(result);
// });

// const p = new Promise((resolve, reject) => {
    // setTimeout(() => {
        // resolve("Task complete");
    // }, 2000);
// });

// p.then(result => {
    // console.log(result);
// });

// async/await 
// function getData() {
    // return new Promise(resolve => {
        // setTimeout(() => {
            // resolve("Data received");
        // }, 2000);
    // });
// }

// async function run() {
    // console.log("Waiting...");
    // const data = await getData();
    // console.log(data);
// }

// run();

// async/await with try/catch
// function fetchUser() {
    // return new Promise((resolve, reject) => {
        // const success = Math.random() > 0.3; // 70% success rate simulation

        // setTimeout(() => {
            // if (success) {
                // resolve({name: "Wick", age: 25});
            // } else {
                // reject("API error: failed to load user");
            // }
        // }, 1500);
    // });
// }

async function run() {
    try {
        const fetch = await fetchUser();
        console.log("User loaded: ", fetch);
    } catch (err) {
        console.log("Caught error: ", err)
    }
}

run();

async function run() {
    console.log(1);

    const p = new Promise(resolve => {
        console.log(2);
        resolve(3);
    });

    console.log(4);

    const result = await p;
    console.log(result);

    console.log(5);
}

run()