function largestElement(arr){
    let largest = arr[0]
    arr.forEach(element => {
        if(element > largest){
            largest = element
        }
    });
    return largest
    //Time complexity O(n)
}

console.log(largestElement([5,3,4,7,8,1]));