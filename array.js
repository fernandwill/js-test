const jpCity = ["osaka", "tokyo", "kyoto"];

// for (let i = 0; i < jpCity.length; i++) {
    // console.log(`jpCity ${i}: ${jpCity[i]}`);
// }

// if I want to search only for "tokyo" in the array, how can I?
// for (let i = 0; i < jpCity.length; i++) {
// if (jpCity[i] === "tokyo")
// console.log("Found: ", jpCity[i]);
// }

// below is the code monkey way
const result = jpCity.find(city => city === "tokyo");
const index = jpCity.indexOf("tokyo");
console.log(`Current city: `, result, `Array index: `, index);



const numArr = [5, 10, 20, 40, 80, 160];
const numSum = 170;

for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
        if (numArr[i] + numArr[j] === numSum) {
            console.log("Found: ", numArr[i], "+", numArr[j], "=", numSum);
        }
    }
}

// The LeetCode Solution
// function twoSum(nums, target) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
    // const needed = target - nums[i];

    // if (map[needed] !== undefined) {
    //   return [map[needed], i]; // index positions
    // }

    // map[nums[i]] = i;
//   }
// }

// console.log(twoSum([5,10,20,40,80,160], 85));
