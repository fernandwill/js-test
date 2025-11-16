function createScore() {
    let score = 0;

    return function () {
        score += 10;
        console.log("Current score: ", score);
    };
}

const scoreCounter = createScore();
scoreCounter();
scoreCounter();
scoreCounter();

// async closure
function helloMsg(msg) {
    return function () {
        setTimeout(() => {
            console.log("Message: ", msg);
        }, 2000);
    };
}

const theMsg = helloMsg("Hello John");
theMsg();