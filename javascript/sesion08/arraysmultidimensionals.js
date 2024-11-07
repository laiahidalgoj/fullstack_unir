//multidimensionals is an array of array, is a list of elements of other list

const birds = ['eagle', 'parakeet', 'crow'];
const felines = ['Lion', 'cat', 'tiger', 'cheetah'];
const reptils = ['snake', 'frog', 'crocodile'];

const zoo = [felines, reptils, birds];

for(let specie of zoo){
    for(let animal of specie){
        console.log(animal)
    }
}