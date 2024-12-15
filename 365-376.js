let number = 100;
let timerId = setInterval(() => {
    number--;
    console.log(number);
    if (number <= 0) {
        clearInterval(timerId);
    }
}, 1000);
