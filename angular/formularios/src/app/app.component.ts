import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FormModelComponent } from './components/form-model/form-model.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormTemplateComponent, ContactListComponent, FormModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularios';
}
