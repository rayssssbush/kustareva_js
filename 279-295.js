const arr = [2, 3, 5, 7, 8];
const allValid = arr.every((item, index) => item * (index + 1) < 30);
console.log(allValid);