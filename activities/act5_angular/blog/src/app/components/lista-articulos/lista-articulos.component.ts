import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Iarticulo} from '../../interfaces/iarticulo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-articulos',
  imports: [
    CommonModule,
  ],
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

  verArticulo(article: any) {
    console.log('Ver artículo:', article.title);
  }

}
