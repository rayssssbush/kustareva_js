function square(num) {
    return num ** 2;
}
function cube(num) {
    return num ** 3;
}
function func(a, b) {
    return square(a) + cube(b);
}
console.log(func(2, 3));