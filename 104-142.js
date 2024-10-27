let num = 12340;
let lastDigit = String(num)[String(num).length - 1];

if (lastDigit === '0') {
    console.log('Последняя цифра — 0');
} else {
    console.log('Последняя цифра не равна 0');
}
