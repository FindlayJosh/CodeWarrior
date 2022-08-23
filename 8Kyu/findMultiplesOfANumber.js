https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
    let boom = []
    for (let i = 1; i <=limit; i++){
      if (i % integer ===0){
        boom.push(i)
      }
    }
    return boom
  }