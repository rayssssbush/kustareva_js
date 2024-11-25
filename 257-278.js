const arr = ['hello', 'world', 'javascript'];
const result = arr.map(item => item.split('').reverse().join(''));
console.log(result);