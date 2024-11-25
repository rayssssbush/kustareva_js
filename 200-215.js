function areAllDigitsOdd(number) {
    return number
        .toString()
        .split('')
        .every(digit => parseInt(digit) % 2 !== 0);
}

console.log(areAllDigitsOdd(13579));
console.log(areAllDigitsOdd(13578));
