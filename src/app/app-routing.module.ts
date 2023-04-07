import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default Page if empty
      { path: 'home', component: HomeComponent, title: 'Home Page' },

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
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('src/app/Components/cart/cart.module').then(
            (m) => m.CartModule
          ),
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
