const students = [
    {
        name: 'Laia',
        lastname: 'Hidalgo',
        age: 32,
        studies: 'Teacher',
    },
    {
        name: 'Cris',
        lastname: 'Mart',
        age: 18,
        studies: 'Fullstack',
    },
    {
        name: 'Maria',
        lastname: 'Rodríguez',
        age: 40,
        studies: 'Doctor',
    },

];

console.log(students[1]['name']);
console.log(students[2].age);

for(let student of students){
    console.log(student['name']);
    console.log(student.name);
}

console.log('---------')

// tell me a name of student that have below to 40 years

function getStudentsByAge(list, age){
    for(let student of list){
        if(student.age <= age){
            console.log(student.name);
        }
    }
}

getStudentsByAge(students, 20);

console.log('----------')

function getStudentsByStudies(list, type){
    for(let student of list){
        if(student.studies === type){
            console.log(student.name)
        }
    }
}

getStudentsByStudies(students, 'Teacher');