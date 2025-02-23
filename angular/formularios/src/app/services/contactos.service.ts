import { Injectable } from '@angular/core';
import { IContacto } from '../interfaces/icontacto.interface';

@Injectable({
  providedIn: 'root'
})

export class ContactosService {

  private arrayContactos: IContacto[] = [{nombre: 'Laia', email: 'laia@gmail.com', telefono: 432424235, tipo: 'Laboral'}];

  insert(contact: IContacto) : any {
    //  deberíamos tener en cuenta si el contacto ya existe etc.
    this.arrayContactos.push(contact);
    console.log(this.arrayContactos);
    return { status: 'true', msg: 'contacto registrado correctamente'}
  }

  getAll(): IContacto[]{
    return this.arrayContactos;
  }
}
