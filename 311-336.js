let startDate = new Date(1988, 2, 1);
let endDate = new Date(2000, 0, 10);
let timeDifference = endDate - startDate;
let daysDifference = timeDifference / (1000 * 3600 * 24);

console.log(daysDifference);
