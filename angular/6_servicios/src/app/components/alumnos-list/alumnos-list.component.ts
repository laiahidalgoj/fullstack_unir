import {Component, inject} from '@angular/core';
import {AlumnosService} from '../../services/alumnos.service';
import {IAlumno} from '../../interfaces/ialumno.interface';
import {AlumnoCardComponent} from '../alumno-card/alumno-card.component';

@Component({
  selector: 'app-alumnos-list',
  imports: [
    AlumnoCardComponent
  ],
  templateUrl: './alumnos-list.component.html',
  styleUrl: './alumnos-list.component.css'
})
export class AlumnosListComponent {
  //pedir información de los alumnos al servicio. el servicio es una inyección de dependencia.
  // hay 2 formas de inyectar, moderna y antigua.

  // antigua
  // constructor(private AlumnosService: AlumnosService) {}

  //moderna
  alumnosService = inject(AlumnosService);
  alumnos: IAlumno[] = [];

  ngOnInit() {
    this.alumnos = this.alumnosService.getAll();
  }
}
