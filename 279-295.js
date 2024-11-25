const arr = [1, 4, 9, 16, 25];
const result = arr.map(Math.sqrt);
console.log(result);
const result2 = arr.map((item, index) => item * (index + 1));
console.log(result2);