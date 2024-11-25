function flattenArray(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

const arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
console.log(flattenArray(arr));