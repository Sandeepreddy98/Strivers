function countFrequency(params){
    let hash = {}
    for(let element of params){
        if(hash[element]){
            hash[element] = hash[element] + 1
        }else{
            hash[element] = 1
        }
    }
    return hash
}

console.log(countFrequency([1,2,1,3,1,5,3]));