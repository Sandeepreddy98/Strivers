function moveZerosToEnd(arr){
    // step - 1 => Store non-zero's in temp array
    let temp = []
    arr.forEach(element => {
        if(element !== 0){
            temp.push(element)
        }
    });
    //step - 2 => place the elements of temp into the right positions of original array
    for(let i = 0;i < arr.length ;i++){
        arr[i] = temp[i]
    }

    //step-3 => fill the rest of places with 0's
    for(let i=temp.length;i<arr.length;i++){
        arr[i] = 0
    }
    return arr
}

function moveZerosToEndOptimal(arr){
    let j = -1
    for(let i = 0 ;i < arr.length;i++){
        if(arr[i] === 0){
            j = i;
            break
        }
    }

    for(let i = j+1;i<arr.length;i++){
        if(arr[i] !== 0){
            swap(arr,i,j)
            j++
        }
    }
    return arr
}

function swap(arr,i,j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// console.log(moveZerosToEnd([1,2,0,3,4,0,5]));
console.log(moveZerosToEndOptimal([1,2,0,3,4,0,5]));