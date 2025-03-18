## Form de tipo template

Usos: este tipo de formulario deberíamos usarlo, solo para recoger información de filtros, búsquedas, filtros de precio, búsquedas semánticas, etc.. Sobre todo información que no vayamos a guardar información en BBDD.


1 - importamos en el componente donde vamos a realizar el formulario la libreria FormsModule. 
Exactamente igual que para TWO WAY DATA BINDING

2 - Creamos la maqueta de formulario en el html con la etiqueta form. Para ello vamos a usar bootstrap.

3 - A este form le colocamos un nombre o template.  E igualamos ese nombre a ngForm de esta forma dentro de la etiqueta form.

                                        <form #nombreForm = "ngForm"></form>

4 - Crea un evento de tipo submit que en este caso se llama (ngSubmit)="funcionTs(nombreForm)". Ojo funcionTs es un nombre generico.  A esta función le pasaremos obligatoriamente como parametro el nombre formulario creado antes. 

5 - Todos los campos del formulario (input, checkbox, select, textarea...) deben llevar un name="" y un atributo ngModel. Ojo sin parentesis ni corchetes.

6 - La función devolverá un objeto json con casda uno de los campos de formulario cuyas claves sean los name="" que hayamos puesto. 

