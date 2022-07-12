//https://www.codewars.com/kata/5672a98bdbdd995fad00000f//

const rps = (p1, p2) => {
    const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  }
  const getMsg = (n) =>  `Player ${n} won!`;
  
    if (p1===p2){
      return("Draw!")
    }
    else if(rules[p1] ===p2){
      return("Player 1 won!")
    }
    else{
      return("Player 2 won!")
    }
  }