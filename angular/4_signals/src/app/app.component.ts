import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContadorComponent} from './components/contador/contador.component';
import {SignalInputsComponent} from './components/signal-inputs/signal-inputs.component';
import {ComputedComponent} from './components/computed/computed.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContadorComponent, SignalInputsComponent, ComputedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
  nombre: string = 'Laia Hidalgo';
  edad: number = 33;
}
