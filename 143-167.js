let result = '';

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        result += i + '' + j + ' ';
    }
}

console.log(result.trim());
