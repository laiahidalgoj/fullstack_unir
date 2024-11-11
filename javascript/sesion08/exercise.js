const coches = [
    {
      nombre: "Toyota Corolla",
      puertas: 4,
      año: 2020,
      color: "blanco",
      caballos: 132
    },
    {
      nombre: "Ford Mustang",
      puertas: 2,
      año: 2021,
      color: "rojo",
      caballos: 450
    },
    {
      nombre: "Honda Civic",
      puertas: 4,
      año: 2019,
      color: "azul",
      caballos: 158
    },
    {
      nombre: "Chevrolet Camaro",
      puertas: 2,
      año: 2022,
      color: "negro",
      caballos: 275
    },
    {
      nombre: "Volkswagen Golf",
      puertas: 4,
      año: 2021,
      color: "gris",
      caballos: 147
    }
  ];
  
const cars = coches.map(coche => coche.nombre);
console.log(cars);