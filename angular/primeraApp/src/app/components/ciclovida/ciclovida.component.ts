import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  imports: [],
  templateUrl: './ciclovida.component.html',
  styleUrl: './ciclovida.component.css'
})
export class CiclovidaComponent {

  //ESTAS FUNCIONES TIENEN SUS MOMENTOS PARA CONSTRUIRSE


  constructor() {
    // esta función se ejecuta cuando el ts está completamente cargado
  }
  ngOnInit(): void {
    // esta función se ejecuta una sola vez, solo cuando el componente está cargado: selector, html, css y ts
  }

  ngOnChanges(): void {
    // se ejecuta varias veces y ocurre siempre que se modifican parámetros de entrada al componente @Inputs
  }

  ngDoCheck(): void{
    // se ejecuta siempre y varias veces y siempre que el usuario interactue con el interfaz
  }

  ngAfterViewInit(): void{
    // se ejecuta siempre después de cargarse la vista, el html
  }

  ngOnDestroy(): void{
    // se ejecuta una vez antes de retirar el componente
  }



}
