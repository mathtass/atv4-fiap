import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { users } from 'src/app/users';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  users: any;
  constructor(
    private route: ActivatedRoute, 
    private userService: CartService
  ){}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRouter = Number(routeParams.get('userId'));
    this.users = users.find(
      (users) => users.id === userIdFromRouter
    );
  }
  addToCart(user:any){
    this.userService.addToCart(user)
    window.alert("Realize a Recarga no Carrinho")

  }
}
