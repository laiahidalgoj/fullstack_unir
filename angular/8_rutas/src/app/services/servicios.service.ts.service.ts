import { Injectable } from '@angular/core';
import { IServicio } from '../interfaces/iservicio.interface';
import { SERVICIOS } from '../db/servicios.db';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

 private arrayServicios: IServicio[] = SERVICIOS;

 getAll(): IServicio[] {
  return this.arrayServicios;
 }
}
