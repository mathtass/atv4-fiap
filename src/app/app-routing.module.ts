import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { ShippingComponent } from './views/shipping/shipping.component';
import { UsersDetailsComponent } from './views/users-details/users-details.component';
import { UsersListComponent } from './views/users-list/users-list.component';

const routes: Routes = [
  {path:"users/:userId",
  component: UsersDetailsComponent},
  {path:"",
  component: UsersListComponent},
  {path:"cart",
  component:CartComponent}, 
  {path: "shipping",
  component:ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
