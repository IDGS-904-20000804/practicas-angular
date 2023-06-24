import { Component } from '@angular/core';
import { Color } from 'src/models/Color';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  colores: Color[] = [
    {
      nombre: 'Negro',
      valor: 0
    },
    {
      nombre: 'Marrón',
      valor: 1
    },
    {
      nombre: 'Rojo',
      valor: 2
    },
    {
      nombre: 'Naranja',
      valor: 3
    },
    {
      nombre: 'Amarillo',
      valor: 4
    },
    {
      nombre: 'Verde',
      valor: 5
    },
    {
      nombre: 'Azul',
      valor: 6
    },
    {
      nombre: 'Violeta',
      valor: 7
    },
    {
      nombre: 'Gris',
      valor: 8
    },
    {
      nombre: 'Blanco',
      valor: 9
    },
  ]
  color1: string = '';
  color2: string = '';
  color3: string = '';
  tolerancia: string = '';
  opc: string = '';
  resultado: number = 0;
  resultadoSuperior: number = 0;
  resultadoInferior: number = 0;

  calcular(){
    console.log({color1: this.color1});
    console.log({color2: this.color2});
    console.log({color3: this.color3});
    this.resultado = parseInt(this.color1 + this.color2) * (Math.pow(10, parseInt(this.color3)));
    this.resultadoSuperior = Math.round(this.resultado * (1 + parseFloat(this.tolerancia))*100)/100;
    this.resultadoInferior = Math.round(this.resultado * (1 - parseFloat(this.tolerancia))*100)/100;
  }
}

