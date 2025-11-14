// const jpCities = ["tokyo", "osaka", "kyoto", "fukuoka", "sapporo"];
// const copyCities = [...jpCities];

// console.log(copyCities);

// const kuruma = {
    // brand: "Toyota",
    // year: 2024
// }
// const copyKuruma = kuruma;

// console.log(copyKuruma);

const jpCities = ["tokyo", "osaka", "kyoto"];
const kuruma = {
    brand: "Toyota",
    year: 1998
};

const newJpCities = [...jpCities, "fukuoka"];
const allCities = [...jpCities, "sapporo", "nara"];
const updatedKuruma = {...kuruma, color: "black"};
const newKuruma = {...updatedKuruma, year: 2024};

console.log("City with Fukuoka: ", newJpCities, "All cities: ", allCities, "Updated car: ", updatedKuruma, "New car: ", newKuruma);