const jpCities = ["tokyo", "osaka", "kyoto", "fukuoka", "sapporo"];

// const findCity = jpCities.find(city => city !== "tokyo");
// console.log(findCity);

const findOsaka = jpCities.find(city1 => city1 === "osaka");
const findLength = jpCities.find(city2 => city2.length > 6);
const findK = jpCities.find(city3 => city3.startsWith("k"));

console.log("City: ", findOsaka, "City with length > 6: ", findLength, "City starts with k: ", findK);