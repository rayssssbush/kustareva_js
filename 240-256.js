function test(func) {
    console.log(func(3)); // Вызов переданной функции с аргументом 3
}

test(function(num) {
    return num ** 3;
});
