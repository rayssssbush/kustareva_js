let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let key in obj) {
    let firstDigit = String(obj[key])[0];
    if (firstDigit === '1' || firstDigit === '2') {
        sum += obj[key];
    }
}
console.log(sum);

