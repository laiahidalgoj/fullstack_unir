import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  nombre: string = 'Laia Hidalgo';
  color: string = 'green';
  contador = signal<number>(0);
  numero: number = 0;
  counter: number = 0;
  counterSignal : WritableSignal<number> = signal<number>(0);
  ciudad: string = '';
  ciudadSignal: WritableSignal<string> = signal<string>('');

  mostrarValor(msg: string): void {
    alert(msg);
  }

  cargarCiudad($event: any): void   {
    this.ciudad = $event.target.value;
    //lo mismo que el de abajo pero abreviado, el return se quita
    this.ciudadSignal.update((ciudadActual:string) => ciudadActual = $event.target.value);
  }

  onClick(): void {
    this.counter++;
    //TIENE MEJOR RENDIMIENTO SIGNAL
    this.counterSignal.update((actualNumber:number) => {return actualNumber + 1})
  }

  ngOnInit(){
    setInterval(() => {
      this.numero = (Math.ceil(Math.random()*100));
      this.contador.set(Math.ceil(Math.random()*100))
    }, 1000)
  }

  getNombre(): string {
    return 'LAIA Hidalgo';
  }

  // gestión de eventos
  protected readonly onclick = onclick;
}
