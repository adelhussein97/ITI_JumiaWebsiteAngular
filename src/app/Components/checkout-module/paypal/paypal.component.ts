import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments'
import { Ishipping } from 'src/app/Model/ishipping';
import { ShippingService } from 'src/app/services/shipping.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit{
  ship:Ishipping={} as Ishipping

  constructor(private shipping:ShippingService,private router:Router){

  }
  ngOnInit() {
    render({
      id:'#mypaypalbuttons',
      currency:'USD',
      value:'100.00',
      onApprove:(details)=>{
        alert("transaction successfull");
      }
    })

  }
  AddNew(){
    this.shipping.addNewShipping(this.ship).subscribe(data=>{this.router.navigate(['/home'])})
      }

}
