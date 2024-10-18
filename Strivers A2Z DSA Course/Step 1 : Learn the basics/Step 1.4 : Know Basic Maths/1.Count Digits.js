// If the number is divisable by something then time complexity will - logn even if we use a while loop.
function printDigits(num) {
    let counter = 0
    while(num > 0){
        num = Math.floor(num/10)
        counter++
    }
    return counter
}

function printUsingLog(num){
    return Math.floor(Math.log10(num)+1)
}

console.log(printUsingLog(6789));