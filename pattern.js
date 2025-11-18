// Space + Numbers Pattern
// 1
//  1 2
//   1 2 3

function printPattern(n) {
    for (let i = 0; i <= n; i++) {
        const blankSpaces = " ".repeat(i);
        let nums = "";
        for (let k = 1; k <= i; k++) {
            nums += k + " ";
        }

        console.log(blankSpaces + nums.trim());
    }
}

printPattern(3);

// Palindrome
function isPalindrome(num) {
    if (num < 0) return false;

    const string = String(num);
    const reversed = str.split("").reverse().join("");

    return string === reversed;
}

// Numbers Pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// function printTriangle(n) {
    // for (let i = 1; i <= n; i++) {
        // let row = "";
        // for (let j = 1; j <= i; j++) {
            // row += j + "";
        // }
        // console.log(row);
    // }
// }

// printTriangle(5);

const triangleText = (n) => {
    let x = 0;
    for (let i = 1; i <= n; i++) {
        x += i;
    }
    return x;
};

console.log(triangleText(1));
console.log(triangleText(6));
console.log(triangleText(10));






