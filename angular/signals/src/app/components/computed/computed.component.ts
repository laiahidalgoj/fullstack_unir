import {Component, computed, effect, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css'
})
export class ComputedComponent {
  cont: WritableSignal<number> = signal(0);
  // se modifica asociado a la modificación de otro signal
  // puede servir para añadir el total cuando vas sumando productos al carrito
  dobleCont = computed(() => { return this.cont() * 2})
  oculto: string = 'block';

  constructor() {
    effect(() => {
      console.log(`el valor del contador es: ${this.cont()}`);
      if(this.cont() % 2 !== 0) {
        this.oculto = 'none';
      }else{
        this.oculto = 'block';
      }
    })
  }


  increment() {
    this.cont.update(value => value + 1);
  }
}
