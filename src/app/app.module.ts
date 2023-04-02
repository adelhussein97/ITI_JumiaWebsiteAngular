import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { CategoryComponent } from './Components/category/category.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { MainComponent } from './Components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    OrderComponent,
    CategoryComponent,
    NotFoundComponent,
    ProductdetailsComponent,
    AllProductsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
