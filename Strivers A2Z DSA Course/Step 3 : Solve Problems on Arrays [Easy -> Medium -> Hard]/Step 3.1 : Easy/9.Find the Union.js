function findUnion(arr1,arr2){
    const uniqueSet = new Set()
    for(let element of arr1){
        uniqueSet.add(element) // TC - O(n1logn) SC- O(n1)
    }

    for(let element of arr2){
        uniqueSet.add(element) // O(n2logn) SC- O(n2)
    }
    return Array.from(uniqueSet) // O(n1+n2) SC - O(n1+n2) to return the array
}

// console.log(findUnion([1,2,3,2,4,5],[1,2,3,4,5,6]));

function findUnionOptimal(arr1,arr2){ // using two pointer approach //TC - O(n1+n2) SC - O(n1+n2) for returning the array
    let i = 0;
    let j = 0;
    let unionArray = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            if(unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]){
                unionArray.push(arr1[i])
            }
            i++
        }else{
            if(unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]){
                unionArray.push(arr2[j])
            }
            j++
        }
    }

    while(j < arr2.length){
        if(unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]){
            unionArray.push(arr2[j])
        }
        j++
    }
    
    while(i < arr1.length){
        if(unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]){
            unionArray.push(arr1[i])
        }
        i++
    }
    return unionArray
}

console.log(findUnionOptimal([1,2,3,4,5],[1,2,3,4,5,6]));
