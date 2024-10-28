let obj = {1: 125, 2: 225,3: 128, 4: 356,5: 145,6: 281,7: 452};
let result = [];

for (let key in obj) {
    let value = obj[key].toString();
    if (value[0] === '1' || value[0] === '2') {
        result.push(obj[key]);
    }
}

console.log(result);