let today = new Date();
let dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log("Сегодня выходной день.");
} else {
    console.log("Сегодня рабочий день.");
}
