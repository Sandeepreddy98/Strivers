function primeNumber(num){
    if(num < 2){
        return false
    }
    for(let i = 2;i*i<num;i++){
        if(num %i === 0){
            return false
        }
    }
    return true
}

console.log(primeNumber(4));