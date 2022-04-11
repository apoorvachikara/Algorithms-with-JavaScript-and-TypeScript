const fraction = (numerator, denominator) => {
        let res = '';

        let rem = numerator % denominator;
        const remMapping = new Map();
        
        while((rem !== 0) && (!remMapping.has(rem))) {
            remMapping.set(rem, res.length);
            rem *= 10;
            const quotient = Math.trunc(rem / denominator);
            res += quotient.toString(); 
            rem = numerator % denominator; 
        }

        if (rem === 0) {
            return '';
        } else if (remMapping.has(rem)) {
            return res.substring(remMapping.get(rem));
        }

        return '';
}

console.log(fraction(2,3))