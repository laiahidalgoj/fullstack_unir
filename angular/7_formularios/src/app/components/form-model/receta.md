1 - Importamos la librería al componente vamos a usar la librería ReactiveForModule
2 - Creamos un atributo dentro de la etiqueta form que se llama formGroup que contendrá el nombre del formulario
3 - Necesitamos implementar el evento ngSubmit que llame a una función que NO RECIBE PARAMETROS.
            la función genera un JSON
4 - A cada campo del formulario (input, select, textarea...) solo le tenemos que añadir un atributo formControlName con el nombre del campo.
5 -  Inicializamos dentro del ts el objeto FormGroup en punto 2, donde tenemos obligación de dar de alta uno de los campos. (aquí es donde ejecutaremos las validaciones)