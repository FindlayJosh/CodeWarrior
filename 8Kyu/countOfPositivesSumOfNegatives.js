// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if( input === null ){
      return []
    }else if( input[0] === ''){
      return []
    }else if(input[0] == null){
      return []
    }else if(input === []){
      return
    }
      {
  let arrOne = input.filter(input => input > 0 )
  let arrTwo = input.filter(input => input < 0 )
  
  let indexOne = arrOne.length
  let indexTwo = arrTwo.reduce((arrTwo, num) => arrTwo + num)
  return [indexOne,indexTwo]
  }
}