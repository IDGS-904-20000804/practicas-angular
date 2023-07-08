import { Component } from '@angular/core';
import { Ingredient } from 'src/models/Ingredient';
import { Pizza } from 'src/models/Pizza';
import { Purchase } from 'src/models/Purchase';
import { Size } from 'src/models/Size';
import { ListIngredients } from 'src/services/IngredientsList';
import { ListSizes } from 'src/services/Sizes';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  listIngredients = ListIngredients;
  listSizes = ListSizes;

  nameClient: string = '';
  addressClient: string = '';
  phoneClient: string = '';
  total: string = '';
  totalPizza: string = '1';
  pizzas: Pizza[] = [];
  size: string = '';
  newPurchase = false;
  purchases: Purchase[] = [];
  
  doPurchase(){
    const fecha = new Date();
    const purchase: Purchase = {
      nameClient: this.nameClient,
      addressClient: this.addressClient,
      phoneClient: this.phoneClient,
      total: this.getTotal(this.pizzas),
    }
    if (this.nameClient == ''
      || this.addressClient == ''
      || this.phoneClient == ''
      || this.pizzas.length == 0) {
      return;
    }
    this.purchases.push(purchase);
    this.listIngredients = ListIngredients;
    this.listSizes = ListSizes;
    this.nameClient = '';
    this.addressClient = '';
    this.phoneClient = '';
    this.total = '';
    this.totalPizza = '1';
    this.pizzas = [];
    this.restarVariables();
  }

  addPizza(){
    const ingredients: Ingredient[] = this.listIngredients.filter( ( ingredient ) => ingredient.check );
    const size: Size = this.listSizes.find( ( size ) => (parseFloat(this.size) == size.price) )!;
    if (ingredients.length == 0 || size == undefined) {
      return;
    }
    const pizza: Pizza = {
      size: size,
      ingredients: ingredients,
      total: parseInt(this.totalPizza),
    };
    this.pizzas.push(pizza);
    this.restarVariables();
  }

  restarVariables(){
    this.listIngredients = ListIngredients;
    this.listSizes = ListSizes;
    this.newPurchase = false;
  }

  formatIngredients(ingredients: Ingredient[]): string {
    return ingredients.map(ingredient => ingredient.name).join(', ');
  }

  getSubtotal(ingredients: Ingredient[], size: Size, total: number): number {
    let totalIngredients = 0;
    ingredients.forEach(ingredient => {
      totalIngredients += ingredient.price;
    });
    return (totalIngredients + size.price) * total;
  }

  getTotal(pizzas: Pizza[]): number {
    let total = 0;
    if (pizzas.length == 0) {
      return 0;
    }
    pizzas.forEach(pizza => {
      total += this.getSubtotal(pizza.ingredients, pizza.size, pizza.total);
    });
    return total;
  }

  deleteProduct( i: number ) {
    this.pizzas.splice(i,1);
  }

  callculateTotalPurchases(): number{
    let totalDay = 0;
    this.purchases.forEach(purchase => {
      totalDay += purchase.total;
    });
    return totalDay;
  }
}
