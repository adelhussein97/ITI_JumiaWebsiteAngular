import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { ProductdetailsComponent } from './Components/product-module/productdetails/productdetails.component';
import { CategoryComponent } from './Components/category/category.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ListviewProductComponent } from './Components/product-module/listview-product/listview-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default Page if empty
      { path: 'home', component: HomeComponent, title: 'Home Page' },
      {path:'productdetails/:pid',component:ProductdetailsComponent ,title:'ProductDetails'},
      {path:'allproducts',component:AllProductsComponent,title:'AllProducts'},

      {path:'category',component:CategoryComponent,title:'category Page'},
      {path:'listview',component:ListviewProductComponent,title:'AllProducts'},

      {
        path: 'product',
        loadChildren: () =>
          import('src/app/Components/product-module/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/Components/identity-module/identity.module').then(
            (m) => m.IdentityModule
          ),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('src/app/Components/contact-module/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'AboutUss',
        loadChildren: () =>
          import('src/app/Components/aboutus-module/aboutus.module').then(
            (m) => m.AboutusModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('src/app/Components/user-account/user-account.module').then(
            (m) => m.UserAccountModule
          ),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('src/app/Components/category-module/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'cart/cartitem/checkout',
        loadChildren: () =>
          import('src/app/Components/checkout-module/checkout-module').then(
            (m) => m.CheckoutModule
          ),
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('src/app/Components/cart/cart.module').then(
            (m) => m.CartModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('src/app/Components/user-account/user-account.module').then(
            (m) => m.UserAccountModule
          ),
        canActivate: [AuthGuardGuard],
      },
    ],
  },

  { path: '**', component: NotFoundComponent }, // wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
