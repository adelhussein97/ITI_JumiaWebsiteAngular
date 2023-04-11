import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentmethods',
  templateUrl: './paymentmethods.component.html',
  styleUrls: ['./paymentmethods.component.css']
})
export class PaymentmethodsComponent {

  paymentMethods = [
    { type: 'Visa', number: '**** **** **** 1234', expiration: '12/22' },
    { type: 'Mastercard', number: '**** **** **** 5678', expiration: '06/23' }
  ];

  paymentMethod = {
    type: '',
    number: '',
    expiration: ''
  };

  addPaymentMethod() {
    this.paymentMethods.push(this.paymentMethod);
    this.paymentMethod = {
      type: '',
      number: '',
      expiration: ''
    };
  }

  editPaymentMethod(paymentMethod:any) {
    // TODO: Implement logic to edit an existing payment method
  }

  deletePaymentMethod(paymentMethod:any) {
    // TODO: Implement logic to delete an existing payment method
  }

}
