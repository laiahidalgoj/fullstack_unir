import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  imports: [],
  templateUrl: './styles.component.html',
  styleUrl: './styles.component.css'
})
export class StylesComponent {
  estilos: any = {'background-color': 'red', 'padding': '10px', 'border-bottom': '2px solid black'}

}
