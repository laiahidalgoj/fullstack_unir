import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';
import { IServicio } from '../../interfaces/iservicio.interface';

@Component({
  selector: 'app-vista-servicio',
  imports: [],
  templateUrl: './vista-servicio.component.html',
  styleUrl: './vista-servicio.component.css'
})
export class VistaServicioComponent {
// necesito saber cual es el dato a cargar, y ese dato lo tengo en la url del navegador
// opción 1. ActivateRoute --> inyectable de libreria rutas
activatedRoute = inject(ActivatedRoute)
router = inject(Router);
serviciosService = inject(ServiciosService)
servicio!: IServicio
//opción 2. @Input para rutas
@Input() url: string = '';

ngOnInit(){
  // le voy a preguntar al activatedRoute mis parametros dinámicos de ruta.
  //opción 1.- ActivatedRoute
  // this.activatedRoute.params.subscribe((params: any)=>{
  //   let url = params.url;
  //   //con esta url llamar al servicio y preguntar si en el array de datos BBDD tenemos algo con esa ruta.
  //   let response = this.servicio = this.serviciosService.getByUrl(url)
  //   if(response !== undefined){
  //     // tengo lo que quiero
  //     this.servicio = response;
  //   }else{
  //     // redirijo a la página 404
  //     this.router.navigate('/error')
  //   }
  // })

  //opción 2: input Id
  let response = this.serviciosService.getByUrl(this.url);
  if(!response){
    this.router.navigate(['/error']);
  }else{
    this.servicio = response;
    console.log(this.servicio);
  }
}



}
