function runTwice(callback) {
    callback();
    callback();
}

runTwice(() => console.log("Hello"));

function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

repeat(() => console.log("Wick"), 3);