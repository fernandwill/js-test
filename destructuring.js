// const nihonJin = {
    // name: "Yua",
    // age: "17",
    // skills: ["Sleep", "Eat", "Sleep Again"],
    // location: {
        // city: "Tokyo",
        // country: "Japan",
        // ward: "Shibuya"
    // }
// };

// const {name, location: {city, country, ward}} = nihonJin;


// mixed destructuring
const obj = {
    cities: ["tokyo", "osaka", "kyoto"]
};

const {cities: [firstCity, secondCity]} = obj;

const nihonJin2 = {
    namae: "Yua",
    age: "17",
    skills: ["Sleep", "Eat", "Sleep Again"],
    location: {
        city: "Tokyo",
        country: "Japan",
        ward: "Shibuya"
    }
};

const {namae, age} = nihonJin2;
const {location: {city}} = nihonJin2;
const [firstSkill] = nihonJin2.skills;
const {location: {country: nation}} = nihonJin2;

console.log("Name: ", namae, "Age: ", age, "City: ", city, "First skill: ", firstSkill, "Nation: ", nation);

