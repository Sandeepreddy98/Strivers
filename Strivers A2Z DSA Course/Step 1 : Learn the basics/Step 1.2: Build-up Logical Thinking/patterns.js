// * * *
// * * *
// * * *

function pattern1(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern = pattern + "* ";
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}
console.log("------pattern 1------");
console.log(pattern1(4));

// *
// * *
// * * *

function pattern2(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern = pattern + "*";
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}
console.log("------pattern 2------");
console.log(pattern2(4));

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

function pattern3(n) {
  let pattern = "";
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j <= i; j++) {
      pattern = pattern + j + " ";
    }
    i !== n ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}
console.log("------pattern 3------");
console.log(pattern3(6));

// 1
// 2 2
// 3 3 3

function pattern4(n) {
  let pattern = "";
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j <= i; j++) {
      pattern = pattern + i + " ";
    }
    i !== n ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}
console.log("------pattern 4------");
console.log(pattern4(6));

// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern5(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      pattern = pattern + "* ";
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}
console.log("------pattern 5------");
console.log(pattern5(6));

// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern6(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      pattern = pattern + (j + 1) + " ";
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}
console.log("------pattern 6------");
console.log(pattern6(6));

//      *      [5,1,5] --n-i-1,2*i+1,n-i-1
//     ***     [4,3,4]
//    *****    [3,5,3]
//   *******   [2,7,2]
//  *********
// ***********

function pattern7(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    //print spaces
    for (let j = 0; j < n - i - 1; j++) {
      pattern = pattern + " ";
    }
    //print stars
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern = pattern + "*";
    }
    //print spaces
    for (let j = 0; j < n - i - 1; j++) {
      pattern = pattern + " ";
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}
console.log("------pattern 7------");
console.log(pattern7(6));

// *********** [0,11,0] (2*n-i)-1 = 11,9,
//  *********  [1,9,1]
//   *******   [2,7,2]
//    *****    [3,5,3]
//     ***     [4,3,4]
//      *       [5,1,5]

function pattern8(n){
    let pattern = ''
    for(let i=0;i<n;i++){
        // print spaces
        for(let j = 0;j<=i;j++){
          pattern = pattern + " "
        }
        //print stars
        for(let j=0;j< (2*(n-i))-1;j++){
          pattern = pattern +"*"
        }
        //print spaces
        for(let j = 0;j<=i;j++){
          pattern = pattern + " "
        }
        i !== n - 1 ? (pattern = pattern + "\n") : null;
    }
    return pattern
}
console.log("------pattern 8------");
console.log(pattern8(6));

