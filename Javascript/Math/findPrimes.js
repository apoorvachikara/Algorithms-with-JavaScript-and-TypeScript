const prime = (number) => {
    const primes = [];

    for (let i = 1; i <= number; i++) {
        if(number % i === 0) primes.push(i);
    }

    return primes;
}

console.log(prime(4))