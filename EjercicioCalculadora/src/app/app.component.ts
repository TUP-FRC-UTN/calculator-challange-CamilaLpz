import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccionesComponent } from './acciones/acciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjercicioCalculadora';

  valor1 : number = 0;
  valor2 : number = 0;

  resultado : number = 0;

  actualizarValor1(event: any) {
    this.valor1 = event.target.value;
  }

  actualizarValor2(event: any) {
    this.valor2 = event.target.value;
  }

  mostrar(evento : number){
    this.resultado = 0;
    this.resultado = evento;
  }

  limpiar(confirmacion : boolean){
    if(confirmacion){
      this.valor1 = 0;
      this.valor2 = 0;
      this.resultado = 0;
    }
  }

}
