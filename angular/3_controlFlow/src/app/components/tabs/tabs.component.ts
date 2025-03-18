import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  seccionActual: string = 'londres';
  estado: boolean = true;
  
  cambiarSeccion(seccion: string): void{
    this.seccionActual = seccion
  }

  cambiarEstado() {
    this.estado = !this.estado;
  }

}
