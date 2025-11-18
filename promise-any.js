const p1 = new Promise((_, reject) => setTimeout(() => reject("Rejects"), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Rejects"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Sub-Zero Wins."), 3000));

Promise.any([p1, p2, p3])
.then(result => console.log(result))
.catch(err => console.log("All failed: ", err));
