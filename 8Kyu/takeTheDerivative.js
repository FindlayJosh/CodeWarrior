// https://www.codewars.com/kata/5963c18ecb97be020b0000a2

function derive(coefficient,exponent) {
    let quotient = (coefficient * exponent).toString()
    let other = (exponent-1).toString()
   return  quotient + 'x^' + other
  }