import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado : number = 0;
  calcular(){
    this.resultado = Math.sqrt( Math.pow( this.x2 - this.x1, 2 ) + Math.pow( this.y2 - this.y1, 2) );
  }

}
