import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  txtName: string = '';
  txtBuyers: string = '';
  rdCinecoCard: string = '';
  txtTickets: string = '';
  
  buyers: number = 0;
  tickets: number = 0;
  hasCinecoCard: boolean = false;
  
  limitTickets: number = 0;
  total: number = 0;
  hasResult: boolean = false;
  canBuy: boolean = false;
  discount: number = 0;
  message: string = '';
  subTotal = 0;

  calculate() {
    if (
      this.txtName == '' ||
      this.txtBuyers == '' ||
      this.rdCinecoCard == '' ||
      this.txtTickets == ''
    ) {
      this.buyers = 0;
      this.tickets = 0;
      this.hasCinecoCard = false;

      this.limitTickets = 0;
      this.total = 0;
      this.hasResult = false;
      this.canBuy = false;
      this.discount = 0;
      this.message = '';
      this.subTotal = 0;
      this.hasResult = true;

      this.message = "Fill all inputs";
      return;
    }

    this.buyers = parseInt(this.txtBuyers);
    this.tickets = parseInt(this.txtTickets);
    this.hasCinecoCard = (this.rdCinecoCard === 'true');

    this.limitTickets = this.buyers * 7;

    if( this.limitTickets < this.tickets){
      this.canBuy = false;
      this.message = "No possible buy a lot tickets";
      return;
    }

    this.discount = 0
    if( this.tickets > 5) {
      this.discount = 15;
    } else if ( this.tickets >= 3 ){
      this.discount = 10;
    }

    this.subTotal = this.tickets * 12;
    this.total = this.subTotal * ( ( 100 - this.discount ) / 100 )
    
    if (this.hasCinecoCard) this.total = this.total * 0.9;

    this.hasResult = true;
    this.canBuy = true;
  }

  clear(){
    this.txtName = '';
    this.txtBuyers = '';
    this.rdCinecoCard = '';
    this.txtTickets = '';

    this.buyers = 0;
    this.tickets = 0;
    this.hasCinecoCard = false;

    this.limitTickets = 0;
    this.total = 0;
    this.hasResult = false;
    this.canBuy = false;
    this.discount = 0;
    this.message = '';
    this.subTotal = 0;
    this.hasResult = false;
  }
}
