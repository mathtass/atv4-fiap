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

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    TopBarComponent,
    UsersAlertComponent,
    UsersDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
