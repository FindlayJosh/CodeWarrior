// https://www.codewars.com/kata/570e8ec4127ad143660001fd/

function billboard(name, price = 30){
    let boop = name.split('')
      let cost = 0
        boop.forEach(el => cost +=price)
      return cost
    } 