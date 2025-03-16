import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import {toast} from 'ngx-sonner'

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  userService = inject(UsersService);
  router = inject(Router);

  async getLogin(form:any){

    try{
      let response = await this.userService.login(form.value);
      if(response.success){
        // estoy logeado correctamente y entro a dashboard
        this.router.navigate(['/dashboard'])

      }
  } catch(message: any){
    toast.error(message.error.error);
  }
}
}
