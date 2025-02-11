import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  imports: [],
  templateUrl: './ciclovida.component.html',
  styleUrl: './ciclovida.component.css'
})
export class CiclovidaComponent {
  @Input() miInput: number = 0;

  //ESTAS FUNCIONES TIENEN SUS MOMENTOS PARA CONSTRUIRSE


  constructor() {
    // esta función se ejecuta cuando el ts está completamente cargado
    console.log('constructor', this.miInput)
  }
  ngOnInit(): void {
    // esta función se ejecuta una sola vez, solo cuando el componente está cargado: selector, html, css y ts
    console.log('ngOnInit-tengo cargado todas las partes de componente', this.miInput)
  }

  ngOnChanges(): void {
    // se ejecuta varias veces y ocurre siempre que se modifican parámetros de entrada al componente @Inputs
    console.log('ngOnChanges', this.miInput)
  }

  ngDoCheck(): void{
    // se ejecuta siempre y varias veces y siempre que el usuario interactue con el interfaz
    console.log('he tocado la interfaz')
  }

  ngAfterViewInit(): void{
    // se ejecuta siempre después de cargarse la vista, el html, pero solo ocurre una vez
    console.log('ngAfterViewInit', this.miInput)
  }

  ngAfterViewChecked(): void{
    // se ejecuta cada vez que se renderiza la vista nuevamente
    console.log('ngAfterViewChecked', this.miInput)
  }

  ngOnDestroy(): void{
    // se ejecuta una vez antes de retirar el componente
  }



}
