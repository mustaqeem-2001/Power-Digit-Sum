function powerDigitSum(num, pow) {
    // let total = BigInt(num) ** BigInt(pow); // Can do like this, instead of while loop and counter var. But not all languages have the ** exponentiation operator.
    let counter = 0;
    let total = 1n;
    let sum = 0n;
    
    while (counter < pow) {
        total *= BigInt(num);
        counter++;
    }
    let split = total.toString().split('');
    for (let i = 0; i < split.length; i++) {
        sum += BigInt(split[i]);
    }
    return sum;
}

console.log(powerDigitSum(2, 1000));