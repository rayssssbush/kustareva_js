let month = 4;

if (month >= 1 && month <= 2 || month === 12) {
    console.log('Зима');
} else if (month >= 3 && month <= 5) {
    console.log('Весна');
} else if (month >= 6 && month <= 8) {
    console.log('Лето');
} else if (month >= 9 && month <= 11) {
    console.log('Осень');
} else {
    console.log('Неверный номер месяца');
}