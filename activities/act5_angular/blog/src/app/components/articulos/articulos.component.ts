import {Component, EventEmitter, Output} from '@angular/core';
import {Iarticulo} from '../../interfaces/iarticulo';
import {FormsModule} from '@angular/forms';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulos',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {

  // newArticle: Iarticulo = { title: 'Titulo de prueba', date: '11/02/2025', url: 'activities/act5_angular/blog/public/assets/colosseo-roma.jpg', text: 'Caminar por las calles de Roma es caminar por la Historia. Se trata de uno de los destinos turísticos más populares del mundo, que permite, por no decir que impone, incesantes descubrimientos, gracias a la inmensidad de su patrimonio artístico. De hecho, alberga dos capitales en una sola ciudad: la capital italiana y la sede del Papa en el Vaticano, destino de peregrinación universal en la Piazza San Pietro.'}
  @Output() articleEmmited: EventEmitter<Iarticulo> = new EventEmitter();

  newArticle: Iarticulo = {
    id: 0,
    title: '',
    text: '',
    url: '', 
    date: ''
  };


  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log('Imagen leída correctamente:', reader.result);
        this.newArticle.url = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  getArticulo(){
    console.log(this.newArticle);
    this.articleEmmited.emit(this.newArticle);
    this.newArticle = {id: 0, title: '', text: '', url: '', date: ''}
  }

  onSubmit() {
    if (!this.newArticle.text || !this.newArticle.date || !this.newArticle.url) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    console.log("Formulario enviado:", this.newArticle);
  }
  
}
