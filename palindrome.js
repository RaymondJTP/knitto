function palindrome(numberInput){
    let result
    let numberToString = numberInput.toString()
    let numberReverse = ''

    //cek jika angka inputnya tidak dua digit
    if(numberToString.length === 1) return true

    //jika angka input lebih atau sama dengan 2 digit
    for(let i = numberToString.length - 1; i >= 0; i--){
        numberReverse += numberToString[i]
    }
    if(numberReverse === numberToString) return true
   
    return false
}

console.log(palindrome(101));
console.log(palindrome(19));
console.log(palindrome(0));

