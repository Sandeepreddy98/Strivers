function bubbleSort(array){
    const n = array.length
    for(let i = 0;i<=n-1;i++){
        let didSwap = 0
        for(let j = 0;j <= n-1-i;j++){
            if(array[j] > array[j+1]){
                swap(array,j,j+1)
                didSwap = 1
            }
            if(didSwap){
                break
            }
        }
    }
    return array
}

function swap(array,a,b){
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
    return array
}

console.log(bubbleSort([13,46,24,52,20,9]));