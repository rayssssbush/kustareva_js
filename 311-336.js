function formatDate(date) {
    let parts = date.split('-');
    let year = parts[0];
    let month = parts[1];
    let day = parts[2];
    
    return `${day}.${month}.${year}`;
}
let inputDate = "2024-12-31";
let formattedDate = formatDate(inputDate);
console.log(formattedDate);
