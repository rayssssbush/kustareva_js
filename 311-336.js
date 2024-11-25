function getLastDayOfMonth(month, year) {
    let date = new Date(year, month, 0);
    return date.getDate();
  }
  
  console.log(getLastDayOfMonth(5, 2025));
  
  let lastDayOfMay2025 = new Date(2025, 4, getLastDayOfMonth(5, 2025));
  let dayOfWeek = lastDayOfMay2025.getDay();
  console.log(dayOfWeek);
  