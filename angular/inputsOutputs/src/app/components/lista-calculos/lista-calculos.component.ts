import { Component, Input } from '@angular/core';
import {ICalc} from '../../interfaces/icalc.interface';

@Component({
  selector: 'app-lista-calculos',
  imports: [],
  templateUrl: './lista-calculos.component.html',
  styleUrl: './lista-calculos.component.css'
})
export class ListaCalculosComponent {

  @Input() listacalculos:  ICalc[] = [];
  @Input() colorfondo: string = ''
  texto: string = ''


  ngOnChanges(){

  }

  ngOnInit(){
  }

  ngDoCheck(){
    this.texto = ''
    this.listacalculos.forEach(calc => {
      this.texto += `<p>El resultado de la suma de ${calc.numA} + ${calc.numB} es igual a: ${calc.result}</p>`;
    });
  }

}
