//https://www.codewars.com/kata/5601409514fc93442500010b//

function betterThanAverage(classPoints, yourPoints) {
    let average = 0
       for (let i = 0; i < classPoints.length; i++){
         average += classPoints[i]
       }
       let avg = average / classPoints.length
         
       if (avg >= yourPoints){
         return false
       } else {
         return true
       }
     }
   