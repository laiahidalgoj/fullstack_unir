import {Component, input, model} from '@angular/core';

@Component({
  selector: 'app-signal-inputs',
  imports: [],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.css'
})
export class SignalInputsComponent {

  miNombre = input<string>() //solo lectura
  miEdad = model.required<number>(); //lectura y escritura

  ngOnInit() {
    setTimeout(() => {
      this.miEdad.update(value => value + 10);
    }, 5000)
  }
}
