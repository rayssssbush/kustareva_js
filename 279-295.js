const arr = [1, -2, 3, 12, 7, 0, 9, 11];
const filteredArr = arr.filter(item => item > 0 && item < 10);

console.log(filteredArr);
const filteredArr2 = arr.filter((item, index) => item * (index + 1) < 30);

console.log(filteredArr2);