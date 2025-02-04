import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  numero: number = 0;
  estado: boolean = false;
  contador: any;
  texto: string = 'comenzar';

  iniciarCronometro(): void {
    if (!this.estado) {
      this.contador = setInterval(() => {
        this.numero++;
      }, 1000)
    }else{
      clearInterval(this.contador)
    }
    this.estado = !this.estado;
    this.texto = (this.estado) ? 'parar' : 'comenzar';
  }


}
