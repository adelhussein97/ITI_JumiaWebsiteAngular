import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './paypal/paypal.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes =[

  {path:'paypal',component:PaypalComponent ,title:'paypal'},


]

@NgModule({
  declarations: [
    PaypalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
