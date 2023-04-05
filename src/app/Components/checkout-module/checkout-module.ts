import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './paypal/paypal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[

  {path:'paypal',component:PaypalComponent ,title:'paypal'},


]

@NgModule({
  declarations: [
    PaypalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
