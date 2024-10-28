let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] += 1;
}

console.log(obj);
