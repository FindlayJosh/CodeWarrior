// https://www.codewars.com/kata/5826f54cc60c7e5266000baf

function minimumPerimeter(area) {
    for (let i = Math.ceil(Math.sqrt(area));i > 0; i--){
      if(area % i ===0){
        return (i + area / i)*2
      }
    }
  }
  