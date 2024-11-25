function test(func) {
    return func([1, 2, 3, 4, 5]);
}
const result = test(function(arr) {
    return arr.map(num => num ** 3);
});
console.log(result);