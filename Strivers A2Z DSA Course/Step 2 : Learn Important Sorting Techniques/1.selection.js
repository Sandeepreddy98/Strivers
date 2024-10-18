function selectionSort(array){
    const n = array.length
    for(let i = 0;i<=n-2;i++){
        let minIndex = i
        minIndex = getMinIndex(minIndex,array)
        swap(array,minIndex,i)
    }
    return array
}

function swap(array,a,b){
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
    return array
}

function getMinIndex(min,array){
    for(let i = min;i < array.length;i++){
        if(array[i] < array[min]){
            min = i
        }
    }
    return min
}


console.log(selectionSort([13,46,24,52,20,9]));
