function removeDuplicates(arr){
    //brute force
    let unique = {}
    for(let i = 0;i < arr.length ;i++){
        if(unique[arr[i]]){
            unique[arr[i]] = unique[arr[i]] + 1
        }else{
            unique[arr[i]] = 1
        }
    }
    arr = Object.keys(unique)
    return arr.length
}

function removeDuplicatesOptmial(arr){
    // Optimal - O(n)
    let i = 0
    for(let j = 1;j<arr.length;j++){
        if(arr[j] != arr[i]){
            arr[i+1] = arr[j]
            i++
        }
    }
    return i+1
}

console.log(removeDuplicates([1,1,1,2,2,3,4,5,5]));
console.log(removeDuplicatesOptmial([1,1,1,2,2,3,4,5,5]));