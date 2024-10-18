/*
    *
   **
  ***
 ****
*****
*/

function leftTriangle(n){
    let string = ""
    for(let i = n;i>=1;i--){
        for(j = n;j>=i;j--){
            string = string + "*"
        }
        string = string + '\n'
    }
    return string
}


console.log(leftTriangle(4));