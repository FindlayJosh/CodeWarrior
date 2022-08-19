// https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor){
    let arr =[]
  for (let i = numbers[0]; i<=numbers.length;i++){
   if(i % divisor === 0){
      arr.push(i)
    }
  }
    return arr
  }