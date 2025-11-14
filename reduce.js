const jpCities = ["tokyo", "osaka", "kyoto", "fukuoka", "sapporo"];

const cityWithO = jpCities.reduce((acc, city) => {
    if (city.startsWith("o")) acc++;
    return acc;
}, 0);


const nums = [5, 10, 20, 40];
const totalNums = nums.reduce((acc, num) => {
    return acc + num;
}, 0);

const maxValue = nums.reduce((acc, num) => {
    return Math.max(acc, num);
}, 0);

console.log("City with O: ", cityWithO, "Total: ", totalNums, "Maximum value: ", maxValue);