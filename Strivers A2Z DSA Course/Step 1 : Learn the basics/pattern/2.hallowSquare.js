/*
****
*  *
*  *
****
*/

function hallowSquare(n){
    let string = ""
    for(let i = 0;i < n;i++){
        for(let j = 0;j <n;j++){
            if(i === 0 || i === n-1){
                string = string + "*"
            }else{
                if(j === 0 || j === n-1){
                    string = string + "*"
                }else{
                    string = string + " "
                }
            }
        }
        string = string + (i === n ? '' : '\n')
    }
    return string
}

console.log(hallowSquare(4))