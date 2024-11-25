function each(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i], i, arr);
    }
}
let numbers = [1, 2, 3, 4, 5];
each(numbers, function(num) {
    return num * 2;
});
console.log(numbers);
