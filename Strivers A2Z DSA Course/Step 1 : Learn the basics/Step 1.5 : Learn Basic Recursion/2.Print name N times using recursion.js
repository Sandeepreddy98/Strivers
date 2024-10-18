// Print Name 5 times

function printName(num){
    if(num === 0){
        return
    }
    console.log("Hey Sandeep Reddy!");
    printName(num - 1)
}

printName(5)


// Print Increasing order -- BackTracking

function printIncreasing(num){
    if(num === 0){
     return   
    }
    printIncreasing(num-1)
    console.log(num);
}

printIncreasing(5)

// Print Decreasing order

function printDecreasing(num){
    if(num === 0){
        return
    }
    console.log(num);
    printDecreasing(num-1)
}

printDecreasing(5)