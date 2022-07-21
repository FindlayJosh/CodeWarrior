// https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
    let superSalary = salary * 10
    let superDuperSalary = '£' + superSalary.toString()
    let StringSalary = '£' + salary.toString()
  if( bonus === true){
    return superDuperSalary
  } else return StringSalary
  }