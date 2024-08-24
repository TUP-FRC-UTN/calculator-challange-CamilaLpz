import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-acciones',
  standalone: true,
  imports: [],
  templateUrl: './acciones.component.html',
  styleUrl: './acciones.component.css'
})
export class AccionesComponent {
  @Input() valor1 : number = 0;
  @Input() valor2 : number = 0;

  @Output() resultado = new EventEmitter<number>();
  @Output() limpiar = new EventEmitter<boolean>();

  suma(){
    this.resultado.emit(+this.valor1 + +this.valor2);
  }
  resta(){
    this.resultado.emit(this.valor1 - this.valor2);
  }
  potencia(){
    this.resultado.emit(Math.pow(this.valor1, this.valor2));
  }
  multiplicacion(){
    this.resultado.emit(this.valor1 * this.valor2);
  }
  division(){
    this.resultado.emit(this.valor1 / this.valor2);
  }
  borrar(){
    this.limpiar.emit(true);
  }
}
