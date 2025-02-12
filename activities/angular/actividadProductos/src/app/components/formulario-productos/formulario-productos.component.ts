import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IProducto} from '../../interfaces/iproducto.interface';

@Component({
  selector: 'app-formulario-productos',
  imports: [FormsModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent {
  newProduct:  IProducto = { title:'', price:0, quantity:0};

  //avisa al padre
  @Output() sendProduct: EventEmitter<IProducto> = new EventEmitter();

  getProduct() {
    console.log( this.newProduct);
    //enviárselo al padre
    this.sendProduct.emit(this.newProduct);
    this.newProduct = {title:'', price:0, quantity:0};
  }
}
