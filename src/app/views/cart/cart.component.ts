import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name:"",
    recarga:""
  })
  constructor(
    public cartService: CartService,
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {
      }
  onSubmit(){
    this.items = this.cartService.clearCart();
    console.warn("Saldo Atualizado", this.checkoutForm.value);
    console.log(this.items);
    alert("Recarga Realizada")
    this.checkoutForm.reset();
  }

}
