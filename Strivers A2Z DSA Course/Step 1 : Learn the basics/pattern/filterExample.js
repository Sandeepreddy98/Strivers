const arr = [1,2,3,4,5,6,7,8,9,10]

let even = arr.filter((num) => {
    if(num%2 ===0){
        return num
    }
})
console.log(even,"even");