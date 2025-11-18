const p1 = new Promise(resolve => setTimeout(() => resolve("Done A"), 1000));
const p2 = new Promise((_,reject) => setTimeout(() => reject("Failed B"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Done C"), 3000));

Promise.allSettled([p1, p2, p3]).then(results => {
    console.log(results);
});

