// https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c){

    let bigside = Math.max(a, b, c);
    let sum = a + b + c;
    return sum - bigside > bigside;
  }