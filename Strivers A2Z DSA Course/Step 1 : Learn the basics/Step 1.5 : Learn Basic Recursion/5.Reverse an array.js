//parameterised way
function reverse(arr,reversed){
    if(arr.length === 0){
        return reversed
    }
    let lastEle = [arr.pop()]
    return reverse(arr,[...reversed,...lastEle])
}

function reverseArray(arr){
    return reverseLogic(arr,0,arr.length-1)
}

function reverseLogic(arr,start,end){
    if(start>=end){
        return arr
    }
    [arr[start],arr[end]] = [arr[end],arr[start]]
    return reverseLogic(arr,start+1,end-1)
}

function reverseArrayWithoutStartEnd(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is reversed
    }

    // Swap the first and last elements
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

    // Recur on the subarray excluding the first and last elements
    return [arr[0], ...reverseArrayWithoutStartEnd(arr.slice(1, -1)), arr[arr.length - 1]];
}
console.log(reverse([1,2,3,4,5],[]));

console.log(reverseArray([1,2,3,4,5]));

console.log(reverseArrayWithoutStartEnd([1,2,3,4,5]))