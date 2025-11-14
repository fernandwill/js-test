// function isAdult(age) {
    // if (age >= 20) {
        // return true;
    // } else {
        // console.log("kid");
        // return false;
    // }
// }

// console.log(isAdult(20));
// console.log(isAdult(15));

// Both the function below is the same just with different writing
// const isAdult = age => age >= 20;

// function isAdult(age) {
    // return age >= 20;
// }

// This is an arrow syntax
const isAdult = (age) => {
    if (age >= 20) {
        return true;
    } else {
        return false;
    }
}; // isAdult function declared

console.log(isAdult(20));
console.log(isAdult(10));
// Below this, on the console.log, is where the isAdult function is called.

// const isJapan = (place) => {
    // if (place === "tokyo") {
        // return true;
    // } else {
        // return false;
    // }
// };

const isJapan = place => place === "tokyo";
