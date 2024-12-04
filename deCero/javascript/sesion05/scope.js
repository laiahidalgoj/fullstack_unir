//Scopes

const name = 'Laia';  //global scope

function greet(){
  const lastName = 'Hidalgo'; //local scope
  console.log(lastName);
}

greet();