const person = {
    name: "Wick",
    age: "50"
}

const json = JSON.stringify(person);
console.log(json);
console.log(JSON.stringify(person, null, 2));


const parseJSON = '{"name":"Wick","age":"50"}';

const obj = JSON.parse(json);
console.log("Name: ", obj.name, "Age: ", obj.age);


const user = {
    name: "Wick",
    age: "50",
    skills: ["Sleep", "Eat", "Sleep Again"]
};

const userJson = JSON.stringify(user);
const parsedJson = JSON.parse(userJson);

console.log("Converted JSON: ", userJson, "Parsed JSON: ", parsedJson, "Parsed user name: ", parsedJson.name, "Parsed user skill: ", parsedJson.skills[1]);




