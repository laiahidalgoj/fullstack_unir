import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VistaServicioComponent } from './pages/vista-servicio/vista-servicio.component';
import { Error404Component } from './pages/error404/error404.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'servicios/:url', component: VistaServicioComponent },
    {path: 'contacto', component: ContactoComponent},
    {path: 'nuevo-servicio', component: FormComponent},
    {path: '**', component: Error404Component},
    //{path: '**', redirectTo: ''},
];
