function rotateArrayByN(arr,d){
    if(arr.length === d) return arr
    d = d % arr.length
    const temp = arr.splice(0,d)
    return [...arr,...temp]
}

// console.log(rotateArrayByN([1,2,3,4,5,6,7],3));

function rotateArrayByNOptimal(arr,d){
    reverse(arr,0,arr.length-1)
    reverse(arr,0,d-1);
    reverse(arr,d,arr.length-1)
    return arr
}

function reverse(arr,start,end){
    while(start <= end){
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}

console.log(rotateArrayByNOptimal([1,2,3,4,5,6,7],3));

console.log(rotateArrayByNOptimal([-1,-100,3,99],2));
