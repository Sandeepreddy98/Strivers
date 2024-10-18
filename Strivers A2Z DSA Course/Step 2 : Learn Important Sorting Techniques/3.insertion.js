function insertionSort(array){
    for(let i = 1;i<array.length;i++){
        let selectedElement = array[i]
        for(let j = i-1;j>=0;j--){
            if(array[j] < array[j-1]){
                swap(array,j,j-1)
            }
        }
        console.log("sort" + (i+1),array);
    }
    return array
}

function swap(array,a,b){
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
    return array
}

console.log(insertionSort([14,9,15,12,6,8,13]));