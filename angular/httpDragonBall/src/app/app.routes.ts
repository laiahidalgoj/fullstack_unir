import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { VistaPersonajeComponent } from './pages/vista-personaje/vista-personaje.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: 'home'},
    {path: "home", component: HomeComponent },
    {path: 'personajes', component: PersonajesComponent},
    {path: 'personaje/:id', component: VistaPersonajeComponent},
    {path: '**', redirectTo: 'home'}
];
