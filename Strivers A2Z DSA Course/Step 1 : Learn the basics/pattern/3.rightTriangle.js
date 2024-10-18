/*
*
**
***
****
*****
*/

function rightTriangle(n){
    let string = ""
    for(let i = 0;i<=n;i++){
        for(let j = 0;j<=i;j++){
            string = string + "*"
        }
        string = string + (i === n ? '' : '\n')
    }
    return string
}

// console.log(rightTriangle(4));

function rightTriangleNumber(n){
    let string = ""
    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=i;j++){
            string = string + j
        }
        string = string + (i === n ? '' : '\n')
    }
    return string
}

console.log(rightTriangleNumber(4));