function letsCount() {
    let n = 0;

    const timer = setInterval(() => {
        console.log(n);

        n++;

        if (n > 5) {
            clearInterval(timer);
        }
    }, 1000)
}

letsCount();