for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let sumOfFirstTwoDigits = Number(str[0]) + Number(str[1]);
    
    if (sumOfFirstTwoDigits === 5) {
        console.log(i);
    }
}
