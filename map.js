const numArray = [3, 6, 9];

const doubled = numArray.map(n => n * 2);

console.log(doubled);


const priceIDR = [100, 200, 300];

const priceYen = priceIDR.map(p => p * 110);

console.log(priceYen);


const userArray = [
    {name: "Wick", age: 25},
    {name: "John", age: 40},
    {name: "Pablo", age: 66}
];

const userName = userArray.map(user => user.name);

console.log(userName);


const itemArray = [
    {price: 100},
    {price: 200},
    {price: 300},
];

const withTax = itemArray.map(item => ({
    price: item.price,
    tax: item.price * 0.1
}));

console.log(withTax);


const jpCities = ["tokyo", "osaka", "kyoto", "fukuoka", "sapporo"];

// uppercase
const upperCase = jpCities.map(city => city.toUpperCase())
console.log(upperCase);

// Add "City of" before every city
const cityTitle = jpCities.map(city => `City of + ${city}`);
console.log(cityTitle);

// Create array of objects from the city
const cityObjects = jpCities.map(city => ({name: city}));
console.log(cityObjects);