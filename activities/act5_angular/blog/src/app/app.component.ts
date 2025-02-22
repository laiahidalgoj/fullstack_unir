import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticulosComponent} from './components/articulos/articulos.component';
import {ListaArticulosComponent} from './components/lista-articulos/lista-articulos.component';
import {Iarticulo} from './interfaces/iarticulo';
import {SlidesComponent} from './components/slides/slides.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticulosComponent, ListaArticulosComponent, SlidesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  listaArticulos: Iarticulo[] = [
    { id:1, title: 'Lugares destacados en Roma', text: 'Caminar por las calles de Roma, es caminar por un patrimonio artístico histórico', url: './assets/colosseo-roma.jpg', date: '01/02/2025' },
    { id:2,title: 'Lugares destacados en París', text: 'Caminar por las calles de París, es caminar por un patrimonio artístico histórico', url: './assets/paris-torre.jpg' , date: '02/02/2025' },
    { id:3,title: 'Lugares destacados en Marrakech', text: 'Caminar por las calles de Roma, es caminar por un patrimonio artístico histórico', url: './assets/Casablanca-Morocco.webp', date: '03/02/2025' },
    { id:4,title: 'Lugares destacados en Jordania', text: 'Caminar por las calles de París, es caminar por un patrimonio artístico histórico', url: './assets/petra.webp' , date: '04/02/2025' },
    { id:5, title: 'Lugares destacados en Sidney', text: 'Caminar por las calles de Sidney, es caminar por un patrimonio artístico histórico', url: './assets/sidney.jpg', date: '05/02/2025' },
    { id:6,title: 'Lugares destacados en China', text: 'Caminar por las calles de China, es caminar por un patrimonio artístico histórico', url: './assets/china.jpeg' , date: '06/02/2025' },
    { id:7,title: 'Lugares destacados en Japón', text: 'Caminar por las calles de Japón, es caminar por un patrimonio artístico histórico', url: './assets/japon.jpeg', date: '07/02/2025' },
    { id:8,title: 'Lugares destacados en Suiza', text: 'Caminar por las calles de Suiza, es caminar por un patrimonio artístico histórico', url: './assets/suiza.jpg' , date: '08/02/2025' },
  ];

  
  getDataArticulos(event: Iarticulo){
    this.listaArticulos = [...this.listaArticulos, event];
  }

  
}
