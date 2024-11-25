function counter() {
    let count = 0;
    return function() {
        count = count === 5 ? 1 : count + 1;
        console.log(count);
    };
}
const countCalls = counter();
countCalls();
countCalls();
countCalls();
countCalls();
countCalls();
countCalls();
countCalls();