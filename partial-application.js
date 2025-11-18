function add(a, b) {
    return a + b;
}

const add10 = add.bind(null, 10);

console.log(add10(5));
console.log(add10(20));

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(10));

function partial(fn, a) {
    return function(b) {
        return fn(a, b);
    };
}

function multiply(a, b) {
    return a * b;
}

const multiply10 = partial(multiply, 10);
console.log(multiply10(5));
console.log(multiply10(7));