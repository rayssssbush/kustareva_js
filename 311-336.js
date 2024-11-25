function hoursSinceStartOfDay() {
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return (now - startOfDay) / (1000 * 3600);
}

console.log(hoursSinceStartOfDay());
