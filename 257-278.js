function countdown() {
    let number = 10;
    return function() {
        number--;
        console.log(number);
    };
}

const countdownFrom10 = countdown();
countdownFrom10();
countdownFrom10();
countdownFrom10();