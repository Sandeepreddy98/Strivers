function palindromeNumber(num){
    const originalNum = num
    let reversed = 0
    num = num*Math.sign(originalNum)
    while (num > 0) {
        let lastDigit = num %10
        num = Math.floor(num/10)
        reversed = reversed*10 + lastDigit
    }
    return originalNum === reversed * Math.sign(originalNum) ? true : false
}

console.log(palindromeNumber(-121));