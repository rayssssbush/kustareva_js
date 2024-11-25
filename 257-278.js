function countdown() {
    let number = 10;
    return function() {
        if (number > 0) {
            number--;
            console.log(number);
        } else {
            console.log("Отсчет окончен");
        }
    };
}
const countdownFrom10 = countdown();
countdownFrom10();
countdownFrom10();
countdownFrom10();
countdownFrom10();
countdownFrom10();
countdownFrom10();