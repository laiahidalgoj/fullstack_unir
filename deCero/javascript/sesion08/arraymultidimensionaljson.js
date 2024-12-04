const students = [
    {
        id: 1,
        name: 'Laia',
        lastname: 'Hidalgo',
        age: 32,
        studies: 'Teacher',
    },
    {
        id: 2,
        name: 'Cris',
        lastname: 'Mart',
        age: 18,
        studies: 'Fullstack',
    },
    {
        id: 3,
        name: 'Maria',
        lastname: 'Rodríguez',
        age: 40,
        studies: 'Doctor',
    },

];

for(let student of students){
    student.gender = '';
}

console.log(students);
console.log(students[1]['name']);
console.log(students[2].age);

for(let student of students){
    console.log(student['name']);
    console.log(student.name);
}

console.log('---------')

//add gender

function addGender(list, name, gender){
    for(let student of list){
        if(student.name === name){
            student.gender = gender;
        }
    }
}

addGender(students, 'Maria', 'Female');
console.log(students);

//add teacher to all students
students.forEach((student) => (student.teacher = 'Juanan'));
console.log(students);

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

function quitarTildes(frase){
    let texto = frase.replaceAll('á', 'a');
        texto = frase.replaceAll('é', 'e');
        texto = frase.replaceAll('í', 'i');
        texto = frase.replaceAll('ó', 'o');
        texto = frase.replaceAll('ú', 'u');
        return texto;
}

// let animales = ['León', 'Gato', 'Gallina'];
// for(animal in animales){
//     let sinAcentos = animal.replace('ó', 'o');
//     console.log(sinAcentos);
// }


let miFrase = 'En un lugar de la mancha donde nació quijote';
console.log(quitarTildes(miFrase.toLowerCase()));
