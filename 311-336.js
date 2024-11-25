function daysBetween() {
    let startDate = new Date(new Date().getFullYear(), 0, 1);
    let endDate = new Date(new Date().getFullYear(), 8, 10);
    let diffTime = endDate - startDate;
    return diffTime / (1000 * 3600 * 24);
}
console.log(daysBetween()); 
function daysBetweenCurrentAndNextMonth() {
    let today = new Date();
    let startDate = new Date(today.getFullYear(), today.getMonth(), 20);
    let endDate = new Date(today.getFullYear(), today.getMonth() + 1, 10);
    let diffTime = endDate - startDate;
    return diffTime / (1000 * 3600 * 24);
}
console.log(daysBetweenCurrentAndNextMonth()); 
