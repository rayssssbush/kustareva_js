let arr = [1, 2, 3, 5, 8, 10];
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        found = true;
        break;
    }
}
console.log(found ? "Есть элемент 5" : "Элемента 5 нет");