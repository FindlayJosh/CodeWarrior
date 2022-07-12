//https://www.codewars.com/kata/5697fb83f41965761f000052//
function digitize(n) {
    let answer = String(n).split('').reverse()
    return answer.map(el => parseInt(el))
 }