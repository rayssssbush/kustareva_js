function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 17;
console.log(isPrime(number) ? 'Число простое' : 'Число не является простым');
