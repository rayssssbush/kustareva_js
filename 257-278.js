function sumOfSquares(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] ** 2 + sumOfSquares(arr.slice(1));
    }
}

let arr = [1, 2, 3, 4, 5];
console.log(sumOfSquares(arr));
