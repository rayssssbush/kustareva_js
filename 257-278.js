function squareArrayElements(arr) {
    return arr.map(item => {
        if (Array.isArray(item)) {
            return squareArrayElements(item);
        } else {
            return item * item;
        }
    });
}

const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(squareArrayElements(arr));
