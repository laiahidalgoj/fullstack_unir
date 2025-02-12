import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormularioProductosComponent} from './components/formulario-productos/formulario-productos.component';
import {ListaProductosComponent} from './components/lista-productos/lista-productos.component';
import {TotalProductosComponent} from './components/total-productos/total-productos.component';
import {IProducto} from './interfaces/iproducto.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioProductosComponent, ListaProductosComponent, TotalProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listaProductos: IProducto[]  = [
    { title: 'balón baloncesto', price: 65.75, quantity: 10},
    { title: 'zapatillas baloncesto', price: 135, quantity: 28}
  ];

  getDataForm(event: IProducto){
    // permite hacer una copia de array sin perder la referencia
    this.listaProductos = [...this.listaProductos, event];
  }


}
