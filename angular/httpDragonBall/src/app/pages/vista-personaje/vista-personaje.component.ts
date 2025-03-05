import { Component, inject, Input } from '@angular/core';
import { IPersonaje } from '../../interfaces/ipersonaje.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-vista-personaje',
  imports: [],
  templateUrl: './vista-personaje.component.html',
  styleUrl: './vista-personaje.component.css'
})
export class VistaPersonajeComponent {
  @Input() idPersonaje: string = "";
  elPersonaje!: IPersonaje;
  personajesServices = inject(PersonajesService);
  isLoading: boolean = false;

  async ngOnInit() {
    let id = Number(this.idPersonaje)
    //tendremos que llamar al servicio para traernos los datos de este personaje
    this.isLoading = true;
    try {
      this.elPersonaje = await this.personajesServices.getById(id)
      console.log(this.elPersonaje)
    } catch (error) {
      console.log(error)
    } finally {
      this.isLoading = false;
    }
  }
}
