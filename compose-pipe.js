function compose(...fns) {
    return function (value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

function pipe(...fns) {
    return function (value) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

const composed = compose(square, double, increment);
console.log(composed(2));

const piped = pipe(increment, double, square);
console.log(piped(2));

const add3 = x => x + 3;
const multiply5 = x => x * 5;
const squareResult = x => x * x;

const piped2 = pipe(add3, multiply5, squareResult);
console.log(piped2(2));


