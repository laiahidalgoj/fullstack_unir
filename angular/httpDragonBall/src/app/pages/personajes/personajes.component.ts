import { Component, inject } from '@angular/core';
import { IPersonaje } from '../../interfaces/ipersonaje.interface';
import { PersonajesService } from '../../services/personajes.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { PersonajeCardComponent } from '../../components/personaje-card/personaje-card.component';

@Component({
  selector: 'app-personajes',
  imports: [PersonajeCardComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

  arrPersonajesObservale: IPersonaje[] = [];
  arrPersonajesPromises: IPersonaje[] = [];

  personajesServices = inject(PersonajesService);

   async ngOnInit(){
      // Consumición de observables - nativo angular
      this.personajesServices.getAllObservable().subscribe({
        next: (data)=>{
          this.arrPersonajesObservale = data.items;
          console.log(this.arrPersonajesObservale);
        },
        error: (error) => {
          console.log(error);
        }
      })
    
      
      // Consumición de promesas - generico javascript
      try{
        let response: IResponse = await this.personajesServices.getAllPromise();
        console.log('Promise: ', response.items)
      }catch (error){
        console.log(error)
      }
     
   }

}
