//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a//

function past(h, m, s){
    h = h*3600000 
    m = m*60000
    s = s*1000
    return h += m += s
  }