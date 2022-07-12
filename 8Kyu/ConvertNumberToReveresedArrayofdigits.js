//https://www.codewars.com/kata/5583090cbe83f4fd8c000051//

function digitize(n) {
    let answer = String(n).split('').reverse()
    return answer.map(el => parseInt(el))
 }