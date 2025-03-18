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
    console.log('ngOnChanges');
    this.pintar(this.listacalculos);
  }

  ngOnInit(){
  }

  pintar(list: ICalc[]){
    this.texto = ''
    list.forEach(calc => {
      this.texto += `<p>El resultado de la suma de ${calc.numA} + ${calc.numB} es igual a: ${calc.result}</p>`;
    });
  }

}
