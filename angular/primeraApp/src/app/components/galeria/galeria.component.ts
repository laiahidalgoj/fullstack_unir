import { Component } from '@angular/core';
import {IPhoto} from '../../interfaces/iphoto.interface';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  arrImages: IPhoto[] = [
    {id: 1, title: 'gatitos bebé mimándose', url: 'images/image1.jpg'},
    {id: 2, title: 'gatitos bebé en el jardín', url: 'images/image2.jpg'},
    {id: 3, title: 'gatitos bebé en la paja', url: 'images/image3.jpg'},
  ]

  currentImg: number = 2;

  // arreglar - tiene que hacer scroll infinito hacia atrás
  prev(){
    if(this.currentImg > this.arrImages.length){
      this.currentImg--;
    }else if (this.currentImg === this.arrImages.length +1){
      this.currentImg = 0;
    }
  }

  next(){
    if(this.currentImg < this.arrImages.length -1) {
      this.currentImg++;
    } else if(this.currentImg === this.arrImages.length - 1) {
      this.currentImg = 0;
    }

  }
}
