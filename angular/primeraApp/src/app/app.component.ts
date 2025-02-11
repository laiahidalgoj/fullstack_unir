import { Component } from '@angular/core';
import {ContadorComponent} from './components/contador/contador.component';
import {GaleriaComponent} from './components/galeria/galeria.component';
import {CiclovidaComponent} from './components/ciclovida/ciclovida.component';

@Component({
  selector: 'app-root',
  imports: [
    ContadorComponent,
    GaleriaComponent,
    CiclovidaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string = 'Laia Hidalgo';
  edad: number = 32;
  estiloCaja: string = '';
  ciudadSeleccionada: string = '';
  cities: any = {
    m: 'Madrid',
    p: 'París',
    l: 'Londres'
  }

  ngOnInit(): void {
    setTimeout(()=> {
      this.edad = 33;
    }, 7000)
  }

  // función
  sumar(n1: number, n2: number): string {
    let resultado = n1 + n2;
    return `El resultado es: ${resultado}`;
  }

  cambiarColor(color: string) : void{
   // this.estiloCaja = `background-color: ${color}; esta es válida pero no la mejor
    this.estiloCaja = color; // esta es la mejor manera
  }

  selectCity(event: any): void{
    this.ciudadSeleccionada = this.cities[event.target.value];
  }


}
