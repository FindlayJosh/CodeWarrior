//https://www.codewars.com/kata/57216d4bcdd71175d6000560//

const padIt = (str, n) => {
    let result = str
    let i = 0
  
    while (i < n) {
      if (i % 2 === 0) {
        result = `*${result}`
      } else {
        result = `${result}*`
      }
  
      i += 1
    }
  
    return result
  }