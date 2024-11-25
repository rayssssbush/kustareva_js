function func1() {
    return function() {
        return 1;
    };
}
function func2() {
    return function() {
        return 2;
    };
}
const result = func1()() + func2()();
console.log(result);
