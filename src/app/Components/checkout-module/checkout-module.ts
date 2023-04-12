import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './paypal/paypal.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { AuthGuardGuard } from 'src/app/guard/auth-guard.guard';
const routes: Routes = [
  { path: 'paypal', component: PaypalComponent, title: 'Checkout' },
];

@NgModule({
  declarations: [PaypalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxPayPalModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutModule {}
