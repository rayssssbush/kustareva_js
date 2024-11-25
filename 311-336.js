function hoursSinceYesterdayNoon() {
    let now = new Date();
    let yesterdayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12, 0, 0);
    let diffTime = now - yesterdayNoon;
    return diffTime / (1000 * 3600);
}
console.log(hoursSinceYesterdayNoon());