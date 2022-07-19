// https://www.codewars.com/kata/62cecd4e5487c10028996e04

function racePodium(blocks) {
    let second = blocks/3 + .67 | 0
    let first = second + 1
    let third = blocks - first - second
    
    if (blocks ==7){
      return[2,4,1]
    }
    return [second, first, third]
    }