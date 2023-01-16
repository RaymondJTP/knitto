function fizzBuzz(firstNum,secondNum,total){
    //Cek jika total di bawah 0
    if(total < 0) return 'Masukkan angka lebih besar atau sama dengan 0'

    //Result untuk hasil akhir
    let result = []

    for(let i = 1; i <= total; i++){
        if(i % firstNum === 0 && i % secondNum === 0) result.push('FizzBuzz');
        else if(i % firstNum === 0)  result.push('Fizz');
        else if(i % secondNum === 0) result.push('Buzz');
        else result.push('Not Fizz or Buzz');
    }

    return result

}

console.log(fizzBuzz(3,5,15));
console.log(fizzBuzz(2,8,17));
