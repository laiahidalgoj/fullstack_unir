import {Component, Input} from '@angular/core';
import {Iarticulo} from '../../interfaces/iarticulo';

@Component({
  selector: 'app-lista-articulos',
  imports: [],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css'
})
export class ListaArticulosComponent {
  @Input() articulos: Iarticulo[] = [];
  texto: string = '';

  ngOnChanges(){
    this.articulos.forEach(article => {
      this.texto += `<li>${article.title}</li>`
      this.texto += `<li>${article.text}</li>`
      this.texto += `<li>${article.url}</li>`
      this.texto += `<li>${article.date}</li>`

    })
  }

}
