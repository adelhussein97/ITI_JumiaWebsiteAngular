import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  constructor(private auth: AuthServicesService) {}
  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }
  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.getCartDetails);
    }
  }

  incQnt(Id: number, quantity: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].Id === Id) {
        if (quantity != 10)
          this.getCartDetails[i].quantity = parseInt(quantity) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  decQnt(Id: number, quantity: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].Id === Id) {
        if (quantity != 1)
          this.getCartDetails[i].quantity = parseInt(quantity) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  total: number = 0;
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      this.total = this.getCartDetails.reduce(function (acc: any, val: any) {
        return acc + val.unitprice * val.quantity;
      }, 0);
    }
  }

  removeAll() {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }

  singleDelete(getCartDetail: any) {
    console.log(getCartDetail);
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].Id === getCartDetail) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem(
            'localCart',
            JSON.stringify(this.getCartDetails)
          );
          // this.CartDetails();
          this.loadCart();
          this.cartNumberFun();
        }
      }
    }

    localStorage.removeItem('localCart');
  }
  cartNumber: number = 0;
  cartNumberFun() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
}
