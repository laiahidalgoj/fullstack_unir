import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom, Observable } from 'rxjs';
import { IPersonaje } from '../interfaces/ipersonaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  // para que un servicio pueda hacer una petición tiene que inyectar el httpClient
  private httpClient = inject(HttpClient)
  private baseUrl: string = "https://dragonball-api.com/api/characters"

  /* observables en angular - peticiones asincronas nativas de angular */
  getAllObservable(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.baseUrl)
  }

  /* promises en angular - peticiones asincronas generales en javascript */
  getAllPromise(url: string): Promise<IResponse> {
    url = (url === "") ? "https://dragonball-api.com/api/characters?limit=8" : url
    return lastValueFrom(this.httpClient.get<IResponse>(url))
  }

  getById(id: number): Promise<IPersonaje> {
    return lastValueFrom(this.httpClient.get<IPersonaje>(`${this.baseUrl}/${id}`))
  }

}
