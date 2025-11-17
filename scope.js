let x = 10;

function outer() {
    let x = 20;

    if (true) {
        let x = 30;
        console.log(x);
    }

    console.log(x);
}

console.log(x);
outer();