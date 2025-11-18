function pipe(...fns) {
    return function (value) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

const filterGreaterThan10 = x => x > 10;
const greaterThan10 = arr => arr.filter(filterGreaterThan10);
const triple = arr => arr.map(x => x * 3);
const maxVal = arr => arr.reduce((acc, num) => {
    return Math.max(acc, num);
}, 0);

const processNumbers = pipe(
    greaterThan10,
    triple,
    maxVal
);

const result = processNumbers([5, 12, 7, 20, 33]);
console.log(result);