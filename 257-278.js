function flattenArrayToString(arr) {
    let result = '';
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result += flattenArrayToString(item);
        } else {
            result += item;
        }
    });
    return result;
}

const arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
console.log(flattenArrayToString(arr));