//https://www.codewars.com/kata/5680781b6b7c2be860000036//

function vowelIndices(word){
    var vowels = ['a','e','i','o','u','y']
    var newArr =[]
    for (let i =0; i< word.length; i++){
      if (vowels.indexOf(word[i].toLowerCase()) > -1){
        newArr.push(i+1);
      }
    }
    return newArr;
  }