import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  constructor() { }

  addToCart(user:any){
    this.items.push(user);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    let aux = this.items;
    this.items = [];
    return aux;
  }
}