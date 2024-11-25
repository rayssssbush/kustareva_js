const obj = {
    sum: function(arr) {
        return arr.reduce((acc, num) => acc + num, 0);
    },
    sumOfSquares: function(arr) {
        return arr.reduce((acc, num) => acc + num ** 2, 0);
    },
    sumOfCubes: function(arr) {
        return arr.reduce((acc, num) => acc + num ** 3, 0);
    }
};
const numbers = [1, 2, 3];

console.log(obj.sum(numbers));
console.log(obj.sumOfSquares(numbers));
console.log(obj.sumOfCubes(numbers));
