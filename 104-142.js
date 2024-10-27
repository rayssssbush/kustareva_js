let num = 123321;
let str = String(num);

let sumFirstHalf = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sumSecondHalf = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (sumFirstHalf === sumSecondHalf) {
    console.log('да');
} else {
    console.log('нет');
}
