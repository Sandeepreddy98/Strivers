function palindrome(str){
    return palindromeCheck(str,0,str.length-1)
}

function palindromeCheck(str,start,end){
    if(start>=end){
        return true
    }
    if(str[start] !== str[end]){
        return false
    }
    return palindromeCheck(str,start+1,end-1)
}
console.log(palindrome("racecar"));