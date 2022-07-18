// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let x = []
    let o = []
    
    for (let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === 'x'){
        x.push(str[i])
      } else if (str[i].toLowerCase() ==='o'){
        o.push(str[i])
      }
      }
      if (x.length == o.length){
        return true;
      }else {
        return false;
        }
    }