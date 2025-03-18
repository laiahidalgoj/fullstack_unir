import { Component, Input } from '@angular/core';
import { ISerie } from '../../interfaces/iserie.interface';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  @Input() misSeries: ISerie[] = [];
  series: ISerie[] = [];
  categorias: string[] = ['Acción', 'Terror', 'Drama', 'Documentales', 'Comedia', 'Ficción', 'Misterio', 'Fantasía'];


  capturarCategoria(event: any){
    // if( event.target.value !== ''){
    //   this.series = this.misSeries.filter(serie => serie.categoria === event.target.value);
    // }else{
    //   this.series = this.misSeries;
    // }

    //una mejor forma con una línea
    this.series = this.misSeries.filter(serie => serie.categoria.includes(event.target.value));
  }

  ngOnInit(){
    this.series = this.misSeries;
  }

}
