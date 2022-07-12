//https://www.codewars.com/kata/563e320cee5dddcf77000158//


function getAverage(marks){


    var sum = 0;
    for (var i=0; i<marks.length; i++){
   sum+=marks[i];
    }
    
     var average = sum / marks.length;
    
      return Math.floor(average);
    }