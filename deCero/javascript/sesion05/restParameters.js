
// rest parameters '...grades'

function averageGrade(...grades){
  //console.log(grades.length);
  let total = 0;
  for(let i = 0; i < grades.length; i++){
    total = total + grades[i];
  }
  //console.log(total);
  const result = total / grades.length;
  return result;
}

const average = averageGrade(7,6,7,9,10,8.5);
console.log(average);