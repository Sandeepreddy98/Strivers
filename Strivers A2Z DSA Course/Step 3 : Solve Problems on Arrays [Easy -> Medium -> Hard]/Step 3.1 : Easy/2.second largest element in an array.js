function secondLargest(arr){
    //better - O(2n)
    let largest = arr[0]
    arr.forEach(element => {
        if(element > largest){
            largest = element
        }
    });
    let secondLargest = -1
    arr.forEach(element => {
        if(element > secondLargest && element !== largest){
            secondLargest = element
        }
    })
    return secondLargest
}

function secondLargestOptimal(arr){
    //Optimal-O(n)
    let largest = arr[0]
    let secondLargest = -1
    arr.forEach(element => {
        if(element > largest){
            secondLargest = largest
            largest = element
        }else if(element > secondLargest && element < largest){
            secondLargest = element
        }
    })
    return secondLargest
}

console.log(secondLargest([5,3,4,7,8,1]));
console.log(secondLargestOptimal([5,3,4,7,8,1]));