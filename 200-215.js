function divideUntilLessThanTen(num) {
    let iterations = 0;
    while (num >= 10) {
        num /= 2;
        iterations++;
    }
    return iterations;
}

const result = divideUntilLessThanTen(100);
console.log(result);