function isArraySorted(arr){
    // optimal solution O(n)
    let largest = arr[0]
    arr.forEach(element => {
        if(element >= largest){
            largest = element
        }
    });
    return largest === arr[arr.length - 1] ? true : false
    //This has same time complexity O(n) but less space complexity
    for(let i = 1;i<arr.length;i++){
        if(arr[i] >= arr[i-1]){

        }else{
            return false
        }
    }
    return true
}

console.log(isArraySorted([1,2,3,4,5,6]));
console.log(isArraySorted([1,7,3,4,5,6]));
console.log(isArraySorted([1,1,3,4,5,5]));