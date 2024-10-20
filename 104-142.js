let num1 = 25;
let str_num = String(num1);
let b = 0;

if (10 <= num1 && num1 <= 99) {
  for (let i = 0; i < str_num.length; i++) {
    b += parseInt(str_num[i]);
  }

  if (b <= 9) {
    console.log("Сумма цифр однозначна: " + b);
  } else {
    console.log("Сумма цифр двухзначна: " + b);
  }
} else {
  console.log("Число не попадает в диапазон от 10 до 99.");
}