import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ICalc} from '../../interfaces/icalc.interface';

@Component({
  selector: 'app-calculadora',
  imports: [
    FormsModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  // comunicación bidireccional - TWO WAY DATA BINDING necesitamos librería FormsModule.
  newCalc: ICalc = { result: 0, numA: 0, numB: 0 };
  // paso 1: de los outputs: crear una propiedad decorada con @Output de tipo eventEmitter
  @Output() calculoEmitido: EventEmitter<ICalc> = new EventEmitter();

  sumar() {
    this.newCalc.result = this.newCalc.numA + this.newCalc.numB;
    // paso 2: emitir el objeto hacia el padre.
    this.calculoEmitido.emit(this.newCalc);
    // tendré que vaciar el objeto newCalc para vaciar el formulario
    this.newCalc = { result: 0, numA: 0, numB: 0 }
    // tenemos que enviar al (app.component) Padre el valor con el objeto nuevo calculo.
  }

}
