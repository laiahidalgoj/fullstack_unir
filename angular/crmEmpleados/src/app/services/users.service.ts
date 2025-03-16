import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/iuser.interface';
import { lastValueFrom } from 'rxjs';

type Response = {
  success: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint: string = 'https://crm-empleados-v2.onrender.com/api/usuarios';
  private httpClient = inject(HttpClient);

  login(user: IUser): Promise<Response>{
    return lastValueFrom(this.httpClient.post<Response>(`${this.endpoint}/login`, user))
  }
}
