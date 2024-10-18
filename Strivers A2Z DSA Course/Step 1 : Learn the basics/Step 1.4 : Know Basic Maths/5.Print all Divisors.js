//O(n) time complexity
function printDivisors(num){
    for(let i = 1;i<=num;i++){
        if(num % i === 0){
            console.log(i);
        }
    }
}

// time complexity

function printDivisors(num){
    for(let i = 1;i <= Math.sqrt(num);i++){
        if(num % i === 0){
            console.log(i);
            if(num /i !== i){
                console.log(num/i);
            }
        }
    }
}

printDivisors(36)