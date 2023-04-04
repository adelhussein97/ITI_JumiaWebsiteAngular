import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CategoryComponent } from './Components/category/category.component';
import { OrderComponent } from './Components/order/order.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    OrderComponent,
    CategoryComponent,
    NotFoundComponent,
    ProductdetailsComponent,
    AllProductsComponent,
    MainComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
