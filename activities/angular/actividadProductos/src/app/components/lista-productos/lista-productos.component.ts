import {Component, Input} from '@angular/core';
import {IProducto} from '../../interfaces/iproducto.interface';

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  // relaciono el app.component.html con el ts
  @Input() products: IProducto[] = [];
  texto: string = ''

  ngOnChanges() {
    console.log(this.products);
    this.products.forEach(product => {
      this.texto += `<li class="product">${product.title} - ${product.price}€ -  ${product.quantity} productos</li>`
    })
  }

}
