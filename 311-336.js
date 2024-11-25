let today = new Date();
let dayOfWeek = today.getDay();
let daysUntilSunday = (7 - dayOfWeek) % 7; 
console.log(`До следующего воскресенья осталось ${daysUntilSunday} дней.`);
