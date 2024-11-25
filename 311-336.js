const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

console.log('Текущий день:', day);
console.log('Текущий месяц:', month);
console.log('Текущий год:', year);
