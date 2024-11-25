function secondsSinceStartOfDay() {
    let now = new Date();
    return now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600;
}
function secondsUntilEndOfDay() {
    let now = new Date();
    let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    return (endOfDay - now) / 1000;
}
function daysUntilNewYear() {
    let now = new Date();
    let newYear = new Date(now.getFullYear() + 1, 0, 1);
    return Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));
}
function fridays13() {
    let count = 0;
    let year = new Date().getFullYear();
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            count++;
        }
    }
    return count;
}
function yearThreeMonthsAgo() {
    let now = new Date();
    now.setMonth(now.getMonth() - 3);
    return now.getFullYear();
}
function lastDayOfCurrentMonth() {
    let now = new Date();
    let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return lastDay.toLocaleString('en-us', { weekday: 'long' });
}
function isLeapYear() {
    let year = new Date().getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function previousLeapYear() {
    let year = new Date().getFullYear();
    while (!((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) {
        year--;
    }
    return year;
}
function nextLeapYear() {
    let year = new Date().getFullYear();
    while (!((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) {
        year++;
    }
    return year;
}
console.log(secondsSinceStartOfDay());
console.log(secondsUntilEndOfDay());
console.log(daysUntilNewYear());
console.log(fridays13());
console.log(yearThreeMonthsAgo());
console.log(lastDayOfCurrentMonth());
console.log(isLeapYear());
console.log(previousLeapYear());
console.log(nextLeapYear());