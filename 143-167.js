let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let firstDigit = String(arr[i])[0];

    if (firstDigit === '1' || firstDigit === '2') {
        sum += arr[i];
    }
}

console.log(sum);
