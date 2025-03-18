import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador = signal(12);

  reset() {
    this.contador.set(0);
  }

  sumar(){
    this.contador.update(valor =>  valor + 1)
  }

  restar(){
    this.contador.update(valor =>  valor - 1)
  }

}
