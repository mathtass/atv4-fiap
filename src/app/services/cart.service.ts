import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  constructor(
    private http: HttpClient
  ) { }

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