class Car {

    constructor(pBrand, pModel, pColor){
        //Inicialise the car properties
        this.brand = pBrand.toUpperCase();
        this.model = pModel;
        this.color = pColor;
        this.speed = 0;
    }

    // methods
    accelerate(increase) {
        this.speed += increase;
    }

    stop(decrease){
        this.speed -= decrease;
    }

    changeColor(color){
        console.log(`This car ${this.model} change color to.. ${this.color}`);
        this.color = color;
    }

    display(){
        return `Car:
        Brand: ${this.brand}. 
        Model: ${this.model}. 
        Color: ${this.color}.
        Speed: ${this.speed}km/h`;
    }
}

// Create an object of class car
const car1 = new Car('Kia', 'Niro', 'Green');
const car2 = new Car('Audi', 'A1', 'White');
const car3 = new Car('Mercedes', 'Benz', 'Black');

car1.accelerate(50);
car3.accelerate(100);
car3.stop(50);
car1.changeColor('Gris');

console.log(car1);
if(car1.speed >= 120){
    console.log('Your speed is high');
}else{
    console.log('Your speed is normal');
}

// console.log('-------')
// console.log(car2);
// console.log('-------')
// console.log(car3);
// console.log('-------')
// console.log(car1.show());


class Person{

    constructor(pName, pLastName, pAge, pEmail){
        this.name = pName;
        this.lastname = pLastName;
        this.age = pAge;
        this.email = pEmail;
        this.car = [];
    }

    // methods
    display(){
        let total = `My name is ${this.name} ${this.lastname}. I'm ${this.age} years old and my email is: ${this.email}`;
        for(let car of this.car){
            total += '\n' + car.display();
        }

        return total;
    }

    addCar(newCar){
        this.car.push(newCar); // add car with .push
    }
    
    sellCar(position){
        if(position >= this.car.length || position < 0){
            console.log('The position is incorrect');
        }else{
            this.car.splice(position, 1);
            console.log('Car sold');
        }
    }
}

const person1 = new Person('Laia', 'Hidalgo', 32, 'laia@...');
const person2 = new Person('Ernesto', 'Gámez', 40, 'ernesto@...');
const person3 = new Person('Fran', 'Hidalgo', 31, 'fran@...');
const person4 = new Person('Maria', 'Marcos', 32, 'maria@...');

// add car at person1
person1.addCar(car2);
person1.addCar(car3);
person2.addCar(car1);

// remove car 
person1.sellCar(1);
person1.sellCar(0);
person1.sellCar(2);

const string = person1.display();
console.log(string);

// Prints
// console.log('-------')
// console.log(person2);
// console.log('-------')
// console.log(person1.display());
// console.log('-------')
// console.log(person1);
// console.log('-------')
// console.log(`The color of ${person1.name}'s car is: ${person1.car[0].color}`);
// console.log('-------')


