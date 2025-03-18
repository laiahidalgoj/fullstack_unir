// la tiene longitud fija, no se puede variar la tupla
// solo los arrays se pueden modificar.
// las tuplas sirven para configuraciones de BBDD
var tupla = ['Laia', 33, true];
var configBD = ['https://127.0.0.1', 3306, 'root', '12345.$'];
console.log(configBD[1]);
// es lo mismo que configBD pero se accede de manera diferente. el de arriba con posición y el de abajo con la propiedad
var config = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    pass: '12345.$',
};
console.log(config.port);
