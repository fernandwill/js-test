const jpCity = {
    name: "Tokyo",
    region: "Japan",
    population: "7 mil"
};

jpCity.name = "Fukuoka";

console.log("Japan city: ", jpCity.name);

const key = "population";
for (let key in jpCity) {
    console.log(key, jpCity[key]);
}


const car = {
    brand: "Toyota",
    model: "Supra",
    year: 1998
};

console.log(car.brand);

car.year = 2024;
car.color = "red";
delete car.model;

for (let key in car) {
    console.log(key, car[key])
}