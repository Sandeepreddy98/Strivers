function missingNumberBruteForce(arr){
    for(let i = 0 ;i < arr.length;i++){
        let flag = false
        for(let j = 0;j<arr.length;j++){
            if(i === arr[j]){
                flag = true
                break
            }
        }
        if(!flag){
            return i
        }
    }
}
// Time Complexity - O(n^2)
// Space Complexity - O(1) 
console.log(missingNumberBruteForce([0,3,1]));

function missingNumberBetter(arr){
    let hash = Array(arr.length+1).fill(-1)
    for(let i = 0;i<arr.length;i++){
        hash[arr[i]] = arr[i]
    }
    for(let i = 0; i < hash.length;i++){
        if(hash[i] === -1){
            return i
        }
    }
}
// Time Complexity - O(2n)
// Space Complexity - O(n) for hash 
console.log(missingNumberBetter([0,3,1]));

function missingNumberOptmialUsingMath(arr){
    let sumOfNaturalNumbers = (arr.length * (arr.length+ 1))/2
    let sumOfElementsInArray = 0
    for(let i = 0 ;i < arr.length;i++){
        sumOfElementsInArray = sumOfElementsInArray + arr[i]
    }
    return sumOfNaturalNumbers-sumOfElementsInArray
}

// Time Complexity - O(n)
// Space Complexity - O(1) 
console.log(missingNumberOptmialUsingMath([0,3,1]));

function missingNumberOptimalUsingXOR(arr){
    let xor1;
    let xor2;
    for(let i = 0;i < arr.length;i++){
        xor1 = xor1 ^ i
        xor2 = xor2 ^ arr[i]
    }
    return xor1 ^ xor2
}

// Time Complexity - O(n)
// Space Complexity - O(1) 
console.log(missingNumberOptmialUsingMath([0,3,1]));