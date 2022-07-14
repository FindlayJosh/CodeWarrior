// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  
    return parseInt((num + '').split('').map((i) =>{return Number(i)**2;}).toString(num).split(',').join(''))
  }