//     *    
//    ***   
//   *****  
//  ******* 
// *********
// *********
//  ******* 
//   *****  
//    ***   
//     *
function pattern9(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    //print spaces
    for (let j = 0; j < n - i - 1; j++) {
      pattern = pattern + " ";
    }
    //print stars
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern = pattern + "*";
    }
    //print spaces
    for (let j = 0; j < n - i - 1; j++) {
      pattern = pattern + " ";
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  pattern = pattern + "\n"
  for(let i=0;i<n;i++){
    // print spaces
    for(let j = 0;j<i;j++){
      pattern = pattern + " "
    }
    //print stars
    for(let j=0;j< (2*(n-i))-1;j++){
      pattern = pattern +"*"
    }
    //print spaces
    for(let j = 0;j<i;j++){
      pattern = pattern + " "
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
}
  return pattern;
}

console.log("------pattern 9------");
console.log(pattern9(5));

// *
// **
// *** 
// ****
// *****
// ******  
// *****
// ****
// ***    
// **
// *

function pattern10(n){
  let pattern = ""
  for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
      pattern = pattern + "*"
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  pattern = pattern + "\n"
  for(let i=n-1;i>0;i--){
    for(let j=1;j<i;j++){
      pattern = pattern + "*"
    }
    pattern = pattern + "\n"
  }
  return pattern
}

console.log("------pattern 10------");
console.log(pattern10(6));

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function pattern11(n){
  let pattern = ""
  for(let i=0;i<n;i++){
    for(let j = 0;j <=i;j++){
      pattern = pattern + (i%2 && j%2).toString()
    }
    pattern = pattern + "\n"
  }
  return pattern
}

console.log("------pattern 11------");
console.log(pattern11(6));

// 1          1
// 12        21
// 12       321
// 1234    4321
// 12345  54321
// 123456654321

function pattern12(n){
  let pattern = ""
  for(let i = 0;i<n;i++){
    //print left numbers
    for(let j = 1;j<=i+1;j++){
      pattern = pattern + j
    }
    //print spaces
    for(let j = 0;j<((2*(n-i))-2);j++){
      pattern = pattern+ " "
    }
    //print right numbers
    for(let j = i+1;j>=1;j--){
      pattern = pattern + j
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern

}
console.log("------pattern 12------");
console.log(pattern12(6));
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21
function pattern13(n) {
  let counter = 1;
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern = pattern + counter + (j < i ? " ": '')
      counter++;
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern;
}

console.log("------pattern 13------");
console.log(pattern13(6));

// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function pattern14(n) {
  let alphabets = ['A','B','C','D','E','F','G']
  let pattern = ''
  for(let i = 0;i<n;i++){
    for(let j = 0;j<=i;j++){
      pattern = pattern + alphabets[j] + (j < i ? ' ' : '')
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern
}

console.log("------pattern 14------");
console.log(pattern14(6));

// A B C D E F 
// A B C D E 
// A B C D
// A B C
// A B
// A
function pattern15(n) {
  const alphabets = ['A','B','C','D','E','F','G']
  let pattern = ''
  for (let i = 0; i < n; i++) {
    for(let j = n-i;j>0;j--){
      pattern = pattern + alphabets[(Math.sign(((i+(j-1))-(n-1))))*(((i+(j-1))-(n-1)))]
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern
}

console.log("------pattern 15------");
console.log(pattern15(6));

// A 
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

function pattern16(n) {
  const alphabets = ['A','B','C','D','E','F','G']
  let pattern = ''
  for (let i = 0; i < n; i++) {
    for(let j = 0;j<=i;j++){
      pattern = pattern + alphabets[i]
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern
}

console.log("------pattern 15------");
console.log(pattern16(6));

//      A     
//     ABA    
//    ABCBA   
//   ABCDCBA  
//  ABCDEDCBA 
// ABCDEFEDCBA

function pattern17(n) {
  const alphabets = ['A','B','C','D','E','F','G']
  let pattern = ''
  for(let i = 0;i <n;i++){
    //print left spaces
    for(let j =0;j<n-i-1;j++){
      pattern = pattern + " "
    }
    //print alphabets
    for(let j=n-i-1;j<n+i;j++){
      pattern = pattern + alphabets[i]
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern
}
console.log("------pattern 17------");
console.log(pattern17(6));

// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function pattern18(n){
  const alphabets = ['A','B','C','D','E','F','G']
  let pattern = ""
  for(let i = 0;i<n;i++){
    for(let j=0;j<=i;j++){
      pattern = pattern + alphabets[alphabets.length-2 - i+j]
    }
    i !== n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern
}
console.log("------pattern 18------");
console.log(pattern18(6));

// ****** [3,0,3]
// **  ** [2,2,2]
// *    * [1,4,1]
// *    *
// **  **
// ******

function pattern19(n){
  let pattern = ""
  let initialSpace = 0
  // Top Half
  for(let i = 0;i<n;i++){
    //for printing stars
    for(let j = 0;j<n-i;j++){
      pattern = pattern +"*"
    }
    //for printing spaces
    for(let j=0;j<initialSpace;j++){
      pattern = pattern + " "
    }
    //for printing starts 
    for(let j =0;j<n-i;j++){
      pattern = pattern + "*"
    }
    initialSpace = initialSpace + 2
    pattern = pattern + "\n"
  }

  //Bottom Half
  initialSpace = 2*n-2
  for(let i = 0;i < n;i++){
    //for printing stars
    for(let j = 0;j<=i;j++){
      pattern = pattern + "*"
    }
    //for printing spaces
    for(let j = 0;j<initialSpace;j++){
      pattern = pattern + " "
    }
    //for printing stars
    for(let j = 0;j<=i;j++){
      pattern = pattern + "*"
    }
    initialSpace = initialSpace -2
    pattern = pattern + "\n"
  }
  return pattern
}
console.log("------pattern 19------");
console.log(pattern19(3));


// *    *
// **  **
// ******
// **  **
// *    *

function pattern20(n) {
  let pattern = "";
  let initialSpace = 2 * n - 2;
  //for top half
  for (let i = 0; i < n; i++) {
    //for stars
    for (let j = 0; j <= i; j++) {
      pattern = pattern + "*";
    }
    //for spaces
    for (let j = 0; j < initialSpace; j++) {
      pattern = pattern + " ";
    }
    //for stars again
    for (let j = 0; j <= i; j++) {
      pattern = pattern + "*";
    }
    initialSpace = initialSpace - 2;
    pattern = pattern + "\n";
  }
  // for bottom half
  initialSpace = 2;
  // for stars
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      pattern = pattern + "*";
    }
    //for spaces
    for (let j = 0; j < initialSpace; j++) {
      pattern = pattern + " ";
    }
    //for stars
    for (let j = 0; j < n - i - 1; j++) {
      pattern = pattern + "*";
    }
    initialSpace = initialSpace + 2;
    pattern = pattern + "\n";
  }
  return pattern;
}
console.log("------pattern 20------");
console.log(pattern20(3));
// ******
// *    *
// *    *
// *    *
// *    *
// ******

function pattern21(n){
  let pattern = ''
  for(let i = 0;i<n;i++){
    for(let j = 0;j<n;j++){
      if(i ===0 || j ===0||i ===n-1 || j===n-1){
        pattern = pattern + "*"
      }else{
        pattern = pattern + " "
      }
    }
    i !== n - 1 ? (pattern = pattern + "\n\n") : null;
  }
  return pattern
}
console.log("------pattern 21------");
console.log(pattern21(6));

// 6 6 6 6 6 6 6 6 6 6 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 2 1 2 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 6 6 6 6 6 6 6 6 6 6

function pattern22(n){
  let pattern = ""
  for(let i=0;i<2*n-1;i++){
    for(let j = 0;j<2*n-1;j++){
      let top = i
      let left = j
      let bottom = 2*n-2-i
      let right = 2*n-2-j
      pattern = pattern + (n-(Math.min(Math.min(top,bottom),Math.min(left,right))))
    }
    i !== 2*n - 1 ? (pattern = pattern + "\n") : null;
  }
  return pattern
}
console.log("------pattern 22------");
console.log(pattern22(6));