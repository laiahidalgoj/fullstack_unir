import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VistaServicioComponent } from './pages/vista-servicio/vista-servicio.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'servicios/:url', component: VistaServicioComponent },
    {path: 'contacto', component: ContactoComponent}
];
