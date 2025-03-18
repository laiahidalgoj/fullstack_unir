import { Injectable } from '@angular/core';
import {IAlumno} from '../interfaces/ialumno.interface';
import {alumno} from '../db/alumnos.db';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrayAlumnos: IAlumno[] = alumno;

  //crear una función que me permita leer todos los datos.
  getAll(): IAlumno[] {
    return this.arrayAlumnos;
  }

  getById(id: number): IAlumno | undefined {
    return this.arrayAlumnos.find(alumno => alumno.id === id);
  }

}
