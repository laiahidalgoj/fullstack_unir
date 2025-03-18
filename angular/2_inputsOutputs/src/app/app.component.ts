import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalculadoraComponent} from './components/calculadora/calculadora.component';
import {ListaCalculosComponent} from './components/lista-calculos/lista-calculos.component';
import {ICalc} from './interfaces/icalc.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraComponent, ListaCalculosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrCalculos: ICalc[] = [
    { result: 23, numA: 20, numB: 3 },
    { result: 12, numA: 5, numB: 7 }
  ]

  obtenerCalculo(event: ICalc){
    //this.arrCalculos.push(event);
    // generar otro array nuevo con el array anterior y el elemento nuevo
    this.arrCalculos = [...this.arrCalculos, event];
  }
}
