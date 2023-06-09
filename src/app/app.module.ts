import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
// import { ProductComponent } from './Components/product/product.component';
import { AuthServicesService } from './services/auth-services.service';

// import { ProductComponent } from './Components/product/product.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductModule } from './Components/product-module/product.module';
import { IdentityModule } from './Components/identity-module/identity.module';
import { CheckoutModule } from './Components/checkout-module/checkout-module';
import { ContactModule } from './Components/contact-module/contact.module';
import { AboutusModule } from './Components/aboutus-module/aboutus.module';
import { CategoryModule } from './Components/category-module/category.module';

import { AuthGuardGuard } from './guard/auth-guard.guard';
import { CartModule } from './Components/cart/cart.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { CategoryComponent } from './Components/category/category.component';
import { ListviewProductComponent } from './Components/product-module/listview-product/listview-product.component';
import { ProductdetailsComponent } from './Components/product-module/productdetails/productdetails.component';

export function createtranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    AllProductsComponent,
    CategoryComponent,
    ListviewProductComponent,
    ProductdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ProductModule,
    IdentityModule,
    CheckoutModule,
    ContactModule,
    AboutusModule,
    // CategoryModule,
    CartModule,
    NgxPayPalModule,
    TranslateModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createtranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'ar',
    }),
  ],
  providers: [AuthServicesService, AuthGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
