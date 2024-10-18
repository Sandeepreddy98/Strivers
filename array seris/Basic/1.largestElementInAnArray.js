function largest(arr){
    let max = 0
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(largest([1,5,2,7,3]));