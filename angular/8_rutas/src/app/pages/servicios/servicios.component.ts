import { Component, inject } from '@angular/core';
import { IServicio } from '../../interfaces/iservicio.interface';
import { ServiciosService } from '../../services/servicios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  arrServicios: IServicio[] = [];
  serviciosService = inject(ServiciosService)

  ngOnInit(){
    //llamar al servicio y llenar nuestro array de servicios
    this.arrServicios = this.serviciosService.getAll();
  }

}
