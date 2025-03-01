import { Component, inject } from '@angular/core';
import { FormsModule  } from '@angular/forms'
import { IServicio } from '../../interfaces/iservicio.interface';
import { ServiciosService } from '../../services/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  serviciosService = inject(ServiciosService);
  router = inject(Router);

  getDataForm(form: IServicio){
    let response = this.serviciosService.insert(form);
    if(response.success){
      this.router.navigate(['/servicios'])
    }

  }

}
