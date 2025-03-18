import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlumnosListComponent} from './components/alumnos-list/alumnos-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlumnosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicios';
}
