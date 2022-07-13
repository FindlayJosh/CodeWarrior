// https://www.codewars.com/kata/59cd0535328801336e000649

function interest(P,r,n){
    const simple = [Math.round(P*(1+r*n))]
    for(let i=1; i<=n; i++){
                     P= (P*r) +P
    }
        simple.push(Math.round(P))
    return simple
      }