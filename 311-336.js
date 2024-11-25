let startDate = new Date(2000, 8, 1);
let endDate = new Date(2010, 1, 15);

let timeDifference = endDate - startDate;

console.log(timeDifference);
let daysDifference = timeDifference / (1000 * 3600 * 24);
console.log(daysDifference);

let monthsDifference = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
console.log(monthsDifference);

let yearsDifference = endDate.getFullYear() - startDate.getFullYear();
console.log(yearsDifference);
