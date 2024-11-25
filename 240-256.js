function test(func1, func2, func3) {
    const sum = func1() + func2() + func3();
    console.log(sum);
}
test(
    () => 1,
    () => 2, 
    () => 3 
);
