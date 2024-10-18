// if a number is equal to sum of cube of digits of the number then it is an armstrong number

function armstrong(num){
    const originalNum = num
    let final = 0
    while(num > 0){
        final = final + Math.pow(lastDigit = num % 10,3)
        num = Math.floor(num/10)
    }
    return originalNum === final ? true : false
}

console.log(armstrong(371));