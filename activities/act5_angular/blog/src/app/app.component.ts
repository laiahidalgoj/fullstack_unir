import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticulosComponent} from './components/articulos/articulos.component';
import {ListaArticulosComponent} from './components/lista-articulos/lista-articulos.component';
import {Iarticulo} from './interfaces/iarticulo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticulosComponent, ListaArticulosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listaArticulos: Iarticulo[] = [
    { title: 'Lugares destacados en Roma', text: 'Caminar por las calles de Roma, es caminar por un patrimonio artístico histórico', url: './assets/colosseo-roma.jpg', date: '01/02/2025' },
    { title: 'Lugares destacados en París', text: 'Caminar por las calles de París, es caminar por un patrimonio artístico histórico', url: './assets/paris-torre.jpg' , date: '01/02/2025' },
  ];

  getDataArticulos(event: Iarticulo){
    this.listaArticulos = [...this.listaArticulos, event];
  }
}
