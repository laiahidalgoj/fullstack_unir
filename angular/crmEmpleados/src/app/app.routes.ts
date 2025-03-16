import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [

    {path: "", pathMatch: "full", redirectTo: "home"},
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent, canActivate: [loginGuard]},
    {path: "**", redirectTo: "home"}
    
];
