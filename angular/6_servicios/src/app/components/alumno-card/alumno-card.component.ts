import {Component, input, Input} from '@angular/core';
import {IAlumno} from '../../interfaces/ialumno.interface';

@Component({
  selector: 'app-alumno-card',
  imports: [],
  templateUrl: './alumno-card.component.html',
  styleUrl: './alumno-card.component.css'
})
export class AlumnoCardComponent {
  @Input() miAlumno!: IAlumno;
  //CON signal
//  miAlumno = input<IAlumno>({id: 0, nombre: "", edad: 0, email: ""})
}
