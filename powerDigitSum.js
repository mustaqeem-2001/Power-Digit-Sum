function powerDigitSum (num, pow) {
    let curr = 1;
    let total = 1n;
    let sum = 0;
    while (curr <= pow) {
        total *= BigInt(num);
        curr++;
    }
    let arr = total.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        sum = sum + Number(arr[i]);
    }
    return sum;
}

console.log(powerDigitSum(2, 1000));

