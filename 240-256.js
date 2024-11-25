function test(func) {
    console.log(func(3));
}
const func = function(num) {
    return num ** 3;
};
test(func);
