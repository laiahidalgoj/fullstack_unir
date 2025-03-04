import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  //para que un servicio pueda hacer una petición tiene que inyectar el httpClient

  private httpClient = inject(HttpClient)
  private baseUrl: string = "https://dragonball-api.com/api/characters" 

  // observable es la forma natural de angular - peticiones asíncronas nativas de Angular
  getAllObservable(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.baseUrl);
  }

  // promesa es la forma - peticiones asíncronas generales en javascript
  getAllPromise(): Promise<IResponse>{
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseUrl));
  }


}
