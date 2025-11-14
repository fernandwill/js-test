const jpCities = ["tokyo", "osaka", "kyoto", "fukuoka", "sapporo"];

// const filterCity = jpCities.filter(city => city.startsWith("s"));
// console.log(filterCity);

// const filterCity = jpCities.filter(city => city.length > 5);
// console.log(filterCity);

const filterCity = jpCities.filter(city => city !== "tokyo");
console.log(filterCity);