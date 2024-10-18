function reverse(num){
    const originalSign = num > 0 ? 1 : -1
    let reversed = 0
    num = num*originalSign
    while (num > 0) {
        let lastDigit = num %10
        num = Math.floor(num/10)
        reversed = reversed*10 + lastDigit
    }
    return reversed * originalSign
}

console.log(reverse(1534236469));