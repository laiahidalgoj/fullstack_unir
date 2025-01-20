class Coche {
    #bastidor; // Atributo privado

    constructor(marca, matricula, bastidor){
        this.marca = marca;
        this.matricula = matricula;
        this.encendido = false;
        this.#bastidor = bastidor;
    }

    encender(){
        this.encendido = true;
    }

    apagar(){
        this.encendido = false;
    }

    dameBastidor(){
        return this.#bastidor;
    }
}

// Clase que hereda de Coche
class Descapotable extends Coche{

    // si a un hijo le pones constructor tienes que ponerle super
    constructor(marca, matricula, bastidor){
        super(marca, matricula, bastidor); // Llama al constructor de la clase padre
        this.capotado = true;
    }


    capotar(){
        this.capotado = true;
    }

    descapotar(){
        this.capotado = false;
    }
}

    const descapotable = new Descapotable('Audi', '1234ABC', '123456789');
    console.log(descapotable.marca);
    console.log(descapotable.capotado);

    const coche = new Coche('Renault', '8745LHJ', '43244141kfghqahr');
    console.log(coche.marca)
    console.log(coche.matricula)
    console.log(coche.dameBastidor());

    coche.encender();
    coche.apagar();

   
class Parking{

    constructor(){
        this.nombre = nombre;
        this.coches = [];
    }

    aparcar(coche){
        this.coches.push(coche);
    }

    sacar(){
        return this.coche.shift();
    }
}