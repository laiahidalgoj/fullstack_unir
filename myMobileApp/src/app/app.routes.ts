import { Routes } from '@angular/router';

export const routes: Routes = [
   { path: 'main', loadComponent: () => import ('./main/main.page').then(m => m.MainPage) }
];
