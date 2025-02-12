import {Component, input, Input} from '@angular/core';
import {IProducto} from '../../interfaces/iproducto.interface';

@Component({
  selector: 'app-total-productos',
  imports: [],
  templateUrl: './total-productos.component.html',
  styleUrl: './total-productos.component.css'
})
export class TotalProductosComponent {
  //@Input() products: IProducto[] = [];
  //con signal, es mejor, tiene mejor rendimiento. la única diferencia es que se añade como si fuera una función()
  products = input<IProducto[]>([])
  totalPrice: number = 0;
  totalQuantity: number = 0;

  ngOnChanges(){
    this.totalQuantity = this.products().reduce((acc: number, product: IProducto) => acc + product.quantity, 0);
    console.log(this.totalQuantity);

    this.totalPrice = this.products().reduce((acc: number, product: IProducto) => acc + product.price, 0);
    console.log(this.totalPrice);

    //li mismo, es más eficiente con reduce
    // for(let product of this.products){
    //   this.totalPrice += product.price * product.quantity;
    //   this.totalQuantity += product.quantity;
    // }
  }

}
