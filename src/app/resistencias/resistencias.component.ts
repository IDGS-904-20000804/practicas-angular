import { Component } from '@angular/core';
import { Celda } from 'src/models/Celda';
import { Color } from 'src/models/Color';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  tolerancias: Color[] = [
    {
      nombre: 'Dorado',
      valor: 0.05,
      colorHexa: '#efb810',
      textColor: '#000000'
    },
    {
      nombre: 'Plata',
      valor: 0.1,
      colorHexa: '#e3e4e5',
      textColor: '#000000'
    },
  ];
  colores: Color[] = [
    {
      nombre: 'Negro',
      valor: 0,
      colorHexa: '#000000',
      textColor: '#FFFFFF'
    },
    {
      nombre: 'Marrón',
      valor: 1,
      colorHexa: '#804000',
      textColor: '#000000'
    },
    {
      nombre: 'Rojo',
      valor: 2,
      colorHexa: '#FF0000',
      textColor: '#000000'
    },
    {
      nombre: 'Naranja',
      valor: 3,
      colorHexa: '#FF8000',
      textColor: '#000000'
    },
    {
      nombre: 'Amarillo',
      valor: 4,
      colorHexa: '#FFFF00',
      textColor: '#000000'
    },
    {
      nombre: 'Verde',
      valor: 5,
      colorHexa: '#008f39',
      textColor: '#000000'
    },
    {
      nombre: 'Azul',
      valor: 6,
      colorHexa: '#0000FF',
      textColor: '#000000'
    },
    {
      nombre: 'Violeta',
      valor: 7,
      colorHexa: '#78288C',
      textColor: '#000000'
    },
    {
      nombre: 'Gris',
      valor: 8,
      colorHexa: '#808080',
      textColor: '#000000'
    },
    {
      nombre: 'Blanco',
      valor: 9,
      colorHexa: '#FFFFFF',
      textColor: '#000000'
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
  tieneResultado: boolean = false;
  rBanda1: Celda = {
    color: '',
    nombre: '',
    textColor: ''
  };
  rBanda2: Celda = {
    color: '',
    nombre: '',
    textColor: ''
  };
  rBanda3: Celda = {
    color: '',
    nombre: '',
    textColor: ''
  };
  rTolerancia: Celda = {
    color: '',
    nombre: '',
    textColor: ''
  };
  calcular(){
    this.resultado = parseInt(this.color1 + this.color2) * (Math.pow(10, parseInt(this.color3)));
    this.resultadoSuperior = Math.round(this.resultado * (1 + parseFloat(this.tolerancia))*100)/100;
    this.resultadoInferior = Math.round(this.resultado * (1 - parseFloat(this.tolerancia))*100)/100;
    this.tieneResultado = true;
    const color1 = this.colores.find(color => color.valor === parseInt(this.color1));
    const color2 = this.colores.find(color => color.valor === parseInt(this.color2));
    const color3 = this.colores.find(color => color.valor === parseInt(this.color3));
    const resistencia = this.tolerancias.find(tolerancia => tolerancia.valor === parseFloat(this.tolerancia));
    this.rBanda1.color = color1!.colorHexa;
    this.rBanda1.nombre = color1!.nombre;
    this.rBanda1.textColor = color1!.textColor;
    
    this.rBanda2.color = color2!.colorHexa;
    this.rBanda2.nombre = color2!.nombre;
    this.rBanda2.textColor = color2!.textColor;
    
    this.rBanda3.color = color3!.colorHexa;
    this.rBanda3.nombre = color3!.nombre;
    this.rBanda3.textColor = color3!.textColor;
    
    this.rTolerancia.color = resistencia!.colorHexa;
    this.rTolerancia.nombre = resistencia!.nombre;
    this.rTolerancia.textColor = resistencia!.textColor;
  }
}


