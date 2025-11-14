// function sum(...nums) {
    // return nums.reduce((acc, n) => acc + n, 0);
// }

// console.log(sum(5, 10, 20));

// function logNames(...names) {
    // console.log(names);
// }

// logNames("Wick", "Yua", "Yui");

// const kuruma = {
    // brand: "Toyota",
    // year: 2024,
    // color: "black",
    // engine: "V6"
// };

// const{brand, ...others} = kuruma;

const jpCities = ["tokyo", "osaka", "kyoto", "fukuoka", "sapporo"];
const person = {
    name: "Wick",
    age: "55",
    city: "Tokyo",
    skill: "Assassination"
};

const [firstCity, ...remainingCities] = jpCities;
const {name, ...details} = person;

console.log("First city: ", firstCity, "Remaining cities: ", remainingCities, "Name: ", name, "Person details: ", details)

function multiply(...nums) {
    return nums.reduce((acc, n) => acc / n, 0);
}
console.log("Multiplied nums: ", multiply(5, 10, 20));
