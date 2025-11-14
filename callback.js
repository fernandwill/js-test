// function greet(name) {
    // console.log("Hello " + name);
// }

// function processUser(callback) {
    // callback("Wick");
// }

// processUser(greet);


// function doMath(a, b, callback) {
    // const result = callback(a, b);
    // console.log("Result: ", result);
// }

// function add(x, y) {
    // return x + y;
// }

// function multiply(x, y) {
    // return x * y;
// }

// doMath(5, 10, add);
// doMath(5, 10, multiply);

// anonymous callback
// Instead if: doMath(5, 10, add);
// There is this option:
// doMath(5, 10, (x, y) => x + y);

function runTasks(callback) {
    console.log("Task started.");
    callback();
    console.log("Task finished.");
}

runTasks(() => {
    console.log("Hello Wick");
    console.log("Callback executed");
    console.log(new Date().toLocaleTimeString());
});

