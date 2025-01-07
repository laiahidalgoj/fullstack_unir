//  ['a', 'a', 'b', 'b'] ['a', 'c', 'b', 'd'] --> 6
// acierto +4
// error -1
// blanco 0
// no puede sacar menos de 0

const checkExam = (solutions, studentexam) => {
    let acc = 0
    solutions.forEach((solution,i) => {
        if(solution !== ''){
            if (solution === studentexam[i]){
            acc += 4
        }else{
            acc -= 1
        }
        }
    })
    return acc;
}

console.log(checkExam(['a', 'a', 'b', 'b'] ,['a', 'c', 'b', 'd']));