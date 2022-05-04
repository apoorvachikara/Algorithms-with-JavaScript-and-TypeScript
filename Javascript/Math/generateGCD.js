const GCD = (a, b) => {
    if ( a === 0 && b === 0) return 0;
    else if (a === 0) return b;
    else if (b === 0) return a;
    else if (a === b) return a;
    else if (a > b) return GCD(a - b , b);
    else return GCD(a, b - a);
}

console.log(GCD(98, 56));