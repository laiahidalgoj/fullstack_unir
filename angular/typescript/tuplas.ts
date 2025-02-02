// la tiene longitud fija, no se puede variar la tupla
// solo los arrays se pueden modificar.
// las tuplas sirven para configuraciones de BBDD

const tupla: [string, number, boolean] = ['Laia', 33, true];

const configBD: [string, number, string, string] = ['https://127.0.0.1', 3306, 'root', '12345.$'];
console.log(configBD[1]);

interface IConfig {
    host: string;
    port: number;
    user: string;
    pass: string;
}

// tipo rápido - sería lo mismo que un interfaz pero no lo vot a reutilizaré mucho. por ejemplo: obtengo respuesta de una API o BBDD externa, me viene un conjunto de datos, para tener controlados los elementos
// ES MEJOR UTILIZAR INTERFACE, SON MÁS ESCALABLES Y LOS TIPO RÁPIDO NO
type data = {
    host: string;
    port: number;
    user: string;
    pass: string;
}

// es lo mismo que configBD pero se accede de manera diferente. el de arriba con posición y el de abajo con la propiedad
const config: IConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    pass: '12345.$',
}

console.log(config.port);
