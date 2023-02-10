import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './views/users-list/users-list.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { UsersAlertComponent } from './views/users-alert/users-alert.component';
import { UsersDetailsComponent } from './views/users-details/users-details.component';
import { CartComponent } from './views/cart/cart.component';
import { ShippingComponent } from './views/shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    TopBarComponent,
    UsersAlertComponent,
    UsersDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
