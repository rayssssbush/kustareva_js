function average(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  console.log(average(1, 2, 3, 4, 5));
  