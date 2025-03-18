import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IContacto } from '../../interfaces/icontacto.interface';
import { NgForm } from '@angular/forms';
import { ContactosService } from '../../services/contactos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {


  contactosService = inject(ContactosService);

  getDataForm(contactForm: NgForm){
    let newContact: IContacto = contactForm.value;
    // llamar al servicio para guardar los datos en la bbdd
    let response = this.contactosService.insert(newContact);
    if(response.status) {
      contactForm.reset();
      Swal.fire({
        title: '¡Felicidades!',
        text: response.msg,
        icon: 'success',
        confirmButtonText: 'Gracias'
      })
    }

  }

}
