import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path:'cartitem',component:CartItemComponent,title:'Cart Page'},

]

@NgModule({
  declarations: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CartModule { }
