// https://www.codewars.com/kata/570e8ec4127ad143660001fd/

function billboard(name, price = 30){
    let boop = name.split('')
    let boopPop = boop.length
      let cost =0
    //   for (let i=0; i <= boopPop; i++)
        boop.forEach(el => cost +=price)
      return cost
    } 