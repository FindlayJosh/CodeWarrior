// https://www.codewars.com/kata/56311e4fdd811616810000ce/javascript

function List(){
    this.countSpecDigits=function(integersList, digitsList){
      let kick = [];
      for(var i=0; i<digitsList.length; i++){
        kick.push([digitsList[i], integersList.join().split(digitsList[i]).length -1]);
      }
      return kick;
    }
  }