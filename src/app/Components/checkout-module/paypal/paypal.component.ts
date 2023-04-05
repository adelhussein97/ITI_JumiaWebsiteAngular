import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    render({
      id:'#mypaypalbuttons',
      currency:'USD',
      value:'100.00',
      onApprove:(details)=>{
        alert("transaction successfull");
      }
    })
  }


}
