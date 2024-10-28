let arr = [-2, 3, -5, 8, -1, 4];
let positiveArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveArr.push(arr[i]);
    }
}

console.log(positiveArr);
