function test(func) {
    alert(func(2, 3));
}
const func = function(a, b) {
    return a + b;
};
test(func);
