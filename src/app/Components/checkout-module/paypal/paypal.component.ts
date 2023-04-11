import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { Ishipping } from 'src/app/Model/ishipping';
import { ShippingService } from 'src/app/services/shipping.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Icart } from 'src/app/Model/icart';
import { IcartItems } from 'src/app/Model/icart-items';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css'],
})
export class PaypalComponent implements OnInit{
  ship:Ishipping={} as Ishipping
  total:any=0;
  date1:Date=new Date()
  public payPalConfig?: IPayPalConfig;
  showSuccess!: any;
  cart: Icart = {} as Icart;
  cartitems: IcartItems[] = [];

  constructor(
    private shipping: ShippingService,
    private router: Router,
    private cartapi: CartApiService
  ) {}

  ngOnInit() {
    // render({
    //   id:'#mypaypalbuttons',
    //   currency:'USD',
    //   value: `${this.total}` ,
    //   onApprove:(details)=>{
    //     alert("transaction successfull");
    //   }
    // })
    this.initConfig();
    this.CartDetails();
    this.loadCart();
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'ATJe0kqrhhSUlEo2RIVXnEmEE9795DGJgb6FBQa5QXIAtsYMWGyR_sNG7ecfBrA2kT4C0FNYgN-bzEMt',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: `${this.total}`,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: `${this.total}`,
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: `${this.total}`,
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.disable();
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        if (data.status == 'COMPLETED') {
          this.router.navigate(['/home']);
        }
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  AddNew() {
    this.shipping.addNewShipping(this.ship).subscribe((data) => {
      this.router.navigate(['/home']);
    });
  }

  AddNewOrder() {
    this.cartapi.AddNewOrder(this.cart).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/product/allproducts']);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  AddNewOrderDetails() {
    for (var item of this.cartitems) {
      this.cartapi.AddOrderDetails(item).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/product/allproducts']);
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    }
  }

  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.getCartDetails);
    }
  }

  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(
        (localStorage.getItem('localCart') as any) || []
      );
      this.total = this.getCartDetails.reduce(function (acc: any, val: any) {
        return acc + val.UnitPrice * val.Quantity;
      }, 0);
    }
  }
}
