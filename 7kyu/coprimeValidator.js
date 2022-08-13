// https://www.codewars.com/kata/585c50e75d0930e6a7000336

function isCoprime(x, y) {
    let xP =[]
    let yP =[]
    let XY =[]
   for (let i = 1; i <=x; i++){
     if ( x % i ===0){
       xP.push(i)
     } 
     }for (let j =1; j <= y; j++ ){
       if (y % j ===0){
         yP.push(j)
       }
     } 
    for (let m =0; m<= xP.length; m++){
      for (let n =0; n <= yP.length; n++)
        if (xP[m]===yP[n]) {
          XY.push(xP[m])
        }
    }
     if ( XY.length ===2 ){
       return  true
     }else {
       return false
     }
   }