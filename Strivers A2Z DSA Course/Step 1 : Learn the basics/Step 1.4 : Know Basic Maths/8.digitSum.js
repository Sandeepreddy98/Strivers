function digitSum(num){
    while(num > 9){
        let rest = Math.floor(num/10)
        let last = Math.floor(num%10)
        num = rest+last
    }
    return num
}

console.log(digitSum(4349));