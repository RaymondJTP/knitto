function fizzBuzz(number){
    if(number < 0) return 'Masukkan angka lebih besar atau sama dengan 0'
    let result = []

    for(let i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        else if(i % 3 === 0)  result.push('Fizz');
        else if(i % 5 === 0) result.push('Buzz');
        else result.push('Not Fizz or Buzz');
    }

    return result

}

console.log(fizzBuzz(15));