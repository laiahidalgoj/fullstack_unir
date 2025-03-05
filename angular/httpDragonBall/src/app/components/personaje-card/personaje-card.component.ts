import { Component, Input } from '@angular/core';
import { IPersonaje } from '../../interfaces/ipersonaje.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personaje-card',
  imports: [RouterLink],
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css'
})
export class PersonajeCardComponent {
  @Input() miPersonaje!: IPersonaje;
}
