import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
// import { ProductComponent } from './Components/product/product.component';

// import { ProductComponent } from './Components/product/product.component';

import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';



import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './Components/product-module/product.module';
import { IdentityModule } from './Components/identity-module/identity.module';
import { CheckoutModule } from './Components/checkout-module/checkout-module';
import { ContactModule } from './Components/contact-module/contact.module';
import { OrderModule } from './Components/order-module/order.module';
import { AboutusModule } from './Components/aboutus-module/aboutus.module';
import { CategoryModule } from './Components/category-module/category.module';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    IdentityModule,
    CheckoutModule,
    ContactModule,
    OrderModule,
    AboutusModule,
    CategoryModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